const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// SIMPLE CALCULATOR
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const num1 = Number(req.body.n1);
  const num2 = Number(req.body.n2);
  const result = num1 + num2;
  res.send(`The result of the calculation is ${result}`);
});

// BMI CALCULATOR
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', (req, res) => {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
  const weightKgs = weight * 0.45359237;
  const heightMeters = height * 0.0254;
  const BMI = (weightKgs / Math.pow(heightMeters, 2)).toFixed(2);

  res.send(`Your BMI: ${BMI}`);
});

app.listen(port, () => console.log(`App listening on port:${port}`));
