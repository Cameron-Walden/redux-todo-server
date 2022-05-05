const mongoose = require('mongoose');
const { Schema } = mongoose;

const todosSchema = new Schema({
    task: {type: String, required: true},
    completed: {type: Boolean, required: true}
});

const Todo = mongoose.model('Todo', todosSchema);

module.exports = Todo;