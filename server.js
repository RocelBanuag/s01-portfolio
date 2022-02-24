const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log(`Server is running https://gaffud-simple-express-api.herokuapp.com/result ${port}`)
})