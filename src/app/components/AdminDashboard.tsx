import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { 
  LogOut, 
  Users, 
  Calendar, 
  UserPlus,
  Shield,
  Clock,
  LayoutDashboard,
  TrendingUp,
  User
} from 'lucide-react';
import { toast } from 'sonner';
import { ThemeToggle } from './ThemeToggle';

interface User {
  email: string;
  name: string;
  role: string;
}

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const isAdmin = user.role === 'admin';

  const handleLogout = () => {
    toast.info('Sessão encerrada', {
      description: 'Você saiu do sistema com sucesso.',
    });
    onLogout();
  };

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm backdrop-blur-sm bg-card/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg" />
                <div className="relative bg-primary p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight">Escalas BMI</h1>
                <p className="text-xs text-muted-foreground">Gerenciamento de Turnos</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{user.name}</p>
                <div className="flex items-center justify-end gap-2 mt-1">
                  <Badge 
                    variant={isAdmin ? 'default' : 'secondary'}
                    className={`text-xs ${isAdmin ? 'bg-primary hover:bg-primary-hover' : 'bg-secondary text-secondary-foreground'}`}
                  >
                    {isAdmin ? (
                      <>
                        <Shield className="w-3 h-3 mr-1" strokeWidth={2} />
                        Admin
                      </>
                    ) : (
                      <>
                        <User className="w-3 h-3 mr-1" strokeWidth={2} />
                        Operador
                      </>
                    )}
                  </Badge>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-border hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-colors"
              >
                <LogOut className="w-4 h-4 sm:mr-2" strokeWidth={2} />
                <span className="hidden sm:inline">Sair</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto bg-muted/50 p-1 border border-border">
            <TabsTrigger 
              value="overview"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
            >
              <LayoutDashboard className="w-4 h-4 mr-2" strokeWidth={2} />
              <span className="hidden sm:inline">Visão Geral</span>
              <span className="sm:hidden">Início</span>
            </TabsTrigger>
            <TabsTrigger 
              value="schedules"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
            >
              <Clock className="w-4 h-4 mr-2" strokeWidth={2} />
              Escalas
            </TabsTrigger>
            {isAdmin && (
              <TabsTrigger 
                value="users"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
              >
                <Users className="w-4 h-4 mr-2" strokeWidth={2} />
                Usuários
              </TabsTrigger>
            )}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 animate-in fade-in duration-500">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Escalas Ativas
                  </CardTitle>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="h-4 w-4 text-primary" strokeWidth={2} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12</div>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-success" strokeWidth={2} />
                    <p className="text-xs text-success font-medium">
                      +2 esta semana
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Operadores
                  </CardTitle>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-4 w-4 text-primary" strokeWidth={2} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ativos no sistema
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Turnos Hoje
                  </CardTitle>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-4 w-4 text-primary" strokeWidth={2} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    2 manhã, 2 tarde
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Welcome Card */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <LayoutDashboard className="w-5 h-5 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <CardTitle>Bem-vindo ao Sistema</CardTitle>
                    <CardDescription className="mt-1">
                      Gerencie escalas de trabalho de forma eficiente e organizada
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilize as abas acima para navegar entre as diferentes funcionalidades do sistema.
                  Todas as informações são sincronizadas em tempo real.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/30 border border-border/50">
                    <LayoutDashboard className="w-5 h-5 text-primary mt-0.5" strokeWidth={2} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Visão Geral</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Dashboard com estatísticas e métricas importantes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/30 border border-border/50">
                    <Clock className="w-5 h-5 text-primary mt-0.5" strokeWidth={2} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Escalas</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Gerenciamento completo de turnos e horários de trabalho
                      </p>
                    </div>
                  </div>
                  {isAdmin && (
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/30 border border-border/50">
                      <Shield className="w-5 h-5 text-primary mt-0.5" strokeWidth={2} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Usuários</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Administração de operadores e permissões (Apenas Admin)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedules Tab */}
          <TabsContent value="schedules" className="space-y-6 animate-in fade-in duration-500">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" strokeWidth={2} />
                    </div>
                    <div>
                      <CardTitle>Gerenciamento de Escalas</CardTitle>
                      <CardDescription className="mt-1">
                        Visualize e organize as escalas de trabalho
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <div className="inline-flex p-4 bg-muted/50 rounded-2xl mb-4">
                    <Calendar className="w-16 h-16 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Módulo de Escalas
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                    Esta funcionalidade permitirá criar, editar e visualizar escalas de trabalho de forma intuitiva
                  </p>
                  <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                    <Calendar className="w-4 h-4 mr-2" strokeWidth={2} />
                    Criar Nova Escala
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab (Admin only) */}
          {isAdmin && (
            <TabsContent value="users" className="space-y-6 animate-in fade-in duration-500">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Users className="w-5 h-5 text-primary" strokeWidth={2} />
                      </div>
                      <div>
                        <CardTitle>Gerenciamento de Usuários</CardTitle>
                        <CardDescription className="mt-1">
                          Administre operadores e suas permissões
                        </CardDescription>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                      <UserPlus className="w-4 h-4 mr-2" strokeWidth={2} />
                      <span className="hidden sm:inline">Adicionar Usuário</span>
                      <span className="sm:hidden">Novo</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-16">
                    <div className="inline-flex p-4 bg-muted/50 rounded-2xl mb-4">
                      <Users className="w-16 h-16 text-muted-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Gerenciamento de Usuários
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Esta funcionalidade permitirá criar, editar e gerenciar usuários do sistema
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
}