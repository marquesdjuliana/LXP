const express = require('express');
const { userRoute, loginRoute } = require('./routes');

const app = express();



app.use(express.json());
app.use('/users', userRoute);
app.use('/login', loginRoute);



module.exports = app;
