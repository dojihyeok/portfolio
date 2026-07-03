const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldH1 = `<h1 class="text-[28px] leading-[1.5] sm:text-5xl lg:text-[56px] font-extrabold tracking-tight sm:leading-[1.5] mb-8 break-keep">
            <span class="block text-brand-accent font-semibold text-xl sm:text-2xl lg:text-3xl mb-4 tracking-wide uppercase">T-Rive</span>
            <span class="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">일하는 즐거움을 아는 사람들이 자신의 관심 분야에 온전히 몰입하며 살아갈 수 있는 세상을 만듭니다.</span>
        </h1>`;

const newH1 = `<h1 class="text-[28px] leading-[1.5] sm:text-4xl lg:text-[48px] font-extrabold tracking-tight sm:leading-[1.5] mb-8 break-keep max-w-4xl mx-auto">
            <span class="block text-brand-accent font-semibold text-xl sm:text-2xl lg:text-3xl mb-4 tracking-wide uppercase">T-Rive</span>
            <span class="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">일하는 즐거움을 아는 사람들이 자신의 관심 분야에 온전히 몰입하며<br class="hidden sm:block"> 살아갈 수 있는 세상을 만듭니다.</span>
        </h1>`;

if (html.includes(oldH1)) {
    html = html.replace(oldH1, newH1);
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Updated H1 to 2 lines and adjusted font size.");
} else {
    console.log("Could not find H1 string.");
}
