const express = require('express')
const app = express()

const users = [];

app.listen(3000, () => {
    console.log('server running')
})



app.get('/', (req, res) => {
    return res.json([
        'Get OK'
    ])
})

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

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});
