const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Replace MONO back to T-Rive but KEEP the new message structure.
html = html.replace('Join MONO', 'Join T-Rive');
html = html.replace('MONO는 기술자의 경험과 노하우를', 'T-Rive는 기술자의 경험과 노하우를');
html = html.replace('MONO가 일하는 방식:', 'T-Rive가 일하는 방식:');
html = html.replace('MONO Founding Crew 지원하기', 'T-Rive Founding Crew 지원하기'); // This replaces the first occurrence (likely the h3 header)
html = html.replace('MONO Founding Crew 지원하기', 'T-Rive Founding Crew 지원하기'); // This replaces the button text
html = html.replace('당신이 MONO와 함께 해결하고 싶은 문제는 무엇인가요?', '당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요?');
html = html.replace('MONO 팀이 개별 연락을 드리겠습니다.', 'T-Rive 팀이 개별 연락을 드리겠습니다.');
html = html.replace(/'MONO Founding Crew 지원하기'/g, "'T-Rive Founding Crew 지원하기'");
html = html.replace(/"MONO Founding Crew 지원하기"/g, '"T-Rive Founding Crew 지원하기"');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Reverted MONO to T-Rive successfully!");
