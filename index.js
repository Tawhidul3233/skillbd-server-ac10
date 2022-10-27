const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000 

const courses = require('./Data/FakeData.json')

app.use(cors())


app.get('/', (req , res)=>{
     res.send(courses)
})




app.listen(port, () => {
     console.log(` skillbd ${port}`)
   })