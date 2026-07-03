const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Team & Culture Section
html = html.replace(/<section id="team" class="py-24 relative bg-slate-950 border-t border-white\/5">/,
'<section id="team" class="py-24 relative bg-[#0a0a0a] border-t border-white/5">');

html = html.replace(/<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">/,
'<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">');

html = html.replace(/<h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent  mb-2">Team & Culture<\/h2>/,
'<h2 class="text-xs sm:text-sm font-semibold tracking-widest text-[#D4C3A3] mb-2">Team & Culture</h2>');

html = html.replace(/bg-brand-card\/30/g, 'bg-[#16181a]');

html = html.replace(/<div class="mt-1 text-brand-accent text-xl">/, '<div class="mt-1 text-[#D4C3A3] text-xl">');
html = html.replace(/<div class="mt-1 text-brand-emerald text-xl">/, '<div class="mt-1 text-[#D4C3A3] text-xl">');
html = html.replace(/<div class="mt-1 text-brand-violet text-xl">/, '<div class="mt-1 text-[#D4C3A3] text-xl">');
html = html.replace(/<div class="mt-1 text-gray-300 text-xl">/, '<div class="mt-1 text-[#D4C3A3] text-xl">');

// 2. Creator Section
html = html.replace(/<section id="creator" class="py-24 border-t border-white\/5 relative bg-brand-dark">/,
'<section id="creator" class="py-24 border-t border-white/5 relative bg-[#121314]">');

html = html.replace(/<h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent  mb-2">Creator Story<\/h2>/,
'<h2 class="text-xs sm:text-sm font-semibold tracking-widest text-[#D4C3A3] mb-2">Creator Story</h2>');

html = html.replace(/bg-brand-card\/40/g, 'bg-[#1a1c1e]');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Theme and spacing fixed.');
