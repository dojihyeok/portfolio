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
        body {
            background-color: #0B0F19;
            color: #F3F4F6;
        }
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
                A
            </div>
            <span class="font-bold text-lg tracking-normal text-white">Artiflux</span>
        </div>
        <nav class="hidden lg:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#hero" class="hover:text-white transition">홈</a>
            <a href="#why-we-exist" class="hover:text-white transition">존재 이유</a>
            <a href="#vision" class="hover:text-white transition">미래 비전</a>
            <a href="#project-mono" class="hover:text-brand-accent transition flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>첫 번째 여정</a>
            <a href="#roadmap" class="hover:text-white transition">생태계 로드맵</a>
            <a href="#culture" class="hover:text-white transition">팀 문화</a>
        </nav>
        <div class="lg:hidden">
            <button class="text-gray-400 hover:text-white"><i class="fa-solid fa-bars text-xl"></i></button>
        </div>
    </div>
</header>

<!-- 1. Hero Section -->
<section id="hero" class="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight mb-8 break-keep" style="line-height: 1.6;">
            <span class="text-white block">일하는 즐거움을 아는 사람들이</span>
            <span class="text-white block">자신의 관심 분야에 몰입하며 살아갈 수 있는 세상</span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light break-keep">
            Artiflux는 일하는 즐거움을 아는 사람들이 모여, 더 많은 사람들이 자신의 일과 관심사에 몰입할 수 있는 환경을 만들고 있습니다. <br class="hidden sm:block">
            현재는 현장 근무자를 위한 MONO 서비스를 통해 그 여정을 시작하고 있습니다.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#why-we-exist" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-white font-semibold transition-all hover:scale-105 glow-cyan shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2">
                <i class="fa-solid fa-book-open"></i> 우리 이야기 보기
            </a>
            <a href="#coffee-chat" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold transition-all hover:scale-105 border border-white/10 flex items-center justify-center gap-2">
                <i class="fa-solid fa-mug-hot text-brand-emerald"></i> 커피챗 신청하기
            </a>
        </div>
    </div>
</section>

<!-- 2. Team First (우리는 왜 존재하는가?) -->
<section id="why-we-exist" class="py-24 border-t border-white/5 bg-brand-card/50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-2">Why We Exist</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white mb-4">우리는 왜 존재하는가?</p>
            <p class="text-gray-400 font-light text-lg break-keep">
                사람들은 누구나 몰입의 순간을 경험할 수 있습니다.<br>
                Artiflux는 사람들이 자신의 관심 분야에 더 오래 몰입할 수 있는 환경을 만드는 팀입니다.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-cloud-bolt"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">미래에 대한 불안</h3>
                <p class="text-gray-400 font-light leading-relaxed">자신의 노동 가치와 미래 생존에 대한 불안감이 온전한 몰입을 방해합니다.</p>
            </div>
            
            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-puzzle-piece"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">불합리한 구조</h3>
                <p class="text-gray-400 font-light leading-relaxed">본질이 아닌 부가적인 업무와 비효율적인 구조가 에너지와 열정을 갉아먹습니다.</p>
            </div>

            <div class="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 text-xl">
                    <i class="fa-solid fa-scale-unbalanced"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">보상 체계의 한계</h3>
                <p class="text-gray-400 font-light leading-relaxed">성장과 기여도에 부합하지 않는 보상 체계로 인해 자발적 몰입과 연대가 끊어집니다.</p>
            </div>
        </div>
    </div>
</section>

<!-- 3. Vision -->
<section id="vision" class="py-24 border-t border-white/5 bg-brand-dark relative text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-violet uppercase mb-4">Our Vision</h2>
        <h3 class="text-3xl sm:text-4xl font-bold text-white mb-8">우리가 만들고 싶은 미래</h3>
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed font-light break-keep">
            우리는 단순히 서비스를 만드는 것이 아니라 <br class="hidden sm:block">
            <strong class="font-bold text-white">사람들이 더 오래 몰입할 수 있는 구조</strong>를 만들고 있습니다. <br><br>
            현장 근무자, 창업가, 개발자, 전문가들이 자신의 일에 오롯이 집중할 수 있도록 <br>
            더 나은 협업 구조와 지속 가능한 보상 체계를 연구하고 실험합니다.
        </p>
    </div>
</section>

