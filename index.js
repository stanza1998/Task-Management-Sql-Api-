// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const taskRoute = require('./routes/tasks');

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello from Render!');
});
// Ensure this path starts with a leading slash
app.use('/tasks', taskRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
