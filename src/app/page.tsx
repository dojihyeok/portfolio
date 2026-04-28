"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Award, Book, Terminal, Shield, Users, ArrowDown, ExternalLink, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden w-full max-w-[100vw]">
            {/* Hero Section */}
            <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full"
                >
                    <div className="mb-6 relative w-[60vw] h-[60vw] max-w-[280px] max-h-[280px] md:w-60 md:h-60 mx-auto group">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                            <Image
                                src="/profile.png"
                                alt="이윤혁"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <h1 className="text-[12vw] md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 mb-4 tracking-tight leading-none">
                        이윤혁
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6 max-w-2xl mx-auto font-bold leading-tight px-4 break-keep">
                        &quot;적극적인 AI 활용하여 실질적 개선의 즐거움으로 몰입하는 보안팀&quot;
                    </p>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed px-4 break-keep font-medium mt-4">
                        보안은 단순한 방어나 통제를 넘어 불확실성을 통제 가능한 리스크로 전환해 나가는 &apos;빌드업의 과정&apos;입니다.<br />
                        우리는 AI를 활용해 소모적인 운영 업무를 자동화하고, 확보된 역량을 미래지향적인 아키텍처 설계에 집중합니다.<br />
                        개선된 보안 지표를 실시간으로 확인하며 느끼는 즐거움으로 몰입하며 기업의 브랜드 신뢰를 완성합니다.
                    </p>

                </motion.div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 z-10">
                    <ArrowDown size={28} className="animate-bounce" />
                </div>

            </section>

            {/* About Me */}
            <Section title="About Me" className="bg-white dark:bg-slate-900/50 rounded-3xl shadow-sm">
                <p className="text-lg leading-loose text-slate-800 dark:text-slate-100 font-medium">
                    보안은 규제를 지키는 업무를 넘어 <span className="font-bold text-blue-700 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4">팀의 몰입도를 높입니다</span>.
                    <span className="font-bold text-blue-700 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4"> 제품의 성장 속도를 지키고</span>,
                    <span className="font-bold text-blue-700 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4"> 브랜드 신뢰를 설계합니다</span>.
                </p>
                <p className="text-lg leading-loose text-slate-800 dark:text-slate-200 mt-6 font-medium">
                    지난 18년간 정보보호 컨설팅, 금융권 보안, 인터넷은행 인가, 스타트업 보안팀 리더십까지 다양한 환경에서
                    &quot;팀과 기술이 더 잘 성장하도록 돕는 보안 리더십&quot;을 실천해 왔습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {[
                        "기술 기반 보안 정책 설계",
                        "서비스 중심 보안 전략",
                        "Dev-Friendly Security",
                        "글로벌 규제 대응 및 거버넌스 구축",
                        "팀 몰입도와 성장 중심 보안 조직 디자인",
                        "“Trust-by-Design” 보안 체계 구축"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <Shield className="text-indigo-500" size={20} />
                            <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Strong Point */}
            <Section title="Strong Point" className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "규제를 해석에서 끝내지 않고 구조와 시스템으로 바꾸는 것",
                        "개발자·기획자와 같은 언어로 보안을 설명하는 것",
                        "보안팀이 “왜 이 일을 하는지” 이해하고 몰입하도록 만드는 것",
                        "스타트업부터 금융권까지 현실적인 보안 전략 설계"
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
                            <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <Award size={20} />
                            </div>
                            <p className="text-lg font-medium text-slate-700 dark:text-slate-200 leading-snug">
                                {point}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Security Team Vision */}
            <Section title="Security Team Vision">
                {/* Lead Quote */}
                <div className="border-l-4 border-slate-900 dark:border-slate-100 pl-6 py-2 mb-8 bg-slate-50 dark:bg-slate-800/30 rounded-r-xl">
                    <p className="text-lg md:text-xl text-slate-800 dark:text-slate-100 leading-relaxed font-semibold italic">
                        보안팀은 단순한 감시자가 아닙니다.<br />
                        기업의 신뢰를 설계하는 아키텍트이자, 비즈니스가 더 과감하게 나아갈 수 있도록 <span className="text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4">안전의 토대를 다지는 성장의 파트너</span>
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-medium">— 우리가 만들고 싶은 보안팀: 함께 뛰며 성장하는 조직을 구축합니다.</p>
                </div>

                {/* Why — Comparison Table */}
                <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">왜 보안팀이 필요한가</h3>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                    <th className="px-5 py-4 text-left text-xs font-bold text-slate-600 dark:text-slate-400 w-[24%] uppercase tracking-wider">구분</th>
                                    <th className="px-5 py-4 text-left text-xs font-bold text-slate-600 dark:text-slate-400 w-[36%] uppercase tracking-wider">일반적인 보안팀</th>
                                    <th className="px-5 py-4 text-left text-xs font-bold text-blue-600 dark:text-blue-400 w-[40%] uppercase tracking-wider">우리가 만드는 보안팀</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                                {[
                                    ["보안의 목적", "규제 대응 및 사고 예방", "브랜드 신뢰 구축 및 비즈니스 보호"],
                                    ["보안 수준", "주기적 점검", "상시 컨디션 관리 및 기술적 보완"],
                                    ["보안팀 역할", "사후 대응", "개발팀과 함께 뛰는 파트너"],
                                    ["보안 문화", "통제와 규칙", "공유와 협업, 투명한 소통"],
                                ].map(([cat, general, ours], i) => (
                                    <tr key={i}>
                                        <td className="px-5 py-4 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/20">{cat}</td>
                                        <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{general}</td>
                                        <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{ours}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Common Principles */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                        공통 원칙 (Common Principles)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { title: "Squad-to-Squad", desc: "보안팀은 문제를 함께 해결하는 가장 든든한 파트너입니다." },
                            { title: "Early Involvement", desc: "기획과 설계의 시작점에서 함께 호흡하며 보안의 가치를 더합니다." },
                            { title: "Clear Ownership", desc: "각 스쿼드가 자율적으로 보안을 실천하도록 명확한 기준과 도구를 제공합니다." },
                            { title: "Transparent Decision", desc: "리스크와 선택지를 투명하게 공유하여 최선의 의사결정을 지원합니다." }
                        ].map((principle, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">{idx + 1}</div>
                                    <span className="font-semibold text-slate-800 dark:text-slate-100">{principle.title}</span>
                                </div>
                                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                    {principle.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 Promises */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                        몰입을 위한 세 가지 약속
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { num: "01", title: "같은 목적", desc: "규제가 아닌, 비즈니스의 지속 가능한 신뢰와 브랜드를 위해 함께 뜁니다." },
                            { num: "02", title: "같은 고민", desc: "속도와 안전 사이의 균형점을 찾고, 기술적 이상을 현실적인 시스템으로 구현합니다." },
                            { num: "03", title: "가시적인 개선의 성취", desc: "우리는 지표가 나아지는 것을 눈으로 볼 때 가장 크게 몰입합니다. 리스크가 줄어드는 과정을 데이터로 시각화하고, 개선의 효능감을 팀 전체가 공유하며 성장의 동력을 얻습니다." },
                        ].map((p, i) => (
                            <div key={i} className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md group">
                                <div className="text-3xl font-black text-slate-100 dark:text-slate-800 mb-4 select-none group-hover:text-blue-100 dark:group-hover:text-blue-900 transition-colors">{p.num}</div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{p.title}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 Key Directions */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                        세 가지 핵심 방향
                    </h3>
                    <div className="space-y-4">
                        {[
                            {
                                num: "1",
                                title: "AI-Native Efficiency (지능적 가속)",
                                desc: "AI를 통해 보안 운영의 물리적 시간을 압축합니다. 단순 탐지와 문서화는 지능형 에이전트에게 맡기고, 팀원은 더 고도화된 위협 모델링과 창의적인 보안 설계에 집중합니다.",
                            },
                            {
                                num: "2",
                                title: "Visible Feedback Loop (가시적 피드백)",
                                desc: "보안의 성과를 투명하게 시각화합니다. 패치 속도, 위협 제거율 등 실질적인 개선 지표를 실시간으로 확인하며, 우리 손으로 직접 안전을 일구어가는 즐거움을 확인합니다.",
                            },
                            {
                                num: "3",
                                title: "High-Velocity Security (고속 보안 구현)",
                                desc: "개발팀의 리듬에 맞춰 보안을 구현합니다. AI 기반의 빠른 의사결정 지원으로 비즈니스의 병목을 해결하고, 신뢰라는 토대 위에서 제품이 더 빠르게 시장으로 나아가도록 돕습니다.",
                            },
                        ].map((dir, di) => (
                            <div key={di} className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">{dir.num}</span>
                                    <span className="font-bold text-slate-900 dark:text-white text-base">{dir.title}</span>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-900">
                                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{dir.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision Tags */}
                 <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-200 dark:border-slate-700">
                     {["비즈니스를 이해하는 보안팀", "현장에서 함께 고민하는 보안팀", "기술로 신뢰를 만들어가는 보안팀"].map((tag, i) => (
                         <span key={i} className="px-4 py-2 text-xs font-bold rounded-full border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 shadow-sm">
                             {tag}
                         </span>
                     ))}
                 </div>
            </Section>

            {/* Security Squad Project */}
            <Section title="Security Squad Project">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-900">
                    {/* Header */}
                    <div className="px-8 py-8 border-b border-slate-100 dark:border-slate-800">
                        <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">Project</div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                            비즈니스 성장을 견인하는<br />
                            <span className="text-slate-500 dark:text-slate-400 font-normal">&apos;보안 스쿼드&apos; 비전 수립</span>
                        </h3>
                        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                            &quot;보안은 통제가 아니라, 비즈니스가 더 과감하게 달릴 수 있게 돕는 신뢰의 안전장치여야 합니다.&quot;<br />
                            브랜딩 기업 환경에서 보안팀이 비즈니스의 필수 전력이 되는 철학과 전략을 수립했습니다.
                        </p>
                    </div>

                    {/* 3 Strategies */}
                    <div className="px-8 py-8 border-b border-slate-100 dark:border-slate-800">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                            3대 핵심 추진 방향
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    tag: "Product & Platform Security Unit",
                                    title: "안전한 캔버스 제공",
                                    desc: "제품 설계 단계부터 참여하여 보안 UX를 개선합니다. AI 기반 코드 리뷰로 취약점을 사전에 차단하고, 개발자가 오직 제품의 가치에만 집중할 수 있는 안전한 캔버스를 제공합니다.",
                                },
                                {
                                    tag: "Governance · Risk · Compliance (GRC) Unit",
                                    title: "성장 가속형 거버넌스",
                                    desc: "AI로 컴플라이언스 대응 프로세스를 자동화합니다. 확보된 리소스를 활용해 조직의 성장을 가속하는 실질적인 보안 가이드를 수립하고 리스크를 선제적으로 관리합니다.",
                                },
                                {
                                    tag: "Security Enablement & Trust Unit",
                                    title: "보안 문화 내재화",
                                    desc: "보안을 조직의 자연스러운 문화로 내재화합니다. AI 헬프데스크를 통해 구성원의 궁금증을 즉시 해결하고, 보안 사고 예방률이 드라마틱하게 개선되는 과정을 전사와 공유합니다.",
                                },
                            ].map((s, i) => (
                                <div key={i} className="space-y-3">
                                    <div>
                                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{s.tag}</span>
                                        <h5 className="font-bold text-slate-900 dark:text-white text-base mt-2">{s.title}</h5>
                                    </div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                        {s.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expected Impact */}
                    <div className="px-8 py-8">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                            Expected Impact
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "내부 조직", desc: "보안을 든든한 파트너로 인식하고 자발적으로 협업하는 문화" },
                                { label: "고객 가치", desc: "수준 높은 보안 기술력으로 브랜드에 대한 사용자 신뢰도 극대화" },
                                { label: "팀 빌딩", desc: "명확한 미션과 공정한 보상으로 전문가들이 오래 몰입하는 보안 스쿼드 구축" },
                            ].map((impact, i) => (
                                <div key={i}>
                                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{impact.label}</span>
                                    <p className="text-base text-slate-800 dark:text-slate-200 mt-2 leading-relaxed font-semibold">{impact.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 italic">
                            &quot;우리는 기업의 성장과 함께하며 시간이 갈수록 더 단단해지는 보안 시스템을 설계합니다.&quot;
                        </p>
                    </div>
                </div>
            </Section>

            <Section title="AI Power Stack">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-5 md:p-6 rounded-2xl text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Terminal className="text-indigo-200" size={24} />
                            AI-Driven Workflow
                        </h3>
                        <p className="opacity-90 leading-relaxed text-sm font-medium">
                            Cursor와 MCP(Model Context Protocol)를 활용해 보안 운영 코드를 작성하고 관리합니다. AI를 통해 반복적인 정책 수립과 감사 업무를 압축하고 핵심 아키텍처 설계에 집중합니다.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-5 md:p-6 rounded-2xl text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Zap className="text-slate-300" size={24} />
                            Custom AI Agents
                        </h3>
                        <p className="opacity-90 leading-relaxed text-sm font-medium">
                            Claude 3.5 Sonnet과 Gemini Pro 기반의 커스텀 에이전트를 개발하여 취약점 탐지와 규제 매칭을 자동화합니다. 기술적 결함이 즉각적으로 해결되는 과정을 가속합니다.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-5 md:p-6 rounded-2xl text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Users className="text-blue-200" size={24} />
                            AI Strategy Squad
                        </h3>
                        <p className="opacity-90 leading-relaxed text-sm font-medium">
                            단순 통제를 넘어 AI 기반의 의사결정 지원 시스템을 구축합니다. 보안이 비즈니스의 발목을 잡지 않고, 더 안전하고 빠르게 나아가도록 돕는 파트너 역할을 수행합니다.
                        </p>
                    </div>
                </div>
            </Section>

            <Section title="Work Experience" id="experience">
                <div className="space-y-4">
                    <ExperienceItem
                        company="MOIN"
                        role="보안팀 리더"
                        period="2024.11 ~ Present"
                        description={
                            <ul className="list-disc space-y-1 pl-5">
                                <li>글로벌 지점(싱가포르, 라트비아, 일본 등) 설립을 위한 규제 대응</li>
                                <li>해외 금융 규제(Dora, GDPR 등) 및 전자금융 컴플라이언스 대응</li>
                                <li>
                                    <Link href="/projects/zero-trust" className="inline-flex items-center gap-2 hover:text-blue-500 hover:underline transition-colors group">
                                        연구 개발망 및 망분리 대체 통제를 위한 ZeroTrust Architecture 설계
                                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects/devsecops-plan" className="inline-flex items-center gap-2 hover:text-blue-500 hover:underline transition-colors group">
                                        전자금융 기반시설 관리체계 자체 점검 후 개선 계획 수립
                                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    </Link>
                                </li>
                                <li>ISO27001 취득, ISMS 및 VASP ISMS 준비</li>
                                <li>정보보호 규정 및 지침 제정</li>
                                <li>신규 보안팀 구성, 전사 거버넌스 설계 및 팀 문화 기반 마련</li>
                            </ul>
                        }
                    />
                    <ExperienceItem
                        company="Levvels"
                        role="CISO/CPO"
                        period="2022.10 ~ 2024.11"
                        description={
                            <ul className="list-disc list-inside space-y-1 pl-1">
                                <li>Web3 Wallet 신규 서비스 보안 아키텍처 수립</li>
                                <li>보안팀 Team Building</li>
                                <li>두나무 그룹 보안 감사 대응</li>
                                <li>개인정보·정보보호 지침 제·개정</li>
                                <li>관리체계 및 클라우드 보안 기반 마련</li>
                            </ul>
                        }
                    />
                    <ExperienceItem
                        company="CLASS101"
                        role="CISO"
                        period="2022.03 ~ 2022.10"
                        description={
                            <ul className="list-disc list-inside space-y-1 pl-1">
                                <li>정보보호 조직 리딩</li>
                                <li>ISMS 준비 및 보안 운영 체계 정착</li>
                                <li>Okta·QueryPie·MDM·FW 등 인프라 보안 구성</li>
                                <li>개발자 중심 보안 UX 개선</li>
                            </ul>
                        }
                    />
                    <ExperienceItem
                        company="토스뱅크 (Toss Bank)"
                        role="정보보호 정책 담당자"
                        period="2020.03 ~ 2022.02"
                        description={
                            <ul className="list-disc list-inside space-y-1 pl-1">
                                <li>인터넷은행 본인가 및 심사 대응</li>
                                <li>보안팀 Team Building</li>
                                <li>본인확인기관·전자서명인증 사업 마무리</li>
                                <li>전자금융 보안성 심의 운영</li>
                                <li><strong>고액송금 체크카드 OTP 적용 (국내 최초)</strong></li>
                                <li>클라우드 기반 정보보호 운영 체계 설계</li>
                            </ul>
                        }
                    />
                    <ExperienceItem
                        company="KB국민은행"
                        role="디지털사업부 차장"
                        period="2019.01 ~ 2020.02"
                        description={
                            <ul className="list-disc list-inside space-y-1 pl-1">
                                <li>금융 DT 플랫폼 보안 설계</li>
                                <li>Pivotal 기반 금융 MSA·DevSecOps 구조 구축</li>
                                <li>금보원 CSP 안전성 공동 평가 후 금감원 신고 완료 (국내 최초)</li>
                                <li>대규모 금융권 개발자 경험(DX) 기반 보안 운영</li>
                            </ul>
                        }
                    />
                    <ExperienceItem
                        company="하나금융티아이"
                        role="정보보안"
                        period="2017.03 ~ 2018.08"
                        description={
                            <ul className="list-disc list-inside space-y-1 pl-1">
                                <li>그룹 공용 클라우드 보안 아키텍처 구축</li>
                                <li>금융 망분리 구조 개선 프로젝트</li>
                                <li>개인정보 비식별화 가이드 수립</li>
                                <li>데이터센터 ISMS 인증 취득</li>
                            </ul>
                        }
                    />
                    <ExperienceItem
                        company="LS글로벌"
                        role="정보보안"
                        period="2015.06 ~ 2017.02"
                        description={
                            <ul className="list-disc list-inside space-y-1 pl-1">
                                <li>그룹 DRM 구축 PM</li>
                                <li>11개 계열사 통합 보안 아키텍처 설계</li>
                                <li>APT 대응 솔루션 구축</li>
                                <li>변화관리·교육·운영까지 총괄</li>
                            </ul>
                        }
                    />
                    <ExperienceItem
                        company="롯데닷컴"
                        role="정보보호팀 과장"
                        period="2014.08 ~ 2015.06"
                        description={
                            <ul className="list-disc list-inside space-y-1 pl-1">
                                <li>ISMS 인증 및 개인정보 체계 수립</li>
                                <li>대규모 보안관제 개선</li>
                                <li>AWS 전환 보안 아키텍처 구성</li>
                            </ul>
                        }
                    />
                    <ExperienceItem
                        company="이글루시큐리티"
                        role="컨설팅/관제"
                        period="2007.11 ~ 2014.08"
                        description={
                            <ul className="list-disc list-inside space-y-1 pl-1">
                                <li>공공/금융/기업 대상 ISMS, ISO27001, 안전진단</li>
                                <li>사이버안전센터 설계 및 운영</li>
                                <li>보안관제·솔루션 운영·취약점 점검</li>
                                <li>정보보호 아이디어 공모전 장려상 수상</li>
                            </ul>
                        }
                    />
                </div>
            </Section>

            {/* Projects */}
            <Section title="Key Projects">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCard
                        title="AI-Native Security Dashboard"
                        description="Cursor와 MCP를 활용하여 구축한 실시간 리스크 가시화 플랫폼. 복잡한 보안 지표를 AI로 분석하여 우선순위를 제안하고, 자동화된 대응 조치를 실행합니다."
                        link="#"
                        tags={["AI Agents", "MCP", "Cursor", "Real-time Metrics"]}
                    />
                    <ProjectCard
                        title="Pentest-AI — 모의해킹 플랫폼 (AI-Red Team)"
                        description="전문가 수준의 보안 진단을 수행하는 4계층 AI 에이전트 플랫폼. ShadowGraph를 통한 세션 문맥 유지, Claude Opus/Sonnet 및 Gemini를 활용한 교차 검증을 자동화합니다."
                        link="/projects/pentest-ai"
                        tags={["AI Pentesting", "LLM Agents", "ShadowGraph", "DevSecOps"]}
                    />
                    <ProjectCard
                        title="Zero Trust Architecture"
                        description="사용자 경험을 해치지 않는 강력한 보안 아키텍처. Identity, Access, Compliance를 통합한 3단계 제로 트러스트 모델을 설계하고 구현합니다."
                        link="/projects/zero-trust"
                        tags={["Zero Trust", "Okta", "AWS", "Terraform"]}
                    />
                    <ProjectCard
                        title="AuditFlow"
                        description="리걸테크 기반 컴플라이언스 AI 자동화 플랫폼. 전자금융감독규정 준수 현황을 실시간으로 모니터링하고, 금감원 보고서 점검 및 조치 계획 관리를 자동화합니다."
                        link="https://auditflow.dojiung.com"
                        tags={["LegalTech", "Compliance AI", "Automation"]}
                    />
                    <ProjectCard
                        title="금융권 공용 클라우드 보안 아키텍처"
                        description="KB국민은행에서 그룹사 전체가 사용할 수 있는 안전하고 효율적인 클라우드 보안 아키텍처를 설계하였습니다."
                        link="https://www.dailysmart.co.kr/news/articleView.html?idxno=23201"
                        tags={["Cloud Security", "Architecture", "Enterprise"]}
                    />
                </div>
            </Section>

            {/* Certifications */}
            <Section title="Certifications">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { name: "ISMS-P 심사원", issuer: "KISA (한국인터넷진흥원)" },
                        { name: "CBPR 심사원", issuer: "KISA (한국인터넷진흥원)", link: "https://cbpr.kisa.or.kr/gdpr/static/cbpr_info.do" },
                        { name: "ISO/IEC 27001", issuer: "BSI (심사원보)" },
                        { name: "정보처리기사", issuer: "한국산업인력공단" },
                        { name: "CPPG", issuer: "개인정보보호전문가" },
                        { name: "CCNA", issuer: "Cisco" },
                        { name: "SCJP", issuer: "Sun Microsystems" },
                    ].map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                            <div className="p-2 bg-indigo-50 dark:bg-slate-800 rounded-lg text-indigo-600 dark:text-indigo-400">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    {cert.name}
                                    {cert.link && (
                                        <Link href={cert.link} target="_blank" className="text-slate-400 hover:text-blue-500">
                                            <ExternalLink size={14} />
                                        </Link>
                                    )}
                                </h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Footer */}
            <footer className="py-10 text-center text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 mt-16">
                <p className="font-medium">© 2026 Yunhyeok Lee. All rights reserved.</p>
            </footer>
        </main>
    );
}