<!-- 4. Project MONO -->
<section id="project-mono" class="py-24 border-t border-white/5 bg-brand-card/50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <span class="px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-semibold border border-brand-emerald/20 uppercase tracking-normal font-mono mb-4 inline-block hover:scale-105 transition-transform">1st Project</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">첫 번째 프로젝트 : MONO</h2>
            <p class="text-gray-400 font-light text-lg break-keep mb-4">
                우리는 거대한 비전을 한 번에 만들려고 하지 않습니다.<br>
                가장 먼저 현장 근무자의 몰입 문제를 해결하기 위해 MONO를 만들고 있습니다.
            </p>
            <p class="text-gray-400 font-light text-lg break-keep">
                현장 근무자가 언제 어디서든 일하고, 기술과 경험을 공유하며, 미래 현장 환경을 함께 만들어 갈 수 있도록 지원합니다.
            </p>
        </div>

        <!-- Simulator -->
        <div class="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-brand-dark/80 backdrop-blur-md border border-white/10 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all">
            <div class="flex items-center justify-between mb-10">
                <h3 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                    <i class="fa-solid fa-microchip text-brand-emerald"></i> MONO Worker Immersion Engine
                </h3>
            </div>
            
            <div class="mb-10">
                <div class="flex justify-between text-sm text-gray-400 mb-4 font-semibold">
                    <span>몰입(근무) 일수 시뮬레이션</span>
                    <span id="mono-days-text" class="text-brand-emerald font-bold text-lg">90 일</span>
                </div>
                <input type="range" id="mono-days-slider" min="10" max="365" value="90" 
                       class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-emerald hover:scale-[1.02] transition-transform">
                <div class="flex justify-between text-xs text-gray-500 mt-2">
                    <span>10일 (단기)</span>
                    <span>365일 (연간)</span>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <!-- CB Grade -->
                <div class="p-6 rounded-2xl bg-brand-card border border-white/5">
                    <p class="text-xs text-gray-400 mb-2 font-semibold">대안 신용 등급 변환</p>
                    <p id="mono-cb-grade" class="text-2xl font-bold text-white transition-all">M-4 등급</p>
                </div>
                <!-- Co-building Score -->
                <div class="p-6 rounded-2xl bg-brand-card border border-white/5">
                    <p class="text-xs text-gray-400 mb-2 font-semibold">공동 빌딩 기여 점수</p>
                    <p id="mono-co-create" class="text-2xl font-bold text-white transition-all">55 점</p>
                </div>
                <!-- Robot RaaS -->
                <div class="p-6 rounded-2xl bg-brand-card border border-white/5">
                    <p class="text-xs text-gray-400 mb-2 font-semibold">로봇 가동 배정 지수</p>
                    <p id="mono-robot-yield" class="text-2xl font-bold text-brand-accent transition-all">5.0% 마진 쉐어</p>
                </div>
            </div>

            <div class="mt-8">
                <div class="flex justify-between text-xs text-gray-400 mb-2">
                    <span>로보틱스 협업 언락 진행도</span>
                    <i class="fa-solid fa-lock-open text-brand-accent"></i>
                </div>
                <div class="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div id="mono-robot-progress" class="h-full bg-brand-accent rounded-full transition-all duration-500" style="width: 20%;"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 5. Future Roadmap -->
<section id="roadmap" class="py-24 border-t border-white/5 bg-brand-dark relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-2">Future Roadmap</h2>
            <p class="text-3xl sm:text-4xl font-bold text-white mb-4">우리가 만들고 싶은 생태계</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div class="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden lg:block z-0"></div>
            
            <div class="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-emerald/30 transition-all hover:scale-105 glow-emerald z-10 relative">
                <span class="inline-block px-2 py-1 rounded bg-brand-emerald/20 text-brand-emerald text-xs font-bold mb-4">STEP 1</span>
                <h3 class="text-xl font-bold text-white mb-2">MONO</h3>
                <p class="text-gray-400 font-light text-sm">현장 근무자의 몰입</p>
            </div>
            
            <div class="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-accent/30 transition-all hover:scale-105 glow-cyan z-10 relative">
                <span class="inline-block px-2 py-1 rounded bg-brand-accent/20 text-brand-accent text-xs font-bold mb-4">STEP 2</span>
                <h3 class="text-xl font-bold text-white mb-2">전문가 지원 조직</h3>
                <p class="text-gray-400 font-light text-sm">창업팀이 본질에 집중할 수 있는 환경 구축</p>
            </div>

            <div class="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-violet/30 transition-all hover:scale-105 glow-violet z-10 relative">
                <span class="inline-block px-2 py-1 rounded bg-brand-violet/20 text-brand-violet text-xs font-bold mb-4">STEP 3</span>
                <h3 class="text-xl font-bold text-white mb-2">Trydit</h3>
                <p class="text-gray-400 font-light text-sm">관심 기반 지식 네트워크</p>
            </div>

            <div class="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-white/30 transition-all hover:scale-105 shadow-lg hover:shadow-white/20 z-10 relative">
                <span class="inline-block px-2 py-1 rounded bg-white/20 text-white text-xs font-bold mb-4">STEP 4</span>
                <h3 class="text-xl font-bold text-white mb-2">모두의 창업</h3>
                <p class="text-gray-400 font-light text-sm">누구나 창업과 성장에 참여할 수 있는 생태계</p>
            </div>
        </div>
    </div>
