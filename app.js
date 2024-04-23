const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const routers = require('./routes/routers');
const config = require('./config/config');
const mongoose = require('mongoose');

const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use(routers);

const connect = async function () {
    try {
        await mongoose.connect(config.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

connect();
app.listen(config.PORT, async (error) => {
    if (!error) {
        console.log("server is running" + config.PORT)

    }
    else
        console.log("Error occured", error);
})



http.createServer(app);