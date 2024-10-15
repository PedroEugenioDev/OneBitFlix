# OneBitFlix

## 📃 Descrição

Projeto final do curso Programador Full-Stack Javascript Profisional da escola de programação OneBitCode. O projeto é um clone da Netflix para cursos EAD em vídeo. Esse repositório representa apenas a parte do back-end do projeto, para conhecer a parte de back-end acesse: [OneBitFlix - Front-End](https://github.com/PedroEugenioDev/onebitflix_front-end)

## 📦 Tech Stack

**Tecnologias de back-end:** typescript, Node.js, Express, Admin.js, Sequelize, PostgreSQL, JWT Token, Postman.

## 🔑 Funcionalidades

- Painel de adminstração para regenciamento de recursos
  - Página de criação de recursos via formulário
  - Página de visualização de recursos com filtagem de dados
  - Página de atualização de recursos
  - Exclusão de recursos
        
- API para consumo de dados

  **Endpoints**

| Method           | Endpoint         | Response                                              |
| ------------- | ---------------- | -----------------------------------------------          |
| POST   | `/auth/register`           | Cadastras usuário no banco de dados                   |
| POST   | `/auth/login`              | Faz login do usuário                                  |
| ------------- | ---------------- | -----------------------------------------------          |
| GET    | `/categories`              | Retorna um array com todas as categorias              |
| GET    | `/categories/:id`          | Retorna detalhes da categoria e lista de cursos       |
| ------------- | ---------------- | -----------------------------------------------          |
| GET    | `/courses/featured`        | Retorna todos os cursos marcados com <em>featured</em>|
| GET    | `/courses/newest`          | Retorna um array dos 10 cursos mais novos             |
| GET    | `/courses/popular`         | Retonra uma array com os 10 cursos mais populares     |
| GET    | `/courses/search`          | Retorna um array de cursos com a palavra-chave no nome|  
| GET    | `/courses/:id`             | Detorna os detalhes de um curso                       |
| ------------- | ---------------- | -----------------------------------------------          |
| GET    | `/episodes/stream`         | Retona um streaming de dados de um episódio           |
| GET    | `/episodes/:id/watchTime`  | Retona o tempo assistido desse episódio em segundos   |
| POST   | `/episodes/:id/watchTime`  | Salva no banco de dados o progresso do episódio       |
| ------------- | ---------------- | -----------------------------------------------          |
| GET    | `/favorites`               | Retona um array de cursos salvos em <em>favoritos</em>|
| POST   | `/favorites`               | Salva um cuso na tabela de favoritos                  |
| DELETE | `/favorites/:id`           | Remove do banco de dados o curso                      |
| ------------- | ---------------- | -----------------------------------------------          |
| POST   | `/likes`                   | Salva um curso na tabela de cutidas                   |
| DELETE | `/likes/:id`               | Remove um curso da tabela de curtidas                 |
| ------------- | ---------------- | -----------------------------------------------          |
| GET    | `/users/current`           | Retona os dados do usuário logado                     |
| PUT    | `/users/current`           | Atualiza no banco de os dados do usuário              |
| PUT    | `/users/current/password`  | Atualiza no bancoa senha do usuário                   |
| GET    | `/users/current/watching`  | Retorna um arrya de cursos em andamento               |

  **Exemplo**

Considere a seguinte rota: 

```bash
 /course/3
```

A resposta esperada é a seguinte:        

```bash
{
    "id": 3,
    "name": "Micro-serviços com Node.js",
    "synopsis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "thumbnailUrl": "thumbnails/course-3/pessoa.png",
    "episodes": [
        {
            "id": 3,
            "name": "Episodio1",
            "synopsis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet in lacus sit amet elementum. Sed tincidunt leo et ullamcorper aliquam. Maecenas tincidunt dapibus facilisis. Praesent non dapibus ipsum. Aenean mattis id purus ac eleifend. Suspendisse non urna eget mi malesuada cursus eu quis ante. Aliquam est enim, vehicula vel velit vitae, euismod maximus lacus. Fusce sit amet nunc ac.",
            "order": 1,
            "videoUrl": "videos/course-3/episode1__10sec.mp4",
            "secondsLong": 10
        },
        {
            "id": 4,
            "name": "Episodio2",
            "synopsis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet in lacus sit amet elementum. Sed tincidunt leo et ullamcorper aliquam. Maecenas tincidunt dapibus facilisis. Praesent non dapibus ipsum. Aenean mattis id purus ac eleifend. Suspendisse non urna eget mi malesuada cursus eu quis ante. Aliquam est enim, vehicula vel velit vitae, euismod maximus lacus. Fusce sit amet nunc ac.",
            "order": 2,
            "videoUrl": "videos/course-3/episode2_54sec.mp4",
            "secondsLong": 54
        }
    ],
    "favorited": true,
    "liked": true
}
```


## 💭 Processo

Essa parte do projeto consistiu em elaborar como o sistema funcionaria e como organizaria os dados para os requisitos esperados. E depois é criada uma parte de administração para gerenciar os dados de forma visual. Por fim é feita uma API para acessar esses dados em uma aplicação front-end. Abaixo, são apresentados os processos de forma mais detalhada.

**Preparação do projeto**
- Levantamento dos requisitos
- Modelagem dos bancos de dados (tabelas necessários e seus relacionamentos)
- Definição dos endpoints da API
- Inicialização do projeto, instalação da dependencias de projeto e de desenvolvimento e organização de diretórios
- Configuração do banco de dados postgre usando Sequelize

**Criação do painel admnistrativo**
- Criação e configuração do painel de administração usando AdminJS
- Para cada recurso criado no painel de administração, seguiu-se a seguinte sequência de desenvolvimento
  - Criação de uma migration para criação de tabela no banco de dados
  - Criação do Model
  - Criação de relacionamento entre models
  - Criação do resource e adição no painel de admin
  - Criação de features específicas do resource
  - (opcional) Criação de seeds
- Essas etapas foram feitas paros seguintes recursos do painel administrativo
  - Categorias
  - Cursos
  - Episódio
  - Usuários
    
**Criação da API**

Para a criação da API, cada rota criada seguiu o seguinte padrão de desenvolvimento
- Criação de model (caso não existisse ainda)
- Criação de um helper, caso necessário
- Criação de um services paaca manipular o model
- Criação de um métodos no controller para processar a requisição usando o service criado
- Adição da rota no roteador
- Teste da rota no Postman

Esse processo foi feito para as seguintes rotas
- Categorias
- Cursos
- Episódios
- Curtilas (likes)
- Favoritos
- Usuários
                    
        
## 📚 Aprendizado

- Este projeto permitir aplicar os conhecimentos de de back-end, como Typescript, Node.js, Express, Sequelize e PostgreSQL, aprendidos ao longo do Curso
- Além disso, o projeto poermitiu aprender sobre as sequintes tecnologias
  - Pacote Admin.js
  - Autenticação e JWT Token
  - Desenvolvimento de API
  - bcrypt
  - Cors
  - Postman
  - Criação de services

## 🚦 Executando o projeto

```bash
  git clone https://github.com/PedroEugenioDev/onebitflix_back-end.git
  cd /onebitflix_back-end
  npm install
  npm run dev
```


## 📸 Videos e Imagens

### Desktop

<p align="center"><em>Página de login e painel de administrador</em></p>
<div align="center">
    <img src="/assets/admin_login.png" alt="" title="Página de Login" align="top" width="480px" hspace="10">
    <img src="/assets/admin_panel.png" alt="" title="Painel Administrativo" align="top"  width="480px" hspace="10">
</div>
<br>
<p align="center"><em>Página de recursos e Página de dados do recurso</em></p>
<div align="center">
    <img src="/assets/admin_resource.png" alt="" title="Página de recurso" align="top" width="480px" hspace="10">
    <img src="/assets/admin_resource_data.png" alt="" title="Página de dados do recurso" align="top"  width="480px" hspace="10">
</div>
<br>
<p align="center"><em>Página de atualização e página de criação de recursos</em></p>
<div align="center">
    <img src="/assets/admin_resource_update.png" alt="" title="Página de atualização de recurso" align="top" width="480px" hspace="10">
    <img src="/assets/admin_resource_form.png" alt="" title="Página de formulário de criação de recurso" align="top"  width="480px" hspace="10">
</div>

### Mobile

<p align="center"><em>Página de login e painel de administrador</em></p>
<div align="center">
    <img src="/assets/admin_login_mobile.png" alt="" title="Página de Login" align="top" width="480px" hspace="10">
    <img src="/assets/admin_panel_mobile.png" alt="" title="Painel Administrativo" align="top"  width="480px" hspace="10">
</div>
<br>
<p align="center"><em>Página de recursos e Página de dados do recurso</em></p>
<div align="center">
    <img src="/assets/admin_resource_mobile.png" alt="" title="Página de recurso" align="top" width="480px" hspace="10">
    <img src="/assets/admin_resource_data_mobile.png" alt="" title="Página de dados do recurso" align="top"  width="480px" hspace="10">
</div>
<br>
<p align="center"><em>Página de atualização e página de criação de recursos</em></p>
<div align="center">
    <img src="/assets/admin_resource_update_mobile.png" alt="" title="Página de atualização de recurso" align="top" width="480px" hspace="10">
    <img src="/assets/admin_resource_form_mobile.png" alt="" title="Página de formulário de criação de recurso" align="top"  width="480px" hspace="10">
</div>
<br>
<p align="center"><em>Visualização do menu mobile</em></p>
<div align="center">
    <img src="/assets/admin_menu_mobile.png" alt="" title="Página de atualização de recurso" align="top" width="480px" hspace="10">
</div>
