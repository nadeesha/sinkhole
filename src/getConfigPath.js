import path from 'path';

export default function () {
  return path.join(process.env.HOME || process.env.USERPROFILE, '.sinkhole', 'aws_config.json');
}
