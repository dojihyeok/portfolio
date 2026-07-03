const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldH1 = `좋아하는 일에<br>더 오래 몰입할 수 있는 세상`;
const newH1 = `좋아하는 일에<br>더 오래 몰입할 수 있도록.`;

const oldP = `T-Rive는 MONO, Blood Star, Trydit을 통해 기술자의 미래와 경험의 가치를 존중하며, 함께 성장하는 구조를 설계합니다.`;
const newP = `T-Rive는 MONO, Blood Star, Trydit을 통해 기술자의 노동과 경험의 가치가 평생의 자산이 되는 지속 가능한 성장 구조를 설계합니다.`;

html = html.replace(oldH1, newH1);
html = html.replace(oldP, newP);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Hero text updated successfully.');
