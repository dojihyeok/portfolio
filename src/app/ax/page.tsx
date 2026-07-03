"use client";

import React from 'react';
import Paradigm from './components/Paradigm';
import OrgChart from './components/OrgChart';
import Simulator from './components/Simulator';
import Sandbox from './components/Sandbox';
import Roadmap from './components/Roadmap';

export default function AXDashboard() {
    return (
        <div className="bg-[#FCFCFE] text-slate-800 min-h-screen font-sans selection:bg-indigo-500/30 flex flex-col antialiased">
            {/* Header / GNB */}
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-indigo-600 rounded-lg text-white shadow-md shadow-indigo-500/20">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <div>
                            <span className="text-xs text-indigo-600 font-bold uppercase tracking-wider block">CISO NEXT-GEN SECURITY</span>
                            <h1 className="text-lg font-black tracking-tight text-slate-900 -mt-1">AX Security Architecture</h1>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-6 text-sm text-slate-600 font-medium">
                        <a href="#paradigm" className="hover:text-indigo-600 transition-colors">패러다임 시프트</a>
                        <a href="#orgchart" className="hover:text-indigo-600 transition-colors">조직도 및 R&R</a>
                        <a href="#simulator" className="hover:text-indigo-600 transition-colors">챔피언 시뮬레이션</a>
                        <a href="#autoportal" className="hover:text-indigo-600 transition-colors">AI 보안 가상검수</a>
                        <a href="#roadmap" className="hover:text-indigo-600 transition-colors">실행 로드맵</a>
                    </div>
                    <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            AX Enterprise Ready
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
                
                {/* Hero Section */}
                <section className="relative bg-white rounded-3xl p-8 md:p-12 border border-slate-200 overflow-hidden shadow-xl">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 max-w-3xl space-y-4">
                        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full text-xs font-semibold">
                            <span>AX (AI Transformation) 보안 혁신 수립 안</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                            통제를 넘어 비즈니스를 고속화하는 <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600">AX 보안 아키텍처</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                            레거시 보안의 반복 업무를 AI 에이전트로 80% 극단적 자동화하여 남은 리소스를 확보하고, 신설 AX 보안팀을 주축으로 
                            정책 가드레일, 클라우드, 보안 엔지니어링을 새롭게 수립합니다. 더 나아가 전사 <strong>AX 보안 챔피언 프로그램</strong>을 작동시켜 전 임직원이 주도적으로 보안을 준수하고 혁신하는 생태계를 구현합니다.
                        </p>
                        <div className="pt-4 flex flex-wrap gap-4">
                            <a href="#orgchart" className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-indigo-600/20 flex items-center space-x-2">
                                <span>인터랙티브 조직도 확인</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-6l-7 7-7-7"></path></svg>
                            </a>
                            <a href="#autoportal" className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3 rounded-xl transition-all border border-slate-200 shadow-sm flex items-center space-x-2">
                                <span>AI 가드레일 시뮬레이션</span>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                            <div className="text-slate-600 text-xs font-medium">단순 업무 처리 시간</div>
                            <div className="text-2xl md:text-3xl font-bold text-emerald-600 mt-1">-80%</div>
                            <div className="text-[10px] text-slate-500 mt-1">AI 에이전트 도입 기준</div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                            <div className="text-slate-600 text-xs font-medium">보안성 심사 소요시간</div>
                            <div className="text-2xl md:text-3xl font-bold text-indigo-600 mt-1">5분 미만</div>
                            <div className="text-[10px] text-slate-500 mt-1">실시간 가드레일 자동검증</div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                            <div className="text-slate-600 text-xs font-medium">보안 챔피언 참여율</div>
                            <div className="text-2xl md:text-3xl font-bold text-purple-600 mt-1">전사 확산</div>
                            <div className="text-[10px] text-slate-500 mt-1">부서별 1~2명 필수 매칭</div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                            <div className="text-slate-600 text-xs font-medium">보안 정책 준수율</div>
                            <div className="text-2xl md:text-3xl font-bold text-sky-600 mt-1">99.8%</div>
                            <div className="text-[10px] text-slate-500 mt-1">사전 방어 가드레일 적용</div>
                        </div>
                    </div>
                </section>

                <Paradigm />
                <OrgChart />
                <Simulator />
                <Sandbox />
                <Roadmap />

            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white text-slate-500 text-sm py-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                        <div className="p-1 bg-indigo-50 text-indigo-600 rounded">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <span className="text-xs font-bold text-slate-500">AX Security Architecture Framework &copy; 2026</span>
                    </div>
                    <div className="flex space-x-6 text-xs text-slate-500">
                        <a href="#" className="hover:text-slate-800 transition-colors">프라이버시 수칙</a>
                        <a href="#" className="hover:text-slate-800 transition-colors">AI 컴플라이언 가이드</a>
                        <a href="#" className="hover:text-slate-800 transition-colors">CISO 조직 연락처</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
