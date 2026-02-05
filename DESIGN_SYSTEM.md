# 🎨 Design System - Escalas BMI

## Paleta de Cores

### Tema Claro (Light Mode)
```css
/* Backgrounds */
--background: #F5F5F7          /* Cinza muito claro */
--card: #FFFFFF                /* Branco puro */
--popover: #FFFFFF             /* Branco puro */

/* Texto */
--foreground: #1D1D1F          /* Cinza quase preto */
--muted-foreground: #86868B    /* Cinza médio */

/* Primário - Vinho Elegante */
--primary: #6B2942             /* Vinho escuro */
--primary-hover: #7D334D       /* Vinho médio */
--primary-light: #F4E8ED       /* Vinho claríssimo */

/* Secundário - Cinza */
--secondary: #E5E5E7           /* Cinza claro */
--secondary-foreground: #1D1D1F

/* Accent - Vinho Suave */
--accent: #F4E8ED              /* Vinho claríssimo */
--accent-foreground: #6B2942

/* Bordas */
--border: #D2D2D7              /* Cinza claro */
--input: #E5E5E7               /* Cinza claro */

/* Estados */
--muted: #F5F5F7               /* Cinza muito claro */
--destructive: #DC2626         /* Vermelho */
--success: #059669             /* Verde */
--warning: #D97706             /* Laranja */
```

### Tema Escuro (Dark Mode)
```css
/* Backgrounds */
--background: #1D1D1F          /* Cinza escuro */
--card: #2C2C2E                /* Cinza médio-escuro */
--popover: #2C2C2E             /* Cinza médio-escuro */

/* Texto */
--foreground: #F5F5F7          /* Cinza muito claro */
--muted-foreground: #98989D    /* Cinza médio */

/* Primário - Vinho Elegante */
--primary: #A84968             /* Vinho rosado */
--primary-hover: #C06080       /* Vinho claro */
--primary-dark: #4A1F2F        /* Vinho muito escuro */

/* Secundário - Cinza */
--secondary: #3A3A3C           /* Cinza escuro */
--secondary-foreground: #F5F5F7

/* Accent - Vinho Escuro */
--accent: #4A1F2F              /* Vinho muito escuro */
--accent-foreground: #F5F5F7

/* Bordas */
--border: #3A3A3C              /* Cinza escuro */
--input: #3A3A3C               /* Cinza escuro */

/* Estados */
--muted: #2C2C2E               /* Cinza médio-escuro */
--destructive: #EF4444         /* Vermelho claro */
--success: #10B981             /* Verde claro */
--warning: #F59E0B             /* Laranja claro */
```

## Tipografia

### Família de Fontes
```css
--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace;
```

### Tamanhos
```css
--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 1rem       /* 16px */
--text-lg: 1.125rem     /* 18px */
--text-xl: 1.25rem      /* 20px */
--text-2xl: 1.5rem      /* 24px */
--text-3xl: 1.875rem    /* 30px */
--text-4xl: 2.25rem     /* 36px */
```

### Pesos
```css
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

## Espaçamento

```css
--spacing-xs: 0.25rem   /* 4px */
--spacing-sm: 0.5rem    /* 8px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 1.5rem    /* 24px */
--spacing-xl: 2rem      /* 32px */
--spacing-2xl: 3rem     /* 48px */
--spacing-3xl: 4rem     /* 64px */
```

## Bordas e Raios

```css
--radius-sm: 0.375rem   /* 6px */
--radius-md: 0.5rem     /* 8px */
--radius-lg: 0.75rem    /* 12px */
--radius-xl: 1rem       /* 16px */
--radius-2xl: 1.5rem    /* 24px */
--radius-full: 9999px   /* Circular */

--border-width: 1px
--border-width-thick: 2px
```

## Sombras

```css
/* Light Mode */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

/* Dark Mode */
--shadow-sm-dark: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md-dark: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
--shadow-lg-dark: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4);
--shadow-xl-dark: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.5);
```

## Componentes

### Botões

#### Primário (Vinho)
- Background: `--primary`
- Texto: `#FFFFFF`
- Hover: `--primary-hover`
- Radius: `--radius-lg`
- Padding: `12px 24px`

