const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldNav = `<nav class="hidden lg:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#hero" class="hover:text-white transition">홈</a>
            <a href="#mono" class="hover:text-brand-emerald transition flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-emerald "></span>MONO</a>
            <a href="#why-now" class="hover:text-white transition">시대적 화두</a>
            <a href="#founder" class="hover:text-white transition">창업가 스토리</a>
            <a href="#culture" class="hover:text-white transition">팀 문화</a>
            <a href="#recruiting" class="hover:text-white transition">인재 채용</a>
        </nav>`;

const newNav = `<nav class="hidden lg:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#hero" class="hover:text-white transition">홈</a>
            <a href="#mono" class="hover:text-brand-accent transition flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>모노</a>
            <a href="#founder" class="hover:text-white transition">창업가 이야기</a>
            <a href="#recruiting" class="hover:text-white transition">인재 채용</a>
            <a href="#bloodstar" class="hover:text-white transition">장기 비전</a>
        </nav>`;

if(html.includes(oldNav)) {
    html = html.replace(oldNav, newNav);
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Nav replaced perfectly");
} else {
    console.log("Old nav not found exactly as specified. Attempting regex replacement.");
    html = html.replace(/<nav class="hidden lg:flex space-x-8 text-sm font-medium text-gray-400">[\s\S]*?<\/nav>/, newNav);
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Regex nav replacement complete.");
}
