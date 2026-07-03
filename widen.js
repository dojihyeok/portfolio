const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Hero Section: Make font bigger and remove explicit br so it can spread out on wide screens naturally, or keep the br but make the text massive.
// The user said "두줄로" (two lines) and "좌우 공간이 남는다" (too much horizontal space).
// Best way to fix both is to make the font size significantly larger on desktop.
html = html.replace(/<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-relaxed mb-8 break-keep">/g, 
'<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight leading-tight mb-10 break-keep">');
// Change max-w-5xl to max-w-7xl for the hero container
html = html.replace(/<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">/g,
'<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">');
// Remove the explicit `<br>` in Hero to let it naturally flow to 2 lines with the huge font, or keep it.
// If font is 76px, "현장 기술자가 더 안전하게, 더 많이 성장하고, " is 24 chars -> ~1800px wide. It will wrap.
html = html.replace(/<span class="text-white block sm:inline">현장 기술자가 더 안전하게, 더 많이 성장하고, <\/span><br class="hidden sm:block">/g,
'<span class="text-white block sm:inline">현장 기술자가 더 안전하게, 더 많이 성장하고, </span><br class="hidden xl:block">');

// 2. Blood Star and Trydit: Let text spread wider
// Remove <br class="hidden sm:block"> from Blood Star
html = html.replace(/최고의 전문가 조직을 <br class="hidden sm:block">공유할/g, "최고의 전문가 조직을 공유할");
html = html.replace(/하나의 회사에 소속되지 않고<br class="hidden sm:block"> 여러 팀의/g, "하나의 회사에 소속되지 않고 여러 팀의");
// Remove <br class="hidden sm:block"> from Trydit
html = html.replace(/누구나 자신의 전문성을<br class="hidden sm:block"> 지식 자산으로/g, "누구나 자신의 전문성을 지식 자산으로");

// Increase max-w-4xl to max-w-6xl for the cards
html = html.replace(/<div class="p-8 sm:p-12 rounded-2xl bg-\[\#242A36\]\/50 border border-white\/5 text-center max-w-4xl mx-auto">/g,
'<div class="p-8 sm:p-12 rounded-2xl bg-[#242A36]/50 border border-white/5 text-center max-w-5xl mx-auto">');


fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
