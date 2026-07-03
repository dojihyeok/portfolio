const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldH1 = `<h1 class="text-[26px] leading-[1.4] sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight mb-8 break-all sm:break-keep sm:leading-[1.6]">
            <span class="block text-brand-accent font-black text-xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 tracking-wide uppercase">T-Rive</span>
            <span class="text-white block">일하는 즐거움을 아는 사람들이</span>
            <span class="text-white block mt-2 sm:mt-0">자신의 관심 분야에 온전히 몰입하며</span>
            <span class="text-white block mt-2 sm:mt-0">살아갈 수 있는 세상을 만듭니다.</span>
        </h1>`;

const newH1 = `<h1 class="text-[28px] leading-[1.4] sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight mb-8 break-keep sm:leading-[1.4] max-w-5xl mx-auto">
            <span class="block text-brand-accent font-black text-lg sm:text-2xl lg:text-3xl mb-4 sm:mb-6 tracking-wide uppercase">T-Rive</span>
            <span class="text-white">일하는 즐거움을 아는 사람들이 자신의 관심 분야에 온전히 몰입하며 살아갈 수 있는 세상을 만듭니다.</span>
        </h1>`;

const oldP = `<p class="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light break-all sm:break-keep text-center">
            우리는 MONO를 시작으로, 미래의 일하는 방식과 창업 생태계를 설계하는 아키텍트 크루입니다.
        </p>`;

const newP = `<p class="text-[16px] sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium break-keep text-center">
            우리는 MONO를 시작으로, 미래의 일하는 방식과 창업 생태계를 설계하는 아키텍트 크루입니다.
        </p>`;

if (html.includes(oldH1) && html.includes(oldP)) {
    html = html.replace(oldH1, newH1);
    html = html.replace(oldP, newP);
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Hero fixed.");
} else {
    console.log("Could not find old text.");
}
