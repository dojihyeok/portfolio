"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { deptSimulatorData } from '../data';

export default function Simulator() {
    const [currentDept, setCurrentDept] = useState<string>('dev');
    const [showToast, setShowToast] = useState(false);

    const data = deptSimulatorData[currentDept];

    const handleApply = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section id="simulator" className="space-y-6 relative">
            <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-2xl font-bold text-white">AX 보안 챔피언 실무 시뮬레이터</h3>
                <p className="text-slate-400 text-sm">소속 부서를 선택하여 AX 보안 챔피언으로서 기여할 수 있는 실무 과제와 개인별 가치를 모의 체험해 보세요.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                    
                    {/* Left: Selector */}
                    <div className="space-y-4 relative z-10">
                        <label className="block text-sm font-semibold text-slate-300">내 소속 부서 선택</label>
                        <div className="space-y-2">
                            {[
                                { id: 'dev', label: '💻 SW 개발 및 인프라 부서', badge: '엔지니어' },
                                { id: 'plan', label: '📊 비즈니스 기획 및 PO 그룹', badge: '기획자' },
                                { id: 'mkt', label: '🎨 마케팅 및 디자인 크리에이터', badge: '크리에이티브' },
                                { id: 'hr', label: '🤝 인사(HR) 및 경영 지원 본부', badge: '오퍼레이터' }
                            ].map((dept) => (
                                <button 
                                    key={dept.id}
                                    onClick={() => setCurrentDept(dept.id)} 
                                    className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-all flex items-center justify-between ${currentDept === dept.id ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30' : 'bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800'}`}
                                >
                                    <span>{dept.label}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded ${currentDept === dept.id ? 'bg-indigo-500/20' : 'bg-slate-800'} ${dept.id === 'mkt' ? 'font-mono' : ''}`}>{dept.badge}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right 2 Cols: Simulation Result Display */}
                    <div className="md:col-span-2 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentDept}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                                    <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                                        <span className="text-indigo-400">{data.icon}</span>
                                        <span>{data.name}</span>
                                    </h4>
                                    <span className="text-xs text-indigo-400 font-bold tracking-widest px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">{data.badge}</span>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">현업 업무에서의 AX 도전 과제</div>
                                        <p className="text-sm text-slate-300 mt-1">{data.challenge}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">챔피언의 보안 개선 솔루션 (R&R)</div>
                                        <p className="text-sm text-slate-300 mt-1">{data.solution}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">챔피언 한정 제공 혜택 & 보상</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {data.rewards.map((reward: string, idx: number) => (
                                                <span key={idx} className="text-xs bg-slate-800/80 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                                                    <span className="text-yellow-400">⭐</span>
                                                    <span>{reward}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Footer CTA inside Simulator */}
                        <div className="mt-6 pt-4 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center bg-slate-900/40 p-3 rounded-xl gap-3 sm:gap-0">
                            <span className="text-xs text-slate-400">보안 챔피언십 활동은 인사 고과 연계 포상을 제공합니다.</span>
                            <button onClick={handleApply} className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3.5 py-2 rounded-lg font-semibold transition-all w-full sm:w-auto">
                                챔피언 지원 신청하기
                            </button>
                        </div>
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
                        className="absolute bottom-6 right-6 z-50 bg-slate-900 border border-indigo-500 text-indigo-200 text-xs px-4 py-3 rounded-xl shadow-xl flex items-center space-x-2"
                    >
                        <span className="text-indigo-400">🔔</span>
                        <span>보안 챔피언 지원 시뮬레이션이 성공적으로 처리되었습니다.</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
