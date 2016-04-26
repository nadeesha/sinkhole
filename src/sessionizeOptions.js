import _ from 'lodash';
import session from './session.js';

export default function (options) {
  return new Promise((resolve) => {
    _.forOwn(options, (value, key) => {
      session.set(key, value);
    });

    return resolve(options);
  });
}
