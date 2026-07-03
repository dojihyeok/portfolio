const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="ko" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>T-Rive (티라이브) - 온전한 몰입의 시스템을 설계합니다</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts Inter & Noto Sans KR -->
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
                            accent: '#3B82F6', // T-Rive Sapphire Blue
                            neon: '#06B6D4', // Flow Cyan
                            emerald: '#10B981', // Growth Emerald
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
        .glow-accent {
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.25);
        }
        .glow-neon {
            box-shadow: 0 0 25px rgba(6, 182, 212, 0.25);
        }
        .glow-violet {
            box-shadow: 0 0 25px rgba(139, 92, 246, 0.25);
        }
        /* mobile menu overlay */
        #mobile-menu {
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }
        #mobile-menu.hidden {
            opacity: 0;
            visibility: hidden;
            display: block;
        }
    </style>
</head>
<body class="font-sans antialiased overflow-x-hidden selection:bg-brand-accent selection:text-white">

<!-- Header (Navigation) -->
<header class="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-accent to-brand-violet flex items-center justify-center font-black text-xl text-white tracking-wider glow-accent">
                T
            </div>
            <span class="font-bold text-lg tracking-wider bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">T-Rive</span>
        </div>
        <nav class="hidden lg:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#hero" class="hover:text-white transition">홈</a>
            <a href="#why" class="hover:text-white transition">존재 이유</a>
            <a href="#founder" class="hover:text-white transition">창업가 스토리</a>
            <a href="#team" class="hover:text-white transition">팀 문화</a>
            <a href="#journey" class="hover:text-white transition">여정의 단계</a>
            <a href="#apply-portal" class="hover:text-white transition flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>지원 채널</a>
        </nav>
        
        <!-- Mobile menu button -->
        <div class="lg:hidden">
            <button id="mobile-menu-btn" class="text-gray-300 hover:text-white focus:outline-none">
                <i class="fa-solid fa-bars text-2xl"></i>
            </button>
        </div>

        <div class="hidden lg:block">
            <a href="#apply-portal" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-brand-violet hover:opacity-90 text-white text-sm font-semibold transition inline-flex items-center gap-2">
                T-Rive 지원하기 <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
        </div>
    </div>
</header>

<!-- Mobile Menu Overlay -->
<div id="mobile-menu" class="hidden fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-lg">
    <div class="flex justify-end p-6">
        <button id="mobile-close-btn" class="text-gray-300 hover:text-white">
            <i class="fa-solid fa-xmark text-3xl"></i>
        </button>
    </div>
    <div class="flex flex-col items-center justify-center h-full space-y-8 pb-20">
        <a href="#hero" class="mobile-link text-2xl font-bold text-gray-300 transition">홈</a>
        <a href="#why" class="mobile-link text-2xl font-bold text-gray-300 transition">존재 이유</a>
        <a href="#founder" class="mobile-link text-2xl font-bold text-gray-300 transition">창업가 스토리</a>
        <a href="#team" class="mobile-link text-2xl font-bold text-gray-300 transition">팀 문화</a>
        <a href="#journey" class="mobile-link text-2xl font-bold text-gray-300 transition">여정의 단계</a>
        <a href="#apply-portal" class="mobile-link text-2xl font-bold text-brand-accent transition">T-Rive 지원하기</a>
    </div>
</div>

<!-- Hero Section (T-Rive & Philosophy-First) -->
<section id="hero" class="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-violet/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 mb-8 backdrop-blur-sm">
            <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span>T-Rive : 온전한 몰입을 통해 번창(Thrive)하는 최고의 상태</span>
        </div>
        
        <h1 class="text-[28px] leading-[1.4] sm:text-5xl lg:text-[56px] font-extrabold tracking-tight sm:leading-[1.3] mb-8 break-keep">
            <span class="block text-brand-accent font-semibold text-xl sm:text-2xl lg:text-3xl mb-4 tracking-wide uppercase">T-Rive</span>
            <span class="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">일하는 즐거움을 아는 사람들이 자신의 관심 분야에 온전히 몰입하며 살아갈 수 있는 세상을 만듭니다.</span>
        </h1>

        <p class="text-[16px] sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium break-keep">
            우리는 MONO를 시작으로, 미래의 일하는 방식과 창업 생태계를 설계하는 아키텍트 크루입니다.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#why" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-accent to-brand-violet text-white font-semibold transition hover:opacity-90 shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2">
                T-Rive의 존재 이유 보기 <i class="fa-solid fa-arrow-down text-xs"></i>
            </a>
            <a href="#apply-portal" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold transition border border-white/10 flex items-center justify-center gap-2">
                T-Rive 즉시 지원하기 <i class="fa-solid fa-rocket text-brand-emerald text-xs"></i>
            </a>
        </div>
    </div>
