function getAndPrintHTML () {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var arr = [];
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      for (var i = 0; i < data.length; i++) {
        arr.push(arr[i]);
      }
      console.log(data);
    });
  });
}

getAndPrintHTML ();
