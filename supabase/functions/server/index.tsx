import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// User interface
interface User {
  email: string;
  name: string;
  role: string;
  passwordHash: string;
}

// Hash password using SHA-256
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Initialize default users
async function initializeDefaultUsers() {
  try {
    console.log('Checking if default users exist...');
    
    const existingUsers = await kv.getByPrefix('user:');
    
    if (existingUsers && existingUsers.length > 0) {
      console.log(`Found ${existingUsers.length} existing users. Skipping initialization.`);
      return;
    }

    console.log('No users found. Initializing default users...');

    const defaultUsers: User[] = [
      {
        email: 'admin@escalasbmi.com',
        name: 'Administrador',
        role: 'admin',
        passwordHash: await hashPassword('admin123'),
      },
      {
        email: 'operador1@escalasbmi.com',
        name: 'Operador 1',
        role: 'operator',
        passwordHash: await hashPassword('operator123'),
      },
      {
        email: 'operador2@escalasbmi.com',
        name: 'Operador 2',
        role: 'operator',
        passwordHash: await hashPassword('operator123'),
      },
    ];

    for (const user of defaultUsers) {
      await kv.set(`user:${user.email}`, user);
      console.log(`Initialized user: ${user.email} (${user.role})`);
    }

    console.log('Default users initialized successfully');
  } catch (error) {
    console.error('Error initializing default users:', error);
  }
}

// Initialize users on startup
initializeDefaultUsers();

// Health check endpoint
app.get("/make-server-bedacc4d/health", (c) => {
  return c.json({ status: "ok" });
});

// Get all users (without password hashes)
app.get("/make-server-bedacc4d/users", async (c) => {
  try {
    console.log('GET /users - Fetching all users');
    
    const users = await kv.getByPrefix('user:');
    
    if (!users || users.length === 0) {
      console.log('No users found in database');
      return c.json({ 
        success: false, 
        error: 'Nenhum usuário encontrado. Inicializando usuários padrão...' 
      });
    }

    // Remove password hashes from response
    const sanitizedUsers = users.map((user: User) => ({
      email: user.email,
      name: user.name,
      role: user.role,
    }));

    console.log(`Returning ${sanitizedUsers.length} users`);
    
    return c.json({
      success: true,
      users: sanitizedUsers,
    });
  } catch (error: any) {
    console.error('Error fetching users:', error);
    return c.json({
      success: false,
      error: `Erro ao buscar usuários: ${error.message}`,
    }, 500);
  }
});

// Login endpoint
app.post("/make-server-bedacc4d/login", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;

    console.log(`POST /login - Attempting login for: ${email}`);

    if (!email || !password) {
      console.log('Login failed: Missing email or password');
      return c.json({
        success: false,
        error: 'Email e senha são obrigatórios',
      }, 400);
    }

    // Get user from database
    const user = await kv.get(`user:${email}`) as User | null;

    if (!user) {
      console.log(`Login failed: User not found - ${email}`);
      return c.json({
        success: false,
        error: 'Usuário não encontrado',
      }, 404);
    }

    // Hash the provided password and compare
    const passwordHash = await hashPassword(password);

    if (passwordHash !== user.passwordHash) {
      console.log(`Login failed: Invalid password for ${email}`);
      return c.json({
        success: false,
        error: 'Senha incorreta',
      }, 401);
    }

    console.log(`Login successful for: ${email} (${user.role})`);

    // Return user data without password hash
    return c.json({
      success: true,
      user: {
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error: any) {
    console.error('Error during login:', error);
    return c.json({
      success: false,
      error: `Erro ao processar login: ${error.message}`,
    }, 500);
  }
});

// Signup endpoint (create new user)
app.post("/make-server-bedacc4d/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name, role } = body;

    console.log(`POST /signup - Creating user: ${email}`);

    if (!email || !password || !name) {
      console.log('Signup failed: Missing required fields');
      return c.json({
        success: false,
        error: 'Email, senha e nome são obrigatórios',
      }, 400);
    }

    // Check if user already exists
    const existingUser = await kv.get(`user:${email}`);
    
    if (existingUser) {
      console.log(`Signup failed: User already exists - ${email}`);
      return c.json({
        success: false,
        error: 'Usuário já existe',
      }, 409);
    }

    // Create new user
    const passwordHash = await hashPassword(password);
    const newUser: User = {
      email,
      name,
      role: role || 'operator',
      passwordHash,
    };

    await kv.set(`user:${email}`, newUser);
    
    console.log(`User created successfully: ${email} (${newUser.role})`);

    return c.json({
      success: true,
      user: {
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error: any) {
    console.error('Error during signup:', error);
    return c.json({
      success: false,
      error: `Erro ao criar usuário: ${error.message}`,
    }, 500);
  }
});

Deno.serve(app.fetch);