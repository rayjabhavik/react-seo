const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const AppServer = require('../src/components/Home').default;
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<AppServer />);
// console.log(__dirname);
const filePath = path.resolve(__dirname, "index.html");

// here filepath error we wiil rnd tomorroe
  // read in the index.html file
  fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
          return console.log(err);
      }

      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, "Home page");
      data = data.replace(/\$OG_DESCRIPTION/g, "home page redirect to main page");
      data = data.replace('<div id="root"></div>',content)
      let result = data.replace(
          /\$OG_IMAGE/g,
          "https://fastly.picsum.photos/id/466/300/200.jpg?hmac=ynZ9L9zmxdc_vQ-UM_FDRX4tUF-5Ogg8apdMbX1_8sU"
      );
      
      response.send(result);
  });



});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});