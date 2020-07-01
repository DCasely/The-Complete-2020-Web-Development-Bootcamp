const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: davin@davincasely.com');
});

app.get('/about', (req, res) => {
  res.send('I am Davin Casely.');
});

app.get('/hobbies', (req, res) => {
  res.send('Hobbies');
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
