import fs from 'fs';
import getConfigPath from './getConfigPath.js';
import path from 'path';
import prompt from 'prompt';

export default function () {
  return new Promise((resolve, reject) => {
    prompt.get(['key', 'secret', 'region'], (err, configs) => {
      if (err) {
        return reject(err);
      }

      try {
        fs.mkdirSync(path.join(process.env.HOME || process.env.USERPROFILE, '.sinkhole'));
      } catch (e) {
        if (e.code === 'EEXIST') {
          console.info('Detected an already existing ~/.sinkhole');
        }
      }

      const configFileContent = JSON.stringify(configs);

      fs.writeFileSync(getConfigPath(), configFileContent);

      return resolve(`Configuration created ${JSON.stringify(configs)}`);
    });
  });
}
