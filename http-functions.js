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

// function printHTML (html) {
  // console.log(html);
// }

// var requestOptions = {
  // host: 'sytantris.github.io',
  // path: '/http-examples/step4.html'
// };
};
// getHTML(options, callback);