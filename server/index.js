const express = require('express');
const app = express();
const connectDB = require('./src/configs/connectDB');

const config = require('./src/configs/config');

const route = require('./routes');

const cors = require('cors');
app.use(cors());


const morgan = require('morgan');
const bodyParse = require('body-parser');

app.use(morgan('combined'));
app.use(bodyParse.json());

// Test db
connectDB();

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

app.use(express.json());

route(app);

app.use((req, res, next) => {
    const error = {
        error: 404,
        message: 'not_found',
        status: 400,
        data: null
    }
    next(error);
});

app.use((err, req, res, next) => {
   return res.json({
       error: err.error,
       message: err.message,
       status: 400,
       data: null
   });
});

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});