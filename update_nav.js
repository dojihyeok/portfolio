const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Replace nav items
html = html.replace(/>홈<\/a>/g, '>T-Rive 팀소개</a>');
html = html.replace(/>철학<\/a>/g, '>미션</a>');

// Replace button text
html = html.replace(/T-Rive 철학 보기/g, 'T-Rive 미션 보기');

// Optional: Change "Our Philosophy" to "Our Mission" if that's what they mean
html = html.replace(/Our Philosophy/g, 'Our Mission');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Nav labels updated.');
