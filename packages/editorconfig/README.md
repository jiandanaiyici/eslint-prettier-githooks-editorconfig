# 获取当前编辑配置

```bash
npm init -y
npm install editorconfig nodemon -D
```

`index.js`

```javascript
import path from 'path';
import { fileURLToPath } from 'url';
import editorconfig from 'editorconfig';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'package.json');

(async () => {
  const data = await editorconfig.parse(filePath);
  console.log(data);
})();
```
