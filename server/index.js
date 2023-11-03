const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('hi');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const router = require('./routes');
app.use('/user', router);

app.listen(port, () => {
    console.log(`Server Open: ${port}`);
});