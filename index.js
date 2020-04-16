let express = require('express')
let app = express()

let students = [
    { 'id': 0, 'psuid':5835512110 ,  'name': 'Akarachai  Pannoi', 'email': 'ballboo@gmail.com' },
    { 'id': 1,'psuid':5835512111, 'name': 'lord voldemort', 'email':'voldemort@outlook.com' }
];

app.get('/', (req,res) => {
    console.log(students)
    res.json(students)
})

app.get('/crash', (req,res) => {
    console.log('Crash')
    res.send('Crash !!!')
    process.exit(1) 
})

app.listen(80, () => console.log('Server is running at', 80))