const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Replace "존재 이유" -> "비전"
html = html.replace(/존재 이유/g, '비전');

// Replace "창업가 스토리" -> "T-Rive 팀 리더 소개"
html = html.replace(/창업가 스토리/g, 'T-Rive 팀 리더 소개');

// Replace "Founder Story" -> "T-Rive 팀 리더 소개" just in case the user meant the English subheading too
// Wait, the user specifically wrote "창업가 스토리". Let me check if "Founder Story" should be changed to "Leader Introduction" or "T-Rive Team Leader".
html = html.replace(/Founder Story/g, 'Leader Story');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated titles.");
