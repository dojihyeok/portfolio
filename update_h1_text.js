const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldText = "일하는 즐거움을 아는 사람들이 자신의 관심 분야에 온전히 몰입하며<br class=\"hidden sm:block\"> 살아갈 수 있는 세상을 만듭니다.";
const newText = "일하는 즐거움을 아는 사람들이 자신의 관심 분야에<br class=\"hidden sm:block\"> 온전히 몰입하며 일하는 세상을 만듭니다.";

html = html.replace(oldText, newText);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated H1 text.");
