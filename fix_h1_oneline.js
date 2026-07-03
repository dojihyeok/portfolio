const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Replace H1 to remove <br>
html = html.replace(
    /좋아하는 일에 온전히<br>몰입하는 즐거움,/,
    '좋아하는 일에 온전히 몰입하는 즐거움,'
);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('H1 <br> removed.');
