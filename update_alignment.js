const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Helper function to add class if not exists
function addClass(str, cls) {
    if (!str.includes(cls)) {
        return str.replace('class="', `class="${cls} `);
    }
    return str;
}

// 1. Hero Section paragraphs
html = html.replace(/<p class="text-\[15px\] sm:text-xl text-gray-300 w-full mx-auto leading-relaxed mb-12 font-medium break-keep max-w-2xl">/, 
    '<p class="text-[15px] sm:text-xl text-gray-300 w-full mx-auto leading-relaxed mb-12 font-medium break-keep max-w-2xl text-center sm:text-justify">');

html = html.replace(/<p class="text-\[15px\] sm:text-lg text-gray-400 w-full mx-auto leading-relaxed mt-6 font-light break-keep max-w-3xl">/, 
    '<p class="text-[15px] sm:text-lg text-gray-400 w-full mx-auto leading-relaxed mt-6 font-light break-keep max-w-3xl text-center sm:text-justify">');

// 2. Brand Identity paragraphs
html = html.replace(/<p class="mt-2 text-\[15px\]">지식 공유 플랫폼/g, '<p class="mt-2 text-[15px] break-keep leading-relaxed text-justify text-gray-400">지식 공유 플랫폼');
html = html.replace(/<p class="mt-2 text-\[15px\]">관심사 기반 지식/g, '<p class="mt-2 text-[15px] break-keep leading-relaxed text-justify text-gray-400">관심사 기반 지식');
html = html.replace(/<p class="mt-2 text-\[15px\]">과거의 선택에 대한 후회/g, '<p class="mt-2 text-[15px] break-keep leading-relaxed text-justify text-gray-400">과거의 선택에 대한 후회');

// 3. Intro Section paragraphs
html = html.replace(/<p class="text-gray-300 leading-relaxed font-light break-keep text-\[17px\] sm:text-lg mb-6 max-w-4xl mx-auto">/, 
    '<p class="text-gray-300 leading-relaxed font-light break-keep text-[17px] sm:text-lg mb-6 max-w-4xl mx-auto text-justify">');

html = html.replace(/<p class="text-\[#D4C3A3\] font-bold break-keep text-\[17px\] sm:text-lg max-w-4xl mx-auto">/, 
    '<p class="text-[#D4C3A3] font-bold break-keep text-[17px] sm:text-lg max-w-4xl mx-auto text-justify">');

// Intro Section 4 target grids
html = html.replace(/<p class="text-gray-400 text-\[15px\] font-light leading-relaxed break-keep">/g, 
    '<p class="text-gray-400 text-[15px] font-light leading-relaxed break-keep text-justify">');

// 4. Roadmap Section paragraphs
html = html.replace(/<p class="text-gray-300 text-\[15px\] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white\/5">/g, 
    '<p class="text-gray-300 text-[15px] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white/5 text-justify">');

html = html.replace(/<p class="text-gray-400 text-\[15px\] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white\/5">/g, 
    '<p class="text-gray-400 text-[15px] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white/5 text-justify">');

// Roadmap bullet point paragraphs
// MONO bullet points
html = html.replace(/<p class="text-gray-400 text-sm break-keep leading-relaxed">휘발되던 현장의 출역/g, 
    '<p class="text-gray-400 text-sm break-keep leading-relaxed text-justify">휘발되던 현장의 출역');
html = html.replace(/<p class="text-gray-400 text-sm break-keep leading-relaxed">앞으로 다가올 피지털 시대에도/g, 
    '<p class="text-gray-400 text-sm break-keep leading-relaxed text-justify">앞으로 다가올 피지털 시대에도');
html = html.replace(/<p class="text-gray-400 text-sm break-keep leading-relaxed">MONO를 만드는 T-Rive 팀원들/g, 
    '<p class="text-gray-400 text-sm break-keep leading-relaxed text-justify">MONO를 만드는 T-Rive 팀원들');

// Blood Star & Trydit bullet points
html = html.replace(/<p class="text-gray-500 text-sm break-keep leading-relaxed">한 개의 스타트업이 일류 전문가를/g, 
    '<p class="text-gray-500 text-sm break-keep leading-relaxed text-justify">한 개의 스타트업이 일류 전문가를');
html = html.replace(/<p class="text-gray-500 text-sm break-keep leading-relaxed">회사의 단계적 팽창에 따라 초기/g, 
    '<p class="text-gray-500 text-sm break-keep leading-relaxed text-justify">회사의 단계적 팽창에 따라 초기');
html = html.replace(/<p class="text-gray-500 text-sm break-keep leading-relaxed">사용자는 단순한 소비자에 머무는/g, 
    '<p class="text-gray-500 text-sm break-keep leading-relaxed text-justify">사용자는 단순한 소비자에 머무는');
html = html.replace(/<p class="text-gray-500 text-sm break-keep leading-relaxed">건설, 부동산, 투자, 스포츠,/g, 
    '<p class="text-gray-500 text-sm break-keep leading-relaxed text-justify">건설, 부동산, 투자, 스포츠,');

// 5. Apply Portal Text
html = html.replace(/<p class="text-gray-300 font-light mt-6 text-lg leading-relaxed break-keep">/g, 
    '<p class="text-gray-300 font-light mt-6 text-lg leading-relaxed break-keep text-justify">');

// Apply Portal Questions (make sure they don't look weird when justified, usually left is better for lists, but let's keep them as is since they are list items. Or add break-keep if missing)
// They already have `break-keep`.

// Save
fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Alignment and line breaks improved globally.');
