const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Revert H1 to simple center aligned
html = html.replace(/<h1 class="text-\[28px\] sm:text-4xl lg:text-\[52px\] leading-\[1\.4\] font-extrabold tracking-tight sm:leading-\[1\.4\] mb-8 break-keep mx-auto text-white flex flex-col items-stretch w-fit">[\s\S]*?<\/h1>/, 
`<h1 class="text-[28px] sm:text-4xl lg:text-[52px] leading-[1.4] font-extrabold tracking-tight sm:leading-[1.4] mb-8 break-keep max-w-5xl mx-auto w-full text-white text-center">
            좋아하는 일에 온전히<br>몰입하는 즐거움,
        </h1>`);

// 2. Revert Hero subheadline to text-center with a neat break
html = html.replace(/<p class="text-\[16px\] sm:text-\[18px\] text-gray-400 w-full mx-auto leading-relaxed mb-12 font-light break-keep max-w-4xl text-justify">[\s\S]*?<\/p>/,
`<p class="text-[16px] sm:text-[18px] text-gray-400 w-full mx-auto leading-relaxed mb-12 font-light break-keep max-w-4xl text-center">
            "T-Rive 팀은 자신이 선택한 일이 가치 있게 지속 가능한 일이 되도록 현장 근무자와 T-Rive 팀원이 온전히 몰입할 수 있는 환경을 설계합니다.<br class="hidden sm:block">우리는 누구나 지금 집중하는 일에 몰입하여 더 좋은 지식을 나누고, 그 지식으로 세상을 유익하게 만들어가는 성장 구조를 지향합니다."
        </p>`);

// 3. Revert Intro block to text-center
html = html.replace(/<div class="p-8 sm:p-12 rounded-3xl bg-\[#121314\] border border-white\/5 text-left relative overflow-hidden">/,
'<div class="p-8 sm:p-12 rounded-3xl bg-[#121314] border border-white/5 text-center relative overflow-hidden">');

html = html.replace(/<p class="text-gray-300 leading-relaxed font-light break-keep text-\[16px\] sm:text-lg mb-6 max-w-4xl mx-auto text-left">/,
'<p class="text-gray-300 leading-relaxed font-light break-keep text-[16px] sm:text-lg mb-6 max-w-4xl mx-auto text-center">');

html = html.replace(/<p class="text-\[#D4C3A3\] font-bold break-keep text-\[16px\] sm:text-lg max-w-4xl mx-auto text-left">/,
'<p class="text-[#D4C3A3] font-bold break-keep text-[16px] sm:text-lg max-w-4xl mx-auto text-center">');

// 4. Remove text-justify everywhere else because it ruins Korean layout
html = html.replace(/text-left sm:text-justify/g, 'text-left');
html = html.replace(/text-justify/g, 'text-left');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Alignments cleaned up.');
