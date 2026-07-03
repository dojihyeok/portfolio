const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Text gradients
html = html.replace(/bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent/g, 'text-white');
html = html.replace(/bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent/g, 'text-white');

// Button & logo gradients
html = html.replace(/bg-gradient-to-r from-brand-accent to-brand-violet/g, 'bg-brand-accent hover:bg-blue-600');
html = html.replace(/bg-gradient-to-tr from-brand-accent to-brand-violet/g, 'bg-brand-accent');

// Also remove glowing effects if they look too AI-like
html = html.replace(/glow-accent/g, 'shadow-lg');
html = html.replace(/glow-violet/g, 'shadow-lg');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Removed text and button gradients.");
