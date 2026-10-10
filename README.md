# 🍕 Restaurant Ordering System

Projeto desenvolvido durante as aulas de Desenvolvimento Back-End,
com o objetivo de construir uma API REST para gerenciamento de
categorias e produtos de um sistema de pedidos de restaurante.

## 🛠️ Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Supabase
- PostgreSQL
- Postman
- Git e GitHub

## 📂 Estrutura do projeto

src/
├── config/
├── controller/
├── models/
├── routes/
├── app.ts
└── server.ts

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

git clone https://github.com/LeoMichaki30/DesenvolvimentoBackEnd.git

### 2. Instalar as dependências

npm install

### 3. Configurar as variáveis de ambiente

Criar um arquivo `.env` na raiz do projeto:

SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_SECRET_KEY=sua-chave-secreta

Nunca publicar o arquivo `.env` ou suas credenciais no GitHub.

### 4. Iniciar o servidor

npm run dev

A API estará disponível em:

http://localhost:3000

## 📌 Funcionalidades

### Categorias
- Listar categorias
- Buscar categoria por ID
- Cadastrar categoria
- Atualizar categoria
- Excluir categoria

### Produtos
- Listar produtos
- Buscar produtos por palavra-chave
- Buscar produto por ID
- Cadastrar produto
- Atualizar produto
- Excluir produto

## 👨‍💻 Desenvolvimento

Projeto acadêmico desenvolvido para fins de aprendizagem
em Desenvolvimento Back-End.