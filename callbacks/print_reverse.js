var HTMLRequest = require('./getHTML');

var print_reverse = function (str){
  return str.split('').reverse().join('');
};

HTMLRequest.getHTML(print_reverse);
