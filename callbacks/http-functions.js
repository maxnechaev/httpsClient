var HTMLRequest = require('./getHTML');

var print_lowercase = function (str){
  return str.toLowerCase();
};
var print_uppercase = function (str){
  return str.toUpperCase();
};
var print_reverse = function (str){
  return str.split('').reverse().join('');
};

HTMLRequest.getHTML(print_lowercase);
HTMLRequest.getHTML(print_uppercase);
HTMLRequest.getHTML(print_reverse);
