import AWS from 'aws-sdk';
import getConfigPath from './getConfigPath.js';
import fs from 'fs';

let client;

export default function () {
  if (client) {
    return client;
  }

  let buffer;

  try {
    buffer = fs.readFileSync(getConfigPath());
  } catch (e) {
    console.error('Not initilized! Please run:');
    console.error('    sinkhole init');
    process.exit(1);
  }

  const awsConfigs = JSON.parse(fs.readFileSync(getConfigPath(buffer)));

  AWS.config = {
    accessKeyId: awsConfigs.key,
    secretAccessKey: awsConfigs.secret,
    region: awsConfigs.region,
  };

  client = new AWS.Glacier();

  return client;
}
