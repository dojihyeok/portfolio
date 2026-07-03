const fs = require('fs');
const html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const kaTexStartIdx = html.indexOf('<!-- KaTeX -->');
const lastFontAwesomeIdx = html.lastIndexOf('<!-- FontAwesome Icons -->');

if (kaTexStartIdx !== -1 && lastFontAwesomeIdx !== -1) {
    const A = html.substring(0, kaTexStartIdx);
    const B = html.substring(lastFontAwesomeIdx + '<!-- FontAwesome Icons -->'.length);
    
    // Construct the correct head part
    const correctKatex = `<!-- KaTeX -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$$$', right: '$$$$', display: true}, {left: '$$$', right: '$$$', display: false}]});"></script>
    <!-- FontAwesome Icons -->`;
    // Wait, let's just write `{left: '$$', right: '$$'}` without using string replace, 
    // so we can just use template literals normally!
    // Since we are not passing this to .replace(), `$` has no special meaning here!
    
    const correctKatexSafe = `<!-- KaTeX -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}]});"></script>
    <!-- FontAwesome Icons -->`;

    let fixedHtml = A + correctKatexSafe + B;
    
    // Also remove the duplicate font-family that was introduced earlier
    const dupFont = `fontFamily: {
                        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    
                        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },`;
    const singleFont = `fontFamily: {
                        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },`;
    fixedHtml = fixedHtml.replace(dupFont, singleFont);
    
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', fixedHtml);
    console.log("Fixed HTML and saved. Original length:", html.length, "New length:", fixedHtml.length);
} else {
    console.log("Could not find markers.");
}
