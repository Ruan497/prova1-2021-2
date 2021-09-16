const express = require('express')
const app = express()
const subRouter = require('../src/route/subject.route')

app.use(express.json())

app.get('/', (req, res) =>{
    res.send('working')
})

app.use('/subject', subRouter)

const port = 8087
app.listen(port, () =>{
    console.log(`started on port ${port}`)
})




