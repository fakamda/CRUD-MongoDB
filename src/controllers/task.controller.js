import Task from "../models/Task.js"

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean() // devuelve una lista de objetos de js en ves de mongo db

    res.render("index", { tasks : tasks }) // mostramos el objeto que se llama tareas y listamos el array de tareas de la DB
}

export const createTask = async (req, res) => {
    try{
        const task = Task(req.body)
        await task.save()

        res.redirect('/') // con esto redireccionamos a la pagina principal
    } catch (error) {
        console.log(error)
    }
}

export const editTask = async (req, res) => {
        try{
            const task = await Task.findById(req.params.id).lean()
    
            res.render("edit", { task })
        } catch (error) {
            console.log(error.message)
        }
    }

export const updateTask = async (req, res) => {
    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)

    res.redirect('/')
}

export const deleteTask = async (req, res) => {
    const { id } = req.params
    await Task.findByIdAndDelete(id)

    res.redirect('/')
}

export const taskToggleDone = async (req, res) => {
    const { id } = req.params 
    const task = await Task.findById(id)
    task.done = !task.done
    await task.save()

    res.redirect("/")
}