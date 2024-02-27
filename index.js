const express = require('express')
const app = express()

const users = [
    {
        num : '01',
        name : 'faiz',
        ins : 'saylani',
    }
]
app.use(express.json())
const port = 5000
app.listen(port, ()=>{
    console.log('Server is running');
})

app.get('/',(req,res)=>{
    res.send(users)
    // res.send('hello faiz')
})

app.post('/', (req,res)=>{
    console.log('data is coming', req.body);
    users.push(req.body)
})

