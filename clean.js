const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Clean up colors to Toss-like palette
html = html.replace(/dark: '#0B0F19'/g, "dark: '#191F28'");
html = html.replace(/card: '#161D30'/g, "card: '#242A36'");
html = html.replace(/accent: '#06B6D4'/g, "accent: '#3182F6'"); // Toss Blue
html = html.replace(/emerald: '#10B981'/g, "emerald: '#3182F6'"); // Consolidate
html = html.replace(/violet: '#8B5CF6'/g, "violet: '#3182F6'"); // Consolidate

html = html.replace(/body \{\s*background-color: #0B0F19;/g, "body {\n            background-color: #191F28;");

// 2. Remove glows
html = html.replace(/glow-(cyan|emerald|violet)/g, "");
html = html.replace(/\.glow-cyan[\s\S]*?\}\s*\.glow-emerald[\s\S]*?\}\s*\.glow-violet[\s\S]*?\}/g, "");

// 3. Remove gradient text (AI staple)
html = html.replace(/bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent/g, "text-white");
html = html.replace(/bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent/g, "text-white");

// 4. Remove gradient backgrounds on buttons
html = html.replace(/bg-gradient-to-r from-brand-accent to-brand-violet/g, "bg-brand-accent");
html = html.replace(/bg-gradient-to-tr from-brand-accent to-brand-violet/g, "bg-brand-accent");
html = html.replace(/bg-gradient-to-b from-brand-dark via-brand-dark to-slate-950/g, "bg-brand-dark");

// 5. Remove pulsing/ping animations
html = html.replace(/animate-pulse/g, "");
html = html.replace(/animate-ping/g, "");

// 6. Simplify uppercase / mono tracking
html = html.replace(/uppercase tracking-widest font-mono/g, "font-medium");
html = html.replace(/tracking-widest/g, "tracking-normal");
html = html.replace(/tracking-wider/g, "tracking-normal");

// 7. Simplify extrabold -> bold
html = html.replace(/font-extrabold/g, "font-bold");

// 8. Fix some explicit slate backgrounds
html = html.replace(/bg-slate-950\/40/g, "bg-[#191F28]");
html = html.replace(/bg-slate-950/g, "bg-[#191F28]");
html = html.replace(/from-\[\#0B0F19\] via-\[\#0B0F19\]\/60/g, "from-[#191F28] via-[#191F28]/60");

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
