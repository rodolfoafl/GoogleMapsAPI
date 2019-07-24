const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});