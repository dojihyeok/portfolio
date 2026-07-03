const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Add KaTeX to head
const katexTags = `
    <!-- KaTeX -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}]});"></script>
`;
if (!html.includes('katex.min.css')) {
    html = html.replace('<!-- FontAwesome Icons -->', katexTags + '\n    <!-- FontAwesome Icons -->');
}

// 2. Philosophy Section Update
const oldPhilosophy = `<p class="text-gray-400 font-light mt-4 break-keep text-justify px-4 sm:px-8">몰입은 개인의 의지나 재능 문제가 아닙니다. 사람들은 누구나 몰입할 수 있는 힘을 가지고 있습니다. 하지만 대부분의 메이커들은 과거 선택의 후회, 현재의 불합리함, 미래의 불안감 때문에 몰입을 방해받고 있습니다. T-Rive는 이러한 구조적 노이즈를 청소하여 하고 싶은 일과 취미를 편안히 즐길 수 있도록 돕습니다.</p>`;
const newPhilosophy = `<p class="text-gray-400 font-light mt-4 break-keep text-justify px-4 sm:px-8">몰입은 개인의 의지나 재능 문제가 아닙니다. 사람들은 누구나 몰입할 수 있는 힘을 가지고 있습니다. 하지만 대부분의 메이커들은 과거 선택의 후회, 현재의 불합리함, 미래의 불안감 때문에 몰입을 방해받고 있습니다. T-Rive는 개인의 의지에 몰입을 맡기지 않으며, 메이커가 하고 싶은 일에 평생 활력할 수 있도록 $3\\text{대}$ 핵심 몰입 전략을 시스템 인프라로 지탱합니다.</p>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-8 text-left">
                <div class="p-6 rounded-xl bg-brand-card/20 border border-white/5">
                    <strong class="text-brand-accent block mb-2"><i class="fa-solid fa-shield-halved mr-2"></i>안전망 구축 (MONO)</strong>
                    <p class="text-xs text-gray-400 font-light leading-relaxed">일용/계약직 메이커들의 성실성 데이터 구축을 통한 우대 금융 신뢰 연결.</p>
                </div>
                <div class="p-6 rounded-xl bg-brand-card/20 border border-white/5">
                    <strong class="text-brand-violet block mb-2"><i class="fa-solid fa-people-carry-box mr-2"></i>본질과 전문가 결합 (Blood Star)</strong>
                    <p class="text-xs text-gray-400 font-light leading-relaxed">스타트업이 핵심에만 집중할 수 있도록 최고 전문가의 인프라 서포트를 $1/10$ 비용으로 공유.</p>
                </div>
                <div class="p-6 rounded-xl bg-brand-card/20 border border-white/5">
                    <strong class="text-brand-neon block mb-2"><i class="fa-solid fa-cubes mr-2"></i>경험의 평생 자산화 (Trydit)</strong>
                    <p class="text-xs text-gray-400 font-light leading-relaxed">개인의 경험과 지식이 유실되지 않고 영속적 가치로 보상받는 인프라 구축.</p>
                </div>
            </div>`;
html = html.replace(oldPhilosophy, newPhilosophy);

// 3. Vision Architecture Card 3
const oldCard2 = `<div class="text-brand-accent text-lg mt-1"><i class="fa-solid fa-coins"></i></div>`;
const newCard2 = `<div class="text-brand-accent text-lg mt-1"><i class="fa-solid fa-handshake-angle"></i></div>`;
html = html.replace(oldCard2, newCard2); // Fix duplicate icon

const oldCard3 = `                            <strong class="text-white text-sm block mb-1">초대형 금융-로보틱스 인프라 아키텍처 다루기</strong>
                            <p class="text-gray-400 text-xs font-light break-keep">대안 신용 점수 설계, 분산 트랜잭션, 하드웨어 협업 로봇(RaaS) 관제 등 글로벌 레벨로 스케일업할 대형 지식을 체득합니다.</p>`;
