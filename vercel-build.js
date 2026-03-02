const { execSync } = require('child_process');
console.log('?? Running Strapi build for Vercel...');
execSync('npm run build', { stdio: 'inherit' });
console.log('? Build complete');
