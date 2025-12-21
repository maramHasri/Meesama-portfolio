import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 10000;
const distPath = join(__dirname, 'build');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm',
  '.ico': 'image/x-icon'
};

const server = createServer((req, res) => {
  // Remove query string and normalize path
  const urlPath = req.url.split('?')[0];
  let filePath = join(distPath, urlPath === '/' ? 'index.html' : urlPath);
  
  // Check if file exists
  if (!existsSync(filePath)) {
    // For SPA routing - if file doesn't exist and has no extension, serve index.html
    if (!extname(urlPath)) {
      filePath = join(distPath, 'index.html');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('404 Not Found');
      return;
    }
  }

  // Double check file exists after SPA routing fallback
  if (!existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404 Not Found');
    return;
  }

  const ext = extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  try {
    const content = readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    console.error('Error serving file:', error);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('500 Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

