const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const { Schema } = mongoose;

const todosSchema = new Schema({
    _id: { type: String, required: false, default: () => nanoid() },
    title: {type: String, required: true},
    completed: {type: Boolean, required: true}
});

const Todo = mongoose.model('Todo', todosSchema);

module.exports = Todo;