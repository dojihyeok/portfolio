import React from 'react';

export default function Roadmap() {
    return (
        <section id="roadmap" className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-2xl font-bold text-white">단계별 보안 체계 트랜지션 로드맵</h3>
                <p className="text-slate-400 text-sm">레거시 업무 효율화를 통해 고도화된 AX 보안 체계를 안정화하기까지의 3단계 타임라인입니다.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
                {/* Step 1 Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20">Phase 1 : 기반 다지기</span>
                            <span className="text-sm font-semibold text-slate-500">1~3개월</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">수동 레거시 보안 극단 효율화</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                            기존에 사람 리소스의 70% 이상을 차지하던 단순 결재, 보안 감사 로그 추적, 정책 질의 수동 답변을 생성형 AI 에이전트로 70~80% 자동화하여 AX 보안 전환 기점을 확보합니다.
                        </p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300 pt-4 border-t border-slate-800">
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            <span>Shadow AI 자동 식별 및 양성화 기틀</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            <span>보안 핵심 전재 인재 AX 전환 매칭</span>
                        </li>
                    </ul>
                </div>

                {/* Step 2 Card */}
                <div className="bg-indigo-950/20 border border-indigo-500/30 rounded-2xl p-6 relative flex flex-col justify-between shadow-xl shadow-indigo-950/30">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">Phase 2 : 빌드업</span>
                            <span className="text-sm font-semibold text-indigo-400">4~6개월</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">AX 전담 신설팀 가동 및 챔피언 선발</h4>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                            독자적인 AX 보안팀 조직을 출범하고 정책/개인정보/클라우드 가드레일을 통합 설계합니다. 사내 주요 개발 및 비즈니스 실무 핵심 인재를 선별하여 1기 AX 보안 챔피언을 위촉합니다.
                        </p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300 pt-4 border-t border-slate-800">
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>가명화 알고리즘 & 자동 패치 에이전트 결합</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>보안 챔피언 중심의 부서 내 전파 교육</span>
                        </li>
                    </ul>
                </div>

                {/* Step 3 Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20">Phase 3 : 문화 안착</span>
                            <span className="text-sm font-semibold text-slate-500">7개월 이후 ~</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">안전한 자율적 자정 보안 생태계</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                            AX 보안팀이 고도화된 백엔드 인프라 보안과 클라우드 컴플라이언스 가드레일을 지탱하고, 전사 각 부서의 챔피언들이 스스로 안전하고 신속한 AI 도입 혁신을 리드해 나가는 최적의 사이클을 구축합니다.
                        </p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300 pt-4 border-t border-slate-800">
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                            <span>연말 CEO/CISO 직속 우수 챔피언 대규모 포상</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                            <span>에이전트 강화학습을 통한 차단율 제로 최적화</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
