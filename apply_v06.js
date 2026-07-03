const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Remove Playfair Display from Google Fonts in the header
html = html.replace(/family=Playfair\+Display[^&]+&/, '');

// 2. Remove 'font-serif' and 'italic' globally
html = html.replace(/font-serif/g, '');
html = html.replace(/italic/g, '');

// 3. Remove glow effects from Hero (blur, etc)
html = html.replace(/<div class="absolute top-1\/4 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-\[500px\] h-\[500px\] bg-brand-accent\/15 rounded-full blur-\[120px\] pointer-events-none"><\/div>/, '');
// Remove neon glow classes if any left
html = html.replace(/glow-neon/g, '');

// 4. Update the Roadmap Section
const newRoadmap = `<!-- 3. Project Roadmap -->
<section id="roadmap" class="py-24 border-t border-white/5 relative bg-[#121314]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-[#D4C3A3] mb-2">The Milestone</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-[#F3F2F0] break-keep tracking-tight">T-Rive의 10년 여정</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- MONO -->
            <div class="p-8 rounded-3xl bg-[#1a1c1e] border-2 border-[#D4C3A3]/30 flex flex-col relative shadow-md">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-[#D4C3A3] px-2 py-0.5 rounded bg-[#D4C3A3]/10 tracking-widest font-mono">Phase 1</span>
                <div>
                    <h3 class="text-2xl font-bold text-[#F3F2F0] mb-2">MONO</h3>
                    <p class="text-[#D4C3A3] text-sm font-bold mb-6">현재의 미션</p>
                    <p class="text-gray-300 text-sm font-light break-keep leading-relaxed mb-6">
                        조선, 플랜트 현장 기술노동자들이 겪는 금융과 기술 소외를 해결하는 데이터 인프라입니다. 출역 기록을 데이터 장부로 축적하여 대안 신용등급(CB)으로 가공하고, 제도권 1금융권 우대 금융 및 전용 상해보험 가입에 즉각 직결시킵니다. 원·하청 기업에게는 간소한 계약 및 정산 자동화 툴과 중대재해 면책 증빙 데이터를 공급합니다.
                    </p>
                </div>
            </div>

            <!-- Blood Star -->
            <div class="p-8 rounded-3xl bg-[#16181a] border border-white/5 flex flex-col relative hover:border-white/20 transition">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-gray-400 px-2 py-0.5 rounded bg-white/5 tracking-widest font-mono">Phase 2</span>
                <div>
                    <h3 class="text-2xl font-bold text-[#F3F2F0] mb-2 flex items-center gap-2">Blood Star</h3>
                    <p class="text-[#F3F2F0] text-sm font-bold mb-6">몰입이 지속 가능한 팀으로의 성장</p>
                    <p class="text-gray-400 text-sm font-light break-keep leading-relaxed">
                        최고의 전문가 서포트 조직이 유연하게 결합하여 리스크를 방어하는 미래형 연대 구조입니다. 창업가와 빌더들이 소음에 진 빼지 않고 제품에만 미쳐 날뛸 수 있도록 인프라 비용을 1/10로 분담하며, 초기 크루부터 전문가까지 모두가 지치지 않고 즐거운 몰입을 지속할 수 있는 단단한 정예 팀으로 성장합니다.
                    </p>
                </div>
            </div>

            <!-- Trydit -->
            <div class="p-8 rounded-3xl bg-[#16181a] border border-white/5 flex flex-col relative hover:border-white/20 transition">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-gray-400 px-2 py-0.5 rounded bg-white/5 tracking-widest font-mono">Phase 3</span>
                <div>
                    <h3 class="text-2xl font-bold text-[#F3F2F0] mb-2 flex items-center gap-2">Trydit</h3>
                    <p class="text-[#F3F2F0] text-sm font-bold mb-6">지식과 커뮤니티 기반의 크리에이터 생태계로의 성장</p>
                    <p class="text-gray-400 text-sm font-light break-keep leading-relaxed">
                        미래 노동의 최종 진화 형태인 관심 기반 라이프스타일 OS입니다. 거창한 조직에 속하지 않더라도, 세상 모든 메이커가 자신이 원하는 커뮤니티와 깊숙한 지식을 기반으로 당당한 '크리에이터'가 되어 자립할 수 있도록 돕습니다. 개인이 온전히 축적해 온 경험 정보가 마르지 않는 평생의 자산이 되는 생태계를 실현합니다.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>`;
