const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

html = html.replace(/style="line-height: 1.8;"/g, 'style="line-height: 1.0;"');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
