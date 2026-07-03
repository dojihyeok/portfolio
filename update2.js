const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Update MONO badge to Today
html = html.replace(/Core Solution/g, "Today");

// Define new sections
const newSections = `
<!-- Blood Star Section (Next Vision) -->
<section id="bloodstar" class="py-24 border-t border-white/5 bg-[#191F28] relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-2">Next</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white">Blood Star<br><span class="text-2xl text-gray-400 mt-2 block font-medium">전문가 공유 조직 모델</span></p>
        </div>
        <div class="p-8 sm:p-12 rounded-2xl bg-[#242A36]/50 border border-white/5 text-center max-w-4xl mx-auto">
            <p class="text-gray-200 text-lg sm:text-xl leading-relaxed font-light mb-6">
                우리는 장기적으로 스타트업들이 최고의 전문가 조직을 공유할 수 있는 구조를 연구하고 있습니다.
            </p>
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                보안, 데이터, 인프라, 마케팅 전문가들이 하나의 회사에 소속되지 않고<br class="hidden sm:block"> 여러 팀의 성장을 지원하는 미래 조직 모델입니다.
            </p>
        </div>
    </div>
</section>

<!-- Trydit Section (Future Vision) -->
<section id="trydit" class="py-24 border-t border-white/5 bg-[#191F28]/50 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-2">Future</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white">Trydit<br><span class="text-2xl text-gray-400 mt-2 block font-medium">개인 지식 자산화 플랫폼</span></p>
        </div>
        <div class="p-8 sm:p-12 rounded-2xl bg-[#242A36]/50 border border-white/5 text-center max-w-4xl mx-auto">
            <p class="text-gray-200 text-lg sm:text-xl leading-relaxed font-light mb-6">
                현장의 경험과 데이터가 축적되면, 누구나 자신의 전문성을<br class="hidden sm:block"> 지식 자산으로 만들고 활용할 수 있는 플랫폼으로 확장합니다.
            </p>
            <p class="text-brand-accent text-sm sm:text-base font-semibold">
                이것이 Trydit의 비전입니다.
            </p>
        </div>
    </div>
</section>

`;

// Insert before "Why Now Section"
html = html.replace(/<!-- Why Now Section \(Market Urgency\) -->/g, newSections + '<!-- Why Now Section (Market Urgency) -->');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
