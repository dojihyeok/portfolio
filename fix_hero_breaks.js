const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Fix Hero Subheadline breaks
const oldHeroSubheadlineRegex = /<p class="text-\[15px\] sm:text-xl text-gray-300 w-full mx-auto leading-relaxed mb-12 font-medium break-keep max-w-2xl">[\s\S]*?<\/p>/;
const newHeroSubheadline = `<p class="text-[15px] sm:text-xl text-gray-300 w-full mx-auto leading-relaxed mb-12 font-medium break-keep max-w-4xl text-center">
            T-Rive는 데이터 인프라(MONO), 지속 가능한 연대(Blood Star), 그리고 지식 기반 생태계(Trydit)를 통해<br class="hidden sm:block">기술자의 미래를 지키고 경험의 가치를 평생의 자산으로 전환하는 성장 구조를 설계합니다.
        </p>`;
html = html.replace(oldHeroSubheadlineRegex, newHeroSubheadline);

// 2. Fix Hero Intro Text (The one added recently)
const oldHeroIntroRegex = /<p class="text-\[15px\] sm:text-lg text-gray-400 w-full mx-auto leading-relaxed mt-6 font-light break-keep max-w-3xl">[\s\S]*?<\/p>/;
const newHeroIntroText = `<p class="text-[15px] sm:text-[17px] text-gray-400 w-full mx-auto leading-relaxed mt-6 font-light break-keep max-w-4xl text-center">
            "T-Rive 팀은 자신이 선택한 일이 가치 있게 지속 가능한 일이 되도록 현장 근무자와 T-Rive 팀원이 온전히 몰입할 수 있는 환경을 설계합니다.<br class="hidden sm:block">우리는 누구나 지금 집중하는 일에 몰입하여 더 좋은 지식을 나누고, 그 지식으로 세상을 유익하게 만들어가는 성장 구조를 지향합니다."
        </p>`;
html = html.replace(oldHeroIntroRegex, newHeroIntroText);

// 3. Fix Intro Section ("우리가 해결하려는 근본 문제") texts to be justified or properly broken
html = html.replace(/<p class="text-gray-300 leading-relaxed font-light break-keep text-\[17px\] sm:text-lg mb-6 max-w-4xl mx-auto">/, '<p class="text-gray-300 leading-relaxed font-light break-keep text-[16px] sm:text-lg mb-6 max-w-4xl mx-auto text-left sm:text-center">');
html = html.replace(/<p class="text-\[#D4C3A3\] font-bold break-keep text-\[17px\] sm:text-lg max-w-4xl mx-auto">/, '<p class="text-[#D4C3A3] font-bold break-keep text-[16px] sm:text-lg max-w-4xl mx-auto text-left sm:text-center">');

// 4. Roadmap section adjustments for better text layout
html = html.replace(/<p class="text-gray-300 text-\[15px\] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white\/5">/g, '<p class="text-gray-300 text-[15px] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white/5 text-left sm:text-justify">');
html = html.replace(/<p class="text-gray-400 text-\[15px\] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white\/5">/g, '<p class="text-gray-400 text-[15px] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white/5 text-left sm:text-justify">');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Hero and global breaks adjusted.');
