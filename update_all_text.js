const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Global replace of break-keep to break-all sm:break-keep
// Wait, I should just replace 'break-keep' with 'break-all sm:break-keep text-justify sm:text-left' where appropriate, but it might mess up centered text.
// Let's just replace 'break-keep' with 'break-all sm:break-keep'
html = html.replace(/\bbreak-keep\b/g, 'break-all sm:break-keep');

// Except for the hero text which is already centered. 
// text-justify on mobile for paragraph text looks really "꽉차게" (filled side-to-side).
html = html.replace(/<p class="text-gray-400([^>]*)break-all sm:break-keep/g, '<p class="text-gray-400$1break-all sm:break-keep text-justify sm:text-left');
html = html.replace(/<p class="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light break-all sm:break-keep/g, '<p class="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light break-all sm:break-keep text-justify sm:text-center');
html = html.replace(/<p class="text-gray-400 font-light text-lg break-all sm:break-keep/g, '<p class="text-gray-400 font-light text-lg break-all sm:break-keep text-justify sm:text-center');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated text formatting.");
