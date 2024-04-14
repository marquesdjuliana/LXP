# LXP - Learning Experience Platform

## Descrição
A proposta é desenvolver uma versão simplificada de uma Learning Experience Platform (LXP). O principal objetivo é facilitar a interação de dúvidas e respostas entre professores e estudante. A aplicação permitirá o registro de usários, cursos, perguntas de estudantes e respostas de professores.

#### Status do Projeto: 
Este projeto está em desenvolvimento 🚧 <br>
Caso encontre algum problema ou tenha dúvidas, sinta-se à vontade para me contatar :)

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


------------

## Instalação do projeto
### Instalação com o Docker:
Certifique-se de ter o Docker instalado em sua máquina. <br>

1. Clone o projeto:
```sh
git clone git@github.com:marquesdjuliana/LXP.git
```
2. Acesse o diretório raiz:
```sh
cd LXP/
```
Execute os seguintse comandos para iniciar os contêineres Docker:
3. No diretório raiz execute serviços do Docker (ao iniciar o docker as depências já serão instaladas):
```sh
npm run compose:up
```
3. Com os containers inciados acesse o container app_backend e popule o banco:

Acesse o diretório do backend:
```sh
cd app/backend
```
Execute o comando para acessar o bash:
```sh
docker exec -it app_backend sh
```

No bash execute o comando:
```sh
npm run prestart 
```

3. Acesse a aplicação no seu navegador em http://localhost:3000.









