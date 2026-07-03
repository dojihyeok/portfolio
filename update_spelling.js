const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const replacements = [
    { from: "환상을 쫓지", to: "환상을 좇지" }, // 쫓다(물리적) vs 좇다(이상/추상적)
    { from: "지속가능한", to: "지속 가능한" },
    { from: "전해주신", to: "전해 주신" },
    { from: "되찾아주기", to: "되찾아 주기" },
    { from: "얻어가고", to: "얻어 가고" }
];

let updatedCount = 0;
for (const r of replacements) {
    if (html.includes(r.from)) {
        html = html.replace(r.from, r.to);
        updatedCount++;
    }
}

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log(`Updated ${updatedCount} spelling/spacing issues.`);
