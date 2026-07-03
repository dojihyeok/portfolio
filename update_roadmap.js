const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const newRoadmap = `<!-- 3. Project Roadmap -->
<section id="roadmap" class="py-24 border-t border-white/5 relative bg-[#121314]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent font-serif mb-2">Project Roadmap</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-[#F3F2F0] break-keep font-serif tracking-tight">몰입을 완성하기 위한 장기적인 여정</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- MONO -->
            <div class="p-8 rounded-3xl bg-brand-card/30 border-2 border-brand-accent/30 flex flex-col relative shadow-lg">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-accent px-2 py-0.5 rounded bg-brand-accent/10 tracking-widest font-mono">CURRENT MISSION</span>
                <div>
                    <h3 class="text-2xl font-bold text-[#F3F2F0] mb-2 font-serif">MONO</h3>
                    <p class="text-brand-accent text-sm font-bold mb-6">현장 근무자의 몰입</p>
                    <p class="text-gray-300 text-sm font-light break-keep leading-relaxed mb-6">
                        거대한 비전을 한 번에 만들려고 하지 않습니다. 가장 먼저 땀 흘려 가치를 창출하는 조선, 플랜트 현장 기술노동자들이 겪는 금융과 기술 소외를 해결하는 데이터 인프라 <strong class="text-[#F3F2F0] font-semibold">MONO</strong>를 통해 첫 번째 몰입을 성공시킵니다.
                    </p>
                    <div class="inline-block px-3 py-1 bg-brand-emerald/10 border border-brand-emerald/20 rounded text-xs text-brand-emerald font-mono font-medium tracking-wide">
                        <i class="fa-solid fa-check mr-1"></i> 설계 및 MVP 구현 완료
                    </div>
                </div>
            </div>

            <!-- Blood Star -->
            <div class="p-8 rounded-3xl bg-brand-card/10 border border-white/5 flex flex-col relative hover:border-brand-violet/20 transition">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-gray-400 px-2 py-0.5 rounded bg-white/5 tracking-widest font-mono">NEXT MISSION</span>
                <div>
                    <h3 class="text-2xl font-bold text-[#F3F2F0] mb-2 flex items-center gap-2 font-serif">Blood Star <span class="text-[11px] font-normal text-gray-500 font-sans tracking-normal bg-white/5 px-2 py-0.5 rounded border border-white/5 mt-1">가칭</span></h3>
                    <p class="text-brand-violet text-sm font-bold mb-6">지속 가능한 전문가 공유 구조</p>
                    <p class="text-gray-300 text-sm font-light break-keep leading-relaxed">
                        <em class="text-gray-500 block mb-4 font-serif italic tracking-wide">* 현재 구체적인 서비스 시작 전 가동을 준비 중인 프로젝트입니다.</em>
                        최고의 전문가 서포트 조직이 유연하게 결합하여 리스크를 방어하는 미래형 연대 구조입니다. 10개의 스타트업이 일류 전문가 1명의 보상 체계를 분담하며, 창업가는 오직 본질에만 몰입하는 결합형 협력망의 밑바닥을 함께 설계할 동료를 기다립니다.
                    </p>
                </div>
            </div>

            <!-- Trydit -->
            <div class="p-8 rounded-3xl bg-brand-card/10 border border-white/5 flex flex-col relative hover:border-brand-emerald/20 transition">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-gray-400 px-2 py-0.5 rounded bg-white/5 tracking-widest font-mono">LIFESTYLE OS</span>
                <div>
                    <h3 class="text-2xl font-bold text-[#F3F2F0] mb-2 flex items-center gap-2 font-serif">Trydit <span class="text-[11px] font-normal text-gray-500 font-sans tracking-normal bg-white/5 px-2 py-0.5 rounded border border-white/5 mt-1">가칭</span></h3>
                    <p class="text-brand-emerald text-sm font-bold mb-6">관심 기반 지식 생태계</p>
                    <p class="text-gray-300 text-sm font-light break-keep leading-relaxed">
                        <em class="text-gray-500 block mb-4 font-serif italic tracking-wide">* T-Rive가 최종적으로 도달할 장기 비전 단계의 가칭 프로젝트입니다.</em>
                        개인이 축적한 경험과 관심사 지식이 사라지지 않고 온전히 스스로의 영속적인 자산이 되도록 만드는 대시보드 인프라입니다. 이 가슴 뛰는 미래 OS의 첫 단추를 채우는 아이디어를 함께 주조해 나갑니다.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>`;

const roadmapRegex = /<!-- 3\. Project Roadmap -->[\s\S]*?(?=<!-- 4\. Team & Culture -->)/;
html = html.replace(roadmapRegex, newRoadmap + '\n\n');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Roadmap updated with v0.6 master spec.');
