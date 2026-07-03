const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const badHtml = `<h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-4 break-keep leading-tight">우리는 직무보다 방향성을 먼저 봅니다.<br><br>
            아래 질문이 단순한 호기심이 아니라,<br>
            오랫동안 당신을 고민하게 만든 질문이라면,<br>
            그리고 그 답을 직접 만들어 보고 싶다면,<br><br>
            T-Rive와 이야기해 주세요.
                    </p>`;

const goodHtml = `<h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-4 break-keep leading-tight">우리는 직무보다 방향성을 먼저 봅니다.</h2>
                    <p class="text-gray-300 font-light mt-6 text-lg sm:text-xl leading-relaxed break-keep">
                        아래 질문이 단순한 호기심이 아니라,<br>
                        오랫동안 당신을 고민하게 만든 질문이라면,<br>
                        그리고 그 답을 직접 만들어 보고 싶다면,<br><br>
                        <strong class="text-white font-bold">T-Rive와 이야기해 주세요.</strong>
                    </p>`;

html = html.replace(badHtml, goodHtml);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Fixed heading size and html tags.");
