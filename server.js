const express = require('express');

//creating the app server
const app = express();

//defines where the traffic requests are
const{ router }= require('./routes/todoRoutes')
//enable sending json on the body of the request
app.use(express.json());



app.use('/', router)

app.use('*', (req, res) =>{
  res.status(404).json({
    success :false,
    message:'Not Found'
  })})


// Start the server
const port=4000;
 app.listen(port,()=>console.log(`server  running on port${port}`))



















 // const express=require("express");
// const todotasks=require('./data')
// const bodyParser = require('body-parser');
// const app=express();
// app.use(bodyParser.json())

// console.log(todotasks)



// app.use(express.json())
// app.get('/',(req, res) =>{
//     res.send('welcome to do list')
// })

// //list all todos
// app.get('/todos',(req, res)=>{
// res.json({
//     success:'ok',
//     message:'fetched todo succesfully',
//     results:todotasks
// })

// })
// //post a todo
// app.post('/todos',(req, res)=>{
//     todotasks.push(req.body)
// console.log(todotasks)
// res. status(201).json({
//     success:'true',
//     message:'added todo succesfully',
//     results:req.body 
// })
// })

// app.use('*', (req, res)=>{
//     res. status(404).json({
//         success:false,
//         message:"Not found"
//     })
// })

// // PUT(update) a todo
// app.put('/todos/:id', (req, res) => {
//   const id = req.params.id;
//   const todo = todotasks.find(todo => todo.id === parseInt(id));
//   if (todo) {
//     todo.task = req.body.task;
//     todo.completed = req.body.completed;
//     res.json(todotasks);
//   } else {
//     res.status(404).json({ error: 'Todo not found' });
//   }
// });





// const port=4000;
// app.listen(port,()=>console.log(`server  running on port${port}`))