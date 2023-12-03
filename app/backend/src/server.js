const app = require('./app');

const port = process.env.API_PORT || 3005;


app.listen(port, () => console.log('Listening on port', port));
