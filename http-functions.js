https = require('https');

module.exports = function getHTML (options, callback) {

  var dataReceived = '';


  https.get(options, function (response) {

    response.on('data', function(data) {
      dataReceived += data;
    });
  
    response.on('end', function() {
      callback(dataReceived);

    });
  });
};