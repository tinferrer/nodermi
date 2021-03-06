(function() {
  var fs = require('fs');

  var FileLogger = (function() {
    function FileLogger(options) {
      var host, port;
      host = options.host, port = options.port, this.debug = options.debug;
      this.fileName = "nodermi_" + host + "_" + port + ".log";
      if (!this.debug) {
        this.enabled = false;
        this.log = function() {};
      } else {
        this.enabled = true;
      }
    }

    FileLogger.prototype.log = function(message) {
      var str;
      str = (new Date()).toString() + " : " + message + "\n";
      return fs.appendFile(this.fileName, str, function(err) {
        if (err) {
          console.log("nodermi logging error");
          console.log(err);
          return console.log(err.stack);
        }
      });
    };

    return FileLogger;

  })();

  module.exports = FileLogger;

}).call(this);
