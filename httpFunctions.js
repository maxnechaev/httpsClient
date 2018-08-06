exports.getHTML = function(callback) {
  var https = require('https');
  var fs = require("fs");
  var url = process.argv[2];
  var filePath = "/tmp/storedPage.txt";
  var arrURL = [];
  var buffer = [];
  arrURL.push(url.split('/'));
  arrURL.slice(1, arrURL.length);
  var requestOptions = {
    host: arrURL[0][0],
    path: "/" + arrURL[0].slice(1, arrURL[0].length).join('/')
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      buffer.push(data);
      console.log("The file is stored at", filePath);
    });
    response.on('end', function(){
      fs.writeFile(filePath, buffer.join(''), function(err) {
        if (err) {
          throw err;
        }
      });
    });
  });

};
