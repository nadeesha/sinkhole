"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _session = {};

exports.default = {
  get: function get(key) {
    return _session[key];
  },
  set: function set(key, data) {
    _session[key] = data;
    return key;
  }
};