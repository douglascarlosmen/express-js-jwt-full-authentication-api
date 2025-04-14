# 🔐 JWT Full Authentication API

API REST moderna de autenticação com JWT, desenvolvida em Node.js + Express e MongoDB, com arquitetura limpa, boas práticas, e autenticação segura. Projeto voltado para portfólio profissional e testes técnicos.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **JWT (JSON Web Tokens)**
- **Docker & Docker Compose**
- **TypeScript**
- **Arquitetura MVC + Clean Code**

---

## 📁 Endpoints

### ✅ Registro
```
POST /api/register
Content-Type: application/json

{
  "name": "João da Silva",
  "email": "joao@email.com",
  "password": "123456"
}
```

### ✅ Login
```
POST /api/login
Content-Type: application/json

{
  "email": "joao@email.com",
  "password": "123456"
}
```
**Resposta:**
```json
{
  "token": "JWT_TOKEN"
}
```

### 🔒 Rota Protegida (Perfil)
```
GET /api/me
Authorization: Bearer JWT_TOKEN
```

---

## 🧪 Testes com Postman / Insomnia

1. Cadastre um usuário (`/api/register`)
2. Faça login e copie o token JWT
3. Use o token para acessar `/api/me`

---

## 📦 Como Executar Localmente com Docker

```bash
git clone https://github.com/seuusuario/express-js-jwt-full-authentication-api.git
cd express-js-jwt-full-authentication-api
docker-compose up --build
```

A API estará disponível em:  
👉 **http://localhost:3000/api**

---

## 📚 Organização de Código

- `src/models`: Definição do schema do usuário
- `src/controllers`: Responsável por lidar com requisições HTTP
- `src/services`: Regras de negócio (registro, login, perfil)
- `src/middlewares`: Middleware de autenticação via JWT
- `src/routes`: Agrupamento das rotas da aplicação
- `src/index.ts`: Entry point com inicialização do app

---

## 📌 Licença

MIT © [Seu Nome](https://github.com/seuusuario)