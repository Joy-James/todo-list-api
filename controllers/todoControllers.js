const todos=require('../data')

//exporting and defining route handlers/controllers
module.exports={
    home:(req, res)=>{
        res.send('welcome to todo')
    },
    getAllTodos: (req, res) => {
  
        res.json({
          success:'ok',
               message:'fetched all todos succesfully',
              results:todos
        });
      },
      getSingleTodo: (req, res) => {
        const id = req.params.id;
        const todo = todos.find(todo => todo.id === parseInt(id));
        if (todo) {
          res.status(201).json({
            message:'fetched  single todo  succesfully',
           results:todo
          });
        } else {
          res.status(404).json({ error: 'Todo not found' });
        }
      },

      postNewTodo: (req, res) => {
        const todo = req.body;
        todo.id = todos.length + 1;
        todos.push(todo);
        console.log(todos)
        res.status(201).json({
          message:'added a new Todo succesfully',
                  results:users
        });
      },

      updateTodo:(req, res) => {
        const id = req.params.id;
        const todo = todos.find(todo => todo.id === parseInt(id));
        if (todo) {
          todo.title = req.body.title;
          todo.completed = req.body.completed;
          res.json(todo);
        } else {
          res.status(404).json({ error: 'Todo not found' });
        }
      }, 
      deleteTodo:(req, res) => {
        const id = req.params.id;
        const index = todos.findIndex(todo => todo.id === parseInt(id));
        if (index !== -1) {
          const deletedTodo = todos.splice(index, 1);
          res.json(deletedTodo[0]);
        } else {
          res.status(404).json({ error: 'Todo not found' });
        }
      }
    
}