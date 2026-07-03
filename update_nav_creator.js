const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Replace "크리에이터" with "팀 리더 소개"
html = html.replace(/>크리에이터<\/a>/g, '>팀 리더 소개</a>');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Creator nav label updated.');
