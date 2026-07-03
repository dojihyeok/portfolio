const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const newIntro = `<!-- 2. Intro Section -->
<section id="intro" class="py-24 border-t border-white/5 bg-slate-950/40 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent font-serif mb-2">Our Philosophy</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">사람이 자신이 선택한 일에<br>오래 몰입할 수 있는 환경</p>
        </div>

        <div class="space-y-12">
            <div class="p-8 sm:p-10 rounded-3xl bg-brand-card/30 border border-white/5 text-left relative overflow-hidden group">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2"><i class="fa-solid fa-triangle-exclamation text-brand-accent"></i> 왜 몰입 환경이 필요한가</h3>
                <p class="text-gray-300 leading-relaxed font-light break-keep text-lg mb-4">
                    우리는 사람들이 일을 싫어한다고 생각하지 않습니다. 오히려 자신이 중요하게 생각하는 일에 집중하고 싶지만, 불안정한 환경과 정보의 부족, 미래에 대한 불안 때문에 몰입을 지속하지 못하는 경우가 많다고 생각합니다.
                </p>
                <p class="text-gray-300 leading-relaxed font-light break-keep text-lg">
                    T-Rive는 이러한 문제를 해결하고, 누구나 자신이 선택한 분야에서 지속적으로 성장할 수 있는 환경을 만드는 것을 목표로 합니다.
                </p>
            </div>
            
            <div class="p-8 sm:p-10 rounded-3xl bg-brand-card/30 border border-white/5 text-left relative overflow-hidden group">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2"><i class="fa-solid fa-users text-brand-emerald"></i> 모두를 위한 몰입 인프라</h3>
                <p class="text-gray-300 leading-relaxed font-light break-keep text-lg mb-4">
                    이 대상은 특정 직군에 한정되지 않습니다. 현장에서 땀 흘리는 기술자, T-Rive를 만들어가는 팀원, 자신만의 취미를 가진 사람, 투자와 경제 활동에 관심 있는 사람, 새로운 분야를 배우고 싶은 사람까지.
                </p>
                <p class="text-gray-300 leading-relaxed font-light break-keep text-lg">
                    모두가 자신이 중요하게 생각하는 일에 온전히 몰입할 수 있어야 합니다.
                </p>
            </div>
        </div>
    </div>
</section>`;

const newRoadmap = `<!-- 3. Project Roadmap -->
<section id="roadmap" class="py-24 border-t border-white/5 relative bg-brand-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent font-serif mb-2">Project Roadmap</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">몰입을 완성하기 위한 장기적인 여정</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- MONO -->
            <div class="p-8 rounded-3xl bg-brand-card/40 border-2 border-brand-accent/30 flex flex-col justify-between relative shadow-lg">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-accent px-2 py-0.5 rounded bg-brand-accent/10 tracking-widest">Phase 1</span>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">MONO</h3>
                    <p class="text-brand-accent text-sm font-bold mb-6">현장 기술자의 몰입</p>
                    <p class="text-gray-300 text-sm font-light break-keep leading-relaxed mb-4">
                        T-Rive는 이 비전을 가장 먼저 현장 기술자 영역에서 시작합니다. 사회를 움직이는 중요한 역할을 수행하지만 금융, 경력 관리 측면에서 제약을 받는 현장 기술자들이 자신의 경험과 성실함을 인정받고 일할 수 있는 환경을 만듭니다.
                    </p>
                    <ul class="space-y-4 text-sm text-gray-400 font-light break-keep border-t border-white/10 pt-4">
                        <li><strong class="text-white">목적:</strong> 피지털 AGI 시대에도 기술자의 전문성이 큰 가치를 가지도록 지원</li>
                        <li><strong class="text-white">팀의 몰입:</strong> MONO를 만드는 팀원 역시 자신의 전문성으로 장기적 몰입 환경 조성</li>
                    </ul>
                </div>
            </div>

            <!-- Blood Star -->
            <div class="p-8 rounded-3xl bg-brand-card/20 border border-white/5 flex flex-col justify-between relative hover:border-brand-violet/20 transition">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-violet px-2 py-0.5 rounded bg-brand-violet/10 tracking-widest">Phase 2</span>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Blood Star</h3>
                    <p class="text-brand-violet text-sm font-bold mb-6">지속 가능한 전문가 성장</p>
                    <p class="text-gray-300 text-sm font-light break-keep leading-relaxed mb-4">
                        창업가와 빌더, 전문가들이 각자의 전문성을 유지하면서도 함께 성장할 수 있는 구조를 고민하는 프로젝트입니다. 회사의 성장만이 아니라 함께 만들어 가는 사람들의 기여가 연결됩니다.
                    </p>
                    <ul class="space-y-4 text-sm text-gray-400 font-light break-keep border-t border-white/10 pt-4">
                        <li><strong class="text-white">목적:</strong> 전문가들이 독립성을 잃지 않고 프로젝트의 성장에 유연하게 기여</li>
                        <li><strong class="text-white">기대 효과:</strong> 회사의 성장과 개인의 성장이 지속적으로 연결되는 연대 구조 구축</li>
                    </ul>
                </div>
            </div>

            <!-- Trydit -->
            <div class="p-8 rounded-3xl bg-brand-card/20 border border-white/5 flex flex-col justify-between relative hover:border-brand-emerald/20 transition">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-emerald px-2 py-0.5 rounded bg-brand-emerald/10 tracking-widest">Phase 3</span>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Trydit</h3>
                    <p class="text-brand-emerald text-sm font-bold mb-6">관심 기반 지식 플랫폼</p>
                    <p class="text-gray-300 text-sm font-light break-keep leading-relaxed mb-4">
                        사용자가 자신이 참여하고 싶은 정보 채널을 선택하고, 지식을 공유하며, 모두가 크리에이터가 되어 자신의 경험을 축적할 수 있는 커뮤니티 플랫폼입니다.
                    </p>
                    <ul class="space-y-4 text-sm text-gray-400 font-light break-keep border-t border-white/10 pt-4">
                        <li><strong class="text-white">대상:</strong> 건설, 부동산, 투자, 스포츠, 기술, 창작 등 관심사를 가진 모든 사람</li>
                        <li><strong class="text-white">기대 효과:</strong> 단순 소비를 넘어 개인의 지식과 경험이 스스로의 자산이 되는 환경</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>`;

const introRegex = /<!-- 2\. Intro Section -->[\s\S]*?(?=<!-- 3\. Project Roadmap -->)/;
const roadmapRegex = /<!-- 3\. Project Roadmap -->[\s\S]*?(?=<!-- 4\. Team & Culture -->)/;

html = html.replace(introRegex, newIntro + '\n\n');
html = html.replace(roadmapRegex, newRoadmap + '\n\n');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Successfully updated copy');
