const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let userInputs = [];

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/save', (req, res) => {
    const { text } = req.body;
    userInputs.push(text);
    res.json(userInputs);
});

app.get('/data', (req, res) => {
    res.json(userInputs);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});