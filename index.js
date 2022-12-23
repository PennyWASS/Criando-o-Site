const express = require('express'); // importando a biblioteca 'express'

const server = express(); // importando a biblioteca 'server'

const path = require('path');

server.use(express.static("public"))

server.get('/home', ()=>{
    console.log('Você está tentando acessar a página home...')
})

server.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname+'/paginas/index.html'))
})

server.get('/login', ()=>{
    console.log('Você está tentando acessar a página de login.')
})

server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'/paginas/perfil.html'))
})

server.get('/tarefas', (req, res)=>{
    res.sendFile(path.join(__dirname+'/paginas/tarefas.html'))
})

server.get('/inscricao', (req, res)=>{
    res.sendFile(path.join(__dirname+'/paginas/inscricao.html'))
})

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'/paginas/login.html'))
})

server.listen(3000)