const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Hero text
html = html.replace(/<span class="text-white">현장 기술자들이 더 안전하게, <\/span>\s*<span class="text-white">더 많이 벌고, 더 오래 성장하는 세상<\/span>/g, '<span class="text-white">현장 기술자가 더 안전하게, </span><span class="text-white">더 많이 성장하고, 더 오래 일할 수 있는 미래를 만듭니다.</span>');

html = html.replace(/우리는 K-조선 · 플랜트 · 하이테크 현장을 위한 데이터 인프라 <strong>MONO<\/strong>를 만들고 있습니다. 단순한 매칭 서비스를 넘어, 정직하게 땀 흘려 일하는 가치가 기술과 금융에서 소외되지 않도록 설계합니다./g, "우리는 조선, 플랜트, 반도체, 건설 현장의 숙련 기술자를 위한 플랫폼 <strong>MONO</strong>를 만들고 있습니다.");

// 2. Problem Section text
html = html.replace(/대부분의 사람들은 일하는 즐거움을 알지만, 지속적인 성장을 가로막는 4가지 현실적이고 구조적인 벽에 마주해 있습니다./g, "많은 사람들은 일을 싫어하는 것이 아니라 몰입을 지속할 수 없는 환경 속에서 일하고 있습니다.");
html = html.replace(/"피지컬 AI 시대에도 내 자리는 온전히 유지될까\?" 내일에 대한 불안은 오늘 느끼는 기술 연마의 일하는 즐거움을 단숨에 갉아먹습니다./g, "피지컬 AI 시대에도 내 자리가 유지될까 하는 미래에 대한 막연한 불안이 오늘 일에 대한 몰입을 갉아먹습니다.");
html = html.replace(/나이가 들거나, 공정이 멈추거나, 다른 계약 구조에 편입되면 그동안 갈고닦았던 장인의 경험들이 연결되지 못하고 파편화되어 흩어집니다./g, "기술과 노하우가 축적되더라도 조직이나 현장이 바뀌면 그동안 갈고닦은 경험들이 파편화되고 단절됩니다.");
html = html.replace(/노동에 들어간 땀의 무게와 회사가 성장하여 가져가는 자산의 격차가 너무 벌어져, 어느 순간 자발적인 몰입과 연대가 끊어지게 됩니다./g, "노동에 들어간 땀의 가치가 금융 신뢰 자산으로 환산되지 못하고, 경제적 성장의 기회에서 구조적으로 소외됩니다.");
html = html.replace(/충분히 가볍고 명료하게 해결할 수 있는 노무·정산 행정 비본질과 불투명한 중개 구조들이 일 자체에 쏟을 리소스를 강제로 분산시킵니다./g, "불투명한 중개 구조와 복잡한 노무 행정 등 본질적이지 않은 소음들이 일 자체에 쏟을 리소스를 강제로 분산시킵니다.");

html = html.replace(/<\/div>\s*<\/div>\s*<\/section>\s*<!-- MONO/g, `</div>
        <div class="mt-16 text-center">
            <p class="text-xl sm:text-2xl font-bold text-white">MONO는 이러한 문제를 해결하기 위해 만들어졌습니다.</p>
        </div>
    </div>
</section>

<!-- MONO`);

// 3. Founder Story
html = html.replace(/저는 지난 18년 동안 수천억 원 규모의 대규모 금융 아키텍처, 플랫폼 시스템, 디지털 전환\(DT\) 프로젝트를 이끌어 왔습니다. 세상에서 가장 고도화되고 화려한 테크 생태계를 빌딩하며 깨달은 단 하나의 역설이 있었습니다./g, "18년 동안 다양한 산업의 디지털 전환 프로젝트를 수행하며 수많은 시스템을 만들었습니다.");
html = html.replace(/"매서운 바닷바람과 불꽃 속에서 세상을 실체로 빚어내는 현장 기술 장인들, 즉 현실에서 진짜 가치를 창조하는 사람들은 정작 가속되는 디지털 데이터와 제도권 금융 신뢰 체계에서 완벽히 소외되어 있었습니다."/g, "하지만 실제 현장에서 가치를 만들어내는 기술자들의 경험과 노하우는 데이터로 남지 않았고 충분한 기회를 얻지 못했습니다.");
html = html.replace(/<p>\s*단지 소속의 문법이나 서류의 부재 때문에 높은 소득을 올리고도 신용을 증명하지 못해 은행 문턱에서 좌절하는 현실을 보았습니다.\s*<\/p>/g, "");
html = html.replace(/이 비합리적이고 부당한 공백을 기술로 바로잡기 위해 저는 \*\*Artiflux\*\*와 \*\*MONO\*\*를 시작했습니다. 노동을 정량적인 신뢰 데이터로 증명하여 금융과 상생 로보틱스의 기쁨을 돌려주고, 인간이 방해받지 않고 온전히 자신의 일과 삶을 향유할 수 있는 온전한 시스템적 안도감을 기필코 짓겠습니다./g, "MONO는 이 문제를 해결하기 위해 시작되었습니다.");

// 4. Coffee Chat
html = html.replace(/가벼운 30분 커피챗으로 팀에 대해 이야기해 보아요/g, "함께 이야기하고 싶은 주제");
html = html.replace(/화려한 이력서 제출이나 거창한 절차는 필요 없습니다. 땀 흘리는 즐거움을 아는 사람들이 온전히 일에 집중하는 아티플룩스의 철학에 공감하신다면, 편하게 대화 한잔을 제안해 주세요./g, "직무와 관계없이 아래 주제들에 관심이 있다면 커피챗을 신청해주세요. 채용만을 위한 자리가 아니라 미래를 함께 고민하는 동료를 찾고 있습니다.");
html = html.replace(/세상을 흔드는 거창한 소음보다, 본질적인 진짜 문제 해결을 중시하시는 분/g, "AI와 현장 산업의 미래");
html = html.replace(/작지만 높은 신뢰를 구축해 나가는 초기 엘리트 개발팀의 파운딩 멤버로 도약하실 분/g, "기술자의 경험을 데이터로 만드는 방법");
html = html.replace(/노동과 금융, 협업 로보틱스가 융화하는 차세대 인프라를 직접 설계해 보실 분/g, "미래 노동 시장");

html = html.replace(/<span class="text-gray-300">미래 노동 시장<\/span>\s*<\/div>\s*<\/div>/g, `<span class="text-gray-300">미래 노동 시장</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center text-[10px]"><i class="fa-solid fa-mug-hot"></i></div>
                        <span class="text-gray-300">몰입 가능한 조직 문화</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center text-[10px]"><i class="fa-solid fa-mug-hot"></i></div>
                        <span class="text-gray-300">스타트업 성장 전략</span>
                    </div>
                </div>`);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
