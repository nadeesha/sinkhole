import _ from 'lodash';
import session from './session.js';

export default function (options) {
  return new Promise((resolve, reject) => {
    _.forOwn(options, (value, key) => {
      if (!value) {
        reject(`Error: ${key} is not defined`);
      }

      session.set(key, value);
    });

    return resolve(options);
  });
}
