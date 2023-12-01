const express = require('express');
const { userRoute, loginRoute, courseRoute } = require('./routes');

const app = express();



app.use(express.json());
app.use('/login', loginRoute);
app.use('/users', userRoute);
app.use('/courses', courseRoute);




module.exports = app;
