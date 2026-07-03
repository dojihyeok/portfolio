const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const newBodyContent = `
<!-- Header (Navigation) -->
<header class="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center font-black text-xl text-white tracking-wider shadow-lg">
                T
            </div>
            <span class="font-bold text-lg tracking-wider text-white">T-Rive</span>
        </div>
        <nav class="hidden lg:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#hero" class="hover:text-white transition">홈</a>
            <a href="#intro" class="hover:text-white transition">철학</a>
            <a href="#roadmap" class="hover:text-white transition">로드맵</a>
            <a href="#team" class="hover:text-white transition">팀 문화</a>
            <a href="#creator" class="hover:text-white transition">크리에이터</a>
            <a href="#apply-portal" class="hover:text-white transition flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>지원 채널</a>
        </nav>
        
        <div class="lg:hidden">
            <button id="mobile-menu-btn" class="text-gray-300 hover:text-white focus:outline-none">
                <i class="fa-solid fa-bars text-2xl"></i>
            </button>
        </div>

        <div class="hidden lg:block">
            <a href="#apply-portal" class="px-5 py-2.5 rounded-xl bg-brand-accent text-brand-dark hover:bg-brand-emerald hover:text-brand-dark hover:opacity-90 text-white text-sm font-semibold transition inline-flex items-center gap-2">
                T-Rive Team 합류하기 <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
        </div>
    </div>
</header>

<!-- Mobile Menu Overlay -->
<div id="mobile-menu" class="hidden fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-lg">
    <div class="flex justify-end p-6">
        <button id="mobile-close-btn" class="text-gray-300 hover:text-white">
            <i class="fa-solid fa-xmark text-3xl"></i>
        </button>
    </div>
    <div class="flex flex-col items-center justify-center h-full space-y-8 pb-20">
        <a href="#hero" class="mobile-link text-2xl font-bold text-gray-300 transition">홈</a>
        <a href="#intro" class="mobile-link text-2xl font-bold text-gray-300 transition">철학</a>
        <a href="#roadmap" class="mobile-link text-2xl font-bold text-gray-300 transition">로드맵</a>
        <a href="#team" class="mobile-link text-2xl font-bold text-gray-300 transition">팀 문화</a>
        <a href="#creator" class="mobile-link text-2xl font-bold text-gray-300 transition">크리에이터</a>
        <a href="#apply-portal" class="mobile-link text-2xl font-bold text-brand-accent transition">T-Rive Team 합류하기</a>
    </div>
</div>

<!-- 1. Hero Section -->
<section id="hero" class="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 mb-8 backdrop-blur-sm">
            <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span>T-Rive : Mission</span>
        </div>
        
        <h1 class="text-[28px] sm:text-4xl lg:text-[52px] leading-[1.4] font-extrabold tracking-tight sm:leading-[1.4] mb-8 break-keep max-w-5xl mx-auto w-full text-white">
            좋아하는 일에<br>더 오래 몰입할 수 있는 세상
        </h1>

        <p class="text-[16px] sm:text-xl text-gray-300 w-full mx-auto leading-relaxed mb-12 font-medium break-keep max-w-2xl">
            T-Rive는 MONO, Blood Star, Trydit을 통해 기술자의 미래와 경험의 가치를 존중하며, 함께 성장하는 구조를 설계합니다.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#intro" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold transition border border-white/10 flex items-center justify-center gap-2">
                T-Rive 철학 보기 <i class="fa-solid fa-arrow-down text-xs"></i>
            </a>
            <a href="#apply-portal" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-dark hover:bg-brand-emerald hover:text-brand-dark text-white font-semibold transition hover:opacity-90 shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2">
                T-Rive Team 합류하기 <i class="fa-solid fa-rocket text-brand-dark text-xs"></i>
            </a>
        </div>
    </div>
</section>

<!-- 2. Intro Section -->
<section id="intro" class="py-24 border-t border-white/5 bg-slate-950/40 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent font-serif mb-2">Our Philosophy</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">AI 시대의 가치와 기회를 함께 만드는 구조</p>
        </div>

        <div class="space-y-12">
            <div class="p-8 sm:p-10 rounded-3xl bg-brand-card/30 border border-white/5 text-left relative overflow-hidden group">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2"><i class="fa-solid fa-triangle-exclamation text-brand-accent"></i> 우리가 마주한 구조적 문제</h3>
                <p class="text-gray-300 leading-relaxed font-light break-keep text-lg">
                    자신의 일에 온전히 몰입하고 싶어도, 우리는 종종 현실의 벽에 부딪힙니다. 정규직이 아니라는 이유로 사회적 신뢰를 얻지 못하거나, 조직이 커질수록 본업보다는 관리와 행정에 치이게 됩니다. 피지컬 AI 시대의 도래는 기술의 가치가 언제든 대체될 수 있다는 불안감을 심어주며, 노동의 소외 현상을 가속화합니다.
                </p>
            </div>
            
            <div class="p-8 sm:p-10 rounded-3xl bg-brand-card/30 border border-white/5 text-left relative overflow-hidden group">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2"><i class="fa-solid fa-hammer text-brand-emerald"></i> T-Rive의 해결 방향</h3>
                <p class="text-gray-300 leading-relaxed font-light break-keep text-lg">
                    우리는 기술자가 생산 현장에서 축적한 진짜 경험이 가장 강력한 무기라고 믿습니다. T-Rive는 이러한 암묵지를 데이터 자산화하여 구조적 불안을 없앱니다. AI가 인간을 몰아내는 것이 아니라, AI의 생산성 향상 과실을 기술자와 창업가가 함께 소유하고 분배받는 연대의 생태계를 구축합니다.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- 3. Project Roadmap -->
<section id="roadmap" class="py-24 border-t border-white/5 relative bg-brand-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent font-serif mb-2">Project Roadmap</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">장기적인 궤적으로 세상을 바꿉니다</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- MONO -->
            <div class="p-8 rounded-3xl bg-brand-card/40 border-2 border-brand-accent/30 flex flex-col justify-between relative shadow-lg">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-accent px-2 py-0.5 rounded bg-brand-accent/10 tracking-widest">Phase 1</span>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">MONO</h3>
                    <p class="text-brand-accent text-sm font-bold mb-6">현장 근무자의 몰입</p>
                    <ul class="space-y-4 text-sm text-gray-300 font-light break-keep">
                        <li><strong class="text-white">목적:</strong> 현장 기술자의 경력 데이터를 금융/사회적 자산으로 변환</li>
                        <li><strong class="text-white">대상:</strong> 조선, 플랜트, 건설 등 피지컬 산업의 숙련 기술자</li>
                        <li><strong class="text-white">기대 효과:</strong> 정규직과 동일한 수준의 금융 신뢰 획득 및 장기적인 성장 기반 마련</li>
                    </ul>
                </div>
            </div>

            <!-- Blood Star -->
            <div class="p-8 rounded-3xl bg-brand-card/20 border border-white/5 flex flex-col justify-between relative hover:border-brand-violet/20 transition">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-violet px-2 py-0.5 rounded bg-brand-violet/10 tracking-widest">Phase 2</span>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Blood Star</h3>
                    <p class="text-brand-violet text-sm font-bold mb-6">지속 가능한 전문가 공유</p>
                    <ul class="space-y-4 text-sm text-gray-300 font-light break-keep">
                        <li><strong class="text-white">목적:</strong> 인프라/보안 등 비본질적 업무의 비용 분산과 리스크 방어</li>
                        <li><strong class="text-white">대상:</strong> 본업에 집중하고 싶은 창업가 및 유연하게 기여할 최고급 전문가 그룹</li>
                        <li><strong class="text-white">기대 효과:</strong> 1/10 비용으로 최상위 인재와 협업하며 제품의 압도적 퀄리티 달성</li>
                    </ul>
                </div>
            </div>

            <!-- Trydit -->
            <div class="p-8 rounded-3xl bg-brand-card/20 border border-white/5 flex flex-col justify-between relative hover:border-brand-emerald/20 transition">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-emerald px-2 py-0.5 rounded bg-brand-emerald/10 tracking-widest">Phase 3</span>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Trydit</h3>
                    <p class="text-brand-emerald text-sm font-bold mb-6">관심 기반 지식 생태계</p>
                    <ul class="space-y-4 text-sm text-gray-300 font-light break-keep">
                        <li><strong class="text-white">목적:</strong> 개인의 고유한 경험과 지식을 자산화하는 개인형 대시보드 구축</li>
                        <li><strong class="text-white">대상:</strong> 라이프스타일 봇을 운영하고 자신의 취향을 뾰족하게 만드는 모든 이</li>
                        <li><strong class="text-white">기대 효과:</strong> 취미와 관심사가 곧 지속 가능한 보상으로 연결되는 일상의 구조화</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 4. Team & Culture -->
<section id="team" class="py-24 relative bg-slate-950 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent font-serif mb-2">Team & Culture</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">이런 가치를 공유하며 일합니다</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 rounded-2xl bg-brand-card/30 border border-white/5 flex gap-4 items-start">
                <div class="mt-1 text-brand-accent text-xl"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-2">문제의식 중심</h3>
                    <p class="text-gray-400 text-sm font-light break-keep">표면적인 현상보다 '왜 이 문제가 발생했는가'라는 본질을 파고듭니다. 남들이 당연하게 여기는 불편함을 외면하지 않습니다.</p>
                </div>
            </div>
            
            <div class="p-6 rounded-2xl bg-brand-card/30 border border-white/5 flex gap-4 items-start">
                <div class="mt-1 text-brand-emerald text-xl"><i class="fa-solid fa-person-running"></i></div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-2">실행 중심</h3>
                    <p class="text-gray-400 text-sm font-light break-keep">탁상공론과 완벽주의를 경계합니다. 빠르게 만들고, 현장에서 직접 부딪혀 검증하며, 실패를 통해 정답을 찾아갑니다.</p>
                </div>
            </div>

            <div class="p-6 rounded-2xl bg-brand-card/30 border border-white/5 flex gap-4 items-start">
                <div class="mt-1 text-brand-violet text-xl"><i class="fa-solid fa-telescope"></i></div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-2">장기적 관점</h3>
                    <p class="text-gray-400 text-sm font-light break-keep">단기적인 지표나 화려한 포장에 흔들리지 않습니다. 시간이 걸리더라도 구조적인 모순을 해결하는 견고한 시스템을 만듭니다.</p>
                </div>
            </div>

            <div class="p-6 rounded-2xl bg-brand-card/30 border border-white/5 flex gap-4 items-start">
                <div class="mt-1 text-gray-300 text-xl"><i class="fa-solid fa-handshake"></i></div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-2">상호 존중과 신뢰</h3>
                    <p class="text-gray-400 text-sm font-light break-keep">연차나 직급에 기대지 않으며 오직 명확한 논리로 대화합니다. 결과에 대한 깊은 신뢰를 바탕으로 자율적인 몰입을 지원합니다.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 5. Creator Section -->
<section id="creator" class="py-24 border-t border-white/5 relative bg-brand-dark">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent font-serif mb-2">Creator Story</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">문제를 직접 해결하는 사람들</p>
        </div>

        <div class="p-8 sm:p-12 rounded-3xl bg-brand-card/40 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-10">
            <div class="flex-shrink-0 text-center">
                <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/10 mx-auto shadow-lg">
                    <img src="https://dojiung.com/profile.png" alt="Founder" class="w-full h-full object-cover grayscale opacity-90">
                </div>
                <strong class="block text-white text-lg mt-4">이윤혁</strong>
                <span class="block text-xs text-gray-500 mt-1">Tech Builder</span>
            </div>
            <div class="flex-1 text-gray-300 text-[15px] sm:text-lg font-light leading-relaxed break-keep">
                <p class="mb-4">
                    금융, 제조 인프라에서 수천억 규모의 시스템을 설계하면서 목격한 것은 언제나 파편화되고 버려지는 현장의 진짜 데이터였습니다. 거대한 시스템 속에서 정작 기술자의 가치는 축적되지 않았습니다.
                </p>
                <p>
                    이 문제를 풀기 위해 현장의 서류 작업을 앱으로 통합하고 분산 트랜잭션과 실시간 데이터 파이프라인을 구축하여 증명했습니다. 직함에 머물지 않고 코드를 통해 진짜 문제를 해결하는 것, 그것이 T-Rive의 시작이었습니다.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- 6. Apply Portal -->
<section id="apply-portal" class="py-24 relative bg-brand-dark border-t border-white/5 overflow-hidden">
    <div class="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div class="lg:col-span-5 space-y-8">
                <div>
                    <span class="px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-accent text-xs font-semibold border border-brand-emerald/20 tracking-widest font-mono">Co-founding Movement</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-4 break-keep leading-tight">Join T-Rive</h2>
                    <p class="text-gray-300 font-light mt-6 text-lg leading-relaxed break-keep">
                        우리는 직원을 채용하는 것이 아니라,<br>
                        <strong class="text-white font-bold">함께 창업할 사람을 찾고 있습니다.</strong><br><br>
                        "우리는 단순한 관심보다 직접 만들고 실행하는 태도를 중요하게 생각합니다."
                    </p>
                </div>

                <div class="space-y-4 text-xs font-light">
                    <div class="p-5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                        <p class="font-semibold text-brand-accent mb-4 text-sm"><i class="fa-solid fa-circle-question mr-1"></i> 지원 전 스스로에게 질문해 보세요:</p>
                        <ul class="space-y-3 pl-2 text-gray-400 break-keep text-sm leading-relaxed">
                            <li><strong class="text-white"><i class="fa-solid fa-angle-right text-brand-accent text-xs mr-1"></i></strong> 어떤 문제를 해결하고 싶은가요?</li>
                            <li><strong class="text-white"><i class="fa-solid fa-angle-right text-brand-accent text-xs mr-1"></i></strong> 왜 T-Rive에 관심을 가지게 되었나요?</li>
                            <li><strong class="text-white"><i class="fa-solid fa-angle-right text-brand-accent text-xs mr-1"></i></strong> 기획이나 아이디어를 넘어, 직접 만들어 본 경험이 있나요?</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7">
                <div class="p-8 rounded-3xl bg-brand-card/40 border border-white/5 backdrop-blur-md">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <i class="fa-solid fa-paper-plane text-brand-accent"></i> T-Rive Team 합류하기
                    </h3>

                    <form id="recruitment-form" onsubmit="handleRecruitSubmit(event)" class="space-y-5">
                        <div class="space-y-4">
                            <div class="space-y-2">
                                <label class="text-xs text-gray-400 block font-medium">이름 / 닉네임 (필수)</label>
                                <input required type="text" id="recruit-name" placeholder="홍길동" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-xs text-gray-400 block font-medium">이메일 (필수)</label>
                                    <input required type="email" id="recruit-email" placeholder="example@domain.com" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-xs text-gray-400 block font-medium">전화번호 (필수)</label>
                                    <input required type="tel" id="recruit-phone" placeholder="010-0000-0000" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                                </div>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-xs text-gray-400 block font-medium">선택 지원 분야 (선택)</label>
                            <select id="recruit-position" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white focus:border-brand-accent focus:outline-none transition text-sm appearance-none">
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
                            <label class="text-xs text-brand-accent block font-bold">당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요? (★ 필수 입력)</label>
                            <textarea required rows="4" id="recruit-problem" placeholder="미입력 시 지원서 전송이 불가합니다." class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-emerald focus:outline-none transition text-sm resize-none"></textarea>
                        </div>

                        <div class="space-y-2">
                            <label class="text-xs text-gray-400 block font-medium">당신의 생각과 작업을 보여줄 수 있는 자료 (선택)</label>
                            <input type="text" id="recruit-link" placeholder="포트폴리오, 블로그, 링크드인, GitHub 등 링크" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                        </div>

                        <button type="submit" class="w-full bg-brand-accent text-brand-dark hover:bg-brand-emerald hover:text-brand-dark hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/20 mt-4">
                            T-Rive Team 합류하기
                        </button>
                    </form>

                    <div id="recruit-success-card" class="hidden text-center py-12 relative z-10">
                        <div class="w-16 h-16 mx-auto bg-brand-emerald/20 rounded-full flex items-center justify-center mb-6">
                            <i class="fa-solid fa-check text-2xl text-brand-accent"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-2">지원이 완료되었습니다</h4>
                        <p class="text-gray-400 text-sm break-keep">전해 주신 귀중한 생각들을 꼼꼼히 확인한 후, 방향성이 맞는 분들께 T-Rive 팀이 개별 연락을 드리겠습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const headMatch = html.match(/[\s\S]*?(?=<!-- Header \(Navigation\) -->)/);
const footerMatch = html.match(/(<!-- Footer -->[\s\S]*)/);

if (headMatch && footerMatch) {
    const newHtml = headMatch[0] + newBodyContent + footerMatch[0];
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', newHtml);
    console.log("Successfully rebuilt entire body.");
} else {
    console.log("Error matching sections.");
}