</section>

<!-- 6. Team Culture -->
<section id="culture" class="py-24 border-t border-white/5 bg-brand-card/50 relative text-center">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xs sm:text-sm font-semibold tracking-normal text-brand-accent uppercase mb-4">Team Culture</h2>
        <h3 class="text-3xl sm:text-4xl font-bold text-white mb-6">우리가 중요하게 생각하는 것</h3>
        <p class="text-lg text-brand-emerald font-semibold mb-12">"직무보다 방향성을 먼저 봅니다."</p>

        <div class="flex flex-wrap justify-center gap-4">
            <div class="px-6 py-4 bg-brand-dark rounded-full border border-white/10 text-gray-300 font-semibold hover:border-brand-accent/50 hover:text-brand-accent transition-all hover:scale-105 glow-cyan">
                문제 해결을 즐기는 사람
            </div>
            <div class="px-6 py-4 bg-brand-dark rounded-full border border-white/10 text-gray-300 font-semibold hover:border-brand-accent/50 hover:text-brand-accent transition-all hover:scale-105 glow-cyan">
                꾸준히 배우는 사람
            </div>
            <div class="px-6 py-4 bg-brand-dark rounded-full border border-white/10 text-gray-300 font-semibold hover:border-brand-accent/50 hover:text-brand-accent transition-all hover:scale-105 glow-cyan">
                자신의 분야에 깊게 몰입하는 사람
            </div>
            <div class="px-6 py-4 bg-brand-dark rounded-full border border-white/10 text-gray-300 font-semibold hover:border-brand-accent/50 hover:text-brand-accent transition-all hover:scale-105 glow-cyan">
                함께 성장하는 사람
            </div>
            <div class="px-6 py-4 bg-brand-dark rounded-full border border-white/10 text-gray-300 font-semibold hover:border-brand-emerald/50 hover:text-brand-emerald transition-all hover:scale-105 glow-emerald">
                일하는 즐거움을 아는 사람
            </div>
        </div>
    </div>
</section>

<!-- 7. Coffee Chat (Join Us) -->
<section id="coffee-chat" class="py-24 border-t border-white/5 bg-brand-dark relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Coffee Chat Form -->
        <div class="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-brand-card border border-white/5 relative overflow-hidden shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <form id="recruitment-form" onsubmit="handleRecruitSubmit(event)" class="relative z-10">
                <div class="text-center mb-8">
                    <i class="fa-solid fa-mug-hot text-4xl text-brand-emerald mb-4 block"></i>
                    <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">함께 미래를 만들 동료를 찾고 있습니다</h3>
                    <p class="text-gray-400 text-sm sm:text-base break-keep leading-relaxed mb-6 font-light">
                        현재 Artiflux는 MONO 프로젝트와 함께 성장할 동료를 찾고 있습니다.<br><br>
                        초기 팀원뿐 아니라, 앞으로 Series A, B, C 단계에서 합류할 사람들도 지속적으로 몰입할 수 있는 환경을 만드는 것이 우리의 목표입니다.<br>
                        관심이 있다면 부담 없이 커피챗을 신청해주세요.
                    </p>
                </div>

                <div class="space-y-4">
                    <div>
                        <input type="text" placeholder="성함 (또는 닉네임)" required class="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors">
                    </div>
                    <div>
                        <input type="text" placeholder="연락처 또는 이메일 주소" required class="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors">
                    </div>
                    <div>
                        <textarea placeholder="링크드인 프로필, 이력서 링크, 혹은 자유로운 자기소개 (선택)" rows="3" class="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-emerald transition-colors resize-none"></textarea>
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
                <p class="text-gray-400">보내주신 귀중한 생각을 확인하여, 편안하고 매끄러운 커피챗 일정을 회신해 드리겠습니다.</p>
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
            <span class="font-bold text-gray-400 tracking-normal">Artiflux</span>
        </div>
        <p>© 2026 Artiflux. All rights reserved.</p>
    </div>
</footer>

<script>
    window.onload = function() {
        initMonoSimulation();
    }

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
                
                const coCreatePct = Math.min(100, Math.floor(40 + (val / 6)));
                coCreateText.innerText = coCreatePct + '점';
                
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
