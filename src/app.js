import express from 'express'
import handlebars from 'express-handlebars'
import indexRouter from './routes/index.routes.js'
import path from 'path'

const app = express()

app.set('views', './src/views')
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(indexRouter)

export default app
