const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

html = html.replace(/<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-\[54px\] font-bold tracking-tight leading-\[1.6\] mb-10 break-keep">/g, 
'<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight mb-10 break-keep" style="line-height: 1.8;">');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