</section>

<!-- Section 1: Why T-Rive? (Philosophy) -->
<section id="why" class="py-24 border-t border-white/5 bg-slate-950/40 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-violet uppercase mb-2">Our Philosophy</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">몰입을 깨는 구조적 불안감을 지웁니다</p>
            <p class="text-gray-400 font-light mt-4 break-keep">몰입은 개인의 의지나 재능 문제가 아닙니다. 사람들은 누구나 몰입할 수 있는 힘을 가지고 있습니다. 하지만 대부분의 메이커들은 과거 선택의 후회, 현재의 불합리함, 미래의 불안감 때문에 몰입을 방해받고 있습니다. T-Rive는 이러한 구조적 노이즈를 청소하여 하고 싶은 일과 취미를 편안히 즐길 수 있도록 돕습니다.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="p-8 rounded-2xl bg-brand-card/30 border border-white/5 text-left relative overflow-hidden group hover:border-brand-accent/20 transition duration-300">
                <div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent text-lg mb-6"><i class="fa-solid fa-hourglass-half"></i></div>
                <h3 class="text-lg font-bold text-white mb-3 break-keep">미래에 대한 불안</h3>
                <p class="text-gray-400 text-sm leading-relaxed font-light break-keep">피지컬 AI 시대와 기술적 대격변 속에서, 자신의 소중한 노동과 기술적 가치가 보전될 수 있을까에 대한 본질적 두려움을 해소합니다.</p>
            </div>
            <div class="p-8 rounded-2xl bg-brand-card/30 border border-white/5 text-left relative overflow-hidden group hover:border-brand-emerald/20 transition duration-300">
                <div class="w-12 h-12 rounded-xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald text-lg mb-6"><i class="fa-solid fa-code-merge"></i></div>
                <h3 class="text-lg font-bold text-white mb-3 break-keep">불합리한 구조</h3>
                <p class="text-gray-400 text-sm leading-relaxed font-light break-keep">한 분야의 소중한 장인이 정규직이 아니라는 이유만으로 금융과 사회적 신뢰에서 배제되고 경험이 단절되는 불합리한 장벽을 무너뜨립니다.</p>
            </div>
            <div class="p-8 rounded-2xl bg-brand-card/30 border border-white/5 text-left relative overflow-hidden group hover:border-brand-violet/20 transition duration-300">
                <div class="w-12 h-12 rounded-xl bg-brand-violet/10 flex items-center justify-center text-brand-violet text-lg mb-6"><i class="fa-solid fa-chart-pie"></i></div>
                <h3 class="text-lg font-bold text-white mb-3 break-keep">보상 체계의 한계</h3>
                <p class="text-gray-400 text-sm leading-relaxed font-light break-keep">회사의 성장이 극에 달했을 때, 새롭게 합류하거나 지속해서 기여한 핵심 팀원들이 자산 분배에서 소외되어 연대가 깨지는 현상을 바로잡습니다.</p>
            </div>
            <div class="p-8 rounded-2xl bg-brand-card/30 border border-white/5 text-left relative overflow-hidden group hover:border-red-500/20 transition duration-300">
                <div class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 text-lg mb-6"><i class="fa-solid fa-arrows-spin"></i></div>
                <h3 class="text-lg font-bold text-white mb-3 break-keep">조직 성장 과정의 단절</h3>
                <p class="text-gray-400 text-sm leading-relaxed font-light break-keep">스타트업의 단계적 팽창에 따라 인프라, 보안, 세무, 정산 등 비본질적 업무와 복잡한 행정으로 인해 본업의 집중이 흩어지는 낭비를 차단합니다.</p>
            </div>
        </div>
    </div>
