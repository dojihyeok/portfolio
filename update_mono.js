const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Badge & Title & Description
const oldIntro = `<span class="px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-accent text-xs font-semibold border border-brand-emerald/20  tracking-widest font-mono">Application Process</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-4 break-keep leading-tight">우리는 직무보다 방향성을 먼저 봅니다.</h2>
                    <p class="text-gray-300 font-light mt-6 text-lg sm:text-xl leading-relaxed break-keep">
                        아래 질문이 단순한 호기심이 아니라,<br>
                        오랫동안 당신을 고민하게 만든 질문이라면,<br>
                        그리고 그 답을 직접 만들어 보고 싶다면,<br><br>
                        <strong class="text-white font-bold">T-Rive Team 합류하기를 클릭해 주세요.</strong>
                    </p>`;

const newIntro = `<span class="px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-accent text-xs font-semibold border border-brand-emerald/20  tracking-widest font-mono">Co-founding Movement</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-4 break-keep leading-tight">Join MONO</h2>
                    <p class="text-gray-300 font-light mt-6 text-lg sm:text-xl leading-relaxed break-keep">
                        우리는 직원을 채용하는 것이 아니라,<br>
                        <strong class="text-white font-bold">함께 창업할 사람을 찾고 있습니다.</strong><br><br>
                        MONO는 기술자의 경험과 노하우를 AI 시대의 새로운 자산으로 만들고 있습니다.<br>
                        현장의 숙련 기술이 사라지지 않도록, 그리고 그 가치가 기술자에게 다시 돌아가도록 만드는 것이 우리의 목표입니다.<br><br>
                        우리는 이 여정을 함께할 개발자, 디자이너, 기획자, 현장 전문가를 기다리고 있습니다.
                    </p>`;

html = html.replace(oldIntro, newIntro);

// 2. Q&A Box -> Principles
const oldQA = `<p class="font-semibold text-brand-accent mb-4"><i class="fa-solid fa-circle-question mr-1"></i> 지원 전 스스로에게 질문해 보세요:</p>
                        <ul class="space-y-3 pl-2 text-gray-400 break-keep">
                            <li><strong class="text-white">Q1.</strong> 몰입하며 일하는 즐거움을 경험한 적이 있는가요?</li>
                            <li><strong class="text-white">Q2.</strong> AI & 피지컬 시대에도 인간의 경험과 가치는 어떻게 유지할 수 있을까요?</li>
                            <li><strong class="text-white">Q3.</strong> 미래에도 지속 가능한 성장과 몰입할 수 있는 환경을 만들 수 있을까요?</li>
                            <li><strong class="text-white">Q4.</strong> 이런 질문에 가슴 뛰는 목표를 같이 만들어갈 준비가 되었나요</li>
                        </ul>`;

const newQA = `<p class="font-semibold text-brand-accent mb-4"><i class="fa-solid fa-lightbulb mr-1"></i> MONO가 일하는 방식:</p>
                        <ul class="space-y-3 pl-2 text-gray-400 break-keep">
                            <li><strong class="text-white"><i class="fa-solid fa-check text-brand-accent text-xs mr-1"></i></strong> 좋은 아이디어가 있다면 누구든 직접 만들고 실험할 수 있습니다.</li>
                            <li><strong class="text-white"><i class="fa-solid fa-check text-brand-accent text-xs mr-1"></i></strong> 직급보다 실행이 중요합니다.</li>
                            <li><strong class="text-white"><i class="fa-solid fa-check text-brand-accent text-xs mr-1"></i></strong> 아직 정답이 없는 시장을 함께 개척할 사람을 찾습니다.</li>
                        </ul>`;

html = html.replace(oldQA, newQA);

// 3. Form replacements
html = html.replace('<i class="fa-solid fa-paper-plane text-brand-accent"></i> T-Rive 지원서 제출하기', '<i class="fa-solid fa-paper-plane text-brand-accent"></i> MONO Founding Crew 지원하기');

html = html.replace('당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요? (★ 필수 입력)', '당신이 MONO와 함께 해결하고 싶은 문제는 무엇인가요? (★ 필수 입력)');

html = html.replace(
`                        <button type="submit" class="w-full bg-brand-accent text-brand-dark hover:bg-brand-emerald hover:text-brand-dark hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/20 mt-4">
                            T-Rive Team 합류하기
                        </button>`,
`                        <button type="submit" class="w-full bg-brand-accent text-brand-dark hover:bg-brand-emerald hover:text-brand-dark hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/20 mt-4">
                            MONO Founding Crew 지원하기
                        </button>`
);

html = html.replace('방향성이 맞는 분들께 T-Rive 팀이 개별 연락을 드리겠습니다.', '방향성이 맞는 분들께 MONO 팀이 개별 연락을 드리겠습니다.');

// Also replace the button text in JS logic 
// document.getElementById('recruit-form-submit-btn').innerText = 'T-Rive Team 합류하기'; -> this doesn't exist, I need to check JS.
// Let's replace 'T-Rive Team 합류하기' in the entire document just in case it's in JS.
html = html.replace(/'T-Rive Team 합류하기'/g, "'MONO Founding Crew 지원하기'");
html = html.replace(/"T-Rive Team 합류하기"/g, '"MONO Founding Crew 지원하기"');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Replaced successfully!");
