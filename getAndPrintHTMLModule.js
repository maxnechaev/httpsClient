function getAndPrintHTML () {
  var https = require('https');
  var url = process.argv[2];
  var arr = [];

  arr.push(url.split('/'));
  arr.slice(1, arr.length);

  var requestOptions = {
    host: arr[0][0],
    path: "/" + arr[0].slice(1, arr[0].length).join('/')
  };

console.log(arr);
console.log(requestOptions);
  var arr2 = [];
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      for (var i = 0; i < data.length; i++) {
        arr2.push(arr2[i]);
      }
      console.log(data);
    });
  });
}

getAndPrintHTML ();
