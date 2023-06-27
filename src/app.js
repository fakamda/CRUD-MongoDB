import express from 'express'
import handlebars from 'express-handlebars'
import indexRouter from './routes/index.routes.js'
import morgan from 'morgan'

const app = express()

app.use(express.json())

app.set('views', './src/views') // esto seria el layouts dir
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

//middlewares 

app.use(morgan('dev')) // te dice la respuesta del servidor
app.use(express.urlencoded({ extended: false }))

// ROUTES

app.use(indexRouter)
// STATIC FILES

app.use(express.static('./src/public'))

export default app
