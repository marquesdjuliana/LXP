# LXP - Learning Experience Platform

#### Este projeto está em desenvolvimento.
 
 A proposta é desenvolver uma versão simplificada de uma Learning Experience Platform (LXP). O principal objetivo facilitar a interação de dúvidas e respostas entre professor e estudante. A aplicação permitirá o registro de usários, cursos, perguntas de estudantes e respostas de professores.

## Contexto

O professor desempenha um papel central na plataforma, envolvendo-se na produção de conteúdo e no atendimento às dúvidas dos estudantes. Um curso está vinculado a um professor, e os estudantes podem enviar perguntas relacionadas aos cursos para seus respectivos professores.

## Funcionalidades Principais

- **Registro de Usuários e Cursos:** A plataforma permite o registro de usuários (estudantes, professores e admins), a criação de cursos.
  
- **Perguntas e Respostas:** Os estudantes podem enviar perguntas sobre os cursos, e os professores têm a capacidade de responder a essas perguntas.

- **Pagamentos aos Professores:** Um admin pode registrar os pagamentos aos professores, considerando a remuneração por hora de curso disponibilizado e por pergunta respondida.

- **Consulta de Saldo para Professores:** Os professores podem verificar o saldo a receber, já descontados os pagamentos recebidos.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, Sequelize (ORM), MySQL.
  
- **Frontend:** React.js

## Instalação do projeto

## Instalação
Se deseja experimentar o projeto em sua máquina local, siga estas etapas:

1. Clone o repositório:
```sh
git clone git@github.com:marquesdjuliana/LXP.git
```
2. Entre na pasta do repositório:
```sh
cd LXP 
```
3. Agora que está na raiz do projeto execute serviços do Docker:
```sh
compose:up
```
4. Instale as dependências:
```sh
isntall:apps
```
5. Acesse o container app_backend e popule o banco:
```sh
cd backend
```
```sh
docker exec -it app_backend sh
```
```sh
npm prestart 
```








