const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldRegex = /<p class="text-\[16px\] sm:text-xl text-gray-300 w-full mx-auto leading-relaxed mb-12 font-medium break-keep max-w-2xl">[\s\S]*?<\/p>/;

const newHtml = `<p class="text-[16px] sm:text-[18px] text-gray-400 w-full mx-auto leading-relaxed mb-12 font-light break-keep max-w-4xl text-left sm:text-center">
            "T-Rive 팀은 자신이 선택한 일이 가치 있게 지속 가능한 일이 되도록 현장 근무자와 T-Rive 팀원이 온전히 몰입할 수 있는 환경을 설계합니다.<br class="hidden sm:block">우리는 누구나 지금 집중하는 일에 몰입하여 더 좋은 지식을 나누고, 그 지식으로 세상을 유익하게 만들어가는 성장 구조를 지향합니다."
        </p>`;

html = html.replace(oldRegex, newHtml);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Hero subheadline replaced.');
