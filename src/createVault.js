import defaultGlacierParams from './defaultGlacierParams.js';
import glacier from './glacier.js';

export default function () {
  return new Promise((resolve, reject) => {
    const params = defaultGlacierParams;
    
    console.log('Creating vault: ', params.vaultName);

    glacier().createVault(params, (err, data) => {
      if (err) {
        return reject(err);
      }
      
      return resolve(data);
    });
  });
}