#### Secundário (Cinza)
- Background: `--secondary`
- Texto: `--secondary-foreground`
- Hover: Opacidade 80%
- Radius: `--radius-lg`
- Padding: `12px 24px`

#### Outline
- Border: `--border`
- Texto: `--foreground`
- Hover: Background `--accent`
- Radius: `--radius-lg`
- Padding: `12px 24px`

### Cards

- Background: `--card`
- Border: `1px solid var(--border)`
- Radius: `--radius-xl`
- Shadow: `--shadow-md`
- Padding: `24px`

### Inputs

- Background: `--input`
- Border: `1px solid var(--border)`
- Radius: `--radius-lg`
- Height: `44px`
- Padding: `12px 16px`
- Focus: Border `--primary`, Ring `--primary` com opacidade 20%

### Badges

#### Admin (Vinho)
- Background: `--primary`
- Texto: `#FFFFFF`
- Radius: `--radius-md`
- Padding: `4px 12px`

#### Operador (Cinza)
- Background: `--secondary`
- Texto: `--secondary-foreground`
- Radius: `--radius-md`
- Padding: `4px 12px`

## Ícones

### Biblioteca
- **Lucide React** - Ícones minimalistas e elegantes
- Tamanho padrão: `20px` (w-5 h-5)
- Tamanho grande: `24px` (w-6 h-6)
- Stroke width: `2px`

### Ícones Principais

| Elemento | Ícone | Descrição |
|----------|-------|-----------|
| Login | `LogIn` | Entrada no sistema |
| Logout | `LogOut` | Saída do sistema |
| Admin | `Shield` | Perfil administrativo |
| Operador | `User` | Perfil operador |
| Escalas | `Calendar` | Gerenciamento de escalas |
| Turnos | `Clock` | Turnos de trabalho |
| Usuários | `Users` | Gerenciamento de usuários |
| Dashboard | `LayoutDashboard` | Visão geral |
| Configurações | `Settings` | Configurações |
| Adicionar | `Plus` | Criar novo |
| Editar | `Edit` | Modificar |
| Excluir | `Trash2` | Remover |
| Buscar | `Search` | Pesquisar |
| Filtro | `Filter` | Filtrar dados |
| Download | `Download` | Baixar arquivo |
| Notificação | `Bell` | Alertas |
| Sucesso | `CheckCircle2` | Operação bem-sucedida |
| Erro | `AlertCircle` | Erro ou alerta |
| Informação | `Info` | Informação |
| Carregando | `Loader2` | Estado de carregamento |

## Animações

### Transições
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Efeitos
- **Fade In:** Opacidade 0 → 1
- **Slide In:** Translate Y -10px → 0
- **Scale:** Scale 0.95 → 1
- **Hover Lift:** Translate Y 0 → -2px + Shadow increase

## Acessibilidade

### Contraste
- Texto normal: Mínimo 4.5:1
- Texto grande: Mínimo 3:1
- Elementos UI: Mínimo 3:1

### Focus States
- Ring: `2px solid var(--primary)`
- Ring offset: `2px`
- Sempre visível

### Tamanhos de Toque
- Mínimo: `44x44px`
- Recomendado: `48x48px`

## Responsividade

### Breakpoints
```css
--screen-sm: 640px    /* Mobile landscape */
--screen-md: 768px    /* Tablet */
--screen-lg: 1024px   /* Desktop */
--screen-xl: 1280px   /* Large desktop */
--screen-2xl: 1536px  /* Extra large */
```

### Mobile First
- Layouts em coluna por padrão
- Grid responsivo: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Padding ajustável: `px-4 md:px-6 lg:px-8`

## Estados de UI

### Loading
- Spinner: Rotação infinita com `--primary`
- Skeleton: Background `--muted` com shimmer
- Progress bar: `--primary` com animação

### Empty States
- Ícone: Tamanho `64px`, cor `--muted-foreground`
- Título: `text-lg font-medium`
- Descrição: `text-sm text-muted-foreground`
- Ação: Botão primário

### Error States
- Cor: `--destructive`
- Ícone: `AlertCircle`
- Background: `--destructive` com 10% opacidade

### Success States
- Cor: `--success`
- Ícone: `CheckCircle2`
- Background: `--success` com 10% opacidade

---

**Design System v1.0** | Escalas BMI | Tema Elegante e Sofisticado
