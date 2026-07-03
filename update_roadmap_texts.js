const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldBloodStarP = `최고의 전문가 서포트 조직이 유연하게 결합하여 리스크를 방어하는 미래형 연대 구조입니다. 10개의 스타트업이 일류 전문가 1명의 보상 체계를 분담하며, 창업가는 오직 본질에만 몰입하는 결합형 협력망의 밑바닥을 함께 설계할 동료를 기다립니다.`;

const newBloodStarP = `최고의 전문가 서포트 조직이 유연하게 결합하여 리스크를 방어하는 미래형 연대 구조입니다. 이를 통해 T-Rive 팀 역시 본질에만 온전히 집중하며, 몰입이 지속 가능한 팀으로 동반 성장하는 협력망의 밑바닥을 함께 설계할 동료를 기다립니다.`;

const oldTryditP = `개인이 축적한 경험과 관심사 지식이 사라지지 않고 온전히 스스로의 영속적인 자산이 되도록 만드는 대시보드 인프라입니다. 이 가슴 뛰는 미래 OS의 첫 단추를 채우는 아이디어를 함께 주조해 나갑니다.`;

const newTryditP = `개인이 축적한 경험과 관심사 지식이 사라지지 않고 온전히 영속적인 자산이 되도록 만드는 대시보드 인프라입니다. 모두가 자신이 원하는 커뮤니티와 지식을 기반으로 크리에이터가 되어 성장할 수 있도록, 이 가슴 뛰는 미래 OS의 첫 단추를 함께 주조해 나갑니다.`;

html = html.replace(oldBloodStarP, newBloodStarP);
html = html.replace(oldTryditP, newTryditP);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Text copy refined.');
