// Generated by CoffeeScript 1.6.2
(function() {
  var async, exec, fs, path, platform;

  fs = require("fs");

  async = require("async");

  path = require("path");

  exec = require("child_process").exec;

  platform = require("os").platform();

  exports.fixPath = function(path) {
    return path.replace(/^\./, process.cwd()).replace(/^~/, process.env.HOME || process.env.HOMEPATH);
  };

  exports.readdir = function(dir) {
    return fs.readdirSync(dir).filter(function(name) {
      return name !== ".DS_Store";
    }).map(function(name) {
      return path.join(dir, name);
    });
  };

  exports.killProcesses = function(processNames, callback) {
    return async.forEach(processNames, (function(name, next) {
      var command;

      if (/^win/.test(platform)) {
        command = "taskkill /F /IM " + name;
      } else {
        command = "killall \"" + name + "\" QUIT -9";
      }
      exports.logger.log(command);
      return exec(command, function() {
        return setTimeout(callback, 1000);
      });
    }), callback);
  };

  if (!process.env.APUPPET_LOG) {
    exports.logger = {
      warn: function() {},
      error: function() {},
      log: function() {}
    };
  } else {
    exports.logger = console;
  }

}).call(this);
