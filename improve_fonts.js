const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Replace all font-light with font-normal to make text thicker and more legible
html = html.replace(/font-light/g, 'font-normal');

// 2. Replace all text-gray-400 with text-gray-300 to make text brighter
html = html.replace(/text-gray-400/g, 'text-gray-300');

// 3. Make sure any extremely thin fonts are removed if any (like font-thin)
html = html.replace(/font-thin/g, 'font-normal');

// 4. Boost text-gray-500 to text-gray-400 if it exists
html = html.replace(/text-gray-500/g, 'text-gray-400');

// 5. In the 3 cards specifically, let's make sure the text is bright enough. 
// They are currently text-gray-300 (after the above replace), which is #d1d5db.
// That should be plenty bright. Let's make sure there are no other illegible text classes.
// The editorial-text class has text-gray-300 already (some had text-gray-400, now 300).

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Fonts improved globally: changed font-light to font-normal and text-gray-400 to text-gray-300');
