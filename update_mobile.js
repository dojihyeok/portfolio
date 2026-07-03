const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Add mobile menu HTML right after the header
const mobileMenuHTML = `
<!-- Mobile Menu -->
<div id="mobile-menu" class="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-all duration-300 opacity-0 pointer-events-none">
    <button id="close-menu-btn" class="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl"><i class="fa-solid fa-xmark"></i></button>
    <a href="#hero" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">홈</a>
    <a href="#why-we-exist" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">존재 이유</a>
    <a href="#vision" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">미래 비전</a>
    <a href="#project-mono" class="mobile-link text-2xl font-bold text-brand-accent transition">첫 번째 여정</a>
    <a href="#roadmap" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">생태계 로드맵</a>
    <a href="#culture" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">팀 문화</a>
</div>
`;
// Insert mobile menu after header
html = html.replace('</header>', '</header>\n' + mobileMenuHTML);

// 2. Add ID to the hamburger button
html = html.replace('<button class="text-gray-400 hover:text-white"><i class="fa-solid fa-bars text-xl"></i></button>', 
'<button id="open-menu-btn" class="text-gray-400 hover:text-white"><i class="fa-solid fa-bars text-2xl"></i></button>');

// 3. Add JS for mobile menu
const menuScript = `
    // Mobile Menu Logic
    const openBtn = document.getElementById('open-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if(openBtn && closeBtn && mobileMenu) {
        openBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        });
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        });
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            });
        });
    }
`;
html = html.replace('function initMonoSimulation() {', menuScript + '\n    function initMonoSimulation() {');

// 4. Reduce simulator padding on mobile
html = html.replace('p-8 sm:p-12 rounded-3xl bg-brand-dark/80', 'p-6 sm:p-12 rounded-3xl bg-brand-dark/80');

// 5. Reduce Culture buttons size on mobile
html = html.replace(/px-6 py-4 bg-brand-dark rounded-full border border-white\/10 text-gray-300 font-semibold/g, 'px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base bg-brand-dark rounded-full border border-white/10 text-gray-300 font-semibold');

// 6. Reduce Coffee Chat padding on mobile
html = html.replace('p-8 sm:p-12 rounded-3xl bg-brand-card', 'p-6 sm:p-12 rounded-3xl bg-brand-card');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
