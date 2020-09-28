const express = require('express');
const cookieParser = require('cookie-parser');
const cookiesMiddleware = require('universal-cookie-express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://root:admin@127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
app.use(cookiesMiddleware())
// app.use(cookieParser());
app.use(express.json())
app.use(cors({origin: 'http://127.0.0.1:3000', credentials: true}) )
app.use(routes)

app.listen(3001)