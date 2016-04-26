import fs from 'fs';
import path from 'path';

export default function () {
  console.log(fs.readFileSync(path.join(__dirname, '../usage.txt')).toString());
}
