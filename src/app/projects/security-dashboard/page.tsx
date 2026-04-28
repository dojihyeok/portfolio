"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Activity, Target, ArrowLeft, Cpu, BarChart3, Lock, Eye, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SecurityDashboardPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-sm font-bold hover:text-blue-600 transition-colors">
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest opacity-60">System Live</span>
                    </div>
                </div>
            </header>

            <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
                {/* Hero Section */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                                    Project Case Study
                                </span>
                                <span className="text-slate-400 dark:text-slate-600">/</span>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Internal Platform</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                                AI-Native <br />
                                <span className="text-blue-600 dark:text-blue-400">Security Dashboard</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium break-keep">
                                Antigravity와 MCP(Model Context Protocol)를 활용하여 구축한 실시간 리스크 가시화 플랫폼입니다. 
                                EDR, SaaS, CI/CD 등 전사의 파편화된 보안 데이터를 실시간으로 분석하여 위협의 우선순위를 제안하고, 자동화된 대응을 실행합니다.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="text-xs font-bold text-slate-500 uppercase mb-2">Overall Score</div>
                                <div className="text-3xl font-black text-blue-600">94.2</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="text-xs font-bold text-slate-500 uppercase mb-2">Active Threats</div>
                                <div className="text-3xl font-black text-orange-500">02</div>
                            </div>
                        </div>
                    </div>

                    {/* Mock Dashboard UI */}
                    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xl shadow-blue-500/5">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Security-Control-Panel.v1</div>
                            <div className="w-12" />
                        </div>
                        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Chart Placeholder */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="h-64 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 relative overflow-hidden flex flex-col justify-end p-6">
                                    <div className="absolute top-6 left-6">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">Threat Detection Rate</h4>
                                        <div className="text-2xl font-black">99.98%</div>
                                    </div>
                                    <div className="flex items-end gap-1 h-32">
                                        {[40, 60, 45, 80, 55, 90, 70, 85, 100, 75, 60, 80, 95, 85].map((h, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                                className="flex-1 bg-blue-500/20 rounded-t-sm relative group"
                                            >
                                                <div className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-sm h-[30%] group-hover:h-full transition-all" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900">
                                        <div className="flex items-center gap-3 mb-4 text-blue-600">
                                            <Cpu size={20} />
                                            <span className="text-sm font-bold">AI Agent Status</span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-slate-500 font-medium">Anomaly Detection</span>
                                                <span className="text-green-500 font-bold">ACTIVE</span>
                                            </div>
                                            <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <div className="w-[85%] h-full bg-blue-500" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900">
                                        <div className="flex items-center gap-3 mb-4 text-purple-600">
                                            <Zap size={20} />
                                            <span className="text-sm font-bold">MCP Sync Rate</span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-slate-500 font-medium">Real-time Data Flow</span>
                                                <span className="text-blue-500 font-bold">STABLE</span>
                                            </div>
                                            <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <div className="w-[98%] h-full bg-purple-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Live Logs */}
                            <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 p-6 font-mono text-[10px] leading-relaxed relative">
                                <div className="flex items-center justify-between mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                                    <span className="text-slate-400 uppercase tracking-widest text-[9px]">Live Event Logs</span>
                                    <span className="text-blue-500 font-bold animate-pulse">● REC</span>
                                </div>
                                <div className="space-y-2 max-h-96 overflow-hidden text-slate-500 dark:text-slate-400">
                                    <p><span className="text-blue-500">[14:22:01]</span> System init sequence started...</p>
                                    <p><span className="text-green-500">[14:22:03]</span> AI-Native Agent initialized (ID: #X-90)</p>
                                    <p><span className="text-blue-500">[14:22:05]</span> MCP endpoint connected successfully.</p>
                                    <p><span className="text-slate-400">[14:23:45]</span> Scanning endpoint: 192.168.0.124...</p>
                                    <p><span className="text-slate-400">[14:23:47]</span> Analyzing traffic patterns (ML Model V4)...</p>
                                    <p><span className="text-yellow-500">[14:25:12]</span> Warning: Unusual outbound request detected.</p>
                                    <p><span className="text-orange-500">[14:25:14]</span> AI Agent isolating suspicious pod...</p>
                                    <p><span className="text-green-500">[14:25:18]</span> Action complete. Risk mitigated (98.2% conf.)</p>
                                    <p><span className="text-blue-500">[14:26:01]</span> Updating risk matrix dashboard...</p>
                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                                        <p className="text-blue-500 font-bold">READY FOR NEXT INPUT _</p>
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Pillars */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    {[
                        {
                            title: "Antigravity AI Optimization",
                            icon: <BarChart3 className="text-blue-600" />,
                            desc: "Antigravity를 활용한 고성능 AI 에이전트로 전사의 보안 이벤트를 실시간 분류합니다. 단순 패턴 매칭이 아닌 AI 추론을 통해 탐지의 정확도를 극대화합니다."
                        },
                        {
                            title: "Context-Aware Prioritization",
                            icon: <Cpu className="text-purple-600" />,
                            desc: "자산 중요도, 사용자 권한, 위협 인텔리전스를 MCP로 결합하여 '가장 먼저 해결해야 할 리스크'를 데이터 기반으로 도출하고 실행 우선순위를 제안합니다."
                        },
                        {
                            title: "Multi-Source Data Sync",
                            icon: <Zap className="text-orange-600" />,
                            desc: "EDR, CloudTrail, SaaS(Slack/Jira) 등 흩어진 로그를 실시간 동기화합니다. 파편화된 정보들 사이의 연관 관계를 분석하여 입체적인 보안 가시성을 제공합니다."
                        }
                    ].map((item, i) => (
                        <div key={i} className="group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Tech Stack & Result */}
                <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full -mr-48 -mt-48" />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-black mb-8 uppercase tracking-widest text-blue-400">Technical Foundation</h2>
                            <div className="space-y-6">
                                {[
                                    { label: "Development", val: "Next.js, Tailwind CSS, Framer Motion" },
                                    { label: "AI Engine", val: "Claude 3.5 Sonnet, Antigravity" },
                                    { label: "Protocol", val: "Model Context Protocol (MCP), gRPC" },
                                    { label: "Monitoring", val: "Real-time WebSocket, Prometheus" },
                                ].map((stack, i) => (
                                    <div key={i} className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stack.label}</span>
                                        <span className="font-medium">{stack.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-blue-400" />
                                Expected Outcomes
                            </h3>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex gap-3">
                                    <span className="font-bold text-blue-400">01.</span>
                                    <span>보안 관제 리소스 60% 이상 절감</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-blue-400">02.</span>
                                    <span>리스크 인지 및 대응 속도(MTTR) 90% 개선</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-blue-400">03.</span>
                                    <span>전사 구성원의 보안 가시성 확보 및 신뢰도 향상</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer / Call to action */}
            <footer className="py-20 text-center border-t border-slate-200 dark:border-slate-800 px-6">
                <p className="text-slate-500 mb-8 font-bold uppercase tracking-widest text-xs">Want to see more details?</p>
                <div className="flex justify-center gap-4">
                    <Link href="mailto:yunhyeok@example.com" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:scale-105 transition-transform">
                        Request Full Demo
                    </Link>
                    <Link href="/" className="px-8 py-4 border border-slate-200 dark:border-slate-800 rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        Back to Portfolio
                    </Link>
                </div>
            </footer>
        </div>
    );
}
