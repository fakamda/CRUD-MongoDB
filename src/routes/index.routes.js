import  { Router } from "express"
import {renderTasks, createTask, editTask, updateTask, deleteTask, taskToggleDone} from '../controllers/task.controller.js'

const router = Router()

//GET
router.get("/", renderTasks)
//POST
router.post('/tasks/add', createTask)
//EDIT 
router.get("/tasks/:id/edit", editTask)

router.post('/tasks/:id/edit', updateTask)
//DELETE 
router.get('/tasks/:id/delete', deleteTask)
//GET DONE 
router.get('/tasks/:id/toggleDone', taskToggleDone)


export default router 