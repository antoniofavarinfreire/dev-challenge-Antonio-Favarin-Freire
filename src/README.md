# 🔍 Dev Challenge - Antonio Favarin Freire

Este repositório contém o desafio técnico realizado por Antonio Favarin Freire, focado no desenvolvimento de uma aplicação full-stack .NET e Angular. A proposta inclui organização modular, separação de responsabilidades, testes com Insomnia, e documentação via Swagger.

---

## 📁 Estrutura do Projeto

dev-challenge-Antonio-Favarin-Freire/

│

├── api/ # Projeto principal da API

│ ├── Models/ # Classes de modelo (entidades do domínio)

│ ├── Routes/ # Definição das rotas/endpoints

│ ├── Program.cs # Arquivo principal de inicialização

│ ├── appsettings.json # Configurações da aplicação

│

├── data/ # Arquivos mock de dados em JSON

│ ├── equipments.json

│ ├── materials.json

│ ├── purchase_orders.json

│ ├── sales_orders.json

│ ├── workforce.json

│

├── layout/ # Layout visual de apoio ao projeto

│

├── src/multi-search/ # Projeto frontend em Angular

│ ├── src/ # Código-fonte (componentes, serviços)

│ ├── angular.json # Configuração Angular

│ ├── package.json # Dependências

│

├── Teste-Api-Insomnia # Arquivo exportado de requisições para testes no Insomnia

├── dev-challenge-Antonio-Favarin-Freire.sln # Solução .NET

---

## ⚙️ Tecnologias Utilizadas

### Backend
- **.NET 8.0**
  - Versão escolhida por sua estabilidade e amplo suporte a desenvolvimento de APIs modernas, além de ser a ultima versão com swagger integrado.
- **C#**
  - Linguagem principal da API.
- **Swagger (Swashbuckle.AspNetCore)**
  - Para documentação interativa da API e uma primeira validação dos testes manuais das rotas.
- **JSON**
  - Utilizado como fonte de dados mockados.

### Frontend
- **Angular 20+**
- **TypeScript**
- **SCSS/CSS**
- **Bootstrap**

### Outros
- **Insomnia**
  - Para uma segunda validação dos testes manuais das rotas.
- **VS Code / Visual Studio**
  – Desenvolvimento e debugging

---

## 🔙 Backend (API REST em .NET)

A API está estruturada de forma modular, com separação clara de responsabilidade:

### 🔧 Organização
- **Program.cs**: inicializa o app, configura middlewares e serviços
- **Models/**: classes que representam os dados de entrada e saída
- **Routes/**: endpoints organizados por entidade (ex: MaterialsRoute.cs)
- **Dados**: lidos a partir de arquivos JSON contidos na pasta `/data`

### 📂 Endpoints Disponíveis

- `GET /material`
- `GET /equipment`
- `GET /purchaseorders`
- `GET /salesorders`
- `GET /workforce`

Esses endpoints retornam os dados mockados de forma estruturada e validada.

---

## 🌐 Frontend (Angular)

A aplicação frontend permite ao usuário visualizar e pesquisar os dados da API de forma amigável.

### 📌 Organização
- **Components**: responsáveis pela renderização de listas, tabelas e formulários
- **Services**: responsáveis por se comunicar com a API via `HttpClient`
- **Modularização**: organizada por funcionalidades para facilitar manutenção

---

### 🧠 Funcionalidades
- Exibição de listas (materiais, pedidos, etc.)
- Consumo dos dados via requisições REST
- Interface moderna e responsiva

---

## 🧪 Testes com Insomnia

O projeto inclui uma coleção de testes exportada para o **Insomnia**, que permite testar os principais endpoints da API de forma prática.

- Para usar:
  1. Abra o Insomnia
  2. Importe o arquivo `Teste-Api-Insomnia`
  3. Execute as requisições disponíveis

As rotas disponíveis incluem:
- `/material`
- `/equipment`
- `/purchaseorders`
- `/salesorders`
- `/workforce`

---

## 📘 Documentação da API (Swagger)

A documentação está integrada à aplicação utilizando **Swagger** via `Swashbuckle.AspNetCore`.

- Para visualizar:
  1. Entre na pasta `/api`
  2. No terminal, utilize o comando: `dotnet watch run`
  3. Ao iniciar o projeto, será exibido o swagger, mas caso não ocorra é só acessar: `http://localhost:5222/swagger/index.html`
  4. Interaja com os endpoints diretamente pela interface

A documentação exibe:
- Métodos disponíveis (`GET`)
- Exemplos de resposta
- Estrutura dos dados retornados

---

## 🚀 Como Rodar o Projeto Localmente

1. **Pré-requisitos**
   - [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
   - [Node.js]

2. **Clone o repositório**
```bash
git clone https://github.com/antoniofavarinfreire/dev-challenge-Antonio-Favarin-Freire.git
cd dev-challenge-Antonio-Favarin-Freire/api
```
3. **Acesse a pasta /api, via terminal para iniciar o back-end**
```bash
dotnet whatch run
```
4. **Acesse o endereço localhost para visualizar o swagger**
```bash
http://localhost:5222/swagger/index.html
```
5. **Em um novo terminal acesse a pasta `src/multi-seach`, execute o seguinte comando:**
```bash
npm run start
```
6. **Acesse `localhots:4200/home` para dar inicio ao front**

---

🎯 Objetivos Alcançados
✅ Organização modular por responsabilidades

✅ Separação entre modelos, rotas e lógica

✅ Uso de dados simulados (JSON)

✅ Testes com Insomnia

✅ Documentação clara com Swagger

---

👨‍💻 Desenvolvido por
Antonio Favarin Freire

GitHub 
