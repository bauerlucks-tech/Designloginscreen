# 🎨 Sistema de Escalas BMI - Design Elegante

## 📋 Visão Geral

Sistema de gerenciamento de escalas desenvolvido com **React**, **TypeScript**, **Tailwind CSS** e **Supabase**. Apresenta um design **elegante e sofisticado** com tema escuro e claro, usando uma paleta de cores baseada em **cinza e vinho**.

## ✨ Status do Projeto

✅ **Sistema completamente redesenhado e funcional!**

### Novo Design Implementado

#### 🎨 Tema Claro
- **Cinza Claro Harmonioso** (#F5F5F7)
- **Vinho Elegante** (#6B2942) para elementos primários
- Interface limpa e profissional
- Contraste suave e agradável

#### 🌙 Tema Escuro
- **Cinza Escuro Sofisticado** (#1D1D1F)
- **Vinho Rosado** (#A84968) para elementos primários
- **Vinho Muito Escuro** (#4A1F2F) para acentos
- Visual elegante e moderno

---

## 🔐 Autenticação

### Credenciais Padrão

**Administrador:**
- Email: `admin@escalasbmi.com`
- Senha: `admin123`
- Permissões: Acesso completo ao sistema

**Operadores:**
- Email: `operador1@escalasbmi.com` ou `operador2@escalasbmi.com`
- Senha: `operator123`
- Permissões: Acesso limitado (sem gerenciamento de usuários)

---

## 🎨 Funcionalidades Implementadas

### ✅ Design System Completo
- Paleta de cores elegante (cinza + vinho)
- Tema claro e escuro com alternância
- Tipografia consistente e hierarquizada
- Componentes harmonizados
- Ícones minimalistas (Lucide React)
- Animações suaves e transições

### ✅ Tela de Login
- Design elegante com efeito glow no ícone
- Dropdown dinâmico de usuários
- Campo de senha seguro
- Validação de credenciais
- Mensagens de erro amigáveis
- Interface responsiva
- Alternador de tema no canto superior
- Credenciais de teste visíveis

### ✅ Dashboard Administrativo
- Header sticky com backdrop blur
- Badge de perfil (Admin/Operador) com cores temáticas
- Sistema de abas com indicador visual
- Cards de estatística com hover effect
- Controle de acesso baseado em perfil
- Alternador de tema integrado
- Empty states elegantes
- Notificações toast

### ✅ Backend (Supabase Edge Functions)
- Endpoint `/users` - Lista usuários
- Endpoint `/login` - Autentica usuários
- Endpoint `/signup` - Cria novos usuários
- Hash SHA-256 para senhas
- Inicialização automática de usuários padrão
- CORS configurado
- Logs detalhados

---

## 🔒 Segurança

- ✅ **Hashing SHA-256** para todas as senhas
- ✅ **HTTPS** automático (Supabase)
- ✅ **Bearer Tokens** para autenticação
- ✅ **Validação de entrada** em todos os endpoints
- ✅ **Senhas nunca expostas** nas respostas

---

## 🏗️ Arquitetura

```
Frontend (React + TypeScript + Tailwind v4)
    ↓
API Gateway (Supabase Functions)
    ↓
Backend Server (Hono + Deno)
    ↓
Database (KV Store)
```

### Estrutura de Arquivos

```
/src/
  ├── app/
  │   ├── App.tsx                      # Controle de autenticação
  │   └── components/
  │       ├── LoginPage.tsx            # Tela de login redesenhada
  │       ├── AdminDashboard.tsx       # Dashboard redesenhado
  │       ├── ThemeToggle.tsx          # Alternador de tema
  │       ├── Toaster.tsx              # Sistema de notificações
  │       └── ui/                      # Componentes shadcn/ui
  └── styles/
      ├── theme.css                    # Design system (cores, variáveis)
      ├── fonts.css                    # Importações de fontes
      ├── tailwind.css                 # Configurações Tailwind
      └── index.css                    # Estilos globais

/supabase/functions/server/
  ├── index.tsx                        # Servidor Hono com rotas
  └── kv_store.tsx                     # Utilitários KV database

/utils/supabase/
  └── info.tsx                         # Configurações Supabase

/DESIGN_SYSTEM.md                      # Documentação completa do design
/BIBLIOTECA_COMPONENTES.md             # Biblioteca de componentes exportada
/SUGESTOES_INTERFACE.md                # Melhorias futuras sugeridas
```

---

## 🎨 Design System

### Paleta de Cores

#### Tema Claro
```
Primary (Vinho):     #6B2942
Background:          #F5F5F7
Card:                #FFFFFF
Foreground:          #1D1D1F
Muted:               #86868B
Border:              #D2D2D7
```

#### Tema Escuro
```
Primary (Vinho):     #A84968
Background:          #1D1D1F
Card:                #2C2C2E
Foreground:          #F5F5F7
Muted:               #98989D
Border:              #3A3A3C
```

### Ícones

Todos os ícones usam **Lucide React** com:
- Stroke width: `2px`
- Tamanhos: 16px, 20px, 24px, 64px
- Estilo minimalista e elegante

---

## 🚀 Funcionalidades em Desenvolvimento

### Módulo de Escalas
- [ ] Criação de escalas
- [ ] Calendário visual
- [ ] Atribuição de operadores
- [ ] Filtros avançados
- [ ] Exportação PDF/Excel

### Gerenciamento de Usuários
- [ ] Lista completa com tabela
- [ ] CRUD completo
- [ ] Upload de avatar
- [ ] Histórico de atividades

### Notificações
- [ ] Sistema de notificações em tempo real
- [ ] Badge com contador
- [ ] Diferentes tipos de alertas

### Relatórios
- [ ] Gráficos interativos (Recharts)
- [ ] Relatórios de horas trabalhadas
- [ ] Análise de distribuição
- [ ] Exportação de dados

---

## 📱 Responsividade

O sistema é totalmente responsivo:

- **📱 Mobile** (< 640px): Layout em coluna, menu adaptado
- **📱 Tablet** (768px): 2 colunas, navegação por tabs
- **💻 Desktop** (1024px+): 3 colunas, layout completo

---

## 🎯 Destaques do Novo Design

### 1. **Homogeneidade Visual**
Todas as páginas seguem o mesmo padrão:
- Mesma paleta de cores
- Mesmos estilos de componentes
- Mesmos espaçamentos
- Mesmas animações

### 2. **Ícones Elegantes**
- Biblioteca Lucide React
- Stroke width consistente (2px)
- Simbolismo claro e intuitivo
- Sem contrastes excessivos

### 3. **Tema Claro e Escuro**
- Alternância com um clique
- Preferência salva no localStorage
- Transições suaves
- Cores otimizadas para cada tema

### 4. **Animações Sutis**
- Fade in (300ms)
- Slide in (200ms)
- Hover effects suaves
- Loading states elegantes

### 5. **Acessibilidade**
- Contraste adequado (WCAG AA)
- Focus indicators visíveis
- Tamanhos de toque adequados (44x44px)
- Labels ARIA

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React 18.3.1
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React (ícones)
- Sonner (toasts)

### Backend
- Supabase Edge Functions
- Hono (web framework)
- Deno runtime
- KV Store (database)

---

## 💡 Como Usar

### 1. Acessar o Sistema
Abra o navegador e acesse a URL do projeto

### 2. Fazer Login
- Selecione um usuário no dropdown
- Digite a senha (veja credenciais acima)
- Clique em "Entrar no Sistema"

### 3. Alternar Tema
- Clique no botão de sol/lua no canto superior direito
- O tema será salvo automaticamente

### 4. Navegar
- Use as abas para acessar diferentes seções
- Admins têm acesso à aba "Usuários"

### 5. Sair
- Clique no botão "Sair" no canto superior direito

---

## 📚 Documentação Adicional

- **`/DESIGN_SYSTEM.md`** - Documentação completa do design system
- **`/BIBLIOTECA_COMPONENTES.md`** - Biblioteca visual de componentes
- **`/SUGESTOES_INTERFACE.md`** - Sugestões de melhorias futuras

---

## 🐛 Debugging

### Frontend
Abra o Console do navegador (F12) para ver logs de:
- Requisições à API
- Erros de autenticação
- Estado da aplicação

### Backend
Verifique os logs do Supabase Functions para:
- Requisições recebidas
- Validações de senha
- Erros do servidor

---

## 🎨 Exportação do Design

### Componentes Disponíveis
Todos os componentes estão documentados em `/BIBLIOTECA_COMPONENTES.md`:

- Botões (Primário, Secundário, Outline, Destrutivo)
- Cards (Padrão, Estatística, Informação)
- Inputs (Text, Password, Select)
- Badges (Admin, Operador)
- Alerts (Erro, Sucesso, Info)
- Tabs com ícones
- Headers
- Empty States
- Loading States
- Toast Notifications

### Design Tokens
Todas as variáveis CSS estão em `/src/styles/theme.css`

---

## 📝 Notas Importantes

1. **Persistência de Sessão:** Login persiste via localStorage
2. **Preferência de Tema:** Salva automaticamente
3. **Senhas Padrão:** Alterar em produção
4. **Ambiente:** Protótipo para demonstração
5. **Dados:** Estatísticas são valores fixos (demo)

---

## 🎯 Próximos Passos Sugeridos

1. **Curto Prazo:**
   - Implementar módulo de escalas
   - Adicionar gerenciamento de usuários
   - Criar sistema de busca

2. **Médio Prazo:**
   - Gráficos e analytics
   - Notificações em tempo real
   - Sistema de relatórios

3. **Longo Prazo:**
   - PWA com suporte offline
   - Exportação avançada
   - Integração com calendários externos

---

**Desenvolvido para Escalas BMI** | Design Elegante e Sofisticado | v2.0
