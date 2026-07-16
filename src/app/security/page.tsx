"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Award, Book, Terminal, Shield, Users, ArrowDown, ExternalLink, Zap, Activity, Target, Settings, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden w-full max-w-[100vw]">
            {/* Hero Section */}
             <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-4 py-10 relative overflow-hidden">
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
                    <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-0 max-w-2xl mx-auto font-bold leading-tight px-4 break-keep">
                        &quot;적극적인 AI 활용하여 실질적 개선의 즐거움으로 몰입하는 보안팀&quot;
                    </p>

                </motion.div>

            </section>

            {/* About Me */}
            <Section title="About Me" className="bg-white dark:bg-slate-900/50 rounded-3xl shadow-sm">
                <p className="text-lg leading-loose text-slate-800 dark:text-slate-100 font-medium">
                    탄탄한 컴플라이언스를 기반으로 불필요한 제약을 제거하여 <span className="font-bold text-blue-700 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4">팀이 몰입할 수 있는 환경을 구축합니다</span>.
                    이를 통해 <span className="font-bold text-blue-700 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4">제품의 성장 속도를 유지</span>하고,
                    <span className="font-bold text-blue-700 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4"> 브랜드의 단단한 신뢰를 설계합니다</span>.
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

            {/* Security Team Vision */}            <Section title="Security Team Vision">
                {/* Lead Quote */}
                <div className="border-l-4 border-slate-900 dark:border-slate-100 pl-6 py-2 mb-8 bg-slate-50 dark:bg-slate-800/30 rounded-r-xl">
                    <p className="text-lg md:text-xl text-slate-800 dark:text-slate-100 leading-relaxed font-semibold italic break-keep text-justify">
                        &quot;AI 기반의 지능적 자동화로 업무 효율을 극대화하여 자율형 보안 체계를 구축하고, <span className="text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4">투명하게 시각화된 데이터로 비즈니스 신뢰와 성장에 기여하는 보안팀</span>&quot;
                    </p>
                </div>

                {/* 1. Trust Architect's Three Promises */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                        Trust Architect의 세 가지 약속
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                eyebrow: "BUSINESS-ALIGNED",
                                title: "비즈니스가 과감해지는 신뢰 설계",
                                desc: "우리의 첫 번째 고객은 사용자이고, 두 번째 고객은 동료입니다. 단순한 사고 예방을 넘어, 서비스의 브랜드 가치를 높이고 비즈니스가 더 과감하게 나아갈 수 있는 단단한 신뢰를 설계합니다."
                            },
                            {
                                eyebrow: "AI-POWERED EFFICIENCY",
                                title: "지능적 자동화와 물리적 시간 압축",
                                desc: "보안이 비즈니스의 병목이 되지 않도록 비효율을 제거합니다. AI 에이전트를 적극 활용하여 운영 업무를 자동화하고, 팀원들은 더 창의적인 아키텍처 설계에 에너지를 집중합니다."
                            },
                            {
                                eyebrow: "VISIBLE IMPROVEMENT",
                                title: "데이터로 체감하는 성장의 효능감",
                                desc: "막연한 불안감을 가시적인 데이터로 전환합니다. 취약점 제거 속도와 방어 지표의 개선을 실시간으로 확인하며, 우리 손으로 직접 안전을 일구어내는 즐거움을 동력으로 삼습니다."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 shadow-sm hover:shadow-md transition-all">
                                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">{item.eyebrow}</div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 break-keep">{item.title}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium break-keep text-justify">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Three Core Axes */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                        보안팀이 몰입할 수 있는 방안
                    </h3>
                    <div className="space-y-6">
                        {[
                            {
                                title: "Security Maturity",
                                subtitle: "성숙도 기반의 현실적인 성장",
                                desc: "보안은 흑백으로 평가할 수 없습니다. 조직·전사·DevSecOps 관점의 보안 성숙도 모델을 기반으로 기술, 조직, 문화가 함께 성장하는 단계적 목표를 설정합니다.",
                                icon: <Activity size={24} />
                            },
                            {
                                title: "Trust Branding",
                                subtitle: "내·외부로 신뢰받는 정보보안 문화",
                                desc: "보안팀이 신뢰를 잃으면 조직은 숨기게 됩니다. 통제보다 설명을, 규칙보다 이유를 공유하며 문제를 함께 해결하는 '브랜드 신뢰의 주체'로서의 보안팀을 지향합니다.",
                                icon: <Target size={24} />
                            },
                            {
                                title: "Immersion",
                                subtitle: "몰입할 수 있는 보안팀",
                                desc: "높은 책임 속에서도 지속적인 몰입이 가능하도록 '명확한 미션', '자율적인 판단', '성장을 체감할 수 있는 구조'라는 세 가지 조건을 구축합니다.",
                                icon: <Zap size={24} />
                            }
                        ].map((axis, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:border-blue-500/50 transition-colors">
                                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                                    {axis.icon}
                                </div>
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{axis.title}</h4>
                                        <span className="text-sm font-bold text-slate-400 dark:text-slate-500 hidden md:block">|</span>
                                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{axis.subtitle}</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium break-keep text-justify">
                                        {axis.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. 우리가 지향하는 보안팀 */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                        우리가 지향하는 보안팀
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {[
                            "브랜드를 이해하는 보안팀",
                            "함께 뛰는 보안팀",
                            "신뢰를 설계하는 보안팀",
                            "시간이 지날수록 기업과 함께 더 강해지는 보안팀"
                        ].map((tag, i) => (
                            <span key={i} className="px-6 py-3 text-sm font-bold rounded-xl border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 shadow-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Section>

            <Section title="Security Division 구성 방안">
                <div className="space-y-8">
                    {/* Introduction */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm text-justify">
                        <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-200 font-medium break-keep">
                            정보보안은 본질적으로 매우 넓은 스펙트럼을 가진 영역입니다. 우리는 단순히 규제를 준수하는 수준을 넘어, 불필요한 제약을 제거하고 팀의 몰입도를 끌어올려 비즈니스 가치를 극대화하는 <span className="text-blue-600 dark:text-blue-400 font-bold">전략적 파트너</span>를 지향합니다.
                        </p>
                    </div>

                    {/* 1. 이중적 정체성 */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                            1. 보안팀의 이중적 정체성
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                                    <Users size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">스쿼드(Squad)의 순간</h4>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm break-keep">
                                    개발 및 제품 팀과 함께 필드 위에서 직접 호흡하며 제품의 안전과 신뢰를 구현하는 든든한 팀원
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center mb-6 shadow-lg">
                                    <Shield size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">서포트(Support)의 순간</h4>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm break-keep">
                                    전사적인 보안 기준과 전술을 설계하여 팀이 흔들림 없이 승리할 수 있도록 돕는 감독과 코치
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. 역할 분담 모델 */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                            2. 역할 분담 상세 모델
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
                            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                                <div className="mb-8">
                                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">실전 보안 (Squad)</span>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">&quot;현장에서 함께 뛰며 제품의 신뢰를 구축합니다&quot;</h4>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold mt-1">•</div>
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">Shift-Left Security</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep text-justify">기획 및 설계 단계부터 깊숙이 참여하여 보안 결함을 사전에 제거하고 제품의 완성도를 극대화합니다.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold mt-1">•</div>
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">AI-Powered Automation</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep text-justify">AI를 활용해 소모적인 운영 업무와 반복적인 태스크를 압축하고, 개발 속도에 맞춘 빠른 피드백 루프를 제공합니다.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold mt-1">•</div>
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">Value-Driven Trust</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep text-justify">서비스 품질이 사용자의 실질적인 신뢰로 직결되도록 기술적 안전장치를 제품 아키텍처 내에 직접 구현합니다.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8 bg-slate-50/50 dark:bg-slate-800/20">
                                <div className="mb-8">
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2">전략 보안 (Support)</span>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">&quot;전술을 설계하고 승리를 위한 환경을 조성합니다&quot;</h4>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white dark:bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold mt-1">•</div>
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">거버넌스 및 기준 수립</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep text-justify">팀이 불안함 없이 본연의 업무에만 몰입할 수 있도록 명확하고 유연한 컴플라이언스 가이드라인을 제시합니다.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white dark:bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold mt-1">•</div>
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">리스크 관리 및 조율</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep text-justify">성장의 걸림돌을 선제적으로 제거하고, 전사를 보호하는 단호한 판단과 유연한 조율로 비즈니스의 지속 가능성을 확보합니다.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white dark:bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold mt-1">•</div>
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">성숙도 및 컨디션 관리</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-keep text-justify">전사의 보안 성숙도가 데이터와 지표로서 개선되는 과정을 실시간으로 관리하며 흔들리지 않는 신뢰의 기반을 만듭니다.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 3. 지향점 */}
                    <div className="bg-slate-900 text-white rounded-3xl p-10 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-32 -mt-32" />
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-blue-400"></span>
                            3. 조직의 지향점
                        </h3>
                        <div className="relative z-10">
                            <p className="text-xl md:text-2xl font-bold mb-8 leading-tight break-keep">
                                &quot;전략적 서포트(Support) 역량을 갖추고 기술적 스쿼드(Squad)로 실행하는 독립적인 보안 조직&quot;
                            </p>
                            <p className="text-slate-300 leading-relaxed font-medium break-keep text-justify">
                                우리는 AI로 업무를 압축하여 확보된 리소스를 통해 더 고도화된 아키텍처 설계에 집중합니다. 개선된 보안 지표를 실시간으로 확인하며 느끼는 성취감을 팀 전체의 성장 동력으로 삼아, 비즈니스가 더 과감하게 나아갈 수 있는 신뢰의 토대를 완성합니다.
                            </p>
                        </div>
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
                                <li>
                                    <Link href="https://isms.dojiung.com" target="_blank" className="inline-flex items-center gap-2 hover:text-blue-500 hover:underline transition-colors group">
                                        정보보호 관리체계 및 인증 관리 시스템 구축
                                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects/litellm" className="inline-flex items-center gap-2 hover:text-blue-500 hover:underline transition-colors group">
                                        LiteLLM 구축을 통한 GenAI API 키 관리 PoC
                                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects/trufflehog" className="inline-flex items-center gap-2 hover:text-blue-500 hover:underline transition-colors group">
                                        TruffleHog를 통한 개발 환경 (단말기 및 Github 등)에 존재하는 중요 키(AWS 패스키 포함) 점검
                                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects/aws-asset-automation" className="inline-flex items-center gap-2 hover:text-blue-500 hover:underline transition-colors group">
                                        AWS API를 활용한 자산관리대장 자동화
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
                        company="MONO (T-Rive)"
                        role="공동 창업자 및 보안/아키텍처 기술 리더"
                        period="2024.11 ~ Present"
                        description={
                            <ul className="list-disc space-y-1 pl-5">
                                <li>현장 근로자 경력 관리 및 핀테크 슈퍼앱 <strong>MONO</strong> 서비스 설계 및 개발 리드</li>
                                <li>에스크로 정산 시스템 및 스마트 노무 SaaS(출퇴근 인증, 안전 교육 이수 실시간 로깅) 보안 아키텍처 설계</li>
                                <li>중대재해처벌법 등 건설/핀테크 안전 규제 준수를 위한 컴플라이언스 자동화 인프라 구축</li>
                                <li>
                                    <Link href="https://mono.dojiung.com/strategy" target="_blank" className="inline-flex items-center gap-2 hover:text-blue-500 hover:underline transition-colors group">
                                        MONO 서비스 전략 및 동반 성장 비즈니스 모델(대안 신용평가 ACS 연동) 수립
                                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    </Link>
                                </li>
                                <li>다중 독립 서비스(Worker App, Partner App 등)의 Monorepo / Multi-Binary 통합 빌드 및 배포 자동화 파이프라인 구축</li>
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
{/* <ProjectCard
                        title="AI-Native Security Dashboard"
                        description="Antigravity와 MCP를 활용하여 구축한 실시간 리스크 가시화 플랫폼. EDR, SaaS, CI/CD 등 전사의 파편화된 보안 데이터를 분석하여 위협 우선순위를 도출하고 자동 대응을 지원합니다."
                        link="/projects/security-dashboard"
                        tags={["AI Agents", "MCP", "Antigravity", "Real-time Metrics"]}
                    /> */}
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
                        title="LiteLLM 구축을 통한 GenAI API 키 관리 PoC"
                        description="AI API 키 발급, 수명관리 및 사용로그 감사 체계 구축. 개발팀 Claude Code 및 API 업무 활용에 대한 모니터링 체계를 지원합니다."
                        link="/projects/litellm"
                        tags={["LiteLLM", "AI Governance", "Security", "PoC"]}
                    />
                    <ProjectCard
                        title="TruffleHog를 통한 중요 키 점검"
                        description="GitHub 리포지토리 및 개발 환경 중요 키 노출 탐지 및 점검 자동화. AWS Access Key 등 하드코딩된 시크릿을 전수 탐지합니다."
                        link="/projects/trufflehog"
                        tags={["TruffleHog", "Secret Scanning", "Security"]}
                    />
                    <ProjectCard
                        title="AWS API를 활용한 자산관리대장 자동화"
                        description="AWS Boto3 API를 활용하여 EC2 등의 자산 정보를 자동으로 수집하고 기존 엑셀 자산관리대장에 기입을 자동화하여 ISMS-P 심사 리소스를 절감합니다."
                        link="/projects/aws-asset-automation"
                        tags={["AWS API", "Boto3", "Openpyxl", "Automation"]}
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
