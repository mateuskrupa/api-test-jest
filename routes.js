const express = require('express')
const app = express()

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: '123456' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', password: '654321' },
  ];

app.listen(3000, () => {
    console.log('server running')
})



app.get('/', (req, res) => {
    return res.json([
        'Get OK'
    ])
})

app.get('/api/users', (req, res) => {
    res.status(200).json(users);
  });

app.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
  
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  });

app.post('/', (req, res) => {
    return res.json([
        'Post OK'
    ])
})

app.put('/', (req, res) => {
    return res.json([
        'Put OK'
    ])
})

app.delete('/', (req, res) => {
    return res.json([
        'Delete OK'
    ])
})




