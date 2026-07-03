const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="ko" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>T-Rive (티라이브) - 일하는 즐거움을 아는 사람들이 온전히 일에 몰입하는 세상</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">
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
                            dark: '#0B0F19',
                            card: '#161D30',
                            accent: '#06B6D4',
                            emerald: '#10B981',
                            violet: '#8B5CF6',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body { background-color: #0B0F19; color: #F3F4F6; }
        .glow-cyan:hover { box-shadow: 0 0 20px rgba(6, 182, 212, 0.5); }
        .glow-emerald:hover { box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
        .glow-violet:hover { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="font-sans antialiased overflow-x-hidden selection:bg-brand-accent selection:text-white">

<!-- Header -->
<header class="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center font-black text-xl text-white tracking-normal hover:scale-105 transition-transform duration-300 glow-cyan">
                T
            </div>
            <span class="font-bold text-lg tracking-normal text-white">T-Rive</span>
        </div>
        <nav class="hidden lg:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#hero" class="hover:text-white transition">홈</a>
            <a href="#why-section" class="hover:text-white transition">존재 이유</a>
            <a href="#vision" class="hover:text-white transition">미래 비전</a>
            <a href="#journey" class="hover:text-white transition">마일스톤</a>
            <a href="#founder" class="hover:text-white transition">파운더</a>
            <a href="#coffee-chat" class="hover:text-brand-accent transition flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>인재 영입</a>
        </nav>
        <div class="lg:hidden">
            <button id="open-menu-btn" class="text-gray-400 hover:text-white"><i class="fa-solid fa-bars text-2xl"></i></button>
        </div>
    </div>
</header>

<!-- Mobile Menu -->
<div id="mobile-menu" class="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-all duration-300 opacity-0 pointer-events-none">
    <button id="close-menu-btn" class="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl"><i class="fa-solid fa-xmark"></i></button>
    <a href="#hero" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">홈</a>
    <a href="#why-section" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">존재 이유</a>
    <a href="#vision" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">미래 비전</a>
    <a href="#journey" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">마일스톤</a>
    <a href="#founder" class="mobile-link text-2xl font-bold text-white hover:text-brand-accent transition">파운더</a>
    <a href="#coffee-chat" class="mobile-link text-2xl font-bold text-brand-accent transition">인재 영입</a>
</div>

<!-- Step 1. Hero Section -->
<section id="hero" class="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight mb-8 break-keep" style="line-height: 1.6;">
            <span class="block text-brand-accent font-black text-2xl sm:text-3xl lg:text-4xl mb-6 tracking-wide uppercase">T-Rive</span>
            <span class="text-white block">일하는 즐거움을 아는 사람들이</span>
            <span class="text-white block">자신의 관심 분야에 온전히 몰입하며 살아갈 수 있는 세상을 만듭니다.</span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light break-keep">
            우리는 MONO를 시작으로, 미래의 일하는 방식과 창업 생태계를 설계하는 아키텍트 크루입니다.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#why-section" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-white font-semibold transition-all hover:scale-105 glow-cyan shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2">
                <i class="fa-solid fa-book-open"></i> 철학 알아보기
            </a>
            <a href="#coffee-chat" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold transition-all hover:scale-105 border border-white/10 flex items-center justify-center gap-2">
                <i class="fa-solid fa-mug-hot text-brand-emerald"></i> 티타임 신청
            </a>
        </div>
    </div>
</section>

<!-- Step 2. Why Section -->
<section id="why-section" class="py-24 border-t border-white/5 bg-brand-card/50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-2">Why T-Rive</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white mb-6">우리가 존재하는 이유</p>
            <p class="text-gray-400 font-light text-lg break-keep leading-relaxed">
                몰입은 개인의 의지나 재능 문제가 아닙니다. 사람들은 누구나 몰입할 수 있는 힘을 가지고 있습니다.<br><br>
                하지만 대부분의 메이커들은 <strong>과거의 후회, 현재의 불합리, 미래의 불안감</strong> 때문에 몰입을 방해받고 소외당합니다. <br>
                T-Rive는 이러한 구조적 노이즈를 청소하여, 하고 싶은 일과 취미를 편안히 즐길 수 있도록 돕습니다.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">과거의 후회</h3>
                <p class="text-gray-400 font-light leading-relaxed">이력이 단절되고 성과가 사라지는 구조적 모순에서 발생하는 회의감</p>
            </div>
            
            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-puzzle-piece"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">현재의 불합리</h3>
                <p class="text-gray-400 font-light leading-relaxed">본질적이지 않은 운영과 복잡한 규제로 인해 낭비되는 열정</p>
            </div>

            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-cloud-bolt"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">미래의 불안감</h3>
                <p class="text-gray-400 font-light leading-relaxed">자신의 기여도에 합당한 보상을 받지 못할 것이라는 생존에 대한 불안</p>
            </div>
        </div>
    </div>
</section>

<!-- Step 3. Vision Section -->
<section id="vision" class="py-24 border-t border-white/5 bg-brand-dark relative text-center">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-violet uppercase mb-4">Future Horizon</h2>
        <h3 class="text-3xl sm:text-4xl font-bold text-white mb-12">모두의 창업 시대</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div class="p-8 rounded-3xl bg-brand-card/30 border border-white/5 hover:border-brand-violet/30 transition-all hover:scale-105 glow-violet">
                <h4 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <i class="fa-solid fa-layer-group text-brand-violet"></i> 창업가와 개발자의 제품 집중
                </h4>
                <p class="text-gray-400 font-light leading-relaxed">
                    창업가와 개발자가 인프라, 보안, 데이터, 운영 문제에 시간을 낭비하지 않고 오직 아이디어와 제품의 성장에만 온전히 집중할 수 있는 구조를 만듭니다.
                </p>
            </div>
            
            <div class="p-8 rounded-3xl bg-brand-card/30 border border-white/5 hover:border-brand-violet/30 transition-all hover:scale-105 glow-violet">
                <h4 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <i class="fa-solid fa-handshake-angle text-brand-violet"></i> 전문가의 상생 기여
                </h4>
                <p class="text-gray-400 font-light leading-relaxed">
                    최고의 최정예 전문가 한 명의 보상 체계를 10개의 회사가 나눠서 지급하는 형태(1/10 비용)로, 여러 팀의 성장에 유연하게 기여하며 함께 성장하는 원팀 아키텍처를 실현합니다.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Step 4. Journey Section -->
<section id="journey" class="py-24 border-t border-white/5 bg-brand-card/50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-emerald uppercase mb-2">The Milestone</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white mb-4">우리의 10년 마일스톤</p>
            <p class="text-gray-400 font-light break-keep">
                각 솔루션들은 파편화된 별도 회사가 아닙니다. T-Rive라는 거대한 도정 아래 순차적으로 배포되는 선형적 빌드업 구조입니다.
            </p>
        </div>

        <div class="space-y-8 max-w-5xl mx-auto">
            <!-- Phase 1. MONO (Compact ~15% visual weight) -->
            <div class="p-8 sm:p-10 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-emerald/30 transition-all glow-emerald">
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <div class="md:w-1/2">
                        <span class="inline-block px-2 py-1 rounded bg-brand-emerald/20 text-brand-emerald text-xs font-bold mb-4">Phase 1</span>
                        <h3 class="text-2xl font-bold text-white mb-4">MONO : 현장 근무자의 몰입</h3>
                        <p class="text-gray-400 font-light leading-relaxed mb-6">
                            우리는 거대한 비전을 한 번에 만들려고 하지 않습니다.<br>
                            가장 먼저 현장 기술자들이 더 안전하게, 더 많이 벌고, 더 오래 성장할 수 있는 데이터 인프라 MONO를 통해 첫 번째 몰입을 성공시킵니다.
                        </p>
                    </div>
                    
                    <!-- Simplified Simulator for visual proof without dominating the page -->
                    <div class="md:w-1/2 w-full p-6 rounded-2xl bg-brand-card border border-white/5">
                        <div class="flex justify-between text-xs text-gray-400 mb-2 font-semibold">
                            <span>MONO 시뮬레이션 엔진</span>
                            <span id="mono-days-text" class="text-brand-emerald font-bold">90 일</span>
                        </div>
                        <input type="range" id="mono-days-slider" min="10" max="365" value="90" 
                               class="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-emerald mb-4">
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-gray-400">대안 신용 등급</span>
                            <span id="mono-cb-grade" class="font-bold text-white transition-all">M-4 등급</span>
                        </div>
                        <div class="w-full h-1 bg-gray-800 rounded-full mt-3 overflow-hidden">
                            <div id="mono-robot-progress" class="h-full bg-brand-emerald transition-all duration-500" style="width: 20%;"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Phase 2. Blood Star -->
            <div class="p-8 sm:p-10 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all glow-cyan">
                <span class="inline-block px-2 py-1 rounded bg-brand-accent/20 text-brand-accent text-xs font-bold mb-4">Phase 2</span>
                <h3 class="text-2xl font-bold text-white mb-4">Blood Star : 지속 가능한 전문가 공유 구조</h3>
                <p class="text-gray-400 font-light leading-relaxed">
                    최고의 전문가 서포트 조직이 유연하게 결합하여 리스크를 방어하는 미래형 연대 구조입니다.
                </p>
            </div>

            <!-- Phase 3. Trydit -->
            <div class="p-8 sm:p-10 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-violet/30 transition-all glow-violet">
                <span class="inline-block px-2 py-1 rounded bg-brand-violet/20 text-brand-violet text-xs font-bold mb-4">Phase 3</span>
                <h3 class="text-2xl font-bold text-white mb-4">Trydit : 관심 기반 지식 생태계</h3>
                <p class="text-gray-400 font-light leading-relaxed">
                    개인이 축적한 경험과 관심사 지식이 사라지지 않고 온전히 스스로의 자산이 되도록 만드는 대시보드 인프라입니다.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Step 5. Founder Section -->
<section id="founder" class="py-24 border-t border-white/5 bg-brand-dark relative text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-4">Founder's Story</h2>
        <div class="w-20 h-20 rounded-full bg-brand-card border-2 border-brand-accent/30 mx-auto mb-8 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300 glow-cyan">
            <i class="fa-solid fa-user-astronaut text-3xl text-gray-400"></i>
        </div>
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed font-light break-keep text-left sm:text-center italic px-4">
            "18년 동안 금융, 제조, 대형 플랫폼 시스템을 만들며 수천억 규모의 대형 프로젝트들을 경험했습니다. <br class="hidden md:block">
            하지만 가장 중요한 사람들, 현장에서 실제로 숭고한 가치를 만들어내는 기술자들은 여전히 데이터와 금융, 그리고 안전의 중심에서 소외되어 있었습니다. <br class="hidden md:block"><br class="hidden md:block">
            시스템의 모순을 해결하고 사람들이 온전히 일에 몰입하는 기쁨을 되찾아주기 위해, 저는 T-Rive를 시작했습니다."
        </p>
    </div>
</section>

<!-- Step 6. Join Us & Coffee Chat -->
<section id="coffee-chat" class="py-24 border-t border-white/5 bg-brand-card/50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-emerald uppercase mb-2">Join Us</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white mb-6">T-Rive의 위대한 도정에 합류하세요</p>
            <p class="text-gray-400 font-light text-lg break-keep leading-relaxed">
                T-Rive의 조직 목표는 초기 파운딩 크루부터 Series A, B, C 이후 합류할 동료들까지, 시스템 보상의 한계 없이 평생 동안 지속적인 성장과 깊은 몰입을 경험할 수 있는 최고의 환경을 유지하는 것입니다.
            </p>
        </div>

        <!-- Hiring Snapshot -->
        <div class="max-w-4xl mx-auto mb-16">
            <h3 class="text-sm text-gray-500 font-semibold mb-4 text-center uppercase">Hiring Snapshot</h3>
            <div class="flex flex-wrap justify-center gap-3">
                <span class="px-4 py-2 bg-brand-dark rounded border border-white/10 text-gray-300 text-sm hover:border-brand-accent transition-colors cursor-default">Product Owner</span>
                <span class="px-4 py-2 bg-brand-dark rounded border border-white/10 text-gray-300 text-sm hover:border-brand-accent transition-colors cursor-default">Product Designer</span>
                <span class="px-4 py-2 bg-brand-dark rounded border border-white/10 text-gray-300 text-sm hover:border-brand-accent transition-colors cursor-default">Frontend Engineer</span>
                <span class="px-4 py-2 bg-brand-dark rounded border border-white/10 text-gray-300 text-sm hover:border-brand-accent transition-colors cursor-default">Backend Engineer</span>
                <span class="px-4 py-2 bg-brand-dark rounded border border-white/10 text-gray-300 text-sm hover:border-brand-accent transition-colors cursor-default">AI Engineer</span>
                <span class="px-4 py-2 bg-brand-dark rounded border border-white/10 text-gray-300 text-sm hover:border-brand-accent transition-colors cursor-default">Infrastructure Expert</span>
                <span class="px-4 py-2 bg-brand-dark rounded border border-white/10 text-gray-300 text-sm hover:border-brand-accent transition-colors cursor-default">Community Builder</span>
                <span class="px-4 py-2 bg-brand-dark rounded border border-white/10 text-gray-300 text-sm hover:border-brand-accent transition-colors cursor-default">Growth Hacker</span>
            </div>
        </div>

        <!-- Coffee Chat Form -->
        <div class="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-brand-dark border border-white/5 relative overflow-hidden shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <form id="recruitment-form" onsubmit="handleRecruitSubmit(event)" class="relative z-10">
                <div class="text-center mb-10">
                    <i class="fa-solid fa-mug-hot text-4xl text-brand-emerald mb-6 block hover:scale-110 transition-transform"></i>
                    <p class="text-white text-lg sm:text-xl font-bold mb-4 break-keep">지금 직장이 있어도, 당장 합류하지 않아도, 창업을 깊게 고민 중이어도 괜찮습니다.</p>
                    <p class="text-gray-400 text-sm break-keep leading-relaxed mb-6 font-light">우리는 직무의 스택보다 사람의 방향성을 먼저 봅니다. 아래의 질문에 가슴이 뛴다면 언제든 T-Rive의 문을 두드려 주세요.</p>
                    
                    <div class="p-6 bg-brand-card/50 rounded-2xl border border-white/5 text-left mb-8">
                        <ul class="text-gray-300 text-sm font-medium space-y-3">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-chevron-right text-brand-emerald mt-1"></i> “사람은 왜 몰입을 잃어버리는가?”</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-chevron-right text-brand-emerald mt-1"></i> “AI 시대에 인간 고유의 전문성은 어떤 가치를 지니는가?”</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-chevron-right text-brand-emerald mt-1"></i> “미래의 노동 환경은 어떻게 진화할 것인가?”</li>
                        </ul>
                    </div>
                </div>

                <div class="space-y-4">
                    <div>
                        <input type="text" placeholder="성함 (또는 닉네임)" required class="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors">
                    </div>
                    <div>
                        <input type="text" placeholder="연락처 또는 이메일 주소" required class="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors">
                    </div>
                    <div>
                        <textarea placeholder="링크드인 프로필, 이력서 링크, 혹은 자유로운 인사 (선택)" rows="3" class="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-white text-brand-dark font-bold py-4 rounded-xl hover:bg-gray-200 transition-all hover:scale-[1.02] glow-emerald">
                        커피챗 신청하기
                    </button>
                </div>
            </form>

            <div id="recruit-success-card" class="hidden text-center py-12 relative z-10">
                <div class="w-20 h-20 mx-auto bg-brand-emerald/20 rounded-full flex items-center justify-center mb-6">
                    <i class="fa-solid fa-check text-3xl text-brand-emerald"></i>
                </div>
                <h4 class="text-2xl font-bold text-white mb-2">커피챗 신청이 완료되었습니다</h4>
                <p class="text-gray-400">전해주신 연락처로 T-Rive 팀이 편안한 티미팅 일정을 안내해 드리겠습니다.</p>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="py-12 bg-brand-dark border-t border-white/5 text-xs text-gray-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center font-black text-sm text-white tracking-normal hover:scale-110 transition-transform glow-cyan">
                T
            </div>
            <span class="font-bold text-gray-400 tracking-normal">T-Rive</span>
        </div>
        <p>© 2026 T-Rive. All rights reserved.</p>
    </div>
</footer>

<script>
    window.onload = function() {
        initMonoSimulation();
    }

    // Mobile Menu Logic
    const openBtn = document.getElementById('open-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if(openBtn && closeBtn && mobileMenu) {
        openBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        });
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        });
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            });
        });
    }

    // MONO Range Slider (Simplified)
    function initMonoSimulation() {
        const slider = document.getElementById('mono-days-slider');
        const daysText = document.getElementById('mono-days-text');
        const cbGradeText = document.getElementById('mono-cb-grade');
        const progressFill = document.getElementById('mono-robot-progress');

        if(slider) {
            slider.addEventListener('input', function(e) {
                const val = parseInt(e.target.value);
                daysText.innerText = val + ' 일';
                
                let grade = "M-4 등급";
                let progressPct = 20;
                if (val > 300) { grade = "M-1 등급"; progressPct = 90; }
                else if (val > 180) { grade = "M-2 등급"; progressPct = 60; }
                else if (val > 90) { grade = "M-3 등급"; progressPct = 40; }

                cbGradeText.innerText = grade;
                progressFill.style.width = progressPct + '%';
            });
        }
    }

    // Form Submission
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
