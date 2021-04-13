const express = require("express")
const server = express()
const routes = require("./routes")

//ejs template engine
server.set('view engine', 'ejs')

// habilitar arquivos statics
server.use(express.static("public"))

// usando req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))