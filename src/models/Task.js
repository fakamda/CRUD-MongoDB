import { Schema, model } from "mongoose"

const taskSchema = new Schema({
    title : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true, // timestamps en true me permite crear una propiedad createdAt y updatedAt
    versionKey: false // con esto hacemos que no nos muestre el __v: 0
    
})

export default model('Task', taskSchema)