</section>

<!-- Section 2: Founder Story -->
<section id="founder" class="py-24 border-t border-white/5 relative bg-gradient-to-b from-brand-dark to-slate-950">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-accent uppercase mb-2">Founder Story</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">기술을 통해 마주한, 사람을 살리는 기술</p>
        </div>

        <div class="p-8 sm:p-12 rounded-3xl bg-brand-card/40 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-start gap-10">
            <div class="flex-shrink-0 mx-auto md:mx-0">
                <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-brand-dark border border-white/10 flex items-center justify-center glow-accent">
                    <img src="https://avatars.githubusercontent.com/u/10899881?v=4" alt="Founder" class="w-full h-full object-cover">
                </div>
                <div class="text-center mt-4">
                    <span class="block font-bold text-white text-lg">이윤혁</span>
                    <span class="block text-xs text-gray-500 mt-1">Founder / Tech Builder</span>
                </div>
            </div>

            <div class="flex-1 text-gray-300 text-[15px] sm:text-lg font-light leading-loose break-keep text-justify">
                <i class="fa-solid fa-quote-left text-xl text-brand-accent/30 mb-2 block"></i>
                <p class="px-2 sm:px-8 py-2">
                    18년 동안 금융, 제조, 대형 플랫폼 시스템을 만들며 수천억 규모의 대형 프로젝트들을 경험했습니다. 하지만 가장 중요한 사람들, 현장에서 실제로 숭고한 가치를 만들어내는 기술자들은 여전히 데이터와 금융, 그리고 안전의 중심에서 소외되어 있었습니다.<br><br>
                    시스템의 모순을 해결하고 사람들이 온전히 일에 몰입하는 기쁨을 되찾아주기 위해, 저는 T-Rive를 시작했습니다.
                </p>
                <i class="fa-solid fa-quote-right text-xl text-brand-accent/30 mt-2 block text-right"></i>
            </div>
        </div>
    </div>
</section>

