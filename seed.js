require('dotenv').config();
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const Todo = require('./models/todos');
mongoose.connect(process.env.DB_URL);

async function seed(){
    await Todo.create({
        _id: nanoid(),
        title: 'test new',
        completed: false
    });
    console.log('test new added to db')
    await Todo.create({
        _id: nanoid(),
        title: 'wash car',
        completed: false
    });
    console.log('wash car added to db')
    await Todo.create({
        _id: nanoid(),
        title: 'groceries',
        completed: false
    });
    console.log('groceries added to db');

    mongoose.disconnect();
}

seed();