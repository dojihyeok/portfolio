const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Remove text-center from the hero container
html = html.replace(/<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">/, 
'<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">');

// Remove text-center from H1
html = html.replace(/<h1 class="text-\[28px\] sm:text-4xl lg:text-\[52px\] leading-\[1.4\] font-extrabold tracking-tight sm:leading-\[1.4\] mb-8 break-keep max-w-5xl mx-auto w-full text-white text-center">/, 
'<h1 class="text-[28px] sm:text-4xl lg:text-[52px] leading-[1.4] font-extrabold tracking-tight sm:leading-[1.4] mb-8 break-keep max-w-5xl mx-auto w-full text-white text-left">');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Hero section left aligned.');
