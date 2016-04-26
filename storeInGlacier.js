import _ from 'lodash';
import defaultGlacierParams from './lib/defaultGlacierParams.js';
import fs from 'fs';
import glacier from './lib/glacier.js';
import path from 'path';
import session from './lib/session.js';
import treehash from 'treehash';

export default function () {
  return new Promise((resolve, reject) => {
    const filepath = session.get('filepath');

    const buffer = fs.readFileSync(path.join(filepath));
    const checksum = treehash.getTreeHashFromBuffer(buffer);

    const params = _.assign(defaultGlacierParams, {
      archiveDescription: session.description,
      body: buffer,
      checksum,
    });

    glacier.uploadArchive(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve({
        glacierResponse: data,
      });
    });
  });
}
