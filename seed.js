require('dotenv').config();
const mongoose = require('mongoose');
const Todo = require('./models/todos');
mongoose.connect(process.env.DB_URL);

async function seed(){
    await Todo.create({
        task: 'walk donte',
        completed: false
    });
    console.log('walk donte added to db')
    await Todo.create({
        task: 'wash car',
        completed: false
    });
    console.log('wash car added to db')
    await Todo.create({
        task: 'groceries',
        completed: false
    });
    console.log('groceries added to db');

    mongoose.disconnect();
}

seed();