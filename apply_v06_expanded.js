const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Update Brand Identity Block in Hero
html = html.replace('지식 공유 플랫폼 Trydit, 외부 리스크를 차단하는 무결한 Tech', '관심사 기반 지식 플랫폼 Trydit, 외부의 소음을 차단하는 무결한 Tech');
html = html.replace('과거의 후회와 미래의 불안을 차단한 채, 메이커가 온전히 자신의 관심사에 빠져들어 신바람 나게 활력하며 번창하는(Thrive) 최고의 몰입 상태.', '과거의 선택에 대한 후회, 현재의 불합리함, 미래의 불안감을 지워낸 자리에서 메이커가 온전히 몰입하여 신바람 나게 활력하고 번창하는(Thrive) 최고의 상태.');

// Add Hero Intro Text
const heroSubheadlineRegex = /(T-Rive는 데이터 인프라\(MONO\), 지속 가능한 연대\(Blood Star\), 그리고 지식 기반 생태계\(Trydit\)를 통해 기술자의 미래를 지키고 경험의 가치를 평생의 자산으로 전환하는 성장 구조를 설계합니다\.<\/p>)/;
const newHeroIntroText = `\n        <p class="text-[15px] sm:text-lg text-gray-400 w-full mx-auto leading-relaxed mt-6 font-light break-keep max-w-3xl">
            "T-Rive 팀은 자신이 선택한 일이 가치 있게 지속 가능한 일이 되도록 현장 근무자와 T-Rive 팀원이 온전히 몰입할 수 있는 환경을 설계합니다. 우리는 누구나 지금 집중하는 일에 몰입하여 더 좋은 지식을 나누고, 그 지식으로 세상을 유익하게 만들어가는 성장 구조를 지향합니다."
        </p>`;
if (!html.includes('T-Rive 팀은 자신이 선택한 일이 가치 있게 지속 가능한 일이 되도록')) {
    html = html.replace(heroSubheadlineRegex, `$1${newHeroIntroText}`);
}


// 2. Replace Intro Section (우리가 해결하려는 근본 문제)
const newIntro = `<!-- 2. Intro Section -->
<section id="intro" class="py-24 border-t border-white/5 bg-[#0a0a0a] relative">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-[#D4C3A3] mb-2">Our Philosophy</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-[#F3F2F0] break-keep tracking-tight">우리가 해결하려는 근본 문제:<br>왜 몰입 환경이 필요한가?</p>
        </div>

        <div class="space-y-8">
            <div class="p-8 sm:p-12 rounded-3xl bg-[#121314] border border-white/5 text-center relative overflow-hidden">
                <p class="text-gray-300 leading-relaxed font-light break-keep text-[17px] sm:text-lg mb-6 max-w-4xl mx-auto">
                    우리는 사람들이 일을 싫어한다고 생각하지 않습니다. 오히려 자신이 중요하게 생각하고 선택한 일에 집중하고 싶어 하지만, 불안정한 환경과 정보의 불균형, 미래에 대한 막연한 불안 때문에 몰입을 지속하지 못할 뿐입니다.
                </p>
                <p class="text-[#D4C3A3] font-bold break-keep text-[17px] sm:text-lg max-w-4xl mx-auto">
                    T-Rive는 이러한 걸림돌을 제거하여 누구나 자신이 선택한 분야에서 흔들림 없이 성장할 수 있는 세상을 설계합니다. 우리의 대상은 특정 직군에 한정되지 않고, 주체적으로 삶을 일구는 모든 이들을 향합니다.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Target 1 -->
                <div class="p-8 rounded-3xl bg-[#16181a] border border-white/5 hover:border-[#D4C3A3]/30 transition">
                    <h3 class="text-lg font-bold text-[#F3F2F0] mb-3 flex items-center gap-2"><i class="fa-solid fa-helmet-safety text-[#D4C3A3]"></i> 땀 흘리는 현장 근무자</h3>
                    <p class="text-gray-400 text-[15px] font-light leading-relaxed break-keep">노동의 숭고함이 금융과 제도권 가치 인정에서 소외되지 않도록 돕습니다.</p>
                </div>
                <!-- Target 2 -->
                <div class="p-8 rounded-3xl bg-[#16181a] border border-white/5 hover:border-[#D4C3A3]/30 transition">
                    <h3 class="text-lg font-bold text-[#F3F2F0] mb-3 flex items-center gap-2"><i class="fa-solid fa-users-gear text-[#D4C3A3]"></i> T-Rive를 만들어가는 모든 팀원</h3>
                    <p class="text-gray-400 text-[15px] font-light leading-relaxed break-keep">소모적인 행정과 미래의 불안 없이 오직 제품 빌딩에만 장기적으로 몰입할 수 있는 안전지대를 구축합니다.</p>
                </div>
                <!-- Target 3 -->
                <div class="p-8 rounded-3xl bg-[#16181a] border border-white/5 hover:border-[#D4C3A3]/30 transition">
                    <h3 class="text-lg font-bold text-[#F3F2F0] mb-3 flex items-center gap-2"><i class="fa-solid fa-palette text-[#D4C3A3]"></i> 취미를 즐기는 사람</h3>
                    <p class="text-gray-400 text-[15px] font-light leading-relaxed break-keep">단순한 오락 소비가 아닌, 자신만의 깊은 관심사를 가치 있는 지식 자산으로 전환하게 만듭니다.</p>
                </div>
                <!-- Target 4 -->
                <div class="p-8 rounded-3xl bg-[#16181a] border border-white/5 hover:border-[#D4C3A3]/30 transition">
                    <h3 class="text-lg font-bold text-[#F3F2F0] mb-3 flex items-center gap-2"><i class="fa-solid fa-chart-line text-[#D4C3A3]"></i> 투자와 경제 활동에 관심 있는 사람</h3>
                    <p class="text-gray-400 text-[15px] font-light leading-relaxed break-keep">시장의 무분별한 잡음 속에서 가치 있는 정보를 획득하고 정교한 지식의 공유를 통해 성장합니다.</p>
                </div>
            </div>
        </div>
    </div>
</section>`;
const introRegex = /<!-- 2\. Intro Section -->[\s\S]*?(?=<!-- 3\. Project Roadmap -->)/;
html = html.replace(introRegex, newIntro + '\n\n');


