'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _getConfigPath = require('./getConfigPath.js');

var _getConfigPath2 = _interopRequireDefault(_getConfigPath);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var awsConfigs = JSON.parse(_fs2.default.readFileSync((0, _getConfigPath2.default)()));

_awsSdk2.default.config = {
  accessKeyId: awsConfigs.key,
  secretAccessKey: awsConfigs.secret,
  region: awsConfigs.region
};

var glacier = new _awsSdk2.default.Glacier();

exports.default = glacier;