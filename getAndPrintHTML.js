var https = require('https');

function getAndPrintHTML () {
  var dataReceived = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    response.on('data', function(data) {
      dataReceived += data;
    });

    response.on('end', function() {
      console.log(dataReceived);
    });
  });

}
getAndPrintHTML();