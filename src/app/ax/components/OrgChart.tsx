"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { orgData } from '../data';

export default function OrgChart() {
    const [selectedNode, setSelectedNode] = useState<string>('ax_main');

    const handleNodeClick = (nodeId: string) => {
        setSelectedNode(nodeId);
    };

    const data = orgData[selectedNode];

    let colorTheme = "indigo";
    if (data.color === 'rose') colorTheme = "rose";
    if (data.color === 'emerald') colorTheme = "emerald";

    const badgeColorMap: Record<string, string> = {
        indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
        rose: "bg-rose-50 text-rose-700 border-rose-200",
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-200"
    };

    const headingColorMap: Record<string, string> = {
        indigo: "text-indigo-600",
        rose: "text-rose-600",
        emerald: "text-emerald-600"
    };

    const getBgColorClass = (color: string) => {
        if (color === 'indigo') return 'bg-indigo-400';
        if (color === 'rose') return 'bg-rose-400';
        return 'bg-emerald-400';
    };

    return (
        <section id="orgchart" className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">CISO 산하 투트랙(Two-Track) 조직 구성도</h3>
                <p className="text-slate-600 text-sm">해당 보안 컴포넌트를 클릭하면 실시간 상세 역할(R&R)과 핵심 전략이 업데이트됩니다.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Interactive SVG-Grid Chart (Left) */}
                <div className="lg:col-span-7 bg-white/60 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-8 min-h-[500px]">
                    
                    {/* Top CISO */}
                    <div className="flex justify-center">
                        <button 
                            onClick={() => handleNodeClick('ciso')} 
                            className={`px-8 py-3 rounded-xl font-extrabold shadow-md transition-all ${selectedNode === 'ciso' ? 'bg-indigo-600 border-2 border-indigo-400 text-white scale-105' : 'bg-slate-100 border-2 border-indigo-400 text-slate-800 hover:bg-indigo-50 hover:scale-105'}`}
                        >
                            C I S O
                        </button>
                    </div>

                    {/* Connectors Line Vertical 1 */}
                    <div className="h-8 w-0.5 bg-indigo-500/50 mx-auto -my-4"></div>

                    {/* Horizontal Connector Box */}
                    <div className="border-t-2 border-slate-300 h-1 w-full max-w-[80%] mx-auto relative">
                        <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-slate-700"></div>
                        <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-slate-700"></div>
                        <div className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-indigo-500"></div>
                    </div>

                    {/* Level 2: Legacy vs AX Branch */}
                    <div className="grid grid-cols-2 gap-8">
                        
                        {/* Legacy Track Group */}
                        <div className="space-y-4 border border-rose-200 p-4 rounded-xl bg-rose-50/30">
                            <div className="text-center text-xs font-semibold text-rose-600 uppercase tracking-widest">Legacy 운영 최적화</div>
                            <button 
                                onClick={() => handleNodeClick('legacy')} 
                                className={`w-full py-3 rounded-lg text-sm transition-all ${selectedNode === 'legacy' ? 'bg-rose-600 border-2 border-rose-500 text-white scale-105' : 'bg-white border border-rose-300 hover:border-rose-400 text-rose-700 hover:bg-rose-50 hover:scale-[1.02]'}`}
                            >
                                Legacy 보안팀
                            </button>
                            <div className="space-y-2 pl-2">
                                <div className="text-[11px] text-slate-500 border-l-2 border-rose-300 pl-2">인프라/실물 보안</div>
                                <div className="text-[11px] text-slate-500 border-l-2 border-rose-300 pl-2">기존 법적 규제 준수</div>
                                <div className="text-[11px] text-slate-500 border-l-2 border-rose-300 pl-2">전통 SOC 관제</div>
                            </div>
                        </div>

                        {/* AX Track Group */}
                        <div className="space-y-4 border border-indigo-200 p-4 rounded-xl bg-indigo-50/30">
                            <div className="text-center text-xs font-semibold text-indigo-600 uppercase tracking-widest">AX 혁신 및 자동화</div>
                            <button 
                                onClick={() => handleNodeClick('ax_main')} 
                                className={`w-full py-3 rounded-lg text-sm font-semibold shadow-md transition-all ${selectedNode === 'ax_main' ? 'bg-indigo-600 border-2 border-indigo-500 text-white scale-105' : 'bg-white border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 hover:scale-[1.02]'}`}
                            >
                                AX 보안팀 (신설 핵심)
                            </button>
                            <div className="grid grid-cols-2 gap-2">
                                {['ax_policy', 'ax_privacy', 'ax_eng', 'ax_cloud'].map((id) => (
                                    <button 
                                        key={id}
                                        onClick={() => handleNodeClick(id)} 
                                        className={`py-2 rounded text-[11px] transition-all ${selectedNode === id ? 'bg-indigo-600 border border-indigo-500 text-white scale-105' : 'bg-white border border-indigo-200 hover:border-indigo-400 text-indigo-600 hover:scale-105'}`}
                                    >
                                        {id === 'ax_policy' && '정책 & 거버넌스'}
                                        {id === 'ax_privacy' && '개인정보 보호'}
                                        {id === 'ax_eng' && '보안 엔지니어링'}
                                        {id === 'ax_cloud' && '클라우드 보안'}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Connectors Line Vertical 2 */}
                    <div className="h-6 w-0.5 bg-emerald-500/50 mx-auto -my-4"></div>

                    {/* Bottom: Security Champions */}
                    <div className="flex justify-center">
                        <button 
                            onClick={() => handleNodeClick('champions')} 
                            className={`w-full max-w-[80%] py-3.5 rounded-xl text-sm font-extrabold shadow-md transition-all flex items-center justify-center space-x-2 ${selectedNode === 'champions' ? 'bg-emerald-600 border-2 border-emerald-500 text-white scale-105' : 'bg-gradient-to-r from-emerald-500 to-indigo-600 text-white hover:scale-105'}`}
                        >
                            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{animationDuration: '4s'}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>
                            <span>전사 확산: 각 부서별 AX 보안 챔피언 (AX Security Champions)</span>
                        </button>
                    </div>

                </div>

                {/* Interactive Detail Panel (Right) */}
                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 h-full min-h-[500px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={selectedNode}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="space-y-3">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold tracking-wider border ${badgeColorMap[colorTheme]}`}>
                                    {data.badge}
                                </span>
                                <h4 className="text-xl font-black text-slate-900">{data.title}</h4>
                                <p className={`text-xs ${headingColorMap[colorTheme]} font-semibold -mt-2`}>{data.subtitle}</p>
                                <p className="text-slate-600 text-sm leading-relaxed">{data.desc}</p>
                            </div>
                            
                            <div className="space-y-2 pt-4 border-t border-slate-200">
                                <h5 className="text-xs font-bold text-slate-600 uppercase tracking-wider">담당 핵심 실무 R&R</h5>
                                <ul className="space-y-2.5">
                                    {data.tasks.map((task: string, idx: number) => (
                                        <li key={idx} className="flex items-start space-x-2 text-sm text-slate-700">
                                            <span className={`w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0 ${getBgColorClass(colorTheme)}`}></span>
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-1 pt-4 border-t border-slate-200">
                                <h5 className="text-xs font-bold text-slate-600 uppercase tracking-wider">부서 성과 측정 핵심 지표 (KPI)</h5>
                                <p className="text-sm font-semibold text-slate-900 flex items-center space-x-2">
                                    <span className="text-emerald-400">📊</span>
                                    <span>{data.metric}</span>
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    
                    <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
                        <span>💡 다른 노드를 클릭하면 R&R이 변경됩니다.</span>
                        <span className="text-indigo-600 font-semibold cursor-pointer hover:text-indigo-800" onClick={() => handleNodeClick('ax_main')}>처음으로 돌아가기</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
