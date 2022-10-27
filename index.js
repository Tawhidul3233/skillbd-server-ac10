const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000 

const courses = require('./Data/FakeData.json')

app.use(cors())


app.get('/', (req , res)=>{
     res.send(courses)
})


app.get('/courses/:id', (req, res)=>{
     const id = req.params.id
     const course = courses.find(c => c.id === id)
     res.send(course)
});

app.get('/cetagories/:id', (req, res)=> {
     const id = req.params.id
     const category = courses.filter(c => c.category_id === id)
     res.send(category)
})


app.listen(port, () => {
     console.log(` skillbd ${port}`)
   })