// 3. Replace Roadmap Section (The Milestone)
const newRoadmap = `<!-- 3. Project Roadmap -->
<section id="roadmap" class="py-24 border-t border-white/5 relative bg-[#121314]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-[#D4C3A3] mb-2">The Milestone</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-[#F3F2F0] break-keep tracking-tight">마스터 여정의 세 단계</p>
        </div>

        <div class="space-y-12">
            <!-- Phase 1: MONO -->
            <div class="p-8 md:p-12 rounded-3xl bg-[#1a1c1e] border-2 border-[#D4C3A3]/30 relative shadow-md overflow-hidden">
                <span class="absolute top-6 right-6 md:top-8 md:right-8 text-[11px] font-bold text-[#121314] px-3 py-1 rounded bg-[#D4C3A3] tracking-widest font-mono">Phase 1</span>
                <div>
                    <h3 class="text-3xl sm:text-4xl font-bold text-[#F3F2F0] mb-3 tracking-tight">MONO</h3>
                    <p class="text-[#D4C3A3] text-[15px] sm:text-base font-bold mb-6">현재의 미션</p>
                    <p class="text-gray-300 text-[15px] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white/5">
                        우리는 이 비전을 가장 먼저 현장 기술자 영역에서 시작하고 있습니다. 기술자들은 사회와 산업을 움직이는 핵심 역할을 수행하지만 금융, 경력 관리, 기술 가치 인정에서 큰 제약을 겪고 있습니다.
                    </p>
                    
                    <ul class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <li>
                            <strong class="text-[#F3F2F0] block mb-3 text-[15px]"><span class="text-[#D4C3A3] mr-1">■</span> 가치의 인정과 금융망 연결</strong>
                            <p class="text-gray-400 text-sm break-keep leading-relaxed">휘발되던 현장의 출역 기록을 투명한 데이터 장부로 축적하여 대안 신용등급(CB)으로 가공, 기술자들이 언제 어디서든 자신의 정당한 가치로 일하고 금융에서 소외되지 않도록 돕습니다.</p>
                        </li>
                        <li>
                            <strong class="text-[#F3F2F0] block mb-3 text-[15px]"><span class="text-[#D4C3A3] mr-1">■</span> 피지털 AGI 시대 대비</strong>
                            <p class="text-gray-400 text-sm break-keep leading-relaxed">앞으로 다가올 피지털 시대에도 물리적인 현장의 땀방울과 아날로그 전문성이 가치를 잃지 않고 디지털 자산과 결합하여 보호받을 수 있도록 아키텍처를 설계합니다.</p>
                        </li>
                        <li>
                            <strong class="text-[#F3F2F0] block mb-3 text-[15px]"><span class="text-[#D4C3A3] mr-1">■</span> 팀원과 제품의 동시 성장</strong>
                            <p class="text-gray-400 text-sm break-keep leading-relaxed">MONO를 만드는 T-Rive 팀원들 역시 MONO의 비즈니스 성장과 발맞추어, 자신의 기여를 바탕으로 흔들림 없이 제품 빌딩에 몰입할 수 있는 환경을 동시에 구축해 나갑니다.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Phase 2: Blood Star -->
            <div class="p-8 md:p-12 rounded-3xl bg-[#16181a] border border-white/5 relative hover:border-white/20 transition">
                <span class="absolute top-6 right-6 md:top-8 md:right-8 text-[11px] font-bold text-gray-400 px-3 py-1 rounded bg-white/5 tracking-widest font-mono">Phase 2</span>
                <div>
                    <h3 class="text-3xl sm:text-4xl font-bold text-[#F3F2F0] mb-3 flex items-center gap-3 tracking-tight">Blood Star <span class="text-[12px] font-normal text-gray-500 font-mono bg-white/5 px-2 py-1 rounded border border-white/5 mt-1">가칭</span></h3>
                    <p class="text-[#F3F2F0] text-[15px] sm:text-base font-bold mb-6">몰입이 지속 가능한 정예 연합</p>
                    <p class="text-gray-400 text-[15px] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white/5">
                        MONO의 기업가치가 치솟고 비즈니스 목표가 달성된 이후에도, T-Rive 팀이 영속적으로 지치지 않고 몰입할 수 있는 환경을 유지하기 위해 설계된 프로젝트입니다.
                    </p>
                    
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <li>
                            <strong class="text-[#F3F2F0] block mb-3 text-[15px]"><span class="text-gray-500 mr-1">■</span> 지속 가능한 정예 연합</strong>
                            <p class="text-gray-500 text-sm break-keep leading-relaxed">한 개의 스타트업이 일류 전문가를 무리하게 전임 독점 고용하는 비효율을 깨고, 10개의 스타트업이 일류 전문가 1명의 보상 체계(1/10 비용)를 쉐어하며 유기적으로 공조합니다.</p>
                        </li>
                        <li>
                            <strong class="text-[#F3F2F0] block mb-3 text-[15px]"><span class="text-gray-500 mr-1">■</span> 보상의 영속성</strong>
                            <p class="text-gray-500 text-sm break-keep leading-relaxed">회사의 단계적 팽창에 따라 초기 크루와 전문가가 성장의 과실에서 배제되는 모순을 해결하고, 안전하고 투명하게 에스크로된 지분 분배를 보장하여 단단한 몰입형 정예 팀으로 동반 성장합니다.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Phase 3: Trydit -->
            <div class="p-8 md:p-12 rounded-3xl bg-[#16181a] border border-white/5 relative hover:border-white/20 transition">
                <span class="absolute top-6 right-6 md:top-8 md:right-8 text-[11px] font-bold text-gray-400 px-3 py-1 rounded bg-white/5 tracking-widest font-mono">Phase 3</span>
                <div>
                    <h3 class="text-3xl sm:text-4xl font-bold text-[#F3F2F0] mb-3 flex items-center gap-3 tracking-tight">Trydit <span class="text-[12px] font-normal text-gray-500 font-mono bg-white/5 px-2 py-1 rounded border border-white/5 mt-1">가칭</span></h3>
                    <p class="text-[#F3F2F0] text-[15px] sm:text-base font-bold mb-6">지식과 커뮤니티 기반의 크리에이터 플랫폼</p>
                    <p class="text-gray-400 text-[15px] sm:text-lg font-light break-keep leading-relaxed mb-10 pb-10 border-b border-white/5">
                        자기가 집중하는 분야의 정보를 지식화하여 제공받고, 공통의 관심사를 가진 사람들이 정보를 공유하고 대화할 수 있는 지능형 라이프스타일 OS이자 커뮤니티 플랫폼입니다.
                    </p>
                    
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <li>
                            <strong class="text-[#F3F2F0] block mb-3 text-[15px]"><span class="text-gray-500 mr-1">■</span> 개인 맞춤형 정보 선택</strong>
                            <p class="text-gray-500 text-sm break-keep leading-relaxed">사용자는 단순한 소비자에 머무는 것이 아니라, 개인화된 메신저 기능과 자신이 참여하고 싶은 채널, 제공받고 싶은 정보를 주체적으로 선택합니다.</p>
                        </li>
                        <li>
                            <strong class="text-[#F3F2F0] block mb-3 text-[15px]"><span class="text-gray-500 mr-1">■</span> 모두가 크리에이터가 되는 세상</strong>
                            <p class="text-gray-500 text-sm break-keep leading-relaxed">건설, 부동산, 투자, 스포츠, 기술, 취미, 창작 등 깊게 탐구하는 분야의 실전 노하우를 공유합니다. 기술을 통해 더 좋은 지식을 생산하는 당당한 '크리에이터'가 되어 자립하고, 그 기여만큼 합당한 가치를 환원받아 세상을 더 유익하게 만듭니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>`;
const roadmapRegex = /<!-- 3\. Project Roadmap -->[\s\S]*?(?=<!-- 4\. Team & Culture -->)/;
html = html.replace(roadmapRegex, newRoadmap + '\n\n');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Script completed.');
