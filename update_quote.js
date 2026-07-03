const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldQuote = `<div class="bg-brand-card/30 border border-white/5 rounded-3xl p-8 sm:p-12 relative max-w-3xl mx-auto shadow-lg">
            <i class="fa-solid fa-quote-left text-3xl text-brand-accent/20 absolute top-6 left-6"></i>
            <p class="text-[15px] sm:text-lg text-gray-300 leading-loose font-light break-keep text-center sm:px-8 relative z-10">
                18년 동안 금융, 제조, 대형 플랫폼 시스템을 만들며 수천억 규모의 대형 프로젝트들을 경험했습니다. 하지만 가장 중요한 사람들, 현장에서 실제로 숭고한 가치를 만들어내는 기술자들은 여전히 데이터와 금융, 그리고 안전의 중심에서 소외되어 있었습니다.<br><br>
                시스템의 모순을 해결하고 사람들이 온전히 일에 몰입하는 기쁨을 되찾아주기 위해, 저는 T-Rive를 시작했습니다.
            </p>
            <i class="fa-solid fa-quote-right text-3xl text-brand-accent/20 absolute bottom-6 right-6"></i>
        </div>`;

const newQuote = `<div class="bg-brand-card/30 border border-white/5 rounded-3xl p-8 sm:p-12 relative max-w-3xl mx-auto shadow-lg">
            <i class="fa-solid fa-quote-left text-xl text-brand-accent/30 absolute top-6 left-6 sm:top-8 sm:left-8"></i>
            <p class="text-[15px] sm:text-lg text-gray-300 leading-loose font-light break-all sm:break-keep text-justify px-2 sm:px-8 py-2 relative z-10">
                18년 동안 금융, 제조, 대형 플랫폼 시스템을 만들며 수천억 규모의 대형 프로젝트들을 경험했습니다. 하지만 가장 중요한 사람들, 현장에서 실제로 숭고한 가치를 만들어내는 기술자들은 여전히 데이터와 금융, 그리고 안전의 중심에서 소외되어 있었습니다.<br><br>
                시스템의 모순을 해결하고 사람들이 온전히 일에 몰입하는 기쁨을 되찾아주기 위해, 저는 T-Rive를 시작했습니다.
            </p>
            <i class="fa-solid fa-quote-right text-xl text-brand-accent/30 absolute bottom-6 right-6 sm:bottom-8 sm:right-8"></i>
        </div>`;

if (html.includes(oldQuote)) {
    html = html.replace(oldQuote, newQuote);
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Updated quote section.");
} else {
    console.log("Could not find the exact old quote string.");
}

