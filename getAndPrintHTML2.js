var https = require('https');

function getAndPrintHTML (options) {
  var dataReceived = '';


  https.get(options, function (response) {

    response.on('data', function(data) {
      dataReceived += data;
    });

    response.on('end', function() {
      console.log(dataReceived);
    });
  });

}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);