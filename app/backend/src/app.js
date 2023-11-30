const express = require('express');
const { userRoute } = require('./routes');

const app = express();

// app.get('/', (_request, response) => {
//   response.send();
// });


app.use(express.json());
app.use('/users', userRoute);


module.exports = app;
