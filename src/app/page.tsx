"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Award, Book, Terminal, Shield, Users, ArrowDown, ExternalLink } from "lucide-react";
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
                    <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto font-light leading-snug px-4">
                        Security Leadership & <br className="block md:hidden" />Compliance Architecture
                    </p>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed px-4 break-keep font-medium">
                        개발자·기획자·운영자가 안심하고 도전할 수 있는 환경을 만들어 신뢰받는 회사가 되도록 보안 리더십을 실천해 왔습니다.
                    </p>


                    <div className="mt-12 text-slate-400">
                        <ArrowDown size={28} className="animate-bounce" />
                    </div>
                </motion.div>
            </section>

            {/* About Me */}
            <Section title="About Me" className="bg-white dark:bg-slate-900/50 rounded-3xl shadow-sm">
                <p className="text-lg leading-loose text-slate-800 dark:text-slate-100 font-medium">
                    보안은 규제를 지키는 업무를 넘어 <span className="font-bold text-blue-700 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4">팀의 몰입도를 높이고</span>,
                    <span className="font-bold text-blue-700 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4"> 제품의 성장 속도를 지키며</span>,
                    <span className="font-bold text-blue-700 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4"> 브랜드 신뢰를 설계하는 일</span>이라고 생각합니다.
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
                        기업의 신뢰를 지키고, 비즈니스가 더 과감하게 나아갈 수 있도록 돕는 <span className="text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4">전문적인 파트너</span>입니다.
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-medium">— 우리가 만들고 싶은 보안팀: 함께 뛰며 성장하는 조직</p>
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

                {/* Working Style */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                        보안팀이 일하는 방식
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-sm">S</div>
                                <span className="font-semibold text-slate-800 dark:text-slate-100">Squad — 현장에서 함께 뛰는 역할</span>
                            </div>
                            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                <li className="flex gap-2.5"><span className="text-blue-400 dark:text-blue-600 flex-shrink-0 mt-1">●</span><span><strong className="text-slate-900 dark:text-white font-bold">DevSecOps 실현</strong>: 기획·설계 단계부터 보안을 녹여내어 서비스 완성도를 높입니다.</span></li>
                                <li className="flex gap-2.5"><span className="text-blue-400 dark:text-blue-600 flex-shrink-0 mt-1">●</span><span>&quot;안 된다&quot;가 아닌 &quot;어떻게 하면 안전하게 할 수 있을지&quot;를 함께 고민하는 팀원.</span></li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-sm">A</div>
                                <span className="font-semibold text-slate-800 dark:text-slate-100">Architecture — 방향을 제시하는 역할</span>
                            </div>
                            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                <li className="flex gap-2.5"><span className="text-blue-400 dark:text-blue-600 flex-shrink-0 mt-1">●</span><span><strong className="text-slate-900 dark:text-white font-bold">기준 수립</strong>: 전사가 공감할 수 있는 보안 기준을 세우고 리스크를 관리합니다.</span></li>
                                <li className="flex gap-2.5"><span className="text-blue-400 dark:text-blue-600 flex-shrink-0 mt-1">●</span><span>팀 전체가 안전하게 나아갈 수 있도록 전체적인 판을 읽고 전술을 설계합니다.</span></li>
                            </ul>
                        </div>
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
                            { num: "01", title: "명확한 이유", desc: "규제 때문이 아니라 '고객의 신뢰'를 지킨다는 본질에 집중합니다." },
                            { num: "02", title: "현실적인 결정", desc: "보안과 속도 사이에서 함께 최선의 균형점을 찾아냅니다." },
                            { num: "03", title: "가시적인 목표", desc: "'비즈니스 성장에 기여하는 전문가'로 인정받는 것을 목표로 합니다." },
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
                                title: "투명한 성숙도 관리와 정당한 보상",
                                items: [
                                    { title: "단계별 성장", desc: "현재 팀의 기술 수준을 객관적으로 파악하고 다음 단계 기술 스택을 익혀나갑니다." },
                                    { title: "공정한 성과 측정", desc: "합류 시점과 무관하게 시스템 개선·효율화 기여도에 따라 보상합니다." },
                                    { title: "지식의 공유", desc: "개인의 노하우를 팀 자산으로 만들어 시간이 갈수록 단단해지는 팀을 만듭니다." },
                                ],
                            },
                            {
                                num: "2",
                                title: "AI 기술 도입을 통한 업무 방식의 변화",
                                items: [
                                    { title: "자동화 플랫폼 활용", desc: "Pentest-AI 등 도구로 반복적인 점검 업무를 자동화하여 더 중요한 일에 집중합니다." },
                                    { title: "전문성 강화", desc: "자동화로 확보한 여유를 아키텍처 설계·위협 모델링 등 고부가가치 과업에 재배치합니다." },
                                    { title: "기술적 성장", desc: "최신 기술을 업무에 직접 적용하고 실험하며 보안 전문가로서 계속 성장합니다." },
                                ],
                            },
                            {
                                num: "3",
                                title: "비즈니스를 돕는 기술 서포트",
                                items: [
                                    { title: "개발자를 위한 가이드라인", desc: "파이프라인 내 자동화된 보안 장치로 개발팀이 비즈니스 성장에만 집중할 수 있게 돕습니다." },
                                    { title: "설명이 있는 보안", desc: "통제보다 기술적 근거를 바탕으로 협업 부서와 투명하게 소통하는 문화를 만듭니다." },
                                    { title: "브랜드 가치 제고", desc: "보안팀의 전문성이 기업 브랜드 신뢰도가 됩니다." },
                                ],
                            },
                        ].map((dir, di) => (
                            <div key={di} className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 flex items-center gap-4">
                                    <span className="w-6 h-6 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold flex items-center justify-center flex-shrink-0">{dir.num}</span>
                                    <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{dir.title}</span>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-900 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {dir.items.map((item, ii) => (
                                        <div key={ii}>
                                            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-2">{item.title}</h5>
                                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    ))}
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
                            &quot;보안은 통제가 아니라, 비즈니스가 더 과감하게 달릴 수 있게 돕는 신뢰의 안전장치여야 합니다.&quot; 브랜딩 기업 환경에서 보안팀이 비즈니스의 필수 전력이 되는 철학과 전략을 수립했습니다.
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
                                    tag: "Maturity & Growth",
                                    title: "성숙도 기반의 공정한 성장",
                                    points: ["DevSecOps 성숙도 모델 기반 로드맵 수립", "합류 시점 무관 실질적 성과 기준 보상 체계", "개인 노하우의 팀 자산화로 조직 영속성 확보"],
                                },
                                {
                                    tag: "AI-Powered Security",
                                    title: "AI 기반의 기술적 혁신",
                                    points: ["Pentest-AI 등 자동화로 반복 수동 업무 제거", "확보 리소스를 아키텍처 설계·위협 모델링에 재배치", "팀원 기술적 성취감 고취"],
                                },
                                {
                                    tag: "Business Enablement",
                                    title: "비즈니스 친화적 서포트",
                                    points: ["개발 파이프라인 내 자동화된 보안 가드레일 구축", "기술적 근거 기반 협업 부서와 투명한 소통 문화", "보안팀 전문성 = 기업 브랜드 신뢰도"],
                                },
                            ].map((s, i) => (
                                <div key={i} className="space-y-3">
                                    <div>
                                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{s.tag}</span>
                                        <h5 className="font-bold text-slate-900 dark:text-white text-base mt-2">{s.title}</h5>
                                    </div>
                                    <ul className="space-y-2.5">
                                        {s.points.map((pt, j) => (
                                            <li key={j} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                                <span className="text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1">●</span>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
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

            <Section title="Recent Focus">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-5 md:p-6 rounded-2xl text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Terminal className="text-indigo-200" size={24} />
                            몰입하고 성장하는 환경
                        </h3>
                        <p className="opacity-90 leading-relaxed text-sm">
                            기술 인력이 몰입하고 성장할 수 있는 보안 환경을 설계합니다. 불필요한 제약을 줄이고,
                            지식 공유 문화를 만들어 개인와 조직이 함께 성장하는 구조를 만듭니다.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-5 md:p-6 rounded-2xl text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Award className="text-slate-300" size={24} />
                            보안·감사 자동화
                        </h3>
                        <p className="opacity-90 leading-relaxed text-sm">
                            감독규정 자율규제 전환에 대응하여 보안 및 감사 프로세스를 자동화합니다.
                            AuditFlow와 같은 도구를 통해 반복적인 컴플라이언스 업무를 효율화합니다.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-5 md:p-6 rounded-2xl text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Users className="text-blue-200" size={24} />
                            브랜딩 기반의 보안팀 구성
                        </h3>
                        <p className="opacity-90 leading-relaxed text-sm">
                            보안팀의 비전과 가치를 명확히 하고 대내외적으로 소통합니다.
                            단순 통제 조직이 아닌, 제품의 신뢰를 더하는 비즈니스 파트너로서의 정체성을 확립합니다.
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
                        title="Pentest-AI — 모의해킹 플랫폼 (AI-Red Team)"
                        description="전문가 수준의 보안 진단을 수행하는 4계층 AI 에이전트 플랫폼. ShadowGraph를 통한 세션 문맥 유지, Claude Opus/Sonnet 및 Gemini를 활용한 교차 검증, Compliance RAG를 통한 규제 매칭을 자동화합니다."
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
                        title="토스뱅크 체크카드 OTP"
                        description="카드번호가 없는 혁신적인 디자인과 내장형 OTP 기술 적용 프로젝트에 주요 기여를 하였습니다."
                        link="https://smartmlab.com/2025/09/tossbank-mobile-otp/"
                        tags={["FinTech", "Innovation", "Security Design"]}
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
