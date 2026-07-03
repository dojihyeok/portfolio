const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

html = html.replace(/<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-\[76px\] font-bold tracking-tight leading-tight mb-10 break-keep">/g, 
'<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.6] mb-10 break-keep">');

html = html.replace(/<br class="hidden xl:block">/g, '<br class="hidden sm:block">');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
