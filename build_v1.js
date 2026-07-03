const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="ko" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artiflux (아티플룩스) - 일하는 즐거움을 아는 사람들이 온전히 일에 몰입하는 세상</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts Inter & Noto Sans KR -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            dark: '#0B0F19', // Space Navy
                            card: '#161D30', // Premium Anthracite
                            accent: '#06B6D4', // Artiflux Cyan
                            emerald: '#10B981', // Emerald Green
                            violet: '#8B5CF6', // Creator Violet
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #0B0F19;
            color: #F3F4F6;
        }
        .glow-cyan:hover {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
        }
        .glow-emerald:hover {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }
        .glow-violet:hover {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
        /* Hide scrollbars for sliders */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>
<body class="font-sans antialiased overflow-x-hidden selection:bg-brand-accent selection:text-white">

<!-- Header (Navigation) -->
<header class="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center font-black text-xl text-white tracking-normal hover:scale-105 transition-transform duration-300 glow-cyan">
                A
            </div>
            <span class="font-bold text-lg tracking-normal text-white">Artiflux (아티플룩스)</span>
        </div>
        <nav class="hidden lg:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#hero" class="hover:text-white transition">홈</a>
            <a href="#mono" class="hover:text-brand-accent transition flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>모노</a>
            <a href="#founder" class="hover:text-white transition">창업가 이야기</a>
            <a href="#recruiting" class="hover:text-white transition">인재 채용</a>
            <a href="#future-vision" class="hover:text-white transition">장기 비전</a>
        </nav>
        <div class="lg:hidden">
            <button class="text-gray-400 hover:text-white"><i class="fa-solid fa-bars text-xl"></i></button>
        </div>
    </div>
</header>

<!-- Step 1. Hero Section -->
<section id="hero" class="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
    <!-- Ambient Background -->
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 glow-cyan cursor-default">
            <span class="flex h-2 w-2 relative">
                <span class=" absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75 animate-ping"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span>일하는 즐거움을 아는 사람들이 온전히 일에 몰입하는 세상</span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight mb-8 break-keep" style="line-height: 1.6;">
            <span class="block text-brand-accent font-semibold text-xl sm:text-2xl lg:text-3xl mb-4 tracking-normal uppercase">Introducing MONO</span>
            <span class="text-white block sm:inline">현장 기술자들이 더 안전하게, 더 많이 벌고, </span><br class="hidden sm:block">
            <span class="text-white">더 오래 성장할 수 있는 데이터 인프라 MONO.</span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
            우리는 K-조선 · 플랜트 · 하이테크 현장을 위한 MONO를 만들고 있습니다.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#mono" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-white font-semibold transition-all hover:scale-105 glow-cyan shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2">
                <i class="fa-solid fa-layer-group"></i> 실체 알아보기
            </a>
            <a href="#recruiting" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold transition-all hover:scale-105 border border-white/10 flex items-center justify-center gap-2">
                <i class="fa-solid fa-rocket text-brand-emerald"></i> 팀 합류하기
            </a>
        </div>
    </div>
</section>

<!-- Step 2. Why Artiflux? (문제 정의) -->
<section id="why-artiflux" class="py-24 border-t border-white/5 bg-brand-card/50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-2">Why Artiflux?</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white mb-4">우리는 왜 이 문제를 푸는가?</p>
            <p class="text-gray-400 font-light">인간이 일하는 즐거움을 알고 있으면서도 온전히 몰입을 지속하기 어려운 구조적 문제를 4가지로 날카롭게 정의합니다.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-robot"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">미래에 대한 불안</h3>
                <p class="text-gray-400 font-light leading-relaxed">피지컬 AI 시대에 나의 노동 가치는 온전히 보전될 수 있는가에 대한 두려움</p>
            </div>
            
            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-link-slash"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">성장 기회의 부족</h3>
                <p class="text-gray-400 font-light leading-relaxed">프로젝트가 끝나면 그동안 쌓아올린 장인의 경험과 이력이 단절되어 사라지는 현상</p>
            </div>

            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-scale-unbalanced"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">보상 구조의 한계</h3>
                <p class="text-gray-400 font-light leading-relaxed">회사가 성장의 극에 도달했을 때, 나중에 합류한 팀원들에게 영속적이고 만족스러운 보상을 주지 못해 자발적 연대가 깨지는 현상</p>
            </div>

            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-file-invoice"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">반복되는 비효율</h3>
                <p class="text-gray-400 font-light leading-relaxed">1클릭으로 가볍게 처리할 수 있는 본질 외적인 노무·세무 행정 및 복잡한 정산 소작업들</p>
            </div>
        </div>
    </div>
</section>

<!-- Step 3. MONO Section (Round 1) -->
<section id="mono" class="py-24 border-t border-white/5 bg-brand-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <span class="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold border border-brand-accent/20 uppercase tracking-normal font-mono mb-4 inline-block hover:scale-105 transition-transform">Round 1: MONO</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">지금 우리가 실행 중인 첫 번째 프로젝트</h2>
            <p class="text-gray-400 font-light text-lg break-keep">
                MONO는 아티플룩스의 종착지가 아닌, 땀 흘려 일하는 가치를 아는 현장 근무자들이 기쁘게 몰입할 수 있도록 돕는 실체적인 '첫 번째 미션'입니다.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div class="p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-emerald/30 transition-all hover:scale-105 glow-emerald text-center">
                <i class="fa-solid fa-book-journal-whills text-3xl text-brand-emerald mb-4"></i>
                <h3 class="text-lg font-bold text-white mb-2">중단 없는 평생 경력 데이터 장부 구축</h3>
            </div>
            <div class="p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-emerald/30 transition-all hover:scale-105 glow-emerald text-center">
                <i class="fa-solid fa-chart-line text-3xl text-brand-emerald mb-4"></i>
                <h3 class="text-lg font-bold text-white mb-2">대안 신용 등급(Alternative CB) 결합</h3>
                <p class="text-sm text-gray-400">근무 이력을 금융 지표로 전환</p>
            </div>
            <div class="p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-emerald/30 transition-all hover:scale-105 glow-emerald text-center">
                <i class="fa-solid fa-robot text-3xl text-brand-emerald mb-4"></i>
                <h3 class="text-lg font-bold text-white mb-2">구독형 로보틱스(RaaS) 결합</h3>
                <p class="text-sm text-gray-400">피지컬 AI와 협업을 통한 육체 위험 상쇄</p>
            </div>
        </div>

        <!-- Simulator -->
        <div class="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-brand-card/80 backdrop-blur-md border border-white/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all">
            <div class="flex items-center justify-between mb-10">
                <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                    <i class="fa-solid fa-microchip text-brand-accent"></i> MONO Worker Immersion Engine
                </h3>
            </div>
            
            <div class="mb-10">
                <div class="flex justify-between text-sm text-gray-400 mb-4 font-semibold">
                    <span>몰입(근무) 일수 시뮬레이션</span>
                    <span id="mono-days-text" class="text-brand-accent font-bold text-lg">90 일</span>
                </div>
                <input type="range" id="mono-days-slider" min="10" max="365" value="90" 
                       class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-accent hover:scale-[1.02] transition-transform">
                <div class="flex justify-between text-xs text-gray-500 mt-2">
                    <span>10일 (단기)</span>
                    <span>365일 (연간)</span>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <!-- CB Grade -->
                <div class="p-6 rounded-2xl bg-brand-dark border border-white/5">
                    <p class="text-xs text-gray-400 mb-2 font-semibold">대안 신용 등급 변환</p>
                    <p id="mono-cb-grade" class="text-2xl font-bold text-white transition-all">M-4 등급</p>
                </div>
                <!-- Co-building Score -->
                <div class="p-6 rounded-2xl bg-brand-dark border border-white/5">
                    <p class="text-xs text-gray-400 mb-2 font-semibold">공동 빌딩 기여 점수</p>
                    <p id="mono-co-create" class="text-2xl font-bold text-white transition-all">55 점</p>
                </div>
                <!-- Robot RaaS -->
                <div class="p-6 rounded-2xl bg-brand-dark border border-white/5">
                    <p class="text-xs text-gray-400 mb-2 font-semibold">로봇 가동 배정 지수</p>
                    <p id="mono-robot-yield" class="text-2xl font-bold text-brand-emerald transition-all">5.0% 마진 쉐어</p>
                </div>
            </div>

            <div class="mt-8">
                <div class="flex justify-between text-xs text-gray-400 mb-2">
                    <span>로보틱스 협업 언락 진행도</span>
                    <i class="fa-solid fa-lock-open text-brand-emerald"></i>
                </div>
                <div class="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div id="mono-robot-progress" class="h-full bg-brand-emerald rounded-full transition-all duration-500" style="width: 20%;"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Step 4. Founder Story -->
<section id="founder" class="py-24 border-t border-white/5 bg-brand-card/50 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-4">Founder Story</h2>
        <div class="w-20 h-20 rounded-full bg-brand-dark border-2 border-brand-accent/30 mx-auto mb-8 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300 glow-cyan">
            <i class="fa-solid fa-user-astronaut text-3xl text-gray-400"></i>
        </div>
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-8">18년의 아키텍트, 진짜 가치에 눈을 뜨다</h3>
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed font-light break-keep text-left sm:text-center">
            "수천억 원 규모의 디지털 전환을 수행하며, 현실의 진짜 가치를 빚는 현장 기술자들이 금융과 신뢰 체계에서 완벽히 소외되어 좌절하는 현실을 바로잡고자 MONO를 시작했습니다."
        </p>
    </div>
</section>

<!-- Step 5. Join Us (채용 브랜딩) -->
<section id="recruiting" class="py-24 border-t border-white/5 bg-brand-dark relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-2">Join Us</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white mb-4">왜 지금 합류해야 하는가?</p>
            <p class="text-gray-400 font-light">뛰어난 인재 스펙보다, 지원자가 아티플룩스에 와서 무엇을 얻을 수 있는가에 초점을 맞춥니다.</p>
        </div>

        <!-- 3 Values -->
        <h3 class="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">지원자가 획득하는 3가지 가치</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div class="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <h4 class="text-lg font-bold text-brand-accent mb-2">1. AI 시대 파운딩 커리어</h4>
                <p class="text-sm text-gray-400">0 → 1의 대형 데이터 인프라 개척 기회. 산업 전반을 주도하는 주역으로 성장합니다.</p>
            </div>
            <div class="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <h4 class="text-lg font-bold text-brand-accent mb-2">2. 에스크로 기반 보장형 스톡옵션</h4>
                <p class="text-sm text-gray-400">기업 가치가 폭등하더라도 직무와 무관하게 헌신적인 기여 인력을 철저히 사수하는 보상 체계입니다.</p>
            </div>
            <div class="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <h4 class="text-lg font-bold text-brand-accent mb-2">3. 고부하 아키텍처 독점 체득</h4>
                <p class="text-sm text-gray-400">분산 원장, 협업 로보틱스 등 최고 수준의 스케일업 기술을 직접 핸들링하며 마스터합니다.</p>
            </div>
        </div>

        <!-- 6 Cultures -->
        <h3 class="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">우리가 일하는 6가지 문화</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20 text-center">
            <div class="p-4 bg-white/5 rounded-xl border border-white/5 text-gray-300 font-semibold hover:bg-brand-accent/10 hover:text-brand-accent transition-colors">회의보다 실행</div>
            <div class="p-4 bg-white/5 rounded-xl border border-white/5 text-gray-300 font-semibold hover:bg-brand-accent/10 hover:text-brand-accent transition-colors">반복 업무 자동화</div>
            <div class="p-4 bg-white/5 rounded-xl border border-white/5 text-gray-300 font-semibold hover:bg-brand-accent/10 hover:text-brand-accent transition-colors">직급보단 문제 해결</div>
            <div class="p-4 bg-white/5 rounded-xl border border-white/5 text-gray-300 font-semibold hover:bg-brand-accent/10 hover:text-brand-accent transition-colors">100% 자율성</div>
            <div class="p-4 bg-white/5 rounded-xl border border-white/5 text-gray-300 font-semibold hover:bg-brand-accent/10 hover:text-brand-accent transition-colors">실패보단 멈춤을 경계</div>
            <div class="p-4 bg-white/5 rounded-xl border border-white/5 text-gray-300 font-semibold hover:bg-brand-accent/10 hover:text-brand-accent transition-colors">고객의 문제 해결 우선</div>
        </div>

        <!-- Coffee Chat Form -->
        <div class="max-w-3xl mx-auto p-8 rounded-3xl bg-brand-card border border-white/5 relative overflow-hidden shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <form id="recruitment-form" onsubmit="handleRecruitSubmit(event)" class="relative z-10">
                <div class="text-center mb-8">
                    <i class="fa-solid fa-mug-hot text-4xl text-brand-accent mb-4 block"></i>
                    <h3 class="text-2xl font-bold text-white mb-3">지금 직장이 있어도, 창업을 고민 중이어도 좋습니다.</h3>
                    <p class="text-gray-400 text-sm break-keep leading-relaxed">
                        "사람은 왜 몰입을 잃는가? 미래의 노동은 어떻게 변할까?" 라는 질문에 공감하신다면 편하게 30분 커피챗을 제안해 주세요.
                    </p>
                </div>

                <div class="space-y-4">
                    <div>
                        <input type="text" placeholder="성함 (또는 닉네임)" required class="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors">
                    </div>
                    <div>
                        <input type="text" placeholder="연락처 또는 이메일 주소" required class="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors">
                    </div>
                    <div>
                        <textarea placeholder="링크드인 프로필, 이력서 링크, 혹은 자유로운 자기소개 (선택)" rows="3" class="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-white text-brand-dark font-bold py-4 rounded-xl hover:bg-gray-200 transition-all hover:scale-[1.02] glow-cyan">
                        가벼운 커피챗 신청하기
                    </button>
                </div>
            </form>

            <div id="recruit-success-card" class="hidden text-center py-12 relative z-10">
                <div class="w-20 h-20 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6">
                    <i class="fa-solid fa-check text-3xl text-brand-accent"></i>
                </div>
                <h4 class="text-2xl font-bold text-white mb-2">커피챗 신청이 완료되었습니다</h4>
                <p class="text-gray-400">보내주신 귀중한 생각을 확인하여, 편안하고 매끄러운 30분 비전 커피챗 일정을 회신해 드리겠습니다.</p>
            </div>
        </div>
    </div>
</section>

<!-- Step 6. Future Horizon -->
<section id="future-vision" class="py-24 relative bg-brand-card border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-violet uppercase mb-2">Future Horizon: 10-Year Vision</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white mb-4">우리가 꿈꾸는 미래</p>
            <p class="text-gray-400 font-light break-keep">복잡하고 어지러운 용어들을 걷어내고, 아티플룩스가 10년 동안 정복해 나갈 미래 비전을 깔끔하게 단순화했습니다.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Blood Star -->
            <div class="p-10 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <span class="w-3 h-3 rounded-full bg-brand-accent"></span>
                        <span class="text-xs font-semibold text-white">Future 1: Blood Star (블러드 스타)</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-4">전문가가 본업에만 몰입하는 공유 아키텍처</h3>
                    <p class="text-gray-400 text-sm leading-relaxed font-light break-keep mb-6">
                        1개의 스타트업이 억대 연봉의 보안, DevOps, 마케팅 전문가를 고용하여 리소스를 낭비하지 않도록, 10개의 스타트업이 일류 전문가 1명의 보상 체계(1/10 비용)를 쉐어하는 원팀 서포팅 생태계입니다.
                    </p>
                </div>
            </div>

            <!-- Trydit -->
            <div class="p-10 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-violet/30 transition-all hover:scale-105 glow-violet flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <span class="w-3 h-3 rounded-full bg-brand-violet"></span>
                        <span class="text-xs font-semibold text-white">Future 2: Trydit (트라이딧)</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-4">관심사와 경험이 지식 자산이 되는 플랫폼</h3>
                    <p class="text-gray-400 text-sm leading-relaxed font-light break-keep mb-6">
                        나만의 채팅(Personal AI)과 필요한 기능 봇(공문 봇, 투표 봇 등)을 샌드박스로 연결해 나만의 맞춤 스크린을 조립하고, 경험 정보를 나눈 기여도만큼 확실한 보상($)을 돌려받는 지능형 라이프스타일 OS입니다.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="py-12 bg-brand-dark border-t border-white/5 text-xs text-gray-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center font-black text-sm text-white tracking-normal hover:scale-110 transition-transform glow-cyan">
                A
            </div>
            <span class="font-bold text-gray-400 tracking-normal">Artiflux (아티플룩스)</span>
        </div>
        <div class="flex space-x-6">
            <a href="#hero" class="hover:text-white transition">홈</a>
            <a href="#mono" class="hover:text-white transition">모노</a>
            <a href="#founder" class="hover:text-white transition">창업가 이야기</a>
            <a href="#recruiting" class="hover:text-white transition">인재 채용</a>
            <a href="#future-vision" class="hover:text-white transition">장기 비전</a>
        </div>
        <p>© 2026 Artiflux (아티플룩스). All rights reserved.</p>
    </div>
</footer>

<script>
    window.onload = function() {
        initMonoSimulation();
    }

    // MONO Range Slider Interactive Linkage
    function initMonoSimulation() {
        const slider = document.getElementById('mono-days-slider');
        const daysText = document.getElementById('mono-days-text');
        const coCreateText = document.getElementById('mono-co-create');
        const cbGradeText = document.getElementById('mono-cb-grade');
        const progressFill = document.getElementById('mono-robot-progress');
        const yieldText = document.getElementById('mono-robot-yield');

        if(slider) {
            slider.addEventListener('input', function(e) {
                const val = parseInt(e.target.value);
                daysText.innerText = val + ' 일';
                
                // Calculate scale values
                const coCreatePct = Math.min(100, Math.floor(40 + (val / 6)));
                coCreateText.innerText = coCreatePct + '점';
                
                // CB Grades
                let grade = "M-4 등급";
                let yieldVal = "5.0%";
                let progressPct = 20;
                if (val > 300) {
                    grade = "M-1 등급";
                    yieldVal = "18.2%";
                    progressPct = 90;
                } else if (val > 180) {
                    grade = "M-2 등급";
                    yieldVal = "12.5%";
                    progressPct = 60;
                } else if (val > 90) {
                    grade = "M-3 등급";
                    yieldVal = "8.4%";
                    progressPct = 40;
                }

                cbGradeText.innerText = grade;
                yieldText.innerText = yieldVal + " 마진 쉐어";
                progressFill.style.width = progressPct + '%';
            });
        }
    }

    function handleRecruitSubmit(e) {
        e.preventDefault();
        const form = document.getElementById('recruitment-form');
        const successCard = document.getElementById('recruit-success-card');
        if (form && successCard) {
            form.classList.add('hidden');
            successCard.classList.remove('hidden');
        }
    }
</script>
</body>
</html>
`;
fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', htmlContent);
