import React from 'react';

export default function Paradigm() {
    return (
        <section id="paradigm" className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-2xl font-bold text-white">보안 패러다임의 혁명적 대전환</h3>
                <p className="text-slate-400 text-sm">기존의 수동적 통제(Chokepoint) 모델에서 자율적 성장을 지원하는 조력자(Enabler) 모델로 도약합니다.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Legacy Security Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl"></div>
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-rose-500/10 text-rose-400 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                        <h4 className="text-lg font-bold text-slate-100">Legacy Security (기존 레거시 보안)</h4>
                    </div>
                    <p className="text-slate-400 text-sm mb-6">규제 위주의 일률적인 접근 및 수동 처리 방식으로 인해 비즈니스의 병목지대 역할을 수행했습니다.</p>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            <span><strong>통제 중심 규제 준수:</strong> 단순 규정 관리에 치우쳐 현업의 업무 불편함 초래</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            <span><strong>수동 로그 분석 및 대응:</strong> 사람이 대량의 원시 이벤트를 모니터링하여 침입 탐지가 지연됨</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            <span><strong>신규 도구 즉각 차단:</strong> 신규 AI나 생산성 도구 도입 신청 시 '보안 우려'로 무조건 반려</span>
                        </li>
                    </ul>
                </div>

                {/* AX Security Card */}
                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/50 transition-all shadow-lg shadow-indigo-500/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h4 className="text-lg font-bold text-white">AX Security (신설 AX 보안)</h4>
                    </div>
                    <p className="text-slate-400 text-sm mb-6">AI 기반 가드레일 수립과 자동 대응 및 개선을 바탕으로, 비즈니스의 초고속 성장을 리드합니다.</p>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span><strong>자동적 예방 가드레일:</strong> 위협을 차단하기보다 안전한 틀(Guardrail) 안에서 자유를 보장</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span><strong>AI 에이전트 자율 방어:</strong> 침해 사고 감지 즉시 초동 조치(통신 차단, 패치)를 5분 내 자체 해결</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span><strong>Shadow AI 양성화:</strong> 우수한 외부 AI 서비스를 안전하게 쓸 수 있도록 API 보안 및 프록시 설계</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
