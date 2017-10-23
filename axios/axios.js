const axios = require('axios');
const express = require("express");
const app = express();
axios.get('http://www.montres.kib-shop.com/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});