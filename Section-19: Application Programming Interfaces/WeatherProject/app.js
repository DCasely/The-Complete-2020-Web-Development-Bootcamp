const express = require('express');
const https = require('https');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=miami&appid=be16e69e39182d44b256aa71dd40da36&units=imperial';

  https.get(url, function (response) {
    console.log(response);
  });

  res.send('Server is up and running');
});

app.listen(port, () => {
  console.log(`Listening on Port:${port}`);
});
