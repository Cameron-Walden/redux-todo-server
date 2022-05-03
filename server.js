const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser')
const { nanoid } = require('nanoid')

const app = express();

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json())

const todos = [
	{
		id: nanoid(),
		title: 'walk donte',
		completed: false,
	},
	{
		id: nanoid(),
		title: 'clean car',
		completed: true,
	},
	{
		id: nanoid(),
		title: 'vaccum',
		completed: false,
	},
	{
		id: nanoid(),
		title: 'do dishes',
		completed: true,
	},
	{
		id: nanoid(),
		title: 'windex',
		completed: false,
	},
];

app.get('/todos', (req, res) => res.send(todos))

app.listen(PORT, () => console.log(`listening on ${PORT}`))