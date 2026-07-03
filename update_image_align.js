const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Update profile image
html = html.replace(
    '<img src="https://avatars.githubusercontent.com/u/10899881?v=4" alt="Founder"',
    '<img src="https://dojiung.com/profile.png" alt="Founder"'
);

// Update alignment
const oldP = `<p class="text-gray-400 font-light mt-4 break-keep">몰입은 개인의 의지나 재능 문제가 아닙니다.`;
const newP = `<p class="text-gray-400 font-light mt-4 break-keep text-justify px-4 sm:px-8">몰입은 개인의 의지나 재능 문제가 아닙니다.`;
html = html.replace(oldP, newP);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated image and text alignment.");
