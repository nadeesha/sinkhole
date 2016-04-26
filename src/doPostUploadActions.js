import session from './session.js';
import trash from 'trash';

export default function () {
  return new Promise((resolve, reject) => {
    const filepath = session.get('filepath');

    if (session.get('deleteAfter').toLowerCase().trim() === 'y') {
      return trash([filepath])
        .then(resolve)
        .catch(reject);
    }

    return resolve();
  });
}
