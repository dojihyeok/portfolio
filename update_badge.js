const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldBadgeText = "T-Rive : 온전한 몰입을 통해 성장(Thrive)하는 최고의 상태";
const newBadgeText = "T-Rive : Tech로 온전한 몰입을 통해 성장(Thrive)하는 최고의 상태";

if (html.includes(oldBadgeText)) {
    html = html.replace(oldBadgeText, newBadgeText);
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Updated badge text.");
} else {
    console.log("Could not find the badge text.");
}
