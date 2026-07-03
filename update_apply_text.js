const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldTextRegex = /우리는 직무보다 방향성을 먼저 봅니다\.[\s\S]*?T-Rive에 지원해 주세요\./;

const newText = `우리는 직무보다 방향성을 먼저 봅니다.<br><br>
            아래 질문이 단순한 호기심이 아니라,<br>
            오랫동안 당신을 고민하게 만든 질문이라면,<br>
            그리고 그 답을 직접 만들어 보고 싶다면,<br><br>
            T-Rive와 이야기해 주세요.`;

if (oldTextRegex.test(html)) {
    html = html.replace(oldTextRegex, newText);
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Updated apply text.");
} else {
    console.log("Could not find the text block.");
}
