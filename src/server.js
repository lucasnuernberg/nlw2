// dados
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageSucess
} = require('./pages')


// configurar nunjucks,
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// início e configuração do servidor

server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scrips, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.get("/sucess-page", pageSucess)

.listen(5500)
