const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldH1Regex = /<h1 class="text-\[28px\] leading-\[1\.5\] sm:text-4xl lg:text-\[48px\] font-extrabold tracking-tight sm:leading-\[1\.5\] mb-8 break-keep max-w-4xl mx-auto">[\s\S]*?<\/h1>/;

const newH1 = `<h1 class="text-[22px] sm:text-4xl lg:text-[48px] leading-[1.5] font-extrabold tracking-tight sm:leading-[1.5] mb-8 break-keep max-w-5xl mx-auto w-full">
            <span class="block bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">일하는 즐거움을 아는 사람들이 자신의 관심 분야에</span>
            <span class="block bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">온전히 몰입하며 일하는 세상을 만듭니다.</span>
        </h1>`;

if (oldH1Regex.test(html)) {
    html = html.replace(oldH1Regex, newH1);
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Updated H1 exactly as requested.");
} else {
    console.log("Could not find H1 block.");
}
