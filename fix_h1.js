const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldH1Regex = /<h1 class="text-\[28px\] sm:text-4xl lg:text-\[52px\] leading-\[1\.4\] font-extrabold tracking-tight sm:leading-\[1\.4\] mb-8 break-keep max-w-5xl mx-auto w-full text-white">\s*좋아하는 일에 온전히<br>몰입하는 즐거움,\s*<\/h1>/;

const newH1 = `<h1 class="text-[28px] sm:text-4xl lg:text-[52px] leading-[1.4] font-extrabold tracking-tight sm:leading-[1.4] mb-8 break-keep mx-auto text-white flex flex-col items-stretch w-fit">
            <span class="text-justify [text-align-last:justify] w-full">좋아하는 일에 온전히</span>
            <span class="text-justify [text-align-last:justify] w-full">몰입하는 즐거움,</span>
        </h1>`;

html = html.replace(oldH1Regex, newH1);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('H1 alignment fixed.');
