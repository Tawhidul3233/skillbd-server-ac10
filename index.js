const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

const courses = require('./Data/FakeData.json');
const categories = require('./Data/Categories.json')


app.use(cors())


app.get('/', (req, res) => {
     res.send(courses)
})

app.get('/courses/:id', (req, res) => {
     const id = req.params.id
     const courseItems = courses.find(c => c.id === id)
     res.send(courseItems);
})

app.get('/checkout/:id', (req, res) => {
     const id = req.params.id
     const courseItems = courses.find(c => c.id === id)
     res.send(courseItems);
})


app.get('/categories', (req, res) => {
     res.send(categories);
})

app.get('/categories/:id', (req, res) => {
     const id = req.params.id
     const categoryItems = courses.filter(c => c.category === id)
     res.send(categoryItems);
})


app.listen(port, () => {
     console.log(` skillbd ${port}`)
})