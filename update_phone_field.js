const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Update HTML Form Layout
const oldHtmlForm = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="text-xs text-gray-400 block font-medium">이름 / 닉네임 (필수)</label>
                                <input required type="text" id="recruit-name" placeholder="홍길동" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs text-gray-400 block font-medium">이메일 또는 연락처 (필수)</label>
                                <input required type="text" id="recruit-email" placeholder="example@domain.com 또는 010-0000-0000" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                            </div>
                        </div>`;

const newHtmlForm = `<div class="space-y-4">
                            <div class="space-y-2">
                                <label class="text-xs text-gray-400 block font-medium">이름 / 닉네임 (필수)</label>
                                <input required type="text" id="recruit-name" placeholder="홍길동" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-xs text-gray-400 block font-medium">이메일 (필수)</label>
                                    <input required type="email" id="recruit-email" placeholder="example@domain.com" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-xs text-gray-400 block font-medium">전화번호 (필수)</label>
                                    <input required type="tel" id="recruit-phone" placeholder="010-0000-0000" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                                </div>
                            </div>
                        </div>`;

if (html.includes(oldHtmlForm)) {
    html = html.replace(oldHtmlForm, newHtmlForm);
    console.log("Updated HTML form layout.");
} else {
    console.error("Old HTML form not found.");
}

// 2. Update JavaScript Fetch Logic
const oldJsLogic1 = `const name = document.getElementById('recruit-name').value;
        const email = document.getElementById('recruit-email').value;
        const position = document.getElementById('recruit-position').value;`;

const newJsLogic1 = `const name = document.getElementById('recruit-name').value;
        const email = document.getElementById('recruit-email').value;
        const phone = document.getElementById('recruit-phone').value;
        const position = document.getElementById('recruit-position').value;`;

const oldJsLogic2 = `body: JSON.stringify({
                    name, email, position, problem, link
                })`;

const newJsLogic2 = `body: JSON.stringify({
                    name, email, phone, position, problem, link
                })`;

if (html.includes(oldJsLogic1) && html.includes(oldJsLogic2)) {
    html = html.replace(oldJsLogic1, newJsLogic1);
    html = html.replace(oldJsLogic2, newJsLogic2);
    console.log("Updated JS fetch logic.");
} else {
    console.error("Old JS fetch logic not found.");
}

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
