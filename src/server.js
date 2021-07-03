const express = require('express');//Importa express
const path = require('path');//Para definir caminhos
const route = require('./route');//Importando as rotas

const server = express(); //Inicia o express

server.set('view engine', 'ejs');//Definindo quem vai renderizar a pagina

server.use(express.static('public'));//Usando a pasta public

server.set('views', path.join(__dirname, 'views'));//Definindo o caminho da pasta views

server.use(route);//Usando o arquivo rotas

server.listen(3006, () =>{console.log('Rodando')}) //Determina a porta do servidor