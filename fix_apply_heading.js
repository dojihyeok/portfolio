const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Fix Apply Portal Heading (One line, no <br>)
html = html.replace(
    /<h2 class="text-3xl sm:text-4xl font-extrabold text-\[#F3F2F0\] mt-4 break-keep leading-tight tracking-tight">우리는 함께 문제를 해결할<br>동료를 찾고 있습니다\.<\/h2>/,
    '<h2 class="text-3xl sm:text-4xl font-extrabold text-[#F3F2F0] mt-4 break-keep leading-tight tracking-tight">우리는 함께 문제를 해결할 동료를 찾고 있습니다.</h2>'
);

// 2. Revert H1 to simple center aligned (remove the flex/stretch hack)
html = html.replace(/<h1 class="text-\[28px\] sm:text-4xl lg:text-\[52px\] leading-\[1\.4\] font-extrabold tracking-tight sm:leading-\[1\.4\] mb-8 break-keep mx-auto text-white flex flex-col items-stretch w-fit">[\s\S]*?<\/h1>/, 
`<h1 class="text-[28px] sm:text-4xl lg:text-[52px] leading-[1.4] font-extrabold tracking-tight sm:leading-[1.4] mb-8 break-keep max-w-5xl mx-auto w-full text-white text-center">
            좋아하는 일에 온전히<br>몰입하는 즐거움,
        </h1>`);

// 3. Revert Hero subheadline to text-center with a neat break (removing the strict justify which might have caused the "many left alignments" feeling on mobile)
// Actually the user explicitly asked for justify on main text. I'll keep text-justify on the hero subheadline but maybe add sm:text-center if they want it centered on desktop? No, they said "양쪽 정렬해봐 메인 문구도". I did text-justify and they were happy? No, they replied immediately with the screenshot of the apply portal. So I'll keep the hero subheadline as text-justify.

// 4. Remove text-justify from other paragraphs if it looks weird, replace with text-left or text-center.
html = html.replace(/text-left sm:text-justify/g, 'text-left');
html = html.replace(/<p class="text-gray-300 leading-relaxed font-light break-keep text-\[16px\] sm:text-lg mb-6 max-w-4xl mx-auto text-left">/,
'<p class="text-gray-300 leading-relaxed font-light break-keep text-[16px] sm:text-lg mb-6 max-w-4xl mx-auto text-center">');

html = html.replace(/<p class="text-\[#D4C3A3\] font-bold break-keep text-\[16px\] sm:text-lg max-w-4xl mx-auto text-left">/,
'<p class="text-[#D4C3A3] font-bold break-keep text-[16px] sm:text-lg max-w-4xl mx-auto text-center">');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Apply heading fixed and alignments cleaned.');
