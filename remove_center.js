const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Hero Subheadline
html = html.replace(/text-left sm:text-center/g, 'text-left');

// Intro Block
html = html.replace(/<div class="p-8 sm:p-12 rounded-3xl bg-\[#121314\] border border-white\/5 text-center relative overflow-hidden">/, 
'<div class="p-8 sm:p-12 rounded-3xl bg-[#121314] border border-white/5 text-left relative overflow-hidden">');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Center alignment removed from paragraphs.');
