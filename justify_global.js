const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Target Cards
html = html.replace(/<p class="text-gray-400 text-\[15px\] font-light leading-relaxed break-keep">/g, 
'<p class="text-gray-400 text-[15px] font-light leading-relaxed break-keep text-justify">');

// 2. Team Culture Cards
html = html.replace(/<p class="text-gray-400 text-sm font-light break-keep">/g, 
'<p class="text-gray-400 text-sm font-light break-keep text-justify">');

// 3. Apply Portal Intro Paragraph (if not already justified)
html = html.replace(/<p class="text-gray-300 font-light mt-6 text-lg leading-relaxed break-keep">/g,
'<p class="text-gray-300 font-light mt-6 text-lg leading-relaxed break-keep text-justify">');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Text justified globally.');
