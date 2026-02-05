import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { LogIn, AlertCircle, Loader2, Shield, User } from 'lucide-react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';
import { toast } from 'sonner';
import { ThemeToggle } from './ThemeToggle';

interface User {
  email: string;
  name: string;
  role: string;
}

interface LoginPageProps {
  onLoginSuccess: (user: User) => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoadingUsers(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-bedacc4d/users`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      
      if (data.success) {
        setUsers(data.users);
      } else {
        setError('Erro ao carregar usuários');
        console.error('Error loading users:', data.error);
      }
    } catch (err: any) {
      setError('Erro ao conectar com o servidor');
      console.error('Error fetching users:', err);
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!selectedEmail) {
      setError('Por favor, selecione um usuário');
      return;
    }

    if (!password) {
      setError('Por favor, insira a senha');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-bedacc4d/login`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: selectedEmail,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        onLoginSuccess(data.user);
        toast.success('Login bem-sucedido!', {
          description: `Bem-vindo, ${data.user.name}!`,
        });
      } else {
        setError(data.error || 'Credenciais inválidas');
        toast.error('Falha no login', {
          description: data.error || 'Credenciais inválidas',
        });
      }
    } catch (err: any) {
      setError('Erro ao processar login. Tente novamente.');
      console.error('Login error:', err);
      toast.error('Erro no servidor', {
        description: 'Não foi possível conectar ao servidor.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 relative">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        <Card className="border-border shadow-xl">
          <CardHeader className="space-y-4 text-center pb-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative bg-primary p-5 rounded-2xl">
                  <LogIn className="w-10 h-10 text-primary-foreground" strokeWidth={2} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold tracking-tight">
                Escalas BMI
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Sistema de Gerenciamento de Escalas
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="user-select" className="text-sm font-medium">
                  Selecione o Usuário
                </Label>
                <Select
                  value={selectedEmail}
                  onValueChange={setSelectedEmail}
                  disabled={loadingUsers || loading}
                >
                  <SelectTrigger 
                    id="user-select" 
                    className="h-12 bg-input-background border-border hover:border-primary/50 transition-colors"
                  >
                    <SelectValue placeholder={loadingUsers ? "Carregando usuários..." : "Escolha um usuário"} />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem 
                        key={user.email} 
                        value={user.email}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          {user.role === 'admin' ? (
                            <Shield className="w-4 h-4 text-primary" strokeWidth={2} />
                          ) : (
                            <User className="w-4 h-4 text-muted-foreground" strokeWidth={2} />
                          )}
                          <span className="font-medium">{user.name}</span>
                          <span className="text-xs text-muted-foreground">
                            ({user.role === 'admin' ? 'Administrador' : 'Operador'})
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="h-12 bg-input-background border-border hover:border-primary/50 focus:border-primary transition-colors"
                />
              </div>

              {error && (
                <Alert variant="destructive" className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="h-4 w-4" strokeWidth={2} />
                  <AlertDescription className="text-sm">{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-200"
                disabled={loading || loadingUsers}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" strokeWidth={2} />
                    Entrando...
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" strokeWidth={2} />
                    Entrar no Sistema
                  </>
                )}
              </Button>
            </form>

            <div className="pt-4 border-t border-border">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-center text-muted-foreground uppercase tracking-wide">
                  Credenciais de Teste
                </p>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg border border-border">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" strokeWidth={2} />
                      <span className="text-sm font-medium">Administrador</span>
                    </div>
                    <code className="text-xs font-mono bg-background px-2 py-1 rounded border border-border">
                      admin123
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" strokeWidth={2} />
                      <span className="text-sm font-medium">Operador</span>
                    </div>
                    <code className="text-xs font-mono bg-background px-2 py-1 rounded border border-border">
                      operator123
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Sistema seguro com autenticação criptografada
        </p>
      </div>
    </div>
  );
}