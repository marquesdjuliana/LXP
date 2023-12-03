const express = require('express');
const { userRoute, loginRoute, courseRoute } = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());


app.use(express.json());
app.use('/login', loginRoute);
app.use('/users', userRoute);
app.use('/courses', courseRoute);




module.exports = app;
