const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Replace Target 3
html = html.replace(
    /<h3 class="text-lg font-bold text-\[#F3F2F0\] mb-3 flex items-center gap-2"><i class="fa-solid fa-palette text-\[#D4C3A3\]"><\/i> 취미를 즐기는 사람<\/h3>/,
    '<h3 class="text-lg font-bold text-[#F3F2F0] mb-3 flex items-center gap-2"><i class="fa-solid fa-lightbulb text-[#D4C3A3]"></i> 자신만의 관심사에 몰입하는 탐구자</h3>'
);

html = html.replace(
    /<p class="text-gray-400 text-\[15px\] font-light leading-relaxed break-keep">단순한 오락 소비가 아닌, 자신만의 깊은 관심사를 가치 있는 지식 자산으로 전환하게 만듭니다\.<\/p>/,
    '<p class="text-gray-400 text-[15px] font-light leading-relaxed break-keep">특정 분야에 얽매이지 않고 다양한 영역에서 자신이 좋아하는 일에 깊이 파고들며, 즐겁게 몰입하는 과정을 경험합니다.</p>'
);

// Replace Target 4
html = html.replace(
    /<h3 class="text-lg font-bold text-\[#F3F2F0\] mb-3 flex items-center gap-2"><i class="fa-solid fa-chart-line text-\[#D4C3A3\]"><\/i> 투자와 경제 활동에 관심 있는 사람<\/h3>/,
    '<h3 class="text-lg font-bold text-[#F3F2F0] mb-3 flex items-center gap-2"><i class="fa-solid fa-people-group text-[#D4C3A3]"></i> 함께 가치를 만들어가는 커뮤니티</h3>'
);

html = html.replace(
    /<p class="text-gray-400 text-\[15px\] font-light leading-relaxed break-keep">시장의 무분별한 잡음 속에서 가치 있는 정보를 획득하고 정교한 지식의 공유를 통해 성장합니다\.<\/p>/,
    '<p class="text-gray-400 text-[15px] font-light leading-relaxed break-keep">관심사가 통하는 사람들이 모여 무분별한 잡음을 차단하고, 서로의 지식과 경험을 나누며 함께 몰입하고 만들어갑니다.</p>'
);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Target cards 3 and 4 updated.');
