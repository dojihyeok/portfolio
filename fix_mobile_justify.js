const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Fix Intro paragraphs (change text-center to text-justify, and remove break-keep so it can stretch fully)
html = html.replace(/<p class="text-gray-300 leading-relaxed font-light break-keep text-\[16px\] sm:text-lg mb-6 max-w-4xl mx-auto text-center">/g,
'<p class="text-gray-300 leading-relaxed font-light text-[16px] sm:text-lg mb-6 max-w-4xl mx-auto text-justify">');

html = html.replace(/<p class="text-\[#D4C3A3\] font-bold break-keep text-\[16px\] sm:text-lg max-w-4xl mx-auto text-center">/g,
'<p class="text-[#D4C3A3] font-bold text-[16px] sm:text-lg max-w-4xl mx-auto text-justify">');


// 2. Remove break-keep from all paragraphs that have text-justify to ensure mobile fills the width.
// We'll just replace 'break-keep ' with '' for all text-justify paragraphs
const justifyParagraphs = html.match(/<p[^>]*text-justify[^>]*>/g);
if (justifyParagraphs) {
    justifyParagraphs.forEach(p => {
        const newP = p.replace('break-keep ', '');
        html = html.replace(p, newP);
    });
}

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Mobile text-justify fully applied without break-keep.');
