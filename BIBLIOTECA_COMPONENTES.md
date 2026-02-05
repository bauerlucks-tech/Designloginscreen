# 📚 Biblioteca de Componentes - Escalas BMI

## Design Elegante e Sofisticado

Este documento apresenta todos os componentes UI do sistema com exemplos de uso e variações de estilo.

---

## 🎨 Paleta de Cores

### Tema Claro
```css
/* Cores Primárias - Vinho Elegante */
Primary: #6B2942
Primary Hover: #7D334D
Primary Light: #F4E8ED

/* Backgrounds */
Background: #F5F5F7
Card: #FFFFFF

/* Texto */
Foreground: #1D1D1F
Muted: #86868B

/* Bordas */
Border: #D2D2D7
```

### Tema Escuro
```css
/* Cores Primárias - Vinho Rosado */
Primary: #A84968
Primary Hover: #C06080
Primary Dark: #4A1F2F

/* Backgrounds */
Background: #1D1D1F
Card: #2C2C2E

/* Texto */
Foreground: #F5F5F7
Muted: #98989D

/* Bordas */
Border: #3A3A3C
```

---

## 🧩 Componentes

### 1. Botões

#### Botão Primário (Vinho)
```tsx
<Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
  Botão Primário
</Button>
```
**Visual:**
- Background: Vinho (#6B2942 light / #A84968 dark)
- Texto: Branco
- Hover: Tom mais claro de vinho
- Border Radius: 12px
- Padding: 12px 24px
- Shadow: Sombra suave

#### Botão Secundário
```tsx
<Button variant="outline" className="border-border hover:bg-accent">
  Botão Secundário
</Button>
```
**Visual:**
- Border: Cor da borda padrão
- Texto: Cor do texto padrão
- Hover: Background accent
- Sem preenchimento inicial

#### Botão Destrutivo
```tsx
<Button 
  variant="outline" 
  className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50"
>
  Sair
</Button>
```
**Visual:**
- Border: Borda padrão
- Hover: Vermelho suave (10% opacidade)
- Usado para ações irreversíveis

---

### 2. Cards

#### Card Padrão
```tsx
<Card className="border-border shadow-xl">
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do conteúdo</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo principal
  </CardContent>
</Card>
```
**Visual:**
- Background: Branco (light) / #2C2C2E (dark)
- Border: 1px solid border color
- Border Radius: 16px
- Shadow: xl (elevado)
- Padding: 24px

#### Card de Estatística
```tsx
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
    <p className="text-xs text-muted-foreground mt-1">
      +2 esta semana
    </p>
  </CardContent>
</Card>
```
**Visual:**
- Número grande em destaque
- Ícone em container com fundo vinho 10%
- Hover: Sombra aumenta
- Transição suave

---

### 3. Inputs

#### Input de Texto
```tsx
<Label htmlFor="email">Email</Label>
<Input
  id="email"
  type="email"
  placeholder="Digite seu email"
  className="h-12 bg-input-background border-border hover:border-primary/50 focus:border-primary"
/>
```
**Visual:**
- Height: 48px
- Background: Branco (light) / #2C2C2E (dark)
- Border: Cinza padrão
- Hover: Border vinho (50% opacidade)
- Focus: Border vinho completo + ring
- Border Radius: 12px

#### Select (Dropdown)
```tsx
<Label htmlFor="user">Usuário</Label>
<Select>
  <SelectTrigger 
    id="user" 
    className="h-12 bg-input-background border-border hover:border-primary/50"
  >
    <SelectValue placeholder="Selecione..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Opção 1</SelectItem>
    <SelectItem value="2">Opção 2</SelectItem>
  </SelectContent>
</Select>
```
**Visual:**
- Mesmos estilos do Input
- Ícone de dropdown (chevron)
- Dropdown menu com fundo card

---

### 4. Badges

#### Badge Admin (Vinho)
```tsx
<Badge className="bg-primary hover:bg-primary-hover text-primary-foreground">
  <Shield className="w-3 h-3 mr-1" strokeWidth={2} />
  Admin
</Badge>
```
**Visual:**
- Background: Vinho
- Texto: Branco
- Ícone: Shield
- Border Radius: 8px
- Padding: 4px 12px

#### Badge Operador (Cinza)
```tsx
<Badge variant="secondary" className="bg-secondary text-secondary-foreground">
  <User className="w-3 h-3 mr-1" strokeWidth={2} />
  Operador
</Badge>
```
**Visual:**
- Background: Cinza claro
- Texto: Cinza escuro
- Ícone: User

---

### 5. Alerts

#### Alert de Erro
```tsx
<Alert variant="destructive" className="animate-in fade-in slide-in-from-top-2">
  <AlertCircle className="h-4 w-4" strokeWidth={2} />
  <AlertDescription>Erro ao processar a operação</AlertDescription>
</Alert>
```
**Visual:**
- Background: Vermelho (10% opacidade)
- Border: Vermelho
- Ícone: AlertCircle vermelho
- Animação: Fade + Slide in

#### Alert de Informação
```tsx
<Alert className="bg-primary/10 border-primary/20">
  <Info className="h-4 w-4 text-primary" strokeWidth={2} />
  <AlertDescription>Informação importante</AlertDescription>
</Alert>
```
**Visual:**
- Background: Vinho (10% opacidade)
- Border: Vinho (20% opacidade)
- Ícone: Info vinho

---

### 6. Tabs

#### Tabs com Ícones
```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1 border border-border">
    <TabsTrigger 
      value="overview"
      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
    >
      <LayoutDashboard className="w-4 h-4 mr-2" strokeWidth={2} />
      Visão Geral
    </TabsTrigger>
    <TabsTrigger value="schedules">
      <Clock className="w-4 h-4 mr-2" strokeWidth={2} />
      Escalas
    </TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Conteúdo da aba
  </TabsContent>
</Tabs>
```
**Visual:**
- Background: Muted (50% opacidade)
- Border: Borda padrão
- Aba ativa: Background vinho + texto branco
- Transição suave entre abas

---

### 7. Ícones

Todos os ícones usam **Lucide React** com estas especificações:

```tsx
// Tamanho Pequeno (16px)
<Icon className="w-4 h-4" strokeWidth={2} />

// Tamanho Médio (20px) - Padrão
<Icon className="w-5 h-5" strokeWidth={2} />

// Tamanho Grande (24px)
<Icon className="w-6 h-6" strokeWidth={2} />

// Extra Grande (64px) - Empty States
<Icon className="w-16 h-16" strokeWidth={1.5} />
```

**Ícones Principais:**
- `LogIn` - Login
- `LogOut` - Logout
- `Shield` - Admin
- `User` - Usuário/Operador
- `Calendar` - Escalas
- `Clock` - Turnos
- `Users` - Gerenciamento
- `LayoutDashboard` - Dashboard
- `Loader2` - Loading (com animate-spin)
- `AlertCircle` - Erro/Alerta
- `TrendingUp` - Crescimento

---

### 8. Loading States

#### Spinner
```tsx
<Loader2 className="w-5 h-5 animate-spin text-primary" strokeWidth={2} />
```

#### Botão com Loading
```tsx
<Button disabled>
  <Loader2 className="mr-2 h-5 w-5 animate-spin" strokeWidth={2} />
  Carregando...
</Button>
```

#### Card Skeleton
```tsx
<Card>
  <CardContent className="p-8">
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-muted rounded w-3/4"></div>
      <div className="h-4 bg-muted rounded w-1/2"></div>
    </div>
  </CardContent>
</Card>
```

---

### 9. Empty States

```tsx
<div className="text-center py-16">
  <div className="inline-flex p-4 bg-muted/50 rounded-2xl mb-4">
    <Calendar className="w-16 h-16 text-muted-foreground" strokeWidth={1.5} />
  </div>
  <h3 className="text-lg font-semibold mb-2">
    Sem Dados
  </h3>
  <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
    Nenhum registro encontrado no momento
  </p>
  <Button className="bg-primary hover:bg-primary-hover">
    Criar Novo
  </Button>
</div>
```
**Visual:**
- Ícone grande centralizado
- Container com background muted
- Título e descrição
- Call-to-action (botão)

---

### 10. Header

```tsx
<header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm backdrop-blur-sm bg-card/95">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg" />
          <div className="relative bg-primary p-2 rounded-lg">
            <Calendar className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight">Escalas BMI</h1>
          <p className="text-xs text-muted-foreground">Sistema</p>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="outline" size="sm">Sair</Button>
      </div>
    </div>
  </div>
</header>
```
**Visual:**
- Sticky no topo
- Background com backdrop blur
- Logo com efeito glow
- Ações alinhadas à direita

---

### 11. Theme Toggle

```tsx
<ThemeToggle />
```
**Visual:**
- Ícone Sol (tema claro) ou Lua (tema escuro)
- Botão outline pequeno
- Transição suave
- Salva preferência em localStorage

---

### 12. Toast Notifications

```tsx
import { toast } from 'sonner';

// Sucesso
toast.success('Operação concluída!', {
  description: 'Os dados foram salvos com sucesso.',
});

// Erro
toast.error('Erro ao salvar', {
  description: 'Não foi possível completar a operação.',
});

// Informação
toast.info('Atenção', {
  description: 'Você foi desconectado do sistema.',
});
```
**Visual:**
- Posição: top-right
- Animação: Slide in
- Duração: 4 segundos
- Botão fechar
- Cores ricas (richColors)

---

## 🎯 Padrões de Uso

### Hierarquia Visual
1. **Primário (Vinho):** Ações principais, CTAs, elementos importantes
2. **Secundário (Cinza):** Ações secundárias, cancelamentos
3. **Destrutivo (Vermelho):** Ações perigosas, exclusões
4. **Muted:** Textos secundários, descrições

### Espaçamento Consistente
- **Gap pequeno:** 8px (gap-2)
- **Gap médio:** 16px (gap-4)
- **Gap grande:** 24px (gap-6)
- **Padding card:** 24px (p-6)

### Animações
- **Fade in:** 300-500ms
- **Slide in:** 200ms
- **Hover:** 150ms
- **All transitions:** cubic-bezier(0.4, 0, 0.2, 1)

### Responsividade
- **Mobile:** < 640px - Stacking, menu hamburger
- **Tablet:** 768px - 2 colunas
- **Desktop:** 1024px+ - 3 colunas, layout completo

---

## 📦 Exportação de Componentes

Todos os componentes estão em `/src/app/components/`:

```
components/
├── ui/                    # Componentes base (shadcn/ui)
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── badge.tsx
│   ├── alert.tsx
│   ├── tabs.tsx
│   └── ...
├── LoginPage.tsx          # Tela de login completa
├── AdminDashboard.tsx     # Dashboard administrativo
├── ThemeToggle.tsx        # Alternador de tema
└── Toaster.tsx            # Sistema de notificações
```

---

## 🎨 Guia de Estilo Visual

### DO ✅
- Use ícones Lucide React com strokeWidth={2}
- Aplique border-radius consistente (12px padrão)
- Use a paleta de cores definida
- Mantenha hierarquia visual clara
- Adicione transições suaves
- Implemente estados de hover e focus
- Use animações sutis

### DON'T ❌
- Não use gradientes chamativos
- Não misture bibliotecas de ícones
- Não ignore estados de loading
- Não use contrastes excessivos
- Não esqueça acessibilidade
- Não ignore responsividade

---

**Biblioteca de Componentes v1.0** | Escalas BMI | Design Elegante