const roadmapRegex = /<!-- 3\. Project Roadmap -->[\s\S]*?(?=<!-- 4\. Team & Culture -->)/;
html = html.replace(roadmapRegex, newRoadmap + '\n\n');

// 5. Update Apply Portal Texts
const newApplyPortal = `<!-- 6. Apply Portal -->
<section id="apply-portal" class="py-24 relative bg-[#121314] border-t border-white/5 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <!-- Left Info Area -->
            <div class="lg:col-span-5 space-y-8">
                <div>
                    <span class="px-3 py-1 rounded-full bg-white/5 text-[#D4C3A3] text-xs font-semibold border border-white/10 tracking-widest font-mono">Co-founding Movement</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-[#F3F2F0] mt-4 break-keep leading-tight tracking-tight">우리는 함께 문제를 해결할<br>동료를 찾고 있습니다.</h2>
                    <p class="text-gray-300 font-light mt-6 text-lg leading-relaxed break-keep">
                        <strong class="text-[#F3F2F0] font-bold">직무보다 방향성을,<br>경력보다 문제의식을 먼저 봅니다.</strong><br><br>
                        아래 질문이 단순한 호기심이 아니라, 오랫동안 당신을 고민하게 만든 질문이라면, 그리고 그 답을 직접 만들어 보고 싶다면, T-Rive에 지원해 주세요.
                    </p>
                </div>

                <div class="space-y-4 text-xs font-light">
                    <div class="p-8 rounded-2xl bg-[#1a1c1e] border border-white/10 text-gray-300">
                        <ul class="space-y-6 pl-1 text-gray-300 break-keep text-sm leading-relaxed">
                            <li class="flex items-start gap-3"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">•</span> <span class="text-[#F3F2F0] text-base leading-snug">사람들은 왜 자신이 좋아하는 일에 오래 몰입하지 못하는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">•</span> <span class="text-[#F3F2F0] text-base leading-snug">AI 시대에도 인간의 경험과 전문성은 어떻게 가치가 될 수 있는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">•</span> <span class="text-[#F3F2F0] text-base leading-snug">미래의 노동은 누구를 위한 것이어야 하는가?</span></li>
                            <li class="flex items-start gap-3 border-t border-white/10 pt-6 mt-6"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">•</span> <strong class="text-[#F3F2F0] text-base leading-snug">이 문제의 답을 직접 만들어 볼 만큼 진지한가요?</strong></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Right Form Area -->
            <div class="lg:col-span-7">
                <div class="p-8 sm:p-10 rounded-3xl bg-[#16181a] border border-white/5">
                    <form id="recruitment-form" onsubmit="handleRecruitSubmit(event)" class="space-y-8">
                        <div class="space-y-5">
                            <div class="space-y-2">
                                <label class="text-sm text-gray-400 block font-medium">이름 / 닉네임 (필수)</label>
                                <input required type="text" id="recruit-name" placeholder="홍길동" class="w-full px-4 py-4 rounded-xl bg-[#121314] border border-white/10 text-[#F3F2F0] placeholder-gray-600 focus:border-[#D4C3A3] focus:outline-none transition text-base">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm text-gray-400 block font-medium">이메일 또는 연락처 (필수)</label>
                                <input required type="text" id="recruit-email" placeholder="example@domain.com 또는 010-0000-0000" class="w-full px-4 py-4 rounded-xl bg-[#121314] border border-white/10 text-[#F3F2F0] placeholder-gray-600 focus:border-[#D4C3A3] focus:outline-none transition text-base">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm text-gray-400 block font-medium">선택 지원 분야 (선택)</label>
                            <select id="recruit-position" class="w-full px-4 py-4 rounded-xl bg-[#121314] border border-white/10 text-[#F3F2F0] focus:border-[#D4C3A3] focus:outline-none transition text-base appearance-none">
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
                            <label class="text-sm text-[#D4C3A3] block font-bold">당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요? (★ 필수 입력)</label>
                            <textarea required rows="4" id="recruit-problem" placeholder="자유롭게 작성해 주세요." class="w-full px-4 py-4 rounded-xl bg-[#121314] border border-white/10 text-[#F3F2F0] placeholder-gray-600 focus:border-[#D4C3A3] focus:outline-none transition text-base resize-none"></textarea>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm text-gray-400 block font-medium">당신의 생각과 작업을 보여줄 수 있는 자료 (선택)</label>
                            <input type="text" id="recruit-link" placeholder="포트폴리오, 블로그, 링크드인, GitHub 등 링크" class="w-full px-4 py-4 rounded-xl bg-[#121314] border border-white/10 text-[#F3F2F0] placeholder-gray-600 focus:border-[#D4C3A3] focus:outline-none transition text-base">
                        </div>

                        <button type="submit" class="w-full bg-[#D4C3A3] text-[#121314] hover:bg-[#F3F2F0] hover:text-[#121314] font-bold py-5 rounded-xl transition-all mt-6 text-lg tracking-wide">
                            T-Rive Team 합류하기
                        </button>
                        
                        <div class="mt-8 text-center sm:text-left border-t border-white/5 pt-6">
                            <p class="text-gray-400 text-[13px] sm:text-sm font-light break-keep leading-relaxed text-justify">
                                우리는 단순한 관심이나 공감보다, 직접 만들고 실행하는 태도를 중요하게 생각합니다. 모든 지원자와 개별 미팅을 진행하지 않으며, 방향성과 문제의식이 맞는 분들께 순차적으로 연락드립니다.
                            </p>
                        </div>
                    </form>

                    <div id="recruit-success-card" class="hidden text-center py-12 relative z-10">
                        <div class="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                            <i class="fa-solid fa-check text-3xl text-[#D4C3A3]"></i>
                        </div>
                        <h4 class="text-2xl font-bold text-[#F3F2F0] mb-3">지원이 완료되었습니다</h4>
                        <p class="text-gray-400 text-base break-keep leading-relaxed">전해 주신 귀중한 생각들을 꼼꼼히 확인한 후,<br>방향성이 맞는 분들께 T-Rive 팀이 개별 연락을 드리겠습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;
const applyRegex = /<!-- 6\. Apply Portal -->[\s\S]*?(?=<!-- Footer -->)/;
html = html.replace(applyRegex, newApplyPortal + '\n');


// 6. Inject the Brand Identity into the Hero section
const brandIdentityHTML = `
        <div class="max-w-4xl mx-auto mt-16 text-left p-8 rounded-3xl bg-[#16181a] border border-white/5 break-keep">
            <h2 class="text-2xl font-bold text-[#F3F2F0] mb-6 flex items-center gap-3"><span class="text-[#D4C3A3]">T-Rive</span> 브랜드 정체성 <span class="text-xs font-normal text-gray-500 font-mono bg-white/5 px-2 py-0.5 rounded">[티라이브]</span></h2>
            
            <div class="space-y-6 text-gray-300 font-light leading-relaxed">
                <div>
                    <h3 class="text-lg font-bold text-white inline-block mr-2">T <span class="text-sm font-normal text-gray-400">(Trydit / Tech / Top-tier / Trust)</span></h3>
                    <p class="mt-2 text-[15px]">지식 공유 플랫폼 Trydit, 외부 리스크를 차단하는 무결한 Tech, 상생을 만들어갈 Top-tier 전문가, 그리고 시스템이 지탱할 안전망 Trust.</p>
                </div>
                
                <div class="border-t border-white/5 pt-6">
                    <h3 class="text-lg font-bold text-white inline-block mr-2">Rive <span class="text-sm font-normal text-gray-400">(Thrive)</span></h3>
                    <p class="mt-2 text-[15px]">과거의 후회와 미래의 불안을 차단한 채, 메이커가 온전히 자신의 관심사에 빠져들어 신바람 나게 활력하며 번창하는(Thrive) 최고의 몰입 상태.</p>
                </div>
            </div>
        </div>
`;

// Insert it right before the flex buttons in hero section
html = html.replace(/<div class="flex flex-col sm:flex-row items-center justify-center gap-4">/, brandIdentityHTML + '\n\n        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">');

// Make sure to remove any remaining glow effects
html = html.replace(/shadow-lg shadow-brand-accent\/20/g, '');

// Make sure CTA says exactly "T-Rive Team 합류하기"
html = html.replace(/지원 채널<\/a>/, 'T-Rive Team 합류하기</a>');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Master Spec 0.6 Fully Applied.');
