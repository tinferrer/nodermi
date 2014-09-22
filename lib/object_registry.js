// Generated by CoffeeScript 1.8.0
(function() {
  var ObjectRegistry, addHiddenField, weak;

  weak = require('weak');

  addHiddenField = require('./common').addHiddenField;

  ObjectRegistry = (function() {
    function ObjectRegistry() {
      this.objects = {};
      this.sequence = 0;
    }

    ObjectRegistry.prototype.registObject = function(obj) {
      if (obj.__r_id == null) {
        addHiddenField(obj, '__r_id', this.getSequence());
        return this.objects[obj.__r_id] = weak(obj);
      }
    };

    ObjectRegistry.prototype.getSequence = function() {
      var id;
      id = this.sequence.toString(35);
      this.sequence++;
      return id;
    };

    ObjectRegistry.prototype.getObject = function(id) {
      var val;
      val = this.objects[id];
      if (val == null) {
        delete this.objects[id];
      }
      return weak.get(val);
    };

    return ObjectRegistry;

  })();

  module.exports = ObjectRegistry;

}).call(this);