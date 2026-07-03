const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Hero section button
html = html.replace(
    /<a href="#coffee-chat"([^>]*?)>\s*<i class="fa-solid fa-mug-hot([^>]*?)><\/i>\s*티타임 신청\s*<\/a>/,
    '<a href="#coffee-chat"$1>\n                <i class="fa-solid fa-paper-plane$2"></i> T-Rive 지원하기\n            </a>'
);

// 2. Extract the form part to replace
const formStart = '<form id="recruitment-form"';
const formEnd = '</div>\n        </div>\n    </div>\n</section>'; // This is the end of coffee chat section

const pStartIndex = html.indexOf(formStart);
if (pStartIndex !== -1) {
    const pEndIndex = html.indexOf('</div>\n        </div>\n    </div>\n</section>', pStartIndex);
    const beforeForm = html.substring(0, pStartIndex);
    const afterForm = html.substring(pEndIndex);

    const newForm = `<form id="recruitment-form" onsubmit="handleRecruitSubmit(event)" class="relative z-10">
                <div class="text-center mb-10">
                    <i class="fa-solid fa-compass text-4xl text-brand-emerald mb-6 block hover:scale-110 transition-transform"></i>
                    <p class="text-white text-[15px] sm:text-lg font-bold mb-4 break-all sm:break-keep leading-relaxed">우리는 직무보다 방향성을 먼저 봅니다.<br class="hidden sm:block"> 모든 사람을 찾고 있지는 않습니다.</p>
                    <p class="text-gray-400 text-sm break-all sm:break-keep leading-relaxed mb-6 font-light text-left sm:text-center">아래 질문이 단순한 호기심이 아니라, 오랫동안 당신을 고민하게 만든 질문이라면, 그리고 그 답을 직접 만들어 보고 싶다면, T-Rive에 지원해 주세요.</p>
                    
                    <div class="p-6 bg-brand-card/50 rounded-2xl border border-white/5 text-left mb-8">
                        <p class="text-brand-emerald text-xs font-bold mb-4 uppercase">지원 전 스스로에게 질문해 보세요.</p>
                        <ul class="text-gray-300 text-sm font-medium space-y-3 break-all sm:break-keep">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-chevron-right text-brand-emerald mt-1"></i> <span>사람들은 왜 자신이 좋아하는 일에 오래 몰입하지 못하는가?</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-chevron-right text-brand-emerald mt-1"></i> <span>AI 시대에도 인간의 경험과 전문성은 어떻게 가치가 될 수 있는가?</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-chevron-right text-brand-emerald mt-1"></i> <span>미래의 노동은 누구를 위한 것이어야 하는가?</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-chevron-right text-brand-emerald mt-1"></i> <span class="text-white font-bold">나는 이 질문의 답을 직접 만들어 보고 싶은가?</span></li>
                        </ul>
                    </div>
                </div>

                <div class="space-y-4">
                    <div>
                        <input type="text" placeholder="이름 (또는 닉네임)" required class="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors">
                    </div>
                    <div>
                        <input type="text" placeholder="이메일 또는 연락처" required class="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors">
                    </div>
                    <div>
                        <textarea placeholder="당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요? (필수 입력)" required rows="4" class="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors resize-none"></textarea>
                    </div>
                    <div>
                        <textarea placeholder="포트폴리오, 블로그, 링크드인, GitHub 등 당신의 생각과 작업을 보여줄 수 있는 자료 (선택)" rows="2" class="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-white text-brand-dark font-bold py-4 rounded-xl hover:bg-gray-200 transition-all hover:scale-[1.02] glow-emerald">
                        T-Rive 지원하기
                    </button>
                </div>

                <div class="mt-8 text-left sm:text-center border-t border-white/5 pt-8">
                    <p class="text-gray-400 text-sm font-light break-all sm:break-keep leading-relaxed">
                        우리는 단순히 공감하는 사람이 아니라, 직접 답을 만들고 실행할 사람을 찾고 있습니다.<br>
                        모든 지원자와 개별 미팅을 진행하지는 않으며, 방향성과 문제의식이 맞는 분들께 순차적으로 연락드립니다.
                    </p>
                </div>
            </form>

            <div id="recruit-success-card" class="hidden text-center py-12 relative z-10">
                <div class="w-20 h-20 mx-auto bg-brand-emerald/20 rounded-full flex items-center justify-center mb-6">
                    <i class="fa-solid fa-check text-3xl text-brand-emerald"></i>
                </div>
                <h4 class="text-2xl font-bold text-white mb-2">지원이 완료되었습니다</h4>
                <p class="text-gray-400 break-keep">전해주신 귀중한 생각들을 꼼꼼히 확인한 후, T-Rive 팀이 개별 연락을 드리겠습니다.</p>
            </div>
`;
    html = beforeForm + newForm + afterForm;
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Updated recruitment form.");
} else {
    console.log("Could not find the form to replace.");
}

