const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// Update brand-dark color in tailwind config
html = html.replace(/dark: '#0B0F19'/, `dark: '#121314'`);
html = html.replace(/background-color: #0B0F19;/, `background-color: #121314;`);

const newApplyPortal = `<!-- 6. Apply Portal -->
<section id="apply-portal" class="py-24 relative bg-brand-dark border-t border-white/5 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <!-- Left Info Area -->
            <div class="lg:col-span-5 space-y-8">
                <div>
                    <span class="px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-accent text-xs font-semibold border border-brand-emerald/20 tracking-widest font-mono">Co-founding Movement</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-[#F3F2F0] mt-4 break-keep leading-tight font-serif tracking-tight">우리는 함께 문제를 해결할<br>동료를 찾고 있습니다.</h2>
                    <p class="text-gray-300 font-light mt-6 text-lg leading-relaxed break-keep">
                        <strong class="text-[#F3F2F0] font-bold">직무보다 방향성을,<br>경력보다 문제의식을 먼저 봅니다.</strong><br><br>
                        아래 질문이 단순한 호기심이 아니라, 오랫동안 당신을 고민하게 만든 질문이라면, 그리고 그 답을 직접 만들어 보고 싶다면, T-Rive에 지원해 주세요.
                    </p>
                </div>

                <div class="space-y-4 text-xs font-light">
                    <div class="p-8 rounded-2xl bg-[#121314] border border-white/10 text-gray-300 shadow-xl shadow-black/50">
                        <ul class="space-y-6 pl-1 text-gray-400 break-keep text-sm leading-relaxed">
                            <li class="flex items-start gap-3"><span class="text-brand-accent font-serif font-bold text-base mt-0.5">Q1.</span> <span class="italic font-serif text-[#F3F2F0] text-base leading-snug">사람들은 왜 자신이 좋아하는 일에 오래 몰입하지 못하는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-brand-accent font-serif font-bold text-base mt-0.5">Q2.</span> <span class="italic font-serif text-[#F3F2F0] text-base leading-snug">AI 시대에도 인간의 경험과 전문성은 어떻게 가치가 될 수 있는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-brand-accent font-serif font-bold text-base mt-0.5">Q3.</span> <span class="italic font-serif text-[#F3F2F0] text-base leading-snug">미래의 노동은 누구를 위한 것이어야 하는가?</span></li>
                            <li class="flex items-start gap-3 border-t border-white/10 pt-6 mt-6"><span class="text-brand-accent font-serif font-bold text-base mt-0.5">Q4.</span> <strong class="text-[#F3F2F0] text-base leading-snug">이 문제의 답을 직접 만들어 볼 만큼 진지한가요?</strong></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Right Form Area -->
            <div class="lg:col-span-7">
                <div class="p-8 sm:p-10 rounded-3xl bg-brand-card/20 border border-white/5">
                    <form id="recruitment-form" onsubmit="handleRecruitSubmit(event)" class="space-y-8">
                        <div class="space-y-5">
                            <div class="space-y-2">
                                <label class="text-sm text-gray-400 block font-medium">이름 / 닉네임 (필수)</label>
                                <input required type="text" id="recruit-name" placeholder="홍길동" class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-[#F3F2F0] placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-base">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm text-gray-400 block font-medium">이메일 또는 연락처 (필수)</label>
                                <input required type="text" id="recruit-email" placeholder="example@domain.com 또는 010-0000-0000" class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-[#F3F2F0] placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-base">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm text-gray-400 block font-medium">선택 지원 분야 (선택)</label>
                            <select id="recruit-position" class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-[#F3F2F0] focus:border-brand-accent focus:outline-none transition text-base appearance-none">
                                <option value="backend">Backend Engineer (SaaS / 대안 CB / API)</option>
                                <option value="frontend">Frontend Engineer (React / Next.js / UX 최적화)</option>
                                <option value="designer">Product Designer (Figma / MVP 경험 설계)</option>
                                <option value="po">Product Owner (요구사항 정의 / 스펙 조율)</option>
                                <option value="ai">AI Engineer (로봇 / 데이터 모델)</option>
                                <option value="infra">Infrastructure Expert (AWS / DevOps)</option>
                                <option value="expert">Industry Expert (조선, 건설, 플랜트 도메인 조력자)</option>
                                <option value="other">기타</option>
                            </select>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm text-brand-accent block font-bold">당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요? (★ 필수 입력)</label>
                            <textarea required rows="4" id="recruit-problem" placeholder="자유롭게 작성해 주세요." class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-[#F3F2F0] placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-base resize-none"></textarea>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm text-gray-400 block font-medium">당신의 생각과 작업을 보여줄 수 있는 자료 (선택)</label>
                            <input type="text" id="recruit-link" placeholder="포트폴리오, 블로그, 링크드인, GitHub 등 링크" class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-[#F3F2F0] placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-base">
                        </div>

                        <button type="submit" class="w-full bg-brand-accent text-[#121314] hover:bg-[#F3F2F0] hover:text-[#121314] text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-brand-accent/20 mt-6 text-lg tracking-wide">
                            T-Rive Team 합류하기
                        </button>
                        
                        <div class="mt-8 text-center sm:text-left border-t border-white/5 pt-6">
                            <p class="text-gray-400 text-[13px] sm:text-sm font-light break-keep leading-relaxed text-justify">
                                우리는 단순한 관심이나 공감보다, 직접 만들고 실행하는 태도를 중요하게 생각합니다. 모든 지원자와 개별 미팅을 진행하지 않으며, 방향성과 문제의식이 맞는 분들께 순차적으로 연락드립니다.
                            </p>
                        </div>
                    </form>

                    <div id="recruit-success-card" class="hidden text-center py-12 relative z-10">
                        <div class="w-20 h-20 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6">
                            <i class="fa-solid fa-check text-3xl text-brand-accent"></i>
                        </div>
                        <h4 class="text-2xl font-bold text-[#F3F2F0] mb-3">지원이 완료되었습니다</h4>
                        <p class="text-gray-400 text-base break-keep leading-relaxed">전해 주신 귀중한 생각들을 꼼꼼히 확인한 후,<br>방향성이 맞는 분들께 T-Rive 팀이 개별 연락을 드리겠습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;

// Regex replacement for Apply portal HTML
const sectionRegex = /<!-- 6\. Apply Portal -->[\s\S]*?(?=<!-- Footer -->)/;
html = html.replace(sectionRegex, newApplyPortal + '\n');

// Replace JS submission logic
const jsOld = `        const email = document.getElementById('recruit-email').value;
        const phone = document.getElementById('recruit-phone').value;
        const position = document.getElementById('recruit-position').value;
        const problem = problemInput.value;
        const experience = document.getElementById('recruit-experience').value;
        const link = document.getElementById('recruit-link').value;`;

const jsNew = `        const email = document.getElementById('recruit-email').value;
        const phone = ""; // Deprecated, merged with email
        const position = document.getElementById('recruit-position').value;
        const problem = problemInput.value;
        const experience = ""; // Deprecated
        const link = document.getElementById('recruit-link').value;`;

html = html.replace(jsOld, jsNew);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Successfully updated apply portal to Master Spec.');
