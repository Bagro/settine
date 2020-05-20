const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3300;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {res.send('Hello');});

app.listen(port, () => console.log("Server started listening on port " + port));