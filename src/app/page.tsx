"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Award, Book, Terminal, Shield, Users, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden w-full max-w-[100vw]">
            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full pb-20"
                >
                    <div className="mb-8 relative w-[80vw] h-[80vw] max-w-[350px] max-h-[350px] md:w-72 md:h-72 mx-auto group">
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
                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed px-4 break-keep">
                        개발자·기획자·운영자가 안심하고 도전할 수 있는 환경을 만들어 신뢰받는 회사가 되도록 보안 리더십을 실천해 왔습니다.
                    </p>


                    <div className="absolute bottom-10 animate-bounce text-slate-400 flex justify-center w-full left-0">
                        <ArrowDown size={32} />
                    </div>
                </motion.div>
            </section>

            {/* About Me */}
            <Section title="About Me" className="bg-white dark:bg-slate-900/50 rounded-3xl shadow-sm pt-2 pb-6 md:pt-2 md:pb-12 -mt-8">
                <p className="text-lg leading-loose text-slate-700 dark:text-slate-300">
                    보안은 규제를 지키는 업무를 넘어 <span className="font-bold text-blue-600 dark:text-blue-400">팀의 몰입도를 높이고</span>,
                    <span className="font-bold text-blue-600 dark:text-blue-400"> 제품의 성장 속도를 지키며</span>,
                    <span className="font-bold text-blue-600 dark:text-blue-400"> 브랜드 신뢰를 설계하는 일</span>이라고 생각합니다.
                </p>
                <p className="text-lg leading-loose text-slate-700 dark:text-slate-300 mt-6">
                    지난 17년간 정보보호 컨설팅, 금융권 보안, 인터넷은행 인가, 스타트업 보안팀 리더십까지 다양한 환경에서
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
            <Section title="Strong Point" className="bg-slate-50 dark:bg-slate-900/30 my-10 rounded-3xl">
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

            {/* Security Team Building */}
            <Section title="Security Team Building" className="py-6 md:py-12">
                <div className="bg-white dark:bg-slate-900/50 rounded-3xl p-6 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800 space-y-12 md:space-y-20">
                    {/* Header */}
                    <div>
                        <h3 className="text-xl md:text-3xl font-bold mb-3 text-slate-800 dark:text-slate-100">
                            만들고싶은 보안팀 <span className="text-slate-400 font-light mx-2 hidden md:inline">|</span> <br className="md:hidden" /> <span className="text-blue-600 dark:text-blue-400">브랜딩을 추구하는 기업의 정보보안팀</span>
                        </h3>
                    </div>

                    {/* Section 1: Intro - Why Essential? */}
                    <div className="space-y-6 md:space-y-8 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        <h4 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-indigo-500 pl-4">브랜딩 기업에게 보안팀은 &#39;필수 전력&#39;</h4>
                        <p>
                            브랜딩을 추구하는 기업은 단순히 서비스를 운영하는 조직이 아닙니다.<br className="hidden md:block" />
                            우리는 <span className="font-semibold text-indigo-600 dark:text-indigo-400">목표가 있는 스포츠 팀</span>에 가깝습니다.
                        </p>
                        <ul className="list-disc list-inside space-y-2 md:space-y-3 ml-1 md:ml-4 bg-slate-50 dark:bg-slate-800/50 p-4 md:p-6 rounded-xl">
                            <li>단기 성과가 아닌 <span className="font-bold text-slate-800 dark:text-slate-100">지속적인 우승</span></li>
                            <li>기능 완성이 아닌 <span className="font-bold text-slate-800 dark:text-slate-100">신뢰와 정체성</span></li>
                            <li>일회성 성공이 아닌 <span className="font-bold text-slate-800 dark:text-slate-100">시간이 지날수록 강해지는 팀</span></li>
                        </ul>
                        <p className="mt-4 break-keep">
                            스포츠 팀이 우승하기 위해 뛰어난 선수, 명확한 전술, 그리고 <strong>팀 전체의 신뢰와 몰입</strong>이 필요하듯,<br className="hidden md:block" />
                            브랜딩을 추구하는 기업에서 정보보안팀은 &#39;있으면 좋은 팀&#39;이 아니라, <span className="font-bold text-blue-600 dark:text-blue-400">우승을 위한 필수 전력</span>입니다.
                        </p>
                    </div>

                    {/* Section 2: Comparison - General vs Branding */}
                    <div className="space-y-6 md:space-y-8">
                        <h4 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-indigo-500 pl-4">일반 기업의 보안 vs 브랜딩 기업의 보안</h4>
                        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                            <table className="w-full text-left text-xs sm:text-sm md:text-base break-keep bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
                                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold border-b border-slate-200 dark:border-slate-700">
                                    <tr>
                                        <th className="px-2 py-3 md:px-6 md:py-4 w-[20%]">구분</th>
                                        <th className="px-2 py-3 md:px-6 md:py-4 w-[35%] text-slate-500 dark:text-slate-400">일반 기업</th>
                                        <th className="px-2 py-3 md:px-6 md:py-4 w-[45%] text-blue-600 dark:text-blue-400">브랜딩 기업</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    <tr>
                                        <td className="px-2 py-3 md:px-6 md:py-4 font-medium align-top">보안의 목적</td>
                                        <td className="px-2 py-3 md:px-6 md:py-4 text-slate-600 dark:text-slate-400 align-top">사고 예방,<br />규제 대응</td>
                                        <td className="px-2 py-3 md:px-6 md:py-4 font-semibold text-slate-900 dark:text-slate-100 align-top">신뢰 축적,<br />브랜드 보호</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-3 md:px-6 md:py-4 font-medium align-top">보안 수준</td>
                                        <td className="px-2 py-3 md:px-6 md:py-4 text-slate-600 dark:text-slate-400 align-top">건강검진 수준</td>
                                        <td className="px-2 py-3 md:px-6 md:py-4 font-semibold text-slate-900 dark:text-slate-100 align-top">컨디션 관리<br />+ 한계 돌파</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-3 md:px-6 md:py-4 font-medium align-top">보안팀 역할</td>
                                        <td className="px-2 py-3 md:px-6 md:py-4 text-slate-600 dark:text-slate-400 align-top">사후 대응 중심</td>
                                        <td className="px-2 py-3 md:px-6 md:py-4 font-semibold text-slate-900 dark:text-slate-100 align-top">스쿼드와 서포트<br />모두 수행</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-3 md:px-6 md:py-4 font-medium align-top">보안 문화</td>
                                        <td className="px-2 py-3 md:px-6 md:py-4 text-slate-600 dark:text-slate-400 align-top">규칙과 통제</td>
                                        <td className="px-2 py-3 md:px-6 md:py-4 font-semibold text-slate-900 dark:text-slate-100 align-top">신뢰, 협업,<br />투명성</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 text-center italic mt-4 px-4">
                            &quot;브랜딩 기업의 보안팀은 ‘검진 조직’이 아니라 <span className="font-bold not-italic text-indigo-600 dark:text-indigo-400">‘경기력을 끌어올리는 조직’</span>입니다.&quot;
                        </p>
                    </div>

                    {/* Section 3: Identity - Squad vs Support */}
                    <div className="space-y-6 md:space-y-8">
                        <h4 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-indigo-500 pl-4">보안팀은 스쿼드이면서 동시에 서포트 조직</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 md:p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                                <h5 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                    🏃 Squad로서의 보안팀
                                </h5>
                                <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                                    <li>• DevSecOps</li>
                                    <li>• 제품·플랫폼 설계 단계부터 참여</li>
                                    <li>• 서비스 품질과 사용자 신뢰에 직접 영향</li>
                                    <li>• 함께 경기장에서 뛰는 팀원</li>
                                </ul>
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 md:p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                                <h5 className="font-bold text-lg mb-3 flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                                    🛡️ Support로서의 보안팀
                                </h5>
                                <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                                    <li>• 보안 거버넌스와 기준 수립</li>
                                    <li>• 컴플라이언스와 리스크 관리</li>
                                    <li>• 전사를 보호하는 판단과 조율</li>
                                    <li>• 전술 설계 및 컨디션 관리</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-sm md:text-base">
                            👉 우리가 지향하는 형태는 <span className="font-bold text-indigo-600 dark:text-indigo-400">Support 성격을 가진 독립적인 Security Squad</span>입니다.
                        </p>
                    </div>

                    {/* Section 4: Immersion Conditions */}
                    <div className="space-y-6 md:space-y-8">
                        <h4 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-indigo-500 pl-4">몰입을 만드는 세 가지 조건</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl text-center">
                                <div className="text-3xl mb-3">🎯</div>
                                <h5 className="font-bold mb-2 text-base md:text-lg">1. 같은 목적</h5>
                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-snug">“규제가 아니라 <br /><span className="font-bold text-slate-900 dark:text-white">신뢰와 브랜드를 위해</span>”</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl text-center">
                                <div className="text-3xl mb-3">🤔</div>
                                <h5 className="font-bold mb-2 text-base md:text-lg">2. 같은 고민</h5>
                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-snug">개발 속도 vs 안전<br /><span className="font-bold text-slate-900 dark:text-white">이상과 현실의 조율</span></p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl text-center">
                                <div className="text-3xl mb-3">🏆</div>
                                <h5 className="font-bold mb-2 text-base md:text-lg">3. 같은 Goal</h5>
                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-snug">신뢰받는 보안팀<br /><span className="font-bold text-slate-900 dark:text-white">브랜드를 지키는 팀</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Three Pillars */}
                    <div className="space-y-6 md:space-y-8">
                        <h4 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-indigo-500 pl-4">우리가 생각하는 보안팀의 핵심 3가지 축</h4>
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row gap-4 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <div className="min-w-[40px] text-3xl">1️⃣</div>
                                <div>
                                    <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Security Maturity</h5>
                                    <p className="font-medium text-indigo-600 dark:text-indigo-400 mb-2">성숙도 기반의 현실적인 성장</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                                        보안은 흑백이 아닙니다. &quot;우리는 어디에 있는가&quot;, &quot;다음 단계는 무엇인가&quot;를 고민하며 조직·전사·DevSecOps 관점의 로드맵을 그려나갑니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <div className="min-w-[40px] text-3xl">2️⃣</div>
                                <div>
                                    <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Trust Branding</h5>
                                    <p className="font-medium text-indigo-600 dark:text-indigo-400 mb-2">내·외부로 신뢰받는 정보보안 문화</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                                        통제보다 설명을, 규칙보다 이유를 공유합니다. 개발자가 우회하지 않고, 조직이 숨기지 않는 신뢰받는 보안 문화를 만듭니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <div className="min-w-[40px] text-3xl">3️⃣</div>
                                <div>
                                    <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-1">몰입할 수 있는 보안팀</h5>
                                    <p className="font-medium text-indigo-600 dark:text-indigo-400 mb-2">성장을 체감할 수 있는 구조</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                                        책임은 크고 성과는 잘 보이지 않는 보안팀. 우리는 명확한 미션과 자율적인 판단을 통해 팀원이 오래 깊게 몰입할 수 있는 조직을 만듭니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Quote */}
                    <div className="text-center pt-8 border-t border-slate-100 dark:border-slate-800">
                        <p className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200">
                            &quot;브랜드를 이해하고, 함께 뛰며, 신뢰를 설계하는 보안팀&quot;
                        </p>
                        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2">
                            시간이 지날수록 기업과 함께 더 강해지는 보안팀을 지향합니다.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Security Team Plan (New Section) */}
            <Section title="Security Team Plan (몰입할 수 있는 보안팀)" className="py-6 md:py-12">
                <div className="bg-white dark:bg-slate-900/50 rounded-3xl p-5 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800 space-y-12 md:space-y-16">
                    {/* Header */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-800 dark:text-slate-100">
                            Unit · Role · OKR
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            독립적이면서도 유기적으로 연결된 보안 조직의 구조와 역할 정의
                        </p>
                    </div>

                    {/* 1. Security Squad Structure */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-lg">1️⃣</span> Security Squad 전체 구조
                        </h4>
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8">
                            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-6">
                                Security Squad는 <span className="text-indigo-600 dark:text-indigo-400 font-bold">4개의 유닛(Unit)</span>으로 구성되어 있으며, 전사 조직과 긴밀히 연결되는 <span className="text-indigo-600 dark:text-indigo-400 font-bold">허브형 보안 조직</span>입니다.
                            </p>
                            <div className="mb-8 bg-indigo-50/50 dark:bg-slate-800/50 p-4 rounded-xl border border-indigo-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-base">
                                <span className="font-bold text-indigo-600 dark:text-indigo-400 mr-1">💡 Unit이란?</span>
                                보안팀 내에서도 유사한 관심사를 가진 사람들이 모여 토론하고 학습할 수 있는 그룹
                            </div>
                            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                                <div className="font-bold text-xl mb-4 text-slate-800 dark:text-slate-100 border-b pb-2 border-slate-100 dark:border-slate-800">Security Squad</div>
                                <ul className="space-y-3 pl-4 border-l-2 border-indigo-200 dark:border-indigo-800 ml-2">
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div> Product & Platform Security Unit
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div> Cloud & Infrastructure Security Unit
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div> Governance · Risk · Compliance (GRC) Unit
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div> Security Enablement & Trust Unit
                                    </li>
                                </ul>
                            </div>
                            <p className="mt-6 text-slate-600 dark:text-slate-400 text-sm">
                                * 각 Unit은 명확한 책임 영역과 목표(Goal)를 가지며, 제품·개발·플랫폼 조직과 <span className="font-semibold text-slate-800 dark:text-slate-200">Squad-to-Squad</span> 방식으 연결됩니다.
                            </p>
                        </div>
                    </div>

                    {/* 2. Unit Role Definition */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-lg">2️⃣</span> Unit별 역할 정의 (Role)
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Product & Platform Security Unit */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">🧩</span>
                                    <div>
                                        <h5 className="font-bold text-lg text-slate-800 dark:text-slate-100">Product & Platform Security Unit</h5>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">&quot;제품과 함께 설계되는 보안&quot;</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                                    <div>
                                        <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">주요 역할</span>
                                        <ul className="list-disc list-inside space-y-1 pl-1">
                                            <li>제품·플랫폼 설계 단계 보안 리뷰</li>
                                            <li>Threat Modeling / Secure Design</li>
                                            <li>DevSecOps 파이프라인 설계</li>
                                            <li>인증·인가·데이터 보호 아키텍처 자문</li>
                                        </ul>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div>
                                            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1 text-xs">함께 일하는 조직</span>
                                            Product Squad<br />Backend / Frontend / Mobile 팀
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1 text-xs">성과 지표 예시</span>
                                            설계 단계 보안 이슈 사전 제거율<br />보안 이슈로 인한 개발 재작업 감소율
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cloud & Infrastructure Security Unit */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">☁️</span>
                                    <div>
                                        <h5 className="font-bold text-lg text-slate-800 dark:text-slate-100">Cloud & Infrastructure Security Unit</h5>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">&quot;플랫폼의 안정성과 확장성을 지키는 보안&quot;</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                                    <div>
                                        <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">주요 역할</span>
                                        <ul className="list-disc list-inside space-y-1 pl-1">
                                            <li>Cloud / Kubernetes / Network 보안</li>
                                            <li>IAM, Secret, Key 관리</li>
                                            <li>보안 모니터링·탐지 체계 운영</li>
                                            <li>침해사고 대응 및 포렌식</li>
                                        </ul>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div>
                                            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1 text-xs">함께 일하는 조직</span>
                                            Platform / SRE / Infra 팀
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1 text-xs">성과 지표 예시</span>
                                            MTTD / MTTR 개선<br />고위험 설정 미준수 감소율
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Governance · Risk · Compliance (GRC) Unit */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">📑</span>
                                    <div>
                                        <h5 className="font-bold text-lg text-slate-800 dark:text-slate-100">Governance · Risk · Compliance (GRC) Unit</h5>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">&quot;조직이 안전하게 성장할 수 있는 기준을 만드는 보안&quot;</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                                    <div>
                                        <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">주요 역할</span>
                                        <ul className="list-disc list-inside space-y-1 pl-1">
                                            <li>보안 정책·표준·가이드 수립</li>
                                            <li>ISMS, ISO, SOC2 등 컴플라이언스 대응</li>
                                            <li>리스크 평가 및 위험 등록부 관리</li>
                                            <li>보안 성숙도 모델 운영</li>
                                        </ul>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div>
                                            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1 text-xs">함께 일하는 조직</span>
                                            전사 조직<br />법무 / 경영지원 / 감사
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1 text-xs">성과 지표 예시</span>
                                            리스크 식별 → 개선 전환율<br />인증·감사 대응 리드타임 감소
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Enablement & Trust Unit */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">🤝</span>
                                    <div>
                                        <h5 className="font-bold text-lg text-slate-800 dark:text-slate-100">Security Enablement & Trust Unit</h5>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">&quot;신뢰와 몰입을 만드는 보안&quot;</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                                    <div>
                                        <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">주요 역할</span>
                                        <ul className="list-disc list-inside space-y-1 pl-1">
                                            <li>보안 교육·캠페인·가이드 콘텐츠</li>
                                            <li>개발자 친화적 보안 도구 제공</li>
                                            <li>보안 커뮤니케이션 & 문화 설계</li>
                                            <li>대내·외 신뢰 커뮤니케이션 지원</li>
                                        </ul>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div>
                                            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1 text-xs">함께 일하는 조직</span>
                                            전사 구성원<br />HR / Brand / PR
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1 text-xs">성과 지표 예시</span>
                                            보안 가이드 활용률<br />보안 이슈 자발적 공유 비율
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Interface Principles */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-lg">3️⃣</span> OKR 설계 원칙
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">Security Squad가 조직과 연결되는 방식</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Squad-to-Squad</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    보안팀은 &quot;승인 조직&quot;이 아니라 함께 문제를 푸는 <span className="font-bold text-slate-900 dark:text-slate-100">파트너</span>. 제품/플랫폼 Squad와 동일한 리듬으로 협업.
                                </p>
                            </div>
                            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Early Involvement</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    설계 완료 후 리뷰 ❌<br />
                                    <span className="font-bold text-slate-900 dark:text-slate-100">기획·설계 단계부터 참여</span> ⭕
                                </p>
                            </div>
                            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Clear Ownership</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    보안팀이 모든 보안을 대신하지 않음.<br />
                                    실행 책임은 각 Squad, 보안팀은 <span className="font-bold text-slate-900 dark:text-slate-100">기준·가이드·의사결정 지원</span>.
                                </p>
                            </div>
                            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Transparent Decision</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    왜 이 보안이 필요한지 설명하고 <span className="font-bold text-slate-900 dark:text-slate-100">리스크와 선택지를 함께 공유</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Common Principles */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-lg">4️⃣</span> Security Squad의 공통 원칙
                        </h4>

                        <div className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-700">
                            <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    보안은 속도를 늦추는 역할이 아니라 <span className="font-bold text-slate-900 dark:text-white">방향을 잡아주는 역할</span>이다
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    통제보다 <span className="font-bold text-slate-900 dark:text-white">설계와 합의</span>를 우선한다
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    규칙보다 <span className="font-bold text-slate-900 dark:text-white">신뢰와 이해</span>를 중시한다
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    모든 보안 활동은 <span className="font-bold text-slate-900 dark:text-white">브랜드 신뢰로 귀결</span>되어야 한다
                                </li>
                            </ul>
                        </div>

                        <div className="text-center pt-8 mt-8 border-t border-slate-100 dark:border-slate-800">
                            <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                                우리가 지향하는 Security Squad
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-slate-600 dark:text-slate-400 font-medium">
                                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full">제품을 이해하는 보안</span>
                                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full">개발을 존중하는 보안</span>
                                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full">브랜드를 보호하는 보안</span>
                            </div>
                            <p className="text-indigo-600 dark:text-indigo-400 font-bold mt-6 text-lg">
                                그리고 시간이 지날수록 조직과 함께 더 강해지는 Security Squad
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Focus Areas */}
            <Section title="Recent Focus" className="py-12 md:py-20">
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
                            <ul className="list-disc list-inside space-y-1 pl-1">
                                <li>글로벌 지점 설립을 위한 규제 조사 및 보안 체계 구축</li>
                                <li>해외 금융 규제 및 전자금융 컴플라이언스 대응</li>
                                <li>연구 개발망 및 망분리 대체 통제를 위한 ZeroTrust Architecture 설계</li>
                                <li>ISO27001·SOC2·ISMS-P 준비</li>
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
                                <li>Web3 기반 신규 서비스 보안 전략 수립</li>
                                <li>Wallet 보안 아키텍처 설계</li>
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
                                <li>금보원·금감원 CSP 안전성 평가 대응</li>
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
                        description="하나금융TI에서 그룹사 전체가 사용할 수 있는 안전하고 효율적인 클라우드 보안 아키텍처를 설계하였습니다."
                        link="https://www.dailysmart.co.kr/news/articleView.html?idxno=23201"
                        tags={["Cloud Security", "Architecture", "Enterprise"]}
                    />
                </div>
            </Section>

            {/* Footer */}
            <footer className="py-12 text-center text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 mt-20">
                <p>© 2025 Yunhyeok Lee. All rights reserved.</p>
            </footer>
        </main>
    );
}
