// Generated by CoffeeScript 1.6.2
(function() {
  var path;

  path = require("path");

  module.exports = {
    Client: require("./client"),
    Server: require("./server"),
    utils: require("./utils"),
    path: path.normalize(__dirname + "/../bin/eyebrowse")
  };

}).call(this);
