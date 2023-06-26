import  { Router } from "express"
import Task from "../models/Task.js"

const router = Router()

router.get("/", async (req, res) => {
    const tasks = await Task.find().lean() // devuelve una lista de objetos de js en ves de mongo db

    res.render("index", { tasks : tasks }) // mostramos el objeto que se llama tareas y listamos el array de tareas de la DB
})

router.post('/tasks/add', async (req, res) => {
    try{
        const task = Task(req.body)
        await task.save()

        res.redirect('/') // con esto redireccionamos a la pagina principal
    } catch (error) {
        console.log(error)
    }
})

router.get("/about", (req, res) => {
    res.render("about")
})

router.get("/edit", (req, res) => {
    res.render("edit")
})


export default router 