<!-- Section 3: Team Culture & Why Join Us -->
<section id="team" class="py-24 relative bg-brand-dark border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-violet uppercase mb-2">Team & Recruiting</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">우리는 이렇게 일하고, 이런 성장을 제공합니다</p>
            <p class="mt-4 text-gray-400 font-light break-keep">뛰어난 팀원들이 회사를 위해 헌신하길 바라지 않습니다. 지원자가 T-Rive 팀에 와서 무엇을 얻어가고 왜 온전히 본업에 몰입할 수 있는지 그 매력에 집중합니다.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <!-- Culture Card -->
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-white border-l-4 border-brand-accent pl-3 break-keep">우리가 일하는 6가지 규칙</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="p-4 rounded-xl bg-brand-card/30 border border-white/5">
                        <strong class="text-white block text-sm mb-1">회의보다 빠른 실행</strong>
                        <p class="text-gray-400 text-xs font-light leading-relaxed break-keep">끝없는 토론에 에너지를 흘리지 않습니다. 가설 수립 후 작동하는 가벼운 구현으로 검증합니다.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-brand-card/30 border border-white/5">
                        <strong class="text-white block text-sm mb-1">반복 업무의 기계 자동화</strong>
                        <p class="text-gray-400 text-xs font-light leading-relaxed break-keep">두 번 이상 마주하는 수작업은 시스템적 낭비입니다. 정교하게 자동화하여 온전히 몰입합니다.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-brand-card/30 border border-white/5">
                        <strong class="text-white block text-sm mb-1">직급보다 명확한 문제 해결</strong>
                        <p class="text-gray-400 text-xs font-light leading-relaxed break-keep">연차나 불필요한 직함은 배제합니다. 가장 논리적이고 우아한 구조적 제안만을 지지합니다.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-brand-card/30 border border-white/5">
                        <strong class="text-white block text-sm mb-1">높은 자율성과 주도성</strong>
                        <p class="text-gray-400 text-xs font-light leading-relaxed break-keep">결과에 대한 신뢰와 자물쇠만 채울 수 있다면 작업 장소, 시간은 100% 개인이 이끕니다.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-brand-card/30 border border-white/5">
                        <strong class="text-white block text-sm mb-1">실패보다 멈춤에 대한 경계</strong>
                        <p class="text-gray-400 text-xs font-light leading-relaxed break-keep">도전 과정에서의 성실한 실패는 정답을 향한 내비게이션입니다. 변화 없는 정체를 가장 멀리합니다.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-brand-card/30 border border-white/5">
                        <strong class="text-white block text-sm mb-1">화려한 기술보다 진짜 가치</strong>
                        <p class="text-gray-400 text-xs font-light leading-relaxed break-keep">자기만족용 오버 엔지니어링을 지양하고, 사용자가 만질 진짜 문제를 해결하는 데 집중합니다.</p>
                    </div>
                </div>
            </div>

            <!-- What You Get Card -->
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-white border-l-4 border-brand-emerald pl-3 break-keep">창업가와 개발자의 제품 집중 & 전문가의 상생 기여</h3>
                <div class="space-y-4">
                    <div class="p-4 rounded-xl bg-brand-emerald/5 border border-brand-emerald/10 flex gap-4">
                        <div class="text-brand-emerald text-lg mt-1"><i class="fa-solid fa-fire"></i></div>
                        <div>
                            <strong class="text-white text-sm block mb-1">제품 성장에만 몰입하는 구조</strong>
                            <p class="text-gray-400 text-xs font-light break-keep">창업가와 개발자가 인프라, 보안, 데이터, 운영 문제에 시간을 낭비하지 않고 오직 아이디어와 제품의 성장에만 집중할 수 있는 환경을 제공합니다.</p>
                        </div>
                    </div>
                    <div class="p-4 rounded-xl bg-brand-accent/5 border border-brand-accent/10 flex gap-4">
                        <div class="text-brand-accent text-lg mt-1"><i class="fa-solid fa-coins"></i></div>
                        <div>
                            <strong class="text-white text-sm block mb-1">비용 혁신: 1/10 비용으로 누리는 최고의 인재</strong>
                            <p class="text-gray-400 text-xs font-light break-keep">최고의 최정예 전문가 한 명의 보상 체계를 10개의 회사가 나눠서 지급하는 형태로, 여러 팀의 성장에 유연하게 기여하며 원팀으로 상생합니다.</p>
                        </div>
                    </div>
                    <div class="p-4 rounded-xl bg-brand-violet/5 border border-brand-violet/10 flex gap-4">
                        <div class="text-brand-violet text-lg mt-1"><i class="fa-solid fa-chart-line"></i></div>
                        <div>
                            <strong class="text-white text-sm block mb-1">초대형 금융-로보틱스 인프라 아키텍처 다루기</strong>
                            <p class="text-gray-400 text-xs font-light break-keep">대안 신용 점수 설계, 분산 트랜잭션, 하드웨어 협업 로봇(RaaS) 관제 등 글로벌 레벨로 스케일업할 대형 지식을 체득합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Current Status Dashboard -->
        <div class="p-8 rounded-2xl bg-brand-card/40 border border-white/5 mb-20">
            <h3 class="text-lg font-bold text-white mb-6 text-center sm:text-left"><i class="fa-solid fa-flag text-brand-accent mr-2"></i> 우리는 지금 여기까지 왔습니다 (Current Status)</h3>
            <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span class="text-xs text-gray-500 block mb-1">Step 01</span>
                    <strong class="text-white text-sm block">MONO MVP 빌드</strong>
                    <span class="text-[10px] text-brand-emerald font-semibold mt-1 inline-block"><i class="fa-solid fa-circle-check"></i> 설계 및 구현 완료</span>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span class="text-xs text-gray-500 block mb-1">Step 02</span>
                    <strong class="text-white text-sm block">조선 · 플랜트 검증</strong>
                    <span class="text-[10px] text-brand-emerald font-semibold mt-1 inline-block"><i class="fa-solid fa-circle-check"></i> 심층 FGI 진행 완료</span>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span class="text-xs text-gray-500 block mb-1">Step 03</span>
                    <strong class="text-white text-sm block">AWS 분산 인프라</strong>
                    <span class="text-[10px] text-brand-emerald font-semibold mt-1 inline-block"><i class="fa-solid fa-circle-check"></i> 아키텍처 초안 수립</span>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span class="text-xs text-gray-500 block mb-1">Step 04</span>
                    <strong class="text-white text-sm block">초기 파트너십</strong>
                    <span class="text-[10px] text-brand-accent font-semibold mt-1 inline-block"><i class="fa-solid fa-arrows-spin animate-spin"></i> 예비 거점 조율 중</span>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span class="text-xs text-gray-500 block mb-1">Step 05</span>
                    <strong class="text-white text-sm block">12개월 단기 지표</strong>
                    <span class="text-[10px] text-brand-violet font-semibold mt-1 inline-block"><i class="fa-solid fa-bullseye"></i> E-7-4 비자 규제 샌드박스</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Section 4: Journey (Our Master Steps) -->
<section id="journey" class="py-24 relative bg-slate-950 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-xs sm:text-sm font-semibold tracking-widest text-brand-violet uppercase mb-2">Our Master Journey</h2>
            <p class="text-3xl sm:text-4xl font-extrabold text-white break-keep">우리는 이 거대한 여정을 이렇게 실행합니다</p>
            <p class="mt-4 text-gray-400 font-light break-keep">우리는 한 번에 세상을 바꾸는 환상을 쫓지 않습니다. 가장 현실적이고 땀 냄새 가득한 문제에서 시작하여, 점진적으로 모든 이의 주체적인 삶과 몰입의 생태계를 구축합니다.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Step 1 (Current Project MONO) -->
            <div class="p-8 rounded-3xl bg-brand-card/40 border-2 border-brand-accent/30 flex flex-col justify-between glow-accent relative">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-accent px-2 py-0.5 rounded bg-brand-accent/10 uppercase tracking-widest">Phase 1</span>
                <div>
                    <div class="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center text-xl mb-6"><i class="fa-solid fa-layer-group"></i></div>
                    <span class="text-[10px] text-brand-accent font-bold uppercase tracking-wider font-mono">Current Mission</span>
                    <h3 class="text-xl font-bold text-white mt-2 mb-4 break-keep">MONO (현장 근무자의 몰입)</h3>
                    <p class="text-gray-400 text-xs leading-relaxed font-light break-keep">
                        거대한 비전을 한 번에 만들려고 하지 않습니다. 가장 먼저 현장 기술자들이 더 안전하게, 더 많이 벌고, 더 오래 성장할 수 있는 데이터 인프라 MONO를 통해 첫 번째 몰입을 성공시킵니다.
                    </p>
                </div>
                <div class="mt-8 border-t border-white/5 pt-4">
                    <!-- Interactive Mini CB Slider -->
                    <div class="space-y-2">
                        <div class="flex justify-between text-[10px] text-gray-400">
                            <span>연간 현장 출역 로그</span>
                            <span id="journey-days" class="text-brand-accent font-bold">180일</span>
                        </div>
                        <input id="journey-days-slider" type="range" min="10" max="365" value="180" class="w-full accent-brand-accent h-1 bg-gray-800 rounded-lg cursor-pointer">
                        <div class="flex justify-between text-[9px] text-gray-500">
                            <span>대안 등급: <span id="journey-cb" class="text-white font-medium">M-2</span></span>
                            <span>로봇 배정 마진: <span id="journey-robot" class="text-brand-emerald font-semibold">12.5%</span></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Step 2 (Future Project Blood Star) -->
            <div class="p-8 rounded-3xl bg-brand-card/20 border border-white/5 flex flex-col justify-between hover:border-brand-violet/20 transition duration-300">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-violet px-2 py-0.5 rounded bg-brand-violet/10 uppercase tracking-widest">Phase 2</span>
                <div>
                    <div class="w-12 h-12 rounded-xl bg-brand-violet/10 text-brand-violet flex items-center justify-center text-xl mb-6"><i class="fa-solid fa-people-carry-box"></i></div>
                    <span class="text-[10px] text-brand-violet font-bold uppercase tracking-wider font-mono">Next Mission</span>
                    <h3 class="text-xl font-bold text-white mt-2 mb-4 break-keep">Blood Star (지속 가능한 전문가 공유 구조)</h3>
                    <p class="text-gray-400 text-xs leading-relaxed font-light break-keep">
                        최고의 전문가 서포트 조직이 유연하게 결합하여 리스크를 방어하는 미래형 연대 구조. 최고의 인재들이 여러 팀의 성장을 돕고 그 성과를 공유합니다.
                    </p>
                </div>
                <!-- Interactive Expert Share Matcher -->
                <div class="mt-8 border-t border-white/5 pt-4">
                    <div class="space-y-2">
                        <div class="flex justify-between text-[10px] text-gray-400">
                            <span>협력 스타트업 수</span>
                            <span id="startup-count" class="text-brand-violet font-bold">10개사</span>
                        </div>
                        <input id="startup-slider" type="range" min="1" max="15" value="10" class="w-full accent-brand-violet h-1 bg-gray-800 rounded-lg cursor-pointer">
                        <div class="flex justify-between text-[9px] text-gray-500">
                            <span>전문가 분담 비용: <span id="shared-cost" class="text-white font-medium">1/10</span></span>
                            <span>창업가 제품 집중도: <span id="focus-rate" class="text-brand-emerald font-semibold">95%</span></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Step 3 (Future Trydit) -->
            <div class="p-8 rounded-3xl bg-brand-card/20 border border-white/5 flex flex-col justify-between hover:border-brand-neon/20 transition duration-300">
                <span class="absolute top-4 right-4 text-[10px] font-bold text-brand-neon px-2 py-0.5 rounded bg-brand-neon/10 uppercase tracking-widest">Phase 3</span>
                <div>
                    <div class="w-12 h-12 rounded-xl bg-brand-neon/10 text-brand-neon flex items-center justify-center text-xl mb-6"><i class="fa-solid fa-cubes"></i></div>
                    <span class="text-[10px] text-brand-neon font-bold uppercase tracking-wider font-mono">Lifestyle OS</span>
                    <h3 class="text-xl font-bold text-white mt-2 mb-4 break-keep">Trydit (관심 기반 지식 생태계)</h3>
                    <p class="text-gray-400 text-xs leading-relaxed font-light break-keep">
                        개인이 축적한 경험과 관심사 지식이 사라지지 않고 온전히 스스로의 자산이 되도록 만드는 대시보드 인프라.
                    </p>
                </div>
                <!-- Interactive Sandbox App Bot Creator -->
                <div class="mt-8 border-t border-white/5 pt-4">
                    <span class="text-[10px] text-gray-500 block mb-1">가상 관심사 대시보드 샌드박스</span>
                    <div class="flex gap-2">
                        <button onclick="toggleBot('estate', 450)" class="px-2 py-1 bg-white/5 border border-white/10 hover:border-brand-neon text-[9px] rounded text-gray-400 transition" id="btn-estate">부동산 봇</button>
                        <button onclick="toggleBot('tech', 200)" class="px-2 py-1 bg-white/5 border border-white/10 hover:border-brand-neon text-[9px] rounded text-gray-400 transition" id="btn-tech">테크 봇</button>
                        <button onclick="toggleBot('wellness', 150)" class="px-2 py-1 bg-white/5 border border-white/10 hover:border-brand-neon text-[9px] rounded text-gray-400 transition" id="btn-wellness">건강 봇</button>
                    </div>
                    <div class="mt-2 flex justify-between text-[9px] text-gray-500">
                        <span>활성화 봇: <span id="active-bots-count" class="text-brand-neon">0개</span></span>
                        <span>기여 자산 가치: <span id="contrib-asset" class="text-brand-emerald font-semibold">$0</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- T-Rive Apply Section (Rigorous Selection Form) -->
