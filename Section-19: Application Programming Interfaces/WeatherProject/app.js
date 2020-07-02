const express = require('express');
const https = require('https');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=miami&appid=be16e69e39182d44b256aa71dd40da36&units=imperial';

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write(
        `<h1>The temperature in Miami is ${temp} degrees Fahrenheit</h1>`
      );
      res.write(`<h2>The weather is currently ${description}</h2>`);
      res.write(`<img src="${imageURL}" alt="weather icon">`);
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on Port:${port}`);
});
