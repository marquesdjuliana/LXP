const express = require('express');

const app = express();
const PORT = process.env.API_PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
