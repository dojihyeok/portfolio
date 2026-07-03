const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Assertion 1: Typography Integrity
// 1.1 Remove Inter and enforce Noto Sans KR
html = html.replace(/<link href="https:\/\/fonts.googleapis.com\/css2\?family=Inter:wght@300;400;500;600;700;800&family=Noto\+Sans\+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">/, 
'<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">');

html = html.replace(/fontFamily:\s*\{\s*sans:\s*\['Inter',\s*'Noto Sans KR',\s*'sans-serif'\],\s*\}/, 
"fontFamily: { sans: ['\"Noto Sans KR\"', 'sans-serif'] }");

// 1.2 Add editorial class to CSS
const editorialCSS = `
        .editorial-text {
            text-align: justify;
            text-justify: inter-character;
            word-break: keep-all;
        }
`;
html = html.replace(/<style>/, '<style>' + editorialCSS);

// 1.3 Replace Tailwind text-justify with editorial-text everywhere
html = html.replace(/text-justify/g, 'editorial-text');


// Assertion 2: AI Styles 소거
// 2.1 Remove shadows with specific colors and blur classes from CSS block
html = html.replace(/\.shadow-lg\s*\{\s*box-shadow:[^}]*\}\s*\.\s*\{\s*box-shadow:[^}]*\}\s*\.shadow-lg\s*\{\s*box-shadow:[^}]*\}/, '');
// And any stray `.shadow-lg` definitions if I missed something:
html = html.replace(/\.shadow-lg\s*\{\s*box-shadow:[^}]*\}/g, '');

// 2.2 Remove inline shadows and gradients
html = html.replace(/shadow-\[0_0_[^\]]+\]/g, '');
html = html.replace(/bg-gradient-to-[a-z]+/g, '');
html = html.replace(/text-transparent bg-clip-text/g, ''); // Often used with gradient text
html = html.replace(/blur-[0-9a-z]+/g, '');

// 2.3 Enforce color scheme: Background #121212, Text #F3F2F0, Point #D4C3A3
// Update Tailwind Config colors
html = html.replace(/colors:\s*\{[\s\S]*?\}\s*\}\s*\}/, 
`colors: {
                        brand: {
                            dark: '#121212',
                            card: '#121212',
                            accent: '#D4C3A3',
                            neon: '#D4C3A3',
                            emerald: '#D4C3A3',
                            violet: '#D4C3A3',
                        }
                    }
                }
            }`);

// Replace explicit hex codes
html = html.replace(/#121314/g, '#121212');
html = html.replace(/#16181a/g, '#121212');
html = html.replace(/#1a1c1e/g, '#121212');
html = html.replace(/#0a0a0a/g, '#121212');
html = html.replace(/bg-slate-950/g, 'bg-[#121212]');


// Assertion 3: Phase 2 & 3 Texts
// Phase 2
html = html.replace(/몰입이 지속 가능한 정예 연합/g, '몰입이 지속 가능한 팀으로의 성장');
html = html.replace(/10개의 스타트업이 일류 전문가 1명의 보상 체계\(1\/10 비용\)를 쉐어/g, '10개의 스타트업이 인프라 비용을 1/10로 분담');
html = html.replace(/단단한 몰입형 정예 팀으로 동반 성장합니다\./g, '단단한 정예 팀으로 성장합니다.');

// Phase 3
html = html.replace(/지식과 커뮤니티 기반의 크리에이터 플랫폼/g, '지식과 커뮤니티 기반의 크리에이터 생태계로의 성장');
html = html.replace(/개인화된 메신저 기능과 자신이 참여하고 싶은 채널, 제공받고 싶은 정보를 주체적으로 선택합니다\./g, '자신이 원하는 커뮤니티와 깊숙한 지식을 기반으로 정보를 주체적으로 선택합니다.');
html = html.replace(/크리에이터'가 되어 자립하고/g, '크리에이터가 되어 자립하고');


// Assertion 4: Recruitment & CTA
// The texts are mostly correct, let's just make sure "T-Rive Team 합류하기" is everywhere.
html = html.replace(/>\s*지원하기\s*</g, '>T-Rive Team 합류하기<');
html = html.replace(/>\s*지원서 작성하기\s*</g, '>T-Rive Team 합류하기<');
// The button in the form already says "T-Rive Team 합류하기"

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Dev Spec v0.6 Assertions Applied.');
