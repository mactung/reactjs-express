const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const routers = require('./src/routes');

const PORT = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors);
app.use('', routers);

app.listen(PORT, ()=>{
    console.log(`Server is running on : http://localhost:${PORT}`);
} )