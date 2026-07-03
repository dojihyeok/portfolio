const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Replace the founder section text paragraph
const oldFounder = `<p class="text-lg sm:text-xl text-gray-300 leading-relaxed font-light break-all sm:break-keep text-justify sm:text-center italic px-4">
            "18년 동안 금융, 제조, 대형 플랫폼 시스템을 만들며 수천억 규모의 대형 프로젝트들을 경험했습니다. <br class="hidden md:block">
            하지만 가장 중요한 사람들, 현장에서 실제로 숭고한 가치를 만들어내는 기술자들은 여전히 데이터와 금융, 그리고 안전의 중심에서 소외되어 있었습니다. <br class="hidden md:block"><br class="hidden md:block">
            시스템의 모순을 해결하고 사람들이 온전히 일에 몰입하는 기쁨을 되찾아주기 위해, 저는 T-Rive를 시작했습니다."
        </p>`;

const newFounder = `<div class="bg-brand-card/30 border border-white/5 rounded-3xl p-8 sm:p-12 relative max-w-3xl mx-auto shadow-lg">
            <i class="fa-solid fa-quote-left text-3xl text-brand-accent/20 absolute top-6 left-6"></i>
            <p class="text-[15px] sm:text-lg text-gray-300 leading-loose font-light break-keep text-center sm:px-8 relative z-10">
                18년 동안 금융, 제조, 대형 플랫폼 시스템을 만들며 수천억 규모의 대형 프로젝트들을 경험했습니다. 하지만 가장 중요한 사람들, 현장에서 실제로 숭고한 가치를 만들어내는 기술자들은 여전히 데이터와 금융, 그리고 안전의 중심에서 소외되어 있었습니다.<br><br>
                시스템의 모순을 해결하고 사람들이 온전히 일에 몰입하는 기쁨을 되찾아주기 위해, 저는 T-Rive를 시작했습니다.
            </p>
            <i class="fa-solid fa-quote-right text-3xl text-brand-accent/20 absolute bottom-6 right-6"></i>
        </div>`;

// Wait, the HTML might not exactly match oldFounder string due to line breaks or spaces. 
// I will use regex or string methods.

const startRegex = /<p class="text-lg sm:text-xl text-gray-300 leading-relaxed font-light break-all sm:break-keep text-justify sm:text-center italic px-4">/;
const endStr = `</p>`;

const parts = html.split('<h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-4">Founder\'s Story</h2>');
if (parts.length > 1) {
    const sectionStart = parts[1];
    const pStartIdx = sectionStart.indexOf('<p class="text-lg');
    const pEndIdx = sectionStart.indexOf('</p>', pStartIdx) + 4;
    
    if (pStartIdx !== -1) {
        const preP = sectionStart.slice(0, pStartIdx);
        const postP = sectionStart.slice(pEndIdx);
        const newSection = parts[0] + '<h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-4">Founder\'s Story</h2>' + preP + newFounder + postP;
        fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', newSection);
        console.log("Updated founder section successfully.");
    } else {
        console.log("Could not find p tag");
    }
} else {
    console.log("Could not find founder section.");
}

// Also, globally remove text-justify if it looks bad. Let's revert text-justify to text-left sm:text-center for paragraphs if it was added.
// The user asked for "좌우 꽉차게 모바일에서 이쁘게", break-all handles the filling without text-justify creating bad gaps.
let updatedHtml = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');
updatedHtml = updatedHtml.replace(/text-justify sm:text-left/g, 'text-left');
updatedHtml = updatedHtml.replace(/text-justify sm:text-center/g, 'text-center');
fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', updatedHtml);
