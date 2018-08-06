var HTMLRequest = require('./getHTML');

var print_lowercase = function (str){
  return str.toLowerCase();
};

HTMLRequest.getHTML(print_lowercase);
