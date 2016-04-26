import AWS from 'aws-sdk';
import getConfigPath from './getConfigPath.js';
import fs from 'fs';

const awsConfigs = JSON.parse(fs.readFileSync(getConfigPath()));

AWS.config = {
  accessKeyId: awsConfigs.key,
  secretAccessKey: awsConfigs.secret,
  region: awsConfigs.region,
};

const glacier = new AWS.Glacier();

export default glacier;