<section id="apply-portal" class="py-24 relative bg-brand-dark border-t border-white/5 overflow-hidden">
    <div class="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div class="lg:col-span-5 space-y-8">
                <div>
                    <span class="px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-semibold border border-brand-emerald/20 uppercase tracking-widest font-mono">Application Process</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-4 break-keep leading-tight">우리는 직무보다 방향성을 먼저 봅니다.</h2>
                    <p class="text-gray-400 text-sm mt-4 leading-relaxed font-light break-keep">
                        모든 사람을 찾고 있지는 않습니다. 아래 질문이 단순한 호기심이 아니라, 오랫동안 당신을 고민하게 만든 질문이라면, 그리고 그 답을 직접 만들어 보고 싶다면 T-Rive에 지원해 주세요.
                    </p>
                </div>

                <div class="space-y-4 text-xs font-light">
                    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                        <p class="font-semibold text-brand-emerald mb-4"><i class="fa-solid fa-circle-question mr-1"></i> 지원 전 스스로에게 질문해 보세요:</p>
                        <ul class="space-y-3 pl-2 text-gray-400 break-keep">
                            <li><strong class="text-white">Q1.</strong> 사람들은 왜 자신이 좋아하는 일에 오래 몰입하지 못하는가?</li>
                            <li><strong class="text-white">Q2.</strong> AI 시대에도 인간의 경험과 전문성은 어떻게 가치가 될 수 있는가?</li>
                            <li><strong class="text-white">Q3.</strong> 미래의 노동은 누구를 위한 것이어야 하는가?</li>
                            <li><strong class="text-white">Q4.</strong> 나는 이 질문의 답을 직접 만들어 보고 싶은가?</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Recruitment Form -->
            <div class="lg:col-span-7">
                <div class="p-8 rounded-3xl bg-brand-card/40 border border-white/5 backdrop-blur-md">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <i class="fa-solid fa-paper-plane text-brand-emerald"></i> T-Rive 지원서 제출하기
                    </h3>

                    <form id="recruitment-form" onsubmit="handleRecruitSubmit(event)" class="space-y-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="text-xs text-gray-400 block font-medium">이름 / 닉네임 (필수)</label>
                                <input required type="text" id="recruit-name" placeholder="홍길동" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs text-gray-400 block font-medium">이메일 또는 연락처 (필수)</label>
                                <input required type="text" id="recruit-email" placeholder="example@domain.com 또는 010-0000-0000" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-xs text-gray-400 block font-medium">선택 지원 분야 (선택)</label>
                            <select id="recruit-position" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white focus:border-brand-accent focus:outline-none transition text-sm appearance-none">
                                <option value="backend">Backend Engineer (SaaS / 대안 CB / API)</option>
                                <option value="frontend">Frontend Engineer (React / Next.js / UX 최적화)</option>
                                <option value="designer">Product Designer (Figma / MVP 경험 설계)</option>
                                <option value="po">Product Owner (요구사항 정의 / 스펙 조율)</option>
                                <option value="ai">AI Engineer (로봇 / 데이터 모델)</option>
                                <option value="infra">Infrastructure Expert (AWS / DevOps)</option>
                                <option value="expert">Industry Expert (조선, 건설, 플랜트 도메인 조력자)</option>
                                <option value="other">기타</option>
                            </select>
                        </div>

                        <div class="space-y-2">
                            <label class="text-xs text-brand-emerald block font-bold">당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요? (★ 필수 입력)</label>
                            <textarea required rows="4" id="recruit-problem" placeholder="미입력 시 지원서 전송이 불가합니다." class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-emerald focus:outline-none transition text-sm resize-none"></textarea>
                        </div>

                        <div class="space-y-2">
                            <label class="text-xs text-gray-400 block font-medium">당신의 생각과 작업을 보여줄 수 있는 자료 (선택)</label>
                            <input type="text" id="recruit-link" placeholder="포트폴리오, 블로그, 링크드인, GitHub 등 링크" class="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-accent focus:outline-none transition text-sm">
                        </div>

                        <button type="submit" class="w-full bg-gradient-to-r from-brand-accent to-brand-violet hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/20 mt-4">
                            T-Rive 지원하기
                        </button>
                    </form>

                    <div id="recruit-success-card" class="hidden text-center py-12 relative z-10">
                        <div class="w-16 h-16 mx-auto bg-brand-emerald/20 rounded-full flex items-center justify-center mb-6">
                            <i class="fa-solid fa-check text-2xl text-brand-emerald"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-2">지원이 완료되었습니다</h4>
                        <p class="text-gray-400 text-sm break-keep">전해주신 귀중한 생각들을 꼼꼼히 확인한 후, 방향성이 맞는 분들께 T-Rive 팀이 개별 연락을 드리겠습니다.</p>
                    </div>

                    <div class="mt-8 text-center sm:text-left border-t border-white/5 pt-6">
                        <p class="text-gray-400 text-xs font-light break-keep leading-relaxed">
                            <strong class="text-gray-300 block mb-1">※ 선발 고지 </strong>
                            우리는 단순히 공감하는 사람이 아니라, 직접 답을 만들고 실행할 사람을 찾고 있습니다. 모든 지원자와 개별 미팅을 진행하지는 않으며, 방향성과 문제의식이 맞는 분들께 순차적으로 연락드립니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="py-12 bg-brand-dark border-t border-white/5 text-center">
    <div class="max-w-7xl mx-auto px-4">
        <div class="w-10 h-10 mx-auto rounded-xl bg-gradient-to-tr from-brand-accent to-brand-violet flex items-center justify-center font-black text-xl text-white tracking-wider opacity-50 mb-6">T</div>
        <p class="text-gray-500 text-sm mb-4">T-Rive &copy; 2026. All rights reserved.</p>
        <p class="text-gray-600 text-xs font-light break-keep">본 페이지는 시스템 모순을 해결하고 몰입의 가치를 되찾는 T-Rive의 철학을 담고 있습니다.</p>
    </div>
