'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (client) {
    return client;
  }

  var buffer = void 0;

  try {
    buffer = _fs2.default.readFileSync((0, _getConfigPath2.default)());
  } catch (e) {
    console.error('Not initilized! Please run:');
    console.error('    sinkhole init');
    process.exit(1);
  }

  var awsConfigs = JSON.parse(_fs2.default.readFileSync((0, _getConfigPath2.default)(buffer)));

  _awsSdk2.default.config = {
    accessKeyId: awsConfigs.key,
    secretAccessKey: awsConfigs.secret,
    region: awsConfigs.region
  };

  client = new _awsSdk2.default.Glacier();

  return client;
};

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _getConfigPath = require('./getConfigPath.js');

var _getConfigPath2 = _interopRequireDefault(_getConfigPath);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = void 0;