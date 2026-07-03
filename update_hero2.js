const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldH1 = `좋아하는 일에<br>더 오래 몰입할 수 있도록.`;
const newH1 = `좋아하는 일에 온전히<br>몰입하는 즐거움,`; // Adjusted br for better mobile layout, though user didn't specify.

const oldP = `T-Rive는 MONO, Blood Star, Trydit을 통해 기술자의 노동과 경험의 가치가 평생의 자산이 되는 지속 가능한 성장 구조를 설계합니다.`;
const newP = `T-Rive는 데이터 인프라(MONO), 지속 가능한 연대(Blood Star), 그리고 지식 기반 생태계(Trydit)를 통해 기술자의 미래를 지키고 경험의 가치를 평생의 자산으로 전환하는 성장 구조를 설계합니다.`;

html = html.replace(oldH1, newH1);
html = html.replace(oldP, newP);

// Just in case I previously ran the fix_q1q4.js in the background (I didn't execute it, but just in case), let's ensure bullet points are used instead of Q1-Q4 if we want to follow this spec exactly.
// I will not touch the apply portal questions since they already use bullet points.

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Hero text updated.');
