const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldH1 = `<h1 class="text-[28px] leading-[1.4] sm:text-5xl lg:text-[56px] font-extrabold tracking-tight sm:leading-[1.3] mb-8 break-keep">`;
const newH1 = `<h1 class="text-[28px] leading-[1.5] sm:text-5xl lg:text-[56px] font-extrabold tracking-tight sm:leading-[1.5] mb-8 break-keep">`;

const oldP = `<p class="text-[16px] sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium break-keep">`;
const newP = `<p class="text-[16px] sm:text-xl text-gray-300 w-full sm:whitespace-nowrap mx-auto leading-relaxed mb-12 font-medium break-keep">`;

html = html.replace(oldH1, newH1);
html = html.replace(oldP, newP);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated spacing and single line.");
