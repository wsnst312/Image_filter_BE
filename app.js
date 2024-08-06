const express = require('express');
const path = require('path');
require('dotenv').config();
require('./models')
const PORT = process.env.PORT || 8080;
const indexRouter = require('./routes');
const {handleMulterErrors} = require("./middlewares/upload");
const app = express();
const cors = require('cors');

app.use(cors())
app.use('/upload', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded());


app.use('/api', indexRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})