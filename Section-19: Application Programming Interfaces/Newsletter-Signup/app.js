const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const listID = '05ce315274';
  const url = `https://us10.api.mailchimp.com/3.0/lists/${listID}`;
  const options = {
    method: 'POST',
    auth: 'apikey:60317ec7c80152ae335da4fb5a658935-us10',
  };

  const request = https.request(url, options, (response) => {
    response.on('data', (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// MAIL CHIP API KEY
// 60317ec7c80152ae335da4fb5a658935-us10

// LIST ID
// 05ce315274