</footer>

<script>
    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    if (mobileBtn && mobileCloseBtn && mobileMenu) {
        mobileBtn.addEventListener('click', toggleMenu);
        mobileCloseBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
    }

    // Form Submission Simulation
    function handleRecruitSubmit(e) {
        e.preventDefault();
        
        // Strict validation for the problem text area
        const problemInput = document.getElementById('recruit-problem');
        if (!problemInput.value.trim()) {
            alert('당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요? 항목을 반드시 작성해 주세요.');
            problemInput.focus();
            return;
        }

        const form = document.getElementById('recruitment-form');
        const successCard = document.getElementById('recruit-success-card');
        
        form.style.display = 'none';
        successCard.classList.remove('hidden');
        successCard.classList.add('block');
    }

    // Journey Dashboard Interaction (Slider 1)
    const daysSlider = document.getElementById('journey-days-slider');
    const daysText = document.getElementById('journey-days');
    const cbText = document.getElementById('journey-cb');
    const robotText = document.getElementById('journey-robot');

    if(daysSlider) {
        daysSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            daysText.innerText = val + "일";
            
            if(val < 90) { cbText.innerText = "M-4 (일반)"; robotText.innerText = "3.0%"; cbText.className = "text-gray-400 font-medium"; }
            else if(val < 180) { cbText.innerText = "M-3 (양호)"; robotText.innerText = "7.5%"; cbText.className = "text-white font-medium"; }
            else if(val < 270) { cbText.innerText = "M-2 (우수)"; robotText.innerText = "12.5%"; cbText.className = "text-brand-neon font-bold"; }
            else { cbText.innerText = "M-1 (최우수)"; robotText.innerText = "18.0%"; cbText.className = "text-brand-accent font-black"; }
        });
    }

    // Journey Dashboard Interaction (Slider 2)
    const startupSlider = document.getElementById('startup-slider');
    const countText = document.getElementById('startup-count');
    const costText = document.getElementById('shared-cost');
    const focusText = document.getElementById('focus-rate');

    if(startupSlider) {
        startupSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            countText.innerText = val + "개사";
            costText.innerText = "1/" + val;
            
            const focus = Math.min(99, 50 + (val * 4.5));
            focusText.innerText = focus.toFixed(1) + "%";
        });
    }

    // Interactive Bots (Step 3)
    let activeBots = 0;
    let assetValue = 0;
    function toggleBot(id, val) {
        const btn = document.getElementById('btn-' + id);
        if(btn.classList.contains('bg-brand-neon/20')) {
            btn.classList.remove('bg-brand-neon/20', 'border-brand-neon', 'text-white');
            btn.classList.add('bg-white/5', 'text-gray-400');
            activeBots--;
            assetValue -= val;
        } else {
            btn.classList.add('bg-brand-neon/20', 'border-brand-neon', 'text-white');
            btn.classList.remove('bg-white/5', 'text-gray-400');
            activeBots++;
            assetValue += val;
        }
        document.getElementById('active-bots-count').innerText = activeBots + "개";
        document.getElementById('contrib-asset').innerText = "$" + assetValue;
    }
</script>
</body>
</html>`;

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log("Applied exact user HTML for ver 0.4.");
