import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

fs.writeFileSync(path.join(distPath, 'package.json'), JSON.stringify({ type: 'commonjs' }, null, 2));
console.log('Created dist/package.json with type: commonjs');
