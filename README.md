# GYMPOINT


# Iniciando database

  1) O projeto utiliza redis, mongo e postgres como base de dados, foi utilizado os comandos a baixo para iniciar a base de dados.

  * POSTGRES:

    >docker run --name GympointPost -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11 

    >obs: É necessário a criação da database no PostgreSQL, sugiro o nome "gympoin".

  * Redis:

     >docker run --name GympointRedis -p 6379:6379 -d -t redis:alpine    

  * MongoDB:
     >docker run --name GympointMongo -p 27017:27017 -d -t mongo 
    

# Backend

2) Ao realizar o processo de inicialização da base de dados, entrar no arquivo backend e rodar o comando "yarn" que irá baixar todas as dependencias do backend.

3) Em seguida se deve configurar o arquivo .env com as informações relacionadas a base de dados e demais informações solicitadas no arquivo .env.example

    Caso tenha seguido os comandos dockers acima, pode preencher os campos:

      * Database

        DB_HOST=localhost

        DB_USER=postgres

        DB_PASS=docker

        DB_NAME=gympoint

      * Mongo

        MONGO_URL=mongodb://localhost:27017/gympoint

      * Redis

        REDIS_HOST=127.0.0.1

        REDIS_PORT=6379
      
    O APP_SECRET é de sua escolha(segredo)

    Foi utilizado mailtrap.io para o recebimento de emails testes

4) Após passar pelos demais processo o backend está pronto para rodar com o comando:

    >yarn dev

5) Rode os comandos a baixo para migrations de dados ao banco.

    >yarn sequelize db:migrate 

    >yarn sequelize db:seed:all   

    Com isso o backend já irá possuir uma base de dados inicial para testes (Planos iniciais e usuario admin para testes).

    >login: admin@gympoint.com

    >password: 123456

6) Para o funcionamento de envio de emails é preciso ativar o script para a Queue de envio que utiliza o redis.

    >yarn queue

# Frontend

7) Para iniciar a parte web do projeto, entre no arquivo frontend e rode os comandos abaixo:

    >yarn

    >yarn start

    Assim já é possivel acessar http://localhost:3000/ e utilizar o login de admin acima para testar a parte web.

# Mobile

8) Para o funcionamento do mobile o processo é parecido com o web, o mobile foi desenvolvido no Mac, portanto todos os testes foram feitos utilizando o simulador nativo para iOS.

    >yarn

    >yarn ios


#

 Com isso já é possível testar todas as funcionalidades do projeto GYMPOINT

 #

# Agradeço a RocketSeat por essa jornada, e por todo conhecimento passado através do bootcamp e do apoio na comunidade.