function getAndPrintHTMLChunks () {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log('------- Chunk received ------- \n', data, '\n');
    });
    // response.on('end', function() {
    //   console.log('Response Stream complete');
    // });
  });


}

getAndPrintHTMLChunks ();
