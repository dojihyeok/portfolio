const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

// 1. Remove Playfair Display from Google Fonts in the header
html = html.replace(/family=Playfair\+Display[^&]+&/, '');

// 2. Remove 'font-serif' and 'italic' globally
html = html.replace(/font-serif/g, '');
html = html.replace(/italic/g, '');

// 3. Update Blood Star and Trydit texts
// Blood Star
const oldBloodStarTitle = `Blood Star <span class="text-[11px] font-normal text-gray-500 font-sans tracking-normal bg-white/5 px-2 py-0.5 rounded border border-white/5 mt-1">가칭</span>`;
const oldBloodStarDesc = `지속 가능한 전문가 공유 구조`;
const oldBloodStarText = `<em class="text-gray-500 block mb-4 tracking-wide">* 현재 구체적인 서비스 시작 전 가동을 준비 중인 프로젝트입니다.</em>
                        최고의 전문가 서포트 조직이 유연하게 결합하여 리스크를 방어하는 미래형 연대 구조입니다. 이를 통해 T-Rive 팀 역시 본질에만 온전히 집중하며, 몰입이 지속 가능한 팀으로 동반 성장하는 협력망의 밑바닥을 함께 설계할 동료를 기다립니다.`;

const newBloodStarTitle = `Blood Star`; // removed 가칭 here? User didn't specify 가칭 in the TO-BE for title, but they mentioned it in the previous spec. Let's keep 가칭 badge as it wasn't explicitly removed in the TO-BE just not mentioned. Actually, looking at the TO-BE: "Blood Star : 몰입이 지속 가능한 팀으로의 성장" -> I will update the desc to "몰입이 지속 가능한 팀으로의 성장".
const newBloodStarDesc = `몰입이 지속 가능한 팀으로의 성장`;
const newBloodStarText = `최고의 전문가 서포트 조직이 유연하게 결합하여 리스크를 방어하는 미래형 연대 구조입니다. 창업가와 빌더들이 소음에 진 빼지 않고 제품에만 미쳐 날뛸 수 있도록 인프라 비용을 1/10로 분담하며, 초기 크루부터 전문가까지 모두가 지치지 않고 즐거운 몰입을 지속할 수 있는 단단한 정예 팀으로 성장합니다.`;

html = html.replace(oldBloodStarDesc, newBloodStarDesc);
html = html.replace(oldBloodStarText, newBloodStarText);


// Trydit
const oldTryditDesc = `관심 기반 지식 생태계`;
const oldTryditText = `<em class="text-gray-500 block mb-4 tracking-wide">* T-Rive가 최종적으로 도달할 장기 비전 단계의 가칭 프로젝트입니다.</em>
                        개인이 축적한 경험과 관심사 지식이 사라지지 않고 온전히 영속적인 자산이 되도록 만드는 대시보드 인프라입니다. 모두가 자신이 원하는 커뮤니티와 지식을 기반으로 크리에이터가 되어 성장할 수 있도록, 이 가슴 뛰는 미래 OS의 첫 단추를 함께 주조해 나갑니다.`;

const newTryditDesc = `지식과 커뮤니티 기반의 크리에이터 생태계로의 성장`;
const newTryditText = `미래 노동의 최종 진화 형태인 관심 기반 라이프스타일 OS입니다. 거창한 조직에 속하지 않더라도, 세상 모든 메이커가 자신이 원하는 커뮤니티와 깊숙한 지식을 기반으로 당당한 '크리에이터'가 되어 자립할 수 있도록 돕습니다. 개인이 온전히 축적해 온 경험 정보가 마르지 않는 평생의 자산이 되는 생태계를 실현합니다.`;

html = html.replace(oldTryditDesc, newTryditDesc);
html = html.replace(oldTryditText, newTryditText);

// 4. Update Apply Portal text (just to be absolutely sure it perfectly matches TO-BE)
const oldHeadline = `우리는 함께 문제를 해결할<br>동료를 찾고 있습니다.`;
const newHeadline = `우리는 함께 문제를 해결할<br>동료를 찾고 있습니다.`;

// The apply portal texts were mostly correct, but let's do a strict replacement for the questions block
const qBlockRegex = /<ul class="space-y-6 pl-1 text-gray-400 break-keep text-sm leading-relaxed">[\s\S]*?<\/ul>/;
const newQBlock = `<ul class="space-y-6 pl-1 text-gray-400 break-keep text-sm leading-relaxed">
                            <li class="flex items-start gap-3"><span class="text-brand-accent font-bold text-base mt-0.5">Q1.</span> <span class="text-[#F3F2F0] text-base leading-snug">사람들은 왜 자신이 좋아하는 일에 오래 몰입하지 못하는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-brand-accent font-bold text-base mt-0.5">Q2.</span> <span class="text-[#F3F2F0] text-base leading-snug">AI 시대에도 인간의 경험과 전문성은 어떻게 가치가 될 수 있는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-brand-accent font-bold text-base mt-0.5">Q3.</span> <span class="text-[#F3F2F0] text-base leading-snug">미래의 노동은 누구를 위한 것이어야 하는가?</span></li>
                            <li class="flex items-start gap-3 border-t border-white/10 pt-6 mt-6"><span class="text-brand-accent font-bold text-base mt-0.5">Q4.</span> <strong class="text-[#F3F2F0] text-base leading-snug">이 문제의 답을 직접 만들어 볼 만큼 진지한가요?</strong></li>
                        </ul>`;
html = html.replace(qBlockRegex, newQBlock);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Script executed successfully.');
