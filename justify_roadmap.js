const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Replace explicit text-left with text-justify in roadmap main paragraphs
html = html.replace(/<p class="text-gray-300 text-\[15px\] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white\/5 text-left">/g, 
'<p class="text-gray-300 text-[15px] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white/5 text-justify">');

html = html.replace(/<p class="text-gray-400 text-\[15px\] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white\/5 text-left">/g, 
'<p class="text-gray-400 text-[15px] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white/5 text-justify">');

// 2. Add text-justify to roadmap bullet points
html = html.replace(/<p class="text-gray-400 text-sm break-keep leading-relaxed">/g, 
'<p class="text-gray-400 text-sm break-keep leading-relaxed text-justify">');

html = html.replace(/<p class="text-gray-500 text-sm break-keep leading-relaxed">/g, 
'<p class="text-gray-500 text-sm break-keep leading-relaxed text-justify">');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Text justified in Roadmap section.');
