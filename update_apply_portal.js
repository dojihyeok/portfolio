const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const newApplyPortal = `<!-- 6. Apply Portal -->
<section id="apply-portal" class="py-24 relative bg-brand-dark border-t border-white/5 overflow-hidden">
    <div class="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <!-- Left Info Area -->
            <div class="lg:col-span-5 space-y-8">
                <div>
                    <span class="px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-accent text-xs font-semibold border border-brand-emerald/20 tracking-widest font-mono">Co-founding Movement</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-4 break-keep leading-tight">함께 문제를 해결할<br>동료를 찾고 있습니다</h2>
                    <p class="text-gray-300 font-light mt-6 text-lg leading-relaxed break-keep">
                        우리는 직원을 모집하는 것이 아니라 <strong class="text-white font-bold">함께 문제를 해결할 사람</strong>을 찾고 있습니다.<br><br>
                        T-Rive는 사람들이 자신의 경험과 전문성에 더 오래 몰입할 수 있는 환경을 만들고 있습니다. 현재 MONO를 시작으로 Blood Star, Trydit까지 장기적인 프로젝트를 준비하고 있으며, 이 여정을 함께할 동료를 기다립니다.
                    </p>
                </div>

                <div class="space-y-4 text-xs font-light">
                    <div class="p-6 rounded-2xl bg-white/5 border border-white/10 text-gray-300">
                        <p class="font-bold text-brand-accent mb-4 text-base"><i class="fa-solid fa-magnifying-glass mr-2"></i> 우리는 이런 사람을 찾고 있습니다</p>
                        <ul class="space-y-4 pl-1 text-gray-400 break-keep text-sm leading-relaxed">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-check text-brand-emerald mt-1"></i> <span>특정 문제를 오래 고민해 본 사람</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-check text-brand-emerald mt-1"></i> <span>스스로 배우고 실행하는 사람</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-check text-brand-emerald mt-1"></i> <span>직무보다 목적에 공감하는 사람</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-check text-brand-emerald mt-1"></i> <span>AI 시대의 새로운 기회에 관심 있는 사람</span></li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-check text-brand-emerald mt-1"></i> <span>함께 만드는 과정을 즐기는 사람</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Right Form Area -->
            <div class="lg:col-span-7">
                <div class="p-8 sm:p-10 rounded-3xl bg-brand-card/40 border border-white/5 backdrop-blur-md">
                    <form id="recruitment-form" onsubmit="handleRecruitSubmit(event)" class="space-y-8">
                        <div class="space-y-5">
                            <div class="space-y-2">
                                <label class="text-sm text-gray-400 block font-medium">이름 / 닉네임 (필수)</label>
                                <input required type="text" id="recruit-name" placeholder="홍길동" class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-base">
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div class="space-y-2">
                                    <label class="text-sm text-gray-400 block font-medium">이메일 (필수)</label>
                                    <input required type="email" id="recruit-email" placeholder="example@domain.com" class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-base">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-sm text-gray-400 block font-medium">전화번호 (필수)</label>
                                    <input required type="tel" id="recruit-phone" placeholder="010-0000-0000" class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-base">
                                </div>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm text-gray-400 block font-medium">선택 지원 분야 (선택)</label>
                            <select id="recruit-position" class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-white focus:border-brand-accent focus:outline-none transition text-base appearance-none">
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
                            <p class="text-xs text-gray-500 mb-2 font-light">정답은 없습니다. 오랫동안 관심을 가져온 문제, 직접 경험했던 불편함, 앞으로 해결해 보고 싶은 문제를 자유롭게 작성해 주세요.</p>
                            <textarea required rows="4" id="recruit-problem" placeholder="자유롭게 작성해 주세요." class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-emerald focus:outline-none transition text-base resize-none"></textarea>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm text-brand-emerald block font-bold">직접 만들거나 실행해 본 프로젝트가 있다면 소개해 주세요. (선택)</label>
                            <p class="text-xs text-gray-500 mb-2 font-light">예: 서비스 개발, 콘텐츠 제작, 창업, 커뮤니티 운영, 사이드 프로젝트 등</p>
                            <textarea rows="3" id="recruit-experience" placeholder="실행 경험을 간단히 적어주세요." class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-emerald focus:outline-none transition text-base resize-none"></textarea>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm text-gray-400 block font-medium">당신의 생각과 작업을 보여줄 수 있는 자료 (선택)</label>
                            <input type="text" id="recruit-link" placeholder="포트폴리오, 블로그, 링크드인, GitHub 등 링크" class="w-full px-4 py-4 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-base">
                        </div>

                        <button type="submit" class="w-full bg-brand-accent text-brand-dark hover:bg-brand-emerald hover:text-brand-dark hover:opacity-90 text-white font-bold py-5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/20 mt-6 text-lg tracking-wide">
                            T-Rive Team 합류하기
                        </button>
                    </form>

                    <div id="recruit-success-card" class="hidden text-center py-12 relative z-10">
                        <div class="w-20 h-20 mx-auto bg-brand-emerald/20 rounded-full flex items-center justify-center mb-6">
                            <i class="fa-solid fa-check text-3xl text-brand-accent"></i>
                        </div>
                        <h4 class="text-2xl font-bold text-white mb-3">지원이 완료되었습니다</h4>
                        <p class="text-gray-400 text-base break-keep leading-relaxed">전해 주신 귀중한 생각들을 꼼꼼히 확인한 후,<br>방향성이 맞는 분들께 T-Rive 팀이 개별 연락을 드리겠습니다.</p>
                    </div>

                    <div class="mt-10 text-center sm:text-left border-t border-white/5 pt-8">
                        <p class="text-gray-400 text-xs sm:text-sm font-light break-keep leading-relaxed text-justify">
                            우리는 단순한 관심보다 직접 만들고 실행하는 태도를 중요하게 생각합니다.<br>
                            모든 지원자와 개별 미팅을 진행하지 않으며, 제출해 주신 내용을 바탕으로 방향성과 문제의식이 맞는 분들께 순차적으로 연락드립니다.
                        </p>
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
const jsOld = `        const problem = problemInput.value;
        const link = document.getElementById('recruit-link').value;`;
        
const jsNew = `        const problem = problemInput.value;
        const experience = document.getElementById('recruit-experience').value;
        const link = document.getElementById('recruit-link').value;`;

const fetchOld = `                body: JSON.stringify({
                    name, email, phone, position, problem, link
                })`;

const fetchNew = `                body: JSON.stringify({
                    name, email, phone, position, problem, experience, link
                })`;

html = html.replace(jsOld, jsNew);
html = html.replace(fetchOld, fetchNew);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Successfully updated apply portal.');