const newCard3 = `                            <strong class="text-white text-sm block mb-1">성장의 결실을 투명하게 나누는 연대</strong>
                            <p class="text-gray-400 text-xs font-light break-keep">회사가 급격히 팽창하더라도 전문가와 초기 크루들이 성장의 과실과 지분 분배에서 소외되어 연대가 깨지지 않도록, 에스크로 기반의 투명한 보상 결합과 합당한 스톡옵션을 안전하게 매핑합니다.</p>`;
html = html.replace(oldCard3, newCard3);

// And update the icon for Card 3
const oldCard3Icon = `<div class="text-brand-violet text-lg mt-1"><i class="fa-solid fa-chart-line"></i></div>`;
const newCard3Icon = `<div class="text-brand-violet text-lg mt-1"><i class="fa-solid fa-coins"></i></div>`;
html = html.replace(oldCard3Icon, newCard3Icon);


// 4. Application Process Updates
html = html.replace('<strong class="text-white font-bold">T-Rive Team 합류하기를 클릭해 주세요.</strong>', '<strong class="text-white font-bold">T-Rive에 지원해 주세요.</strong>');

const oldQ1 = '<li><strong class="text-white">Q1.</strong> 몰입하며 일하는 즐거움을 경험한 적이 있는가요?</li>';
const oldQ2 = '<li><strong class="text-white">Q2.</strong> AI & 피지컬 시대에도 인간의 경험과 가치는 어떻게 유지할 수 있을까요?</li>';
const oldQ3 = '<li><strong class="text-white">Q3.</strong> 미래에도 지속 가능한 성장과 몰입할 수 있는 환경을 만들 수 있을까요?</li>';
const oldQ4 = '<li><strong class="text-white">Q4.</strong> 이런 질문에 가슴 뛰는 목표를 같이 만들어 갈 준비가 되었나요</li>';

const newQ1 = '<li><strong class="text-white">Q1.</strong> 사람들은 왜 자신이 좋아하는 일에 오래 몰입하지 못하는가?</li>';
const newQ2 = '<li><strong class="text-white">Q2.</strong> AI 시대에도 인간의 경험과 전문성은 어떻게 가치가 될 수 있는가?</li>';
const newQ3 = '<li><strong class="text-white">Q3.</strong> 미래의 노동은 누구를 위한 것이어야 하는가?</li>';
const newQ4 = '<li><strong class="text-white">Q4.</strong> 나는 이 질문의 답을 직접 만들어 보고 싶은가?</li>';

html = html.replace(oldQ1, newQ1);
html = html.replace(oldQ2, newQ2);
html = html.replace(oldQ3, newQ3);
html = html.replace(oldQ4, newQ4);

// CTA Buttons
html = html.replace('T-Rive 즉시 지원하기', 'T-Rive Team 합류하기');

// Footer Notice
const oldNotice = `우리는 단순히 공감하는 사람이 아니라, 직접 답을 만들고 실행할 사람을 찾고 있습니다. 모든 지원자와 개별 미팅을 진행하지는 않으며, 방향성과 문제의식이 맞는 분들께 순차적으로 연락해 드립니다.`;
const newNotice = `우리는 단순히 공감하는 사람이 아니라, 직접 답을 만들고 실행할 사람을 찾고 있습니다. 모든 지원자와 개별 미팅을 진행하지는 않으며, 방향성과 문제의식이 맞는 분들께 순차적으로 연락드립니다.`;
html = html.replace(oldNotice, newNotice);

// 5. LaTeX strings
// 18년 -> $18\text{년}$
html = html.replace('18년 동안', '$18\\text{년}$ 동안');
// 1/10 비용으로
html = html.replace('1/10 비용으로', '$1/10$ 비용으로');
// 10개의 회사가
html = html.replace('10개의 회사가', '$10\\text{개}$의 회사가');
// 100% 개인이
html = html.replace('100% 개인이', '$100\\%$ 개인이');

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Updated HTML with ver 0.5 guidelines");
