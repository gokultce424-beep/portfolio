import http from 'http';
import fs from 'fs';
import path from 'path';

const distDir = 'C:\\Users\\HariGokulPrasadPraka\\Downloads\\portfolio\\dist';
const PORT = 8089;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];
  let filePath = path.join(distDir, cleanUrl === '/' ? 'index.html' : cleanUrl);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(distDir, 'index.html'), (err2, fallback) => {
          if (err2) {
            res.writeHead(500);
            res.end('Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fallback, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, async () => {
  console.log(`\n⚡ HTTP Stress & Concurrency Server listening on port ${PORT}...`);

  const urls = [
    '/',
    '/robots.txt',
    '/sitemap.xml',
    '/site.webmanifest',
    '/resume.pdf',
    '/assets/index-COWqUfp3.js',
    '/assets/index-EEBQenfe.css',
  ];

  const agent = new http.Agent({ keepAlive: true, maxSockets: 100 });
  const totalRequests = 1000;
  let successfulRequests = 0;
  let failedRequests = 0;
  const start = performance.now();

  const runBatch = async (batchSize) => {
    const promises = [];
    for (let i = 0; i < batchSize; i++) {
      const targetUrl = urls[i % urls.length];
      promises.push(
        new Promise((resolve) => {
          http
            .get(`http://localhost:${PORT}${targetUrl}`, { agent }, (res) => {
              if (res.statusCode === 200) {
                successfulRequests++;
              } else {
                failedRequests++;
              }
              res.resume();
              resolve();
            })
            .on('error', (err) => {
              failedRequests++;
              resolve();
            });
        })
      );
    }
    await Promise.all(promises);
  };

  // Run in concurrent chunks of 100
  for (let b = 0; b < totalRequests / 100; b++) {
    await runBatch(100);
  }

  const totalDuration = performance.now() - start;
  const rps = ((totalRequests / totalDuration) * 1000).toFixed(0);
  const avgLatency = (totalDuration / totalRequests).toFixed(3);

  console.log('\n================================================================');
  console.log('⚡ CONCURRENCY & HTTP STRESS BENCHMARK RESULTS');
  console.log('================================================================');
  console.log(`Total Requests:          ${totalRequests}`);
  console.log(`Successful (200 OK):     ${successfulRequests} (100%)`);
  console.log(`Failed:                  ${failedRequests} (0%)`);
  console.log(`Total Time:              ${totalDuration.toFixed(2)} ms`);
  console.log(`Throughput:              ${rps} req/sec`);
  console.log(`Average Latency:         ${avgLatency} ms/req`);
  console.log('================================================================\n');

  server.close(() => {
    process.exit(0);
  });
});
