var HTMLRequest = require('./getHTML');

var print_uppercase = function (str){
  return str.toUpperCase();
};

HTMLRequest.getHTML(print_uppercase);
