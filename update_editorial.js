const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Google Fonts Add Playfair Display
html = html.replace(
    'family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap',
    'family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
);

// 2. Tailwind Config update
const oldConfig = `                    colors: {
                        brand: {
                            dark: '#0B0F19',
                            card: '#161D30',
                            accent: '#3B82F6', // T-Rive Sapphire Blue
                            neon: '#06B6D4', // Flow Cyan
                            emerald: '#10B981', // Growth Emerald
                            violet: '#8B5CF6', // Creator Violet
                        }
                    }`;

const newConfig = `                    fontFamily: {
                        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    colors: {
                        brand: {
                            dark: '#121314', // Deep Charcoal
                            card: '#1C1D1F', // Matte Charcoal
                            accent: '#D4C3A3', // Champagne Gold
                            emerald: '#8A9A86', // Sage Green
                            violet: '#A1A19A', // Soft Silver Gray
                            neon: '#F3F2F0', // Warm Bone White
                        }
                    }`;
html = html.replace(oldConfig, newConfig.replace('fontFamily: {', ''));
// Wait, fontFamily is already there. Let's do it safely.
html = html.replace(`fontFamily: {\n                        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],\n                    },`, `fontFamily: {\n                        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],\n                        serif: ['Playfair Display', 'serif'],\n                    },`);
html = html.replace(`dark: '#0B0F19'`, `dark: '#121314'`);
html = html.replace(`card: '#161D30'`, `card: '#1C1D1F'`);
html = html.replace(`accent: '#3B82F6'`, `accent: '#D4C3A3'`);
html = html.replace(`neon: '#06B6D4'`, `neon: '#F3F2F0'`);
html = html.replace(`emerald: '#10B981'`, `emerald: '#8A9A86'`);
html = html.replace(`violet: '#8B5CF6'`, `violet: '#A1A19A'`);

// Also update raw body CSS color
html = html.replace(`background-color: #0B0F19;`, `background-color: #121314;`);
// Remove glow and shadow custom CSS
html = html.replace(`.glow-neon {\n            box-shadow: 0 0 25px rgba(6, 182, 212, 0.25);\n        }`, '');
html = html.replace(`.shadow-lg {\n            box-shadow: 0 0 25px rgba(139, 92, 246, 0.25);\n        }`, '');
html = html.replace(`.shadow-lg {\n            box-shadow: 0 0 25px rgba(59, 130, 246, 0.25);\n        }`, '');


// 3. Typographical updates (Serif, Italic for main headers)
html = html.replace('font-extrabold tracking-tight sm:leading-[1.5] mb-8 break-keep', 'font-serif italic font-bold tracking-tight sm:leading-[1.5] mb-8 break-keep');
html = html.replace('text-3xl sm:text-4xl font-extrabold text-white break-keep', 'text-3xl sm:text-4xl font-serif font-bold text-white break-keep');
html = html.replace('text-3xl sm:text-4xl font-extrabold text-white mt-4 break-keep', 'text-3xl sm:text-4xl font-serif font-bold text-white mt-4 break-keep');
html = html.replace('text-xl text-white tracking-wider opacity-50', 'text-xl text-white tracking-wider opacity-50 font-serif');

// 4. Update Application Process copy
const oldHeadline = `<h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-4 break-keep leading-tight">우리는 직무보다 방향성을 먼저 봅니다.</h2>`;
const newHeadline = `<h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mt-4 break-keep leading-tight">우리는 함께 문제를 해결할 동료를 찾고 있습니다.</h2>
                    <p class="text-brand-accent text-lg sm:text-xl font-medium mt-2">직무보다 방향성을, 경력보다 문제의식을 먼저 봅니다.</p>`;
html = html.replace(oldHeadline, newHeadline);
// Fix the class for the old headline since I already replaced `font-extrabold` -> `font-serif font-bold` above!
html = html.replace(`<h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mt-4 break-keep leading-tight">우리는 직무보다 방향성을 먼저 봅니다.</h2>`, newHeadline);


const oldAppBody = `                        아래 질문이 단순한 호기심이 아니라,<br>
                        오랫동안 당신을 고민하게 만든 질문이라면,<br>
                        그리고 그 답을 직접 만들어 보고 싶다면,<br><br>
                        <strong class="text-white font-bold">T-Rive에 지원해 주세요.</strong>`;
const newAppBody = `                        아래 질문이 단순한 호기심이 아니라, 오랫동안 당신을 고민하게 만든 질문이라면, 그리고 그 답을 직접 만들어 보고 싶다면,<br><br>
                        <strong class="text-brand-accent font-bold">T-Rive에 지원해 주세요.</strong>`;
html = html.replace(oldAppBody, newAppBody);

const oldQ4 = `<li><strong class="text-white">Q4.</strong> 나는 이 질문의 답을 직접 만들어 보고 싶은가?</li>`;
const newQ4 = `<li><strong class="text-white">Q4.</strong> 이 문제의 답을 직접 만들어 볼 만큼 진지한가요?</li>`;
html = html.replace(oldQ4, newQ4);

const oldNotice = `우리는 단순히 공감하는 사람이 아니라, 직접 답을 만들고 실행할 사람을 찾고 있습니다. 모든 지원자와 개별 미팅을 진행하지는 않으며, 방향성과 문제의식이 맞는 분들께 순차적으로 연락드립니다.`;
const newNotice = `우리는 단순한 관심이나 공감보다, 직접 만들고 실행하는 태도를 중요하게 생각합니다. 모든 지원자와 개별 미팅을 진행하지 않으며, 방향성과 문제의식이 맞는 분들께 순차적으로 연락드립니다.`;
html = html.replace(oldNotice, newNotice);

// 5. Button hover colors and backgrounds
html = html.replace(/hover:bg-blue-600/g, 'hover:bg-brand-emerald hover:text-brand-dark');
html = html.replace(/bg-brand-accent hover:bg-brand-emerald/g, 'bg-brand-accent text-brand-dark hover:bg-brand-emerald');
// Clean up hero text spacing
html = html.replace('일하는 즐거움을 아는 사람들이 자신의 관심 분야에', '일하는 즐거움을 아는 사람들이<br>자신의 관심 분야에');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated HTML with Editorial Design & Copy tweaks");
