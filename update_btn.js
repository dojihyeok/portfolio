const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Use global regular expression to replace all occurrences
html = html.replace(/T-Rive 지원하기/g, "T-Rive Team 합류하기");

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated all instances of T-Rive 지원하기.");
