import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const todo = mongoose.model('todo', TodoSchema);

export default todo;