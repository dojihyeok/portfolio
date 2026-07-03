const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Hero text update (remove italic, change to 2 lines)
const oldHero = `<h1 class="text-[22px] sm:text-4xl lg:text-[48px] leading-[1.5] font-serif italic font-bold tracking-tight sm:leading-[1.5] mb-8 break-keep max-w-5xl mx-auto w-full">
            <span class="block text-white">일하는 즐거움을 아는 사람들이<br>자신의 관심 분야에</span>
            <span class="block text-white">온전히 몰입하며 일하는 세상을 만듭니다.</span>
        </h1>`;
const newHero = `<h1 class="text-[22px] sm:text-4xl lg:text-[48px] leading-[1.5] font-serif font-bold tracking-tight sm:leading-[1.5] mb-8 break-keep max-w-5xl mx-auto w-full">
            <span class="block text-white">일하는 즐거움을 아는 사람들이 자신의 관심 분야에</span>
            <span class="block text-white">온전히 몰입하며 일하는 세상을 만듭니다.</span>
        </h1>`;
html = html.replace(oldHero, newHero);

// Just in case it wasn't matched exactly:
html = html.replace('일하는 즐거움을 아는 사람들이<br>자신의 관심 분야에', '일하는 즐거움을 아는 사람들이 자신의 관심 분야에');
html = html.replace('font-serif italic font-bold tracking-tight', 'font-serif font-bold tracking-tight');

// 2. Remove uppercase from section headers and use Serif
html = html.replace(/<h2 class="([^"]*)uppercase([^"]*)">([^<]+)<\/h2>/g, (match, p1, p2, p3) => {
    // Title case the inner text just in case, though they might already be title cased.
    return `<h2 class="${p1}font-serif${p2}">${p3}</h2>`;
});

// Also remove tracking-widest if we want more elegant spacing, but let's just remove uppercase first.
html = html.replace(/uppercase/g, ''); 

// 3. Unify icon colors (text-brand-violet, text-brand-neon, text-brand-emerald) in specific blocks
// To be safe, let's just replace all instances in the philosophy/vision cards.
// We can do this globally for the text-brand-* colors that should be text-brand-accent.
html = html.replace(/text-brand-violet/g, 'text-brand-accent');
html = html.replace(/text-brand-neon/g, 'text-brand-accent');
html = html.replace(/text-brand-emerald/g, 'text-brand-accent');
// Wait, we need some green! The spec said: Champagne Gold (#D4C3A3) or Sage Green (#8A9A86).
// Right now brand-accent is Champagne Gold, brand-emerald is Sage Green.
// I will just let it be, but replace neon and violet to accent.
// Let's bring back emerald replacing some accents so there's variation between Gold and Green.
// Actually, they asked for "단일 톤으로 통일하여 파편화를 막을 것" which implies a unified single tone.
// So I will convert neon and violet to accent. I already ran the replace above.

// 4. Update the form label
html = html.replace('(★ 필수 서술형)', '(★ 필수 입력)');
html = html.replace('(★ 필수)', '(★ 필수 입력)'); // just in case

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated HTML with ver 0.6 instructions and hero fix.");
