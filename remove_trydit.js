const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

html = html.replace(
    /<h3 class="text-lg font-bold text-white inline-block mr-2">T <span class="text-sm font-normal text-gray-400">\(Trydit \/ Tech \/ Top-tier \/ Trust\)<\/span><\/h3>/,
    '<h3 class="text-lg font-bold text-white inline-block mr-2">T <span class="text-sm font-normal text-gray-400">(Tech / Top-tier / Trust)</span></h3>'
);

html = html.replace(
    /<p class="mt-2 text-\[15px\]">관심사 기반 지식 플랫폼 Trydit, 외부의 소음을 차단하는 무결한 Tech, 상생을 만들어갈 Top-tier 전문가, 그리고 시스템이 지탱할 안전망 Trust\.<\/p>/,
    '<p class="mt-2 text-[15px]">외부의 소음을 차단하는 무결한 Tech, 상생을 만들어갈 Top-tier 전문가, 그리고 시스템이 지탱할 안전망 Trust.</p>'
);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Trydit removed from T definition.');
