import prompt from 'prompt';
import session from './session.js';

export default function () {
  return new Promise((resolve, reject) => {
    prompt.get([{
      name: 'deleteAfter',
      description: 'Move to trash after uploading? (y)',
      default: 'y',
    }, {
      name: 'description',
      description: `Archive description? (${session.get('filepath')})`,
      default: session.get('filepath'),
    }], (err, results) => {
      if (err) {
        return reject(err);
      }

      session.set('deleteAfter', results.deleteAfter);
      session.set('description', results.archiveDescription);

      return resolve();
    });
  });
}
