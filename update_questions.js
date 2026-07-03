const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldQ1 = "사람들은 왜 자신이 좋아하는 일에 오래 몰입하지 못하는가?";
const newQ1 = "몰입하며 일하는 즐거움을 경험한 적이 있는가요?";

const oldQ2 = "AI 시대에도 인간의 경험과 전문성은 어떻게 가치가 될 수 있는가?";
const newQ2 = "AI & 피지컬 시대에도 인간의 경험과 가치는 어떻게 유지할 수 있을까요?";

const oldQ3 = "미래의 노동은 누구를 위한 것이어야 하는가?";
const newQ3 = "미래에도 지속가능한 성장과 몰입할 수 있는 환경을 만들 수 있을까요?";

const oldQ4 = "나는 이 질문의 답을 직접 만들어 보고 싶은가?";
const newQ4 = "이런 질문에 가슴 뛰는 목표를 같이 만들어갈 준비가 되었나요?"; // added question mark for naturalness, wait user wrote without ?, let's use exact
const newQ4Exact = "이런 질문에 가슴 뛰는 목표를 같이 만들어갈 준비가 되었나요";

html = html.replace(oldQ1, newQ1);
html = html.replace(oldQ2, newQ2);
html = html.replace(oldQ3, newQ3);
html = html.replace(oldQ4, newQ4Exact);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated 4 questions.");
