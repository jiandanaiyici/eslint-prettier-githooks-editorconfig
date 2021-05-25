import path from 'path';
import { fileURLToPath } from 'url';
import editorconfig from 'editorconfig';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'package.json');

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${process.cwd()}`);
console.log(`__dirname: ${__dirname}`);
console.log(__dirname === process.cwd());

(async () => {
  const data = await editorconfig.parse(filePath);
  console.log(data);
})();
