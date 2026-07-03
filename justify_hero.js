const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// The user wants text-justify. I'll replace text-left with text-justify in the Hero subheadline.
// Also remove the <br class="hidden sm:block"> so the justify works cleanly on all lines without breaking them prematurely.

html = html.replace(
    /"T-Rive 팀은 자신이 선택한 일이 가치 있게 지속 가능한 일이 되도록 현장 근무자와 T-Rive 팀원이 온전히 몰입할 수 있는 환경을 설계합니다\.<br class="hidden sm:block">우리는 누구나 지금 집중하는 일에 몰입하여 더 좋은 지식을 나누고, 그 지식으로 세상을 유익하게 만들어가는 성장 구조를 지향합니다\."/g,
    `"T-Rive 팀은 자신이 선택한 일이 가치 있게 지속 가능한 일이 되도록 현장 근무자와 T-Rive 팀원이 온전히 몰입할 수 있는 환경을 설계합니다. 우리는 누구나 지금 집중하는 일에 몰입하여 더 좋은 지식을 나누고, 그 지식으로 세상을 유익하게 만들어가는 성장 구조를 지향합니다."`
);

// Replace text-left with text-justify in the Hero subheadline.
// The current class has "text-left" from the previous step.
html = html.replace(
    /<p class="text-\[16px\] sm:text-\[18px\] text-gray-400 w-full mx-auto leading-relaxed mb-12 font-light break-keep max-w-4xl text-left">/g,
    '<p class="text-[16px] sm:text-[18px] text-gray-400 w-full mx-auto leading-relaxed mb-12 font-light break-keep max-w-4xl text-justify">'
);

// Just in case they meant the H1 as well, I'll let H1 stay centered unless explicitly requested because text-justify on 2 lines looks broken. 
// Wait, the parent div has text-center. If I want H1 to be justified, I'd have to add text-justify to it. But I'll just justify the subheadline first.

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Hero subheadline justified.');
