"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sandbox() {
    const [toolType, setToolType] = useState('public');
    const [deployType, setDeployType] = useState('cloud');
    const [features, setFeatures] = useState({
        privacy: false,
        code: false,
        finance: false,
        patent: false
    });

    const [result, setResult] = useState<{
        score: number;
        grade: string;
        gradeColor: string;
        summary: string;
        policy: { ok: boolean; desc: string };
        privacy: { ok: boolean; desc: string };
        eng: { ok: boolean; desc: string };
        cloud: { ok: boolean; desc: string };
    } | null>(null);

    const [showToast, setShowToast] = useState(false);

    const toggleFeature = (feat: keyof typeof features) => {
        setFeatures(prev => ({ ...prev, [feat]: !prev[feat] }));
    };

    const runAutoAssessment = () => {
        let score = 100;
        let summary = "";
        let grade = "";
        let gradeColor = "emerald";

        let policyDesc = "공식 승인 AI 템플릿 적합성 완료.";
        let privacyDesc = "가명 마스킹 필터링 정상 적용.";
        let engDesc = "게이트웨이 프롬프트 방화벽 탑재.";
        let cloudDesc = "클라우드 시큐리티 컴플라이언스 기준 통과.";

        let policyOk = true;
        let privacyOk = true;
        let engOk = true;
        let cloudOk = true;

        // Penalty Logic
        if (toolType === 'public') {
            score -= 15;
            policyDesc = "외부 Public 망 데이터 공유 검출 위험.";
            policyOk = false;
        } else if (toolType === 'thirdparty') {
            score -= 5;
            policyDesc = "타사 통합 솔루션 별도 라이선스 검증 필요.";
        }

        if (features.privacy) {
            if (toolType === 'public' && deployType !== 'gateway') {
                score -= 20;
                privacyDesc = "개인정보 비인가 역추적 심각 위험.";
                privacyOk = false;
            } else {
                score -= 5;
                privacyDesc = "개인식별정보 자동 난독화 모듈 강제 매칭 필요.";
            }
        }

        if (features.code) {
            if (deployType === 'cloud' && toolType === 'public') {
                score -= 30;
                engDesc = "사내 핵심 IP 외부 유실 초비상 취약.";
                engOk = false;
            } else {
                score -= 10;
                engDesc = "자동 PR 취약점 교정 엔진 연계 가이드.";
            }
        }

        if (features.finance || features.patent) {
            score -= 10;
            if (deployType !== 'gateway' && deployType !== 'vpc') {
                score -= 10;
                cloudDesc = "대외비 데이터 비격리 클라우드 위배.";
                cloudOk = false;
            }
        }

        if (deployType === 'gateway') {
            score += 15;
            if (score > 100) score = 100;
            summary += "[AX 게이트웨이 특수 우회 적용] 안전 가드레일 보호망 장착으로 대부분의 감점 조건이 무력화되어 고도로 안전합니다. ";
        }

        // Grade Decision
        if (score >= 85) {
            grade = "안전 조치 권고 (Safe Guide)";
            gradeColor = "emerald";
            summary += "해당 환경은 전사 배포 권장 등급입니다. 가동 시 보안 리스크에 노출될 영향이 극히 낮습니다.";
        } else if (score >= 65) {
            grade = "추가 가드레일 필요 (Caution)";
            gradeColor = "amber";
            summary += "일부 데이터 유실 경로가 파악되었습니다. 마스킹 및 게이트웨이 연동 강제를 완료한 뒤 재검사를 시행하세요.";
        } else {
            grade = "배포 불가 위반 (High Danger)";
            gradeColor = "rose";
            summary += "퍼블릭 망에 기업 정보 및 고객 식별 데이터가 유출될 우려가 극단적으로 큽니다. AX 보안팀과 즉각 수동 상담을 진행해 프라이빗 구조로 전향하십시오.";
        }

        setResult({
            score, grade, gradeColor, summary,
            policy: { ok: policyOk, desc: policyDesc },
            privacy: { ok: privacyOk, desc: privacyDesc },
            eng: { ok: engOk, desc: engDesc },
            cloud: { ok: cloudOk, desc: cloudDesc }
        });

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const getGradeColorClass = (color: string, type: 'text' | 'border' | 'shadow' | 'bg') => {
        if (color === 'amber') {
            if (type === 'text') return 'text-amber-400';
            if (type === 'border') return 'border-amber-500';
            if (type === 'shadow') return 'shadow-amber-500/10';
            if (type === 'bg') return 'bg-amber-500';
        }
        if (color === 'rose') {
            if (type === 'text') return 'text-rose-400';
            if (type === 'border') return 'border-rose-500';
            if (type === 'shadow') return 'shadow-rose-500/10';
            if (type === 'bg') return 'bg-rose-500';
        }
        if (type === 'text') return 'text-emerald-400';
        if (type === 'border') return 'border-emerald-500';
        if (type === 'shadow') return 'shadow-emerald-500/10';
        if (type === 'bg') return 'bg-emerald-500';
    };

    return (
        <section id="autoportal" className="space-y-6 relative">
            <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase text-emerald-400 tracking-widest">Self-Assessment Service</span>
                <h3 className="text-2xl font-bold text-slate-900">AI 보안 자율 가선성 가이드 시뮬레이터</h3>
                <p className="text-slate-600 text-sm">현업 부서에서 새로운 AI 서비스나 가공 데이터를 도입할 때, AX 보안 가드레일을 실시간 자가 테스트하는 지능형 모듈입니다.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 relative z-10">
                {/* Sandbox Control Panel */}
                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 space-y-4">
                    <h4 className="text-base font-bold text-slate-900">가상 AI 서비스 신청서 작성</h4>
                    
                    <div className="space-y-3 text-sm">
                        {/* AI Tool Type */}
                        <div className="space-y-1">
                            <label className="block text-xs font-semibold text-slate-600">1. 도입하고자 하는 AI 솔루션 모델</label>
                            <select 
                                value={toolType}
                                onChange={(e) => setToolType(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-700 focus:outline-none focus:border-indigo-500"
                            >
                                <option value="public">외부 Generative AI (Public SaaS API - 예: ChatGPT Pro)</option>
                                <option value="private">사내 구축형 거대언어모델 (On-Premise Private LLM)</option>
                                <option value="thirdparty">서드파티 엔터프라이즈 통합형 AI 솔루션</option>
                            </select>
                        </div>

                        {/* Data Type Toggles */}
                        <div className="space-y-2">
                            <label className="block text-xs font-semibold text-slate-600">2. 처리할 기밀 정보 유형 (복수 선택)</label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { id: 'privacy', label: '개인 식별 데이터 (PII)' },
                                    { id: 'code', label: '사내 핵심 소스코드' },
                                    { id: 'finance', label: '재무/기획 대외비 자료' },
                                    { id: 'patent', label: '특허/특수 미공개 자료' }
                                ].map((feat) => {
                                    const active = features[feat.id as keyof typeof features];
                                    return (
                                        <button 
                                            key={feat.id}
                                            onClick={() => toggleFeature(feat.id as keyof typeof features)}
                                            className={`px-3 py-2 rounded-lg text-xs text-left transition-all flex items-center space-x-2 ${active ? 'bg-indigo-50 border-indigo-300 text-indigo-700 border' : 'bg-slate-50 border-slate-200 text-slate-600 border hover:bg-slate-100'}`}
                                        >
                                            <span className={`w-2 h-2 rounded-full transition-all ${active ? 'bg-indigo-600 shadow-sm shadow-indigo-400' : 'bg-slate-400'}`}></span>
                                            <span>{feat.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Security Infrastructure Option */}
                        <div className="space-y-1">
                            <label className="block text-xs font-semibold text-slate-600">3. 접근 제어 및 배치 형태</label>
                            <select 
                                value={deployType}
                                onChange={(e) => setDeployType(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-700 focus:outline-none focus:border-indigo-500"
                            >
                                <option value="cloud">일반 오픈 인터넷 멀티 테넌트 클라우드</option>
                                <option value="vpc">사내 전용 VPC 기반 프라이빗 클라우드</option>
                                <option value="gateway">AX 보안 가드레일 게이트웨이 경유 배포</option>
                            </select>
                        </div>
                    </div>

                    {/* Run Button */}
                    <button 
                        onClick={runAutoAssessment} 
                        className="w-full bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-900 font-bold py-3 rounded-xl transition-all shadow-md shadow-emerald-900/30 flex items-center justify-center space-x-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        <span>AX 인공지능 자율성 검사 가동</span>
                    </button>
                </div>

                {/* Simulation Output Dashboard */}
                <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-200">
                            <h4 className="text-base font-bold text-slate-900">가드레일 자가 분석 레포트</h4>
                            <span className="text-xs text-slate-500 font-mono">ID: AX-SEC-9293</span>
                        </div>

                        {/* Progress or Score Display */}
                        {result ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center space-x-6 mb-6"
                            >
                                <div className={`relative w-24 h-24 flex items-center justify-center bg-slate-50 rounded-full border-4 flex-shrink-0 ${getGradeColorClass(result.gradeColor, 'border')} ${getGradeColorClass(result.gradeColor, 'shadow')}`}>
                                    <div className="text-center">
                                        <span className="text-3xl font-black text-slate-900">{result.score}</span>
                                        <span className="text-slate-500 text-xs block">/ 100</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className={`text-lg font-bold ${getGradeColorClass(result.gradeColor, 'text')}`}>{result.grade}</div>
                                    <p className="text-xs text-slate-600 leading-relaxed">{result.summary}</p>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="flex items-center space-x-6 mb-6 opacity-50">
                                <div className="relative w-24 h-24 flex items-center justify-center bg-slate-50 rounded-full border-4 border-slate-200 flex-shrink-0">
                                    <div className="text-center">
                                        <span className="text-3xl font-black text-slate-600">-</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-lg font-bold text-slate-600">검사 대기중</div>
                                    <p className="text-xs text-slate-500 leading-relaxed">좌측 폼을 작성하고 검사를 가동해주세요.</p>
                                </div>
                            </div>
                        )}

                        {/* 4 Pillars Checkpoints */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { id: 'policy', label: 'AX 정책 수립 (Policy)', data: result?.policy },
                                { id: 'privacy', label: 'AX 개인정보 (Privacy)', data: result?.privacy },
                                { id: 'eng', label: '보안 엔지니어링 (Eng)', data: result?.eng },
                                { id: 'cloud', label: '클라우드 가드 (Cloud)', data: result?.cloud }
                            ].map((pillar) => (
                                <div key={pillar.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3">
                                    {pillar.data ? (
                                        <div className={`p-1.5 rounded mt-0.5 ${pillar.data.ok ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400 animate-pulse'}`}>
                                            {pillar.data.ok ? (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="p-1.5 rounded bg-slate-100 text-slate-600 mt-0.5">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                    )}
                                    <div className="space-y-0.5">
                                        <div className="text-xs text-slate-600 font-bold">{pillar.label}</div>
                                        <p className="text-[11px] text-slate-500 leading-tight">
                                            {pillar.data ? pillar.data.desc : "대기중..."}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Warning & Info */}
                    <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                        <span className="text-slate-600">자가 테스트 결과에 따라 정식 승인 티켓이 AX 보안팀에 자동 인계됩니다.</span>
                        <span className="font-bold text-indigo-400">AX 스마트 심사 {result ? '완료' : '연결중'}</span>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-6 right-6 z-50 bg-white border border-indigo-400 text-slate-700 text-xs px-4 py-3 rounded-xl shadow-xl flex items-center space-x-2"
                    >
                        <span className="text-indigo-400">🔔</span>
                        <span>AX AI 보안성 자가 분석이 완료되었습니다!</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
