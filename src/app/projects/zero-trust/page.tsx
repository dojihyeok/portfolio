"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Shield, Lock, Layout, Cloud,
    ArrowLeft, CheckCircle, Terminal,
    Server, Share2, GitBranch,
    Square, CheckSquare, AlertCircle,
    Smartphone, Laptop, Wifi, Globe, Layers, List
} from 'lucide-react';
import Link from 'next/link';

export default function ZeroTrustPage() {
    const [lang, setLang] = useState<'ko' | 'en'>('ko');

    const content = {
        ko: {
            title: <><span className="text-indigo-600 dark:text-indigo-400">Finance ZeroTrust Architecture</span> 구축</>,
            summary: <>전통적인 망분리 환경을 <span className="font-bold text-slate-900 dark:text-slate-200">Identity(Okta)와 Forti ZTNA 기반의 Zero Trust 모델</span>로 전환하여 규제 준수(전자금융감독규정)와 사용자 경험을 동시에 달성했습니다. Okta RBAC/ABAC 기반 권한 관리와 Okta Workflows 자동화를 통해 보안성과 업무 효율성을 극대화한 엔지니어링 프로젝트입니다.</>,
            architecture: {
                title: "ZeroTrust Architecture",
                caption: "* Hybrid Work Environment와 Cloud Resource를 Identity Layer로 중개하는 구조"
            },
            background: {
                title: "프로젝트 배경",
                desc: <>금융 규제 준수를 위해 도입된 망분리(VDI) 환경은 개발자 생산성을 심각하게 저하시키고 있었습니다. 특히, AWS와 같은 클라우드 리소스 접근 시에도 VDI를 거쳐야 하는 병목 현상이 발생하여, <span className="font-bold text-slate-900 dark:text-slate-200">&quot;보안성을 유지하면서도 로컬 수준의 개발 경험을 제공&quot;</span>하는 것이 핵심 과제였습니다.</>
            },
            decisions: {
                title: "핵심 아키텍처 의사결정",
                items: [
                    {
                        title: "Identity를 새로운 경계로",
                        desc: "네트워크 IP 통제를 제거하고, 모든 접근 제어를 Okta Identity로 일원화했습니다. Zscaler Client Connector와 연동하여 기기 상태(Posture)까지 검증된 요청만 허용합니다.",
                        icon: <Shield size={20} />
                    },
                    {
                        title: "RBAC/ABAC 및 업무 자동화",
                        desc: "Okta의 RBAC 및 ABAC 정책을 통해 사용자 신원과 상황에 기반한 정밀한 접근 통제를 구현했습니다. Okta Workflows를 활용하여 반복적인 보안 업무를 자동화하고 휴먼 에러를 제거했습니다.",
                        icon: <Share2 size={20} />
                    },
                    {
                        title: "SSE & ZTNA Integration",
                        desc: "Zscaler Internet Access(ZIA)로 인터넷 트래픽을 검사하고, Private Access(ZPA)로 VPN 없이 내부 애플리케이션에 안전하게 접속하는 환경을 구축했습니다.",
                        icon: <Cloud size={20} />
                    },
                    {
                        title: "컴플라이언스 자동화",
                        desc: "퇴사자 발생 시 HR 시스템과 연동하여 모든 접근 권한(SaaS, Cloud, Internal)이 즉시 회수되도록 자동화 워크플로우를 구축했습니다.",
                        icon: <Terminal size={20} />
                    }
                ]
            },


        },
        en: {
            title: <>Identity-Centric<br /><span className="text-indigo-600 dark:text-indigo-400">Zero Trust Architecture</span> Implementation</>,
            summary: <>An engineering project migrating a traditional VPN-centric network separation environment to an <span className="font-bold text-slate-900 dark:text-slate-200">Identity (Okta) & Forti ZTNA based Zero Trust model</span>. Eliminated security controls that hindered user experience and maximized efficiency through Okta RBAC/ABAC and Workflows automation.</>,
            architecture: {
                title: "System Architecture",
                caption: "* Structure mediating Hybrid Work Environment and Cloud Resources via Identity Layer"
            },
            background: {
                title: "Project Background",
                desc: <>The network separation (VDI) environment introduced for financial compliance was severely degrading developer productivity. In particular, accessing cloud resources like AWS required going through VDI, causing bottlenecks. The key challenge was to <span className="font-bold text-slate-900 dark:text-slate-200">&quot;provide a local-level development experience while maintaining security&quot;</span>.</>
            },
            decisions: {
                title: "Key Architecture Decisions",
                items: [
                    {
                        title: "Identity as a Perimeter",
                        desc: "Removed network IP controls and unified all access control with Okta Identity. Integrated with Zscaler Client Connector to allow only requests with verified device posture.",
                        icon: <Shield size={20} />
                    },
                    {
                        title: "RBAC/ABAC & Automation",
                        desc: "Implemented granular access control using Okta's RBAC and ABAC models. Leveraged Okta Workflows to automate security operations and eliminate human error.",
                        icon: <Share2 size={20} />
                    },
                    {
                        title: "SSE & ZTNA Integration",
                        desc: "Implemented Zscaler Internet Access (ZIA) for secure internet traffic inspection and Private Access (ZPA) for secure access to internal applications without VPN.",
                        icon: <Cloud size={20} />
                    },
                    {
                        title: "Automated Compliance",
                        desc: "Built automated workflows to immediately revoke all access rights (SaaS, Cloud, Internal) in integration with the HR system upon employee departure.",
                        icon: <Terminal size={20} />
                    }
                ]
            },


        }
    };

    const t = content[lang];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-100">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center pointer-events-none">
                <Link href="/" className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full shadow-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                    <ArrowLeft size={16} />
                    <span className="font-medium text-sm">Back to Portfolio</span>
                </Link>

                {/* Language Toggle */}
                <div className="pointer-events-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full p-1 shadow-sm border border-slate-200 dark:border-slate-700 flex gap-1">
                    <button
                        onClick={() => setLang('ko')}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'ko' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                    >
                        KO
                    </button>
                    <button
                        onClick={() => setLang('en')}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                    >
                        EN
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        {t.title}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        {t.summary}
                    </p>
                </motion.div>
            </section>

            {/* Tech Stack Bar */}
            <section className="px-6 pb-12">
                <div className="max-w-4xl mx-auto flex flex-wrap gap-3 border-y border-slate-200 dark:border-slate-800 py-6">
                    {["Okta", "QueryPie", "Forti ZTNA", "Zscaler", "Splunk", "Kandji", "Intune", "OpenSearch", "Exosphere", "AWS"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Architecture Diagram */}
            <section className="py-12 px-6 bg-white dark:bg-slate-900">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <Share2 size={24} className="text-indigo-500" />
                            {t.architecture.title}
                        </h2>
                        <p className="text-slate-500 text-sm mt-1">Designed & Implemented by Yunhyeok Lee</p>
                    </div>

                    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 p-2 shadow-lg">
                        <div className="relative aspect-[16/9] w-full">
                            <Image
                                src="/zero-trust-architecture.png"
                                alt="Zero Trust Architecture Diagram"
                                fill
                                className="object-contain"
                                priority
                                quality={100}
                                unoptimized
                            />
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-4 text-center italic">
                        {t.architecture.caption}
                    </p>
                </div>
            </section>

            {/* MZT Definition & Principles */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Definition */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                                <Shield size={32} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                Finance ZeroTrust(FZT) Security란?
                            </h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                            <p>
                                Moin은 많은 규제와 인증을 준비해야 하는 전자금융서비스를 제공하고 있습니다.
                                많은 규제를 적용하다 보면 업무의 효율성과 혁신성이 저하될 수 있습니다.
                            </p>
                            <p>
                                보안팀은 <span className="text-slate-900 dark:text-white font-bold">업무의 효율성과 혁신 서비스를 만들어 가는데 제약을 최소화하면서 안전한 서비스를 만들 수 있는 보안</span>을 고민하고 적용하기 위해
                                Finance Zero Trust Security 방안을 수립했습니다.
                            </p>
                        </div>
                    </div>

                    {/* Principles */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
                            Finance ZeroTrust(FZT) Security 원칙
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            FZT는 팀원들의 신뢰를 기반으로 구성하고 있습니다. 아래 원칙에 따라 점층적으로 보안을 강화하여 Moin fit security를 완성해 나갑니다.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Principle 1 */}
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                                    원칙 1. 정보 자산 보호
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    고객 정보와 Moin 정보 자산의 보호가 최우선입니다. 등록된 기기에서만 업무 시스템 접속이 가능합니다.
                                </p>
                                <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4">
                                    <li>Moin 제공 노트북/휴대폰 사용 필수</li>
                                    <li>SAML, SCIM 연동을 통한 계정 관리</li>
                                    <li>구글 로그인 → Okta 순차 적용</li>
                                </ul>
                            </div>

                            {/* Principle 2 */}
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                                    원칙 2. One Password
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    편의성을 고려하여 1개의 패스워드만 기억하면 됩니다. 대신 다중 인증(MFA)으로 보안을 강화합니다.
                                </p>
                                <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4">
                                    <li>PC, Slack, Notion 등 통합 로그인</li>
                                    <li>Okta Verify / 지문 인증 활용</li>
                                </ul>
                            </div>

                            {/* Principle 3 */}
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                                    원칙 3. 탄탄한 망분리
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    고객 정보 보호를 위해 업무 환경과 인터넷 환경을 분리하고, 통제를 강화합니다.
                                </p>
                                <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4">
                                    <li>운영 업무는 유선망 접속 원칙</li>
                                    <li>정보 반출입 승인 및 이력 관리</li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    {/* Schedule */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                                <CheckSquare size={32} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                Finance ZeroTrust Security #1 Start Schedule
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {/* Schedule Item: Okta */}
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <CheckCircle className="text-blue-500" size={20} /> Okta 도입 (7/25 완료)
                                </h4>
                                <ul className="space-y-3 ml-2 border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckSquare className="text-blue-500 mt-0.5" size={16} /> 기본 보안정책 적용, 계정 생성, 사용자 공지
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckSquare className="text-blue-500 mt-0.5" size={16} /> 온보딩/오프보딩 절차 협의 및 MacOS/Windows 적용 가이드 배포
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckSquare className="text-blue-500 mt-0.5" size={16} /> 단말기 Okta 설치 완료
                                    </li>
                                </ul>
                            </div>

                            {/* Schedule Item: Preparation Phase */}
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <CheckCircle className="text-blue-500" size={20} /> FZT 준비단계 적용
                                </h4>
                                <ul className="space-y-3 ml-2 border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckSquare className="text-blue-500 mt-0.5" size={16} /> MacOS Kandji 설치 및 Okta Verify 설치
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckSquare className="text-blue-500 mt-0.5" size={16} /> Windows OS 업그레이드 (Win11 Pro) 및 Intune 설치
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckSquare className="text-blue-500 mt-0.5" size={16} /> 준비단계 서비스 Okta 연동 (~8/4 완료)
                                    </li>
                                </ul>
                            </div>

                            {/* Schedule Item: Phase 1 */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Square className="text-slate-400" size={20} /> FZT 1단계 적용 (~9/12)
                                </h4>
                                <ul className="space-y-3 ml-2 border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <Square className="text-slate-400 mt-0.5" size={16} /> Slack, Notion 등 주요 서비스 플랜 업그레이드
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <Square className="text-slate-400 mt-0.5" size={16} /> Okta 연동 및 서비스 마이그레이션
                                    </li>
                                </ul>
                            </div>

                            {/* Schedule Item: Phase 2 */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Square className="text-slate-400" size={20} /> FZT 2단계 적용 (~10/3)
                                </h4>
                                <ul className="space-y-3 ml-2 border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <Square className="text-slate-400 mt-0.5" size={16} /> 2단계 적용 솔루션 연동 완료
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <Square className="text-slate-400 mt-0.5" size={16} /> 백오피스 Core Auth ↔ Okta OIDC 연동
                                    </li>
                                </ul>
                            </div>

                            {/* Schedule Item: Network */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Square className="text-slate-400" size={20} /> 망 분리 네트워크 변경
                                </h4>
                                <ul className="space-y-3 ml-2 border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckSquare className="text-blue-500 mt-0.5" size={16} /> 무선 AP 교체 및 SSID 변경
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckSquare className="text-blue-500 mt-0.5" size={16} /> Forti Switch 교체 및 적용
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <Square className="text-slate-400 mt-0.5" size={16} /> Forti Client (ZTNA Agent) 배포
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <Square className="text-slate-400 mt-0.5" size={16} /> Forti ZTNA 구성
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* #2 Network Separation */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400">
                                <Server size={32} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                Finance ZeroTrust Security #2 망 분리
                            </h2>
                        </div>

                        {/* 1. Regulatory Context */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Shield className="text-slate-500" size={24} /> 전자금융업자 망분리 가이드 (Regulatory Context)
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
                                        논리적 망분리 (업무망)
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        규정 제15조 1항 3호에 의거, 내부 업무용 시스템은 외부망(인터넷)과 차단되어야 합니다.
                                    </p>
                                    <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                                        <li><strong>예외 허용:</strong> 고유식별/개인신용정보를 처리하지 않는 연구·개발 목적</li>
                                        <li><strong>조건:</strong> 자체 위험성 평가 + 대체 통제(별표7) + 정보보호위원회 승인</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
                                        물리적 망분리 (운영망/전산센터)
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        전산센터 내 정보처리시스템 및 운영 단말기는 외부망과 물리적으로 분리되어야 합니다.
                                    </p>
                                    <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                                        <li><strong>예외 허용:</strong> 연구·개발 목적, 국외 전산센터 위탁 등 업무상 불가피한 경우 (금감원장 확인 필요)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2. Architecture Strategy */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <Cloud className="text-slate-500" size={24} /> 연구 개발망과 AWS 전산실 구성 (Architecture Strategy)
                            </h3>

                            <div className="grid md:grid-cols-1 gap-4">
                                {/* Principles Grid */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                        <h5 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                            <Cloud size={18} className="text-blue-500" /> 별도 AWS 망 구성
                                        </h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            연구 개발망은 내부 업무망, 전산실과 독립된 별도의 AWS 네트워크로 구성합니다. SaaS/Github 등 외부 서비스 직접 접속이 허용됩니다 (모니터링 필수).
                                        </p>
                                    </div>
                                    <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                        <h5 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                            <GitBranch size={18} className="text-purple-500" /> 소스 코드 배포 원칙
                                        </h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            연구 개발망에서 전산실(운영망)로는 오직 <strong>소스 코드 배포</strong>만 가능하며, 그 외 직접적인 접속은 차단합니다.
                                        </p>
                                    </div>
                                    <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                        <h5 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                            <Layout size={18} className="text-emerald-500" /> 업무망과의 분리
                                        </h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            연구 개발망과 업무망은 논리적으로 분리하되, 재택 근무 시 VPN을 통한 연구 개발망 접속을 허용합니다.
                                        </p>
                                    </div>
                                    <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                        <h5 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                            <Shield size={18} className="text-orange-500" /> 독립적 보안 통제
                                        </h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            내부 업무망의 보안 솔루션(백신, DLP 등)과 공유하지 않고, 연구·개발망 환경에 맞는 별도의 보안 대책을 수립합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Detailed Network Architecture (New Content) */}
                        <div className="space-y-8 mt-8 border-t border-slate-200 dark:border-slate-800 pt-8">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-700 dark:text-blue-300">
                                <p className="font-bold mb-2 flex items-center gap-2"><AlertCircle size={16} /> 2025.02.05 전자금융 감독규정 개정 사항 반영</p>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>망분리 통제가 적용된 연구개발망으로 업무망, 운영망에서 접속 가능</li>
                                    <li>운영망에서 SaaS 이용은 규제 혁신 서비스 지정 후 이용 가능</li>
                                </ul>
                            </div>

                            {/* Alternative Controls (Separate) */}
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">망분리 대체 정보보호 통제</h4>
                                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400">
                                        <li>[별첨7] 망분리 대체 정보보호 통제 준수</li>
                                    </ul>
                                </div>
                                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 max-h-[600px] overflow-y-auto">
                                    <table className="w-full text-xs text-left text-slate-600 dark:text-slate-400">
                                        <thead className="text-xs text-slate-700 dark:text-slate-200 uppercase bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
                                            <tr>
                                                <th scope="col" className="px-4 py-3 min-w-[80px]">구분</th>
                                                <th scope="col" className="px-4 py-3 min-w-[250px]">통제 사항 (전자금융감독규정 [별표7])</th>
                                                <th scope="col" className="px-4 py-3 min-w-[200px]">Moin 적용 방안 (Solution)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
                                            {/* 1. Common */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50" rowSpan={3}>1. 공통</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">1. 외부망 유입 파일 악성코드 진단/치료</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">망연계 솔루션 / 보안 USB, <span className="font-semibold text-blue-600 dark:text-blue-400">Exosphere</span></td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">2. 지능형 해킹(APT) 차단 대책</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Forti ZTNA / AWS Shield</span> (IPS/DDoS)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">3. 정보 유출 탐지·차단 및 모니터링</td>
                                                <td className="px-4 py-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Splunk</span> (Log), <span className="font-semibold text-blue-600 dark:text-blue-400">Exosphere</span> (DLP)</td>
                                            </tr>

                                            {/* 2. Mail */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50" rowSpan={2}>2. 메일</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">4. 메일 악성코드 감염 예방 대책</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">Google Workspace 보안 (첨부파일 검사)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">5. 메일 정보 유출 탐지·차단·모니터링</td>
                                                <td className="px-4 py-2">승인된 메일만 사용, DLP 모니터링</td>
                                            </tr>

                                            {/* 3. Device */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50" rowSpan={3}>3. 업무용 단말기</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">6. 사용자의 관리자 권한 제거</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Kandji/Intune</span> (Standard User)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">7. 승인된 프로그램만 설치·실행 (Whitelisting)</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Kandji/Intune</span> (App Control)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">8. 전산자료 저장 시 암호화</td>
                                                <td className="px-4 py-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Exosphere</span> (개인정보 암호화)</td>
                                            </tr>

                                            {/* 4. Remote Access (Common) */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50" rowSpan={4}>4. 원격접속 (공통)</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">9. 백신 설치, 업데이트 및 실시간 검사</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Exosphere</span> (실시간 감시 강제)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">10. 운영체제 및 보안 패치 최신 유지</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Kandji/Intune</span> (OS Update 강제)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">11. 로그인 비밀번호 및 화면 보호기 설정</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Kandji/Intune</span> (정책 배포)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">12. 화면/출력물 정보 유출 방지</td>
                                                <td className="px-4 py-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Exosphere</span> (워터마크/캡처방지)</td>
                                            </tr>

                                            {/* 4-1. Indirect Access */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50">4-1. 간접접속</td>
                                                <td className="px-4 py-3">13. 외부/업무용 단말 간 파일 송·수신 차단</td>
                                                <td className="px-4 py-3"><span className="font-semibold text-blue-600 dark:text-blue-400">AWS Workspaces</span> (클립보드/파일 차단)</td>
                                            </tr>

                                            {/* 4-2. Direct Access */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50" rowSpan={5}>4-2. 직접접속</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">14. 인가되지 않은 S/W 설치 차단</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Kandji/Intune</span></td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">15. 보안 설정 임의 변경 차단</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Kandji/Intune</span> (Profile Lock)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">16. 외부 저장장치(USB) 읽기/쓰기 차단</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Exosphere</span> (매체제어)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">17. 전산자료 안호화 저장</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Exosphere / DRM</span></td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">18. 단말기 분실 시 정보 유출 방지</td>
                                                <td className="px-4 py-2"><span className="font-semibold text-blue-600 dark:text-blue-400">FileVault/BitLocker</span></td>
                                            </tr>

                                            {/* 5. Access Control */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50" rowSpan={2}>5. 접근통제</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">19. 업무상 필수 IP/Port만 허용</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Forti ZTNA(ZPA) / AWS SG</span> (Least Privilege)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">20. 원격 접속 기록 및 저장</td>
                                                <td className="px-4 py-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Splunk / Zscaler Log</span></td>
                                            </tr>

                                            {/* 6. Auth */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50" rowSpan={2}>6. 인증</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">21. 이중 인증 적용 (MFA)</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Okta Verify</span> (MFA)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">22. 인증 실패 시 접속 차단 (5회)</td>
                                                <td className="px-4 py-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Okta Policy</span> (Account Lockout)</td>
                                            </tr>

                                            {/* 7. Communication */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50" rowSpan={3}>7. 통신회선</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">23. 구간 암호화</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Forti ZTNA(ZPA)</span> (TLS 1.2 + 암호화 통신)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">24. 내부망 접속 시 인터넷 차단</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800"><span className="font-semibold text-blue-600 dark:text-blue-400">Forti ZTNA</span> 정책 적용</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">25. 유휴 시간 경과 시 차단</td>
                                                <td className="px-4 py-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Forti ZTNA(ZPA) Policy</span> (Timeout 설정)</td>
                                            </tr>

                                            {/* 8. Other */}
                                            <tr>
                                                <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800/50" rowSpan={2}>8. 기타</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">26. 보안 서약서 징구</td>
                                                <td className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">입사/프로젝트 투입 시 서약서 작성 (HR)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">27. 공공장소 원격 접속 금지</td>
                                                <td className="px-4 py-2">보안 교육 및 <span className="font-semibold text-blue-600 dark:text-blue-400">Zscaler</span> 위치 기반 통제 검토</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-slate-500 text-right">* 위 27개 보호대책을 모두 충족하고 정보보호위원회 승인을 득한 경우 망분리 예외 인정</p>
                            </div>


                            {/* Office Network */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">1. 사무실 연구망(인터넷망) 구성</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    이용자의 고유식별정보 또는 개인신용정보를 처리하지 않는 연구ㆍ개발 목적의 경우 (자체 위험성 평가 및 금융감독원장 확인 필수)
                                </p>
                                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative">
                                    <Image
                                        src="/images/office_network_architecture_v2.png"
                                        alt="사무실 연구망 구성 아키텍처"
                                        width={1000}
                                        height={600}
                                        className="w-full h-auto bg-white dark:bg-slate-800"
                                    />
                                </div>
                            </div>

                            {/* Work Network */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">2. 업무망 구성</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    연구·개발망과 내부 업무용시스템간 연결에 한하여 논리적 방식(RBI/VDI)으로 분리 가능
                                </p>
                                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative">
                                    <Image
                                        src="/images/work_network_architecture.png"
                                        alt="업무망 구성 아키텍처"
                                        width={1000}
                                        height={600}
                                        className="w-full h-auto bg-white dark:bg-slate-800"
                                    />
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
                                    <li><strong>RBI(Remote Browser Isolation):</strong> 웹/메일을 직접 접속하지 않고 G/W 통해 접속 후 결과만 수신</li>
                                    <li><strong>AWS-Workspace:</strong> VDI 접속 후 업무 시스템 접속</li>
                                </ul>
                            </div>

                            {/* Ops Network */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">3. 운영망 구성</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    연구개발망과 전산실간 전송 시 개발산출물 등 필수적인 경우에 한정하여 연결
                                </p>
                                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative">
                                    <Image
                                        src="/images/network_architecture_2025.png"
                                        alt="운영망 구성 아키텍처"
                                        width={1000}
                                        height={600}
                                        className="w-full h-auto bg-white dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* #3 Info Asset Protection */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl text-teal-600 dark:text-teal-400">
                                <Lock size={32} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                Finance ZeroTrust Security #3 정보 자산 보호
                            </h2>
                        </div>

                        {/* Device Access */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Laptop className="text-slate-500" /> 지정된 단말기 접속 (Device Trust)
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                        <Smartphone size={24} className="text-slate-600 dark:text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">1인 1모바일 + 1노트북 정책</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                            회사의 업무 시스템은 사전에 등록된 <strong>휴대폰 1대</strong>와 <strong>노트북 1대</strong> (및 내부망 접속 장비)에서만 접속이 가능합니다.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Security Software */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Shield className="text-slate-500" /> 필수 보안 프로그램 (Mandatory Agents)
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="font-bold text-slate-900 dark:text-white mb-1">엑소스피어 (Exosphere)</div>
                                    <div className="text-xs text-slate-500 mb-2">PC 백신 및 정보유출방지(DLP)</div>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">MacOS</span>
                                        <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Windows</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="font-bold text-slate-900 dark:text-white mb-1">MDM (Kandji / Intune)</div>
                                    <div className="text-xs text-slate-500 mb-2">기기 자산 관리 및 설정 배포</div>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Kandji (Mac)</span>
                                        <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Intune (Win)</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="font-bold text-slate-900 dark:text-white mb-1">Okta Verify</div>
                                    <div className="text-xs text-slate-500 mb-2">패스워드리스 인증 및 기기 신뢰 검증</div>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">All Devices</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="font-bold text-slate-900 dark:text-white mb-1">FortiClient (준비중)</div>
                                    <div className="text-xs text-slate-500 mb-2">비상시 VPN 및 접근 제어</div>
                                </div>
                            </div>
                        </div>

                        {/* Network Segmentation */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Globe className="text-slate-500" /> 네트워크 접근 통제 (Network Segmentation)
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                                중요 정보가 있는 시스템은 IP로 접근을 엄격히 제한하며, 4가지 망으로 분리하여 모니터링합니다. 장애 시 비상 접속 절차를 제공합니다.
                            </p>

                            <div className="space-y-4">
                                {/* Guest */}
                                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <div className="p-3 bg-gray-100 dark:bg-slate-800 rounded-lg">
                                        <Wifi size={24} className="text-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">게스트망 <span className="text-xs font-normal text-slate-500 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full ml-2">무선</span></h4>
                                        <p className="text-sm text-slate-500">외부인 방문 및 개인 기기용 인터넷 (사내 시스템 접근 차단)</p>
                                    </div>
                                </div>

                                {/* Internet */}
                                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                        <Globe size={24} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">인터넷망 <span className="text-xs font-normal text-slate-500 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full ml-2">유/무선</span></h4>
                                        <p className="text-sm text-slate-500">임직원 일반 업무 및 인터넷 검색용 (SaaS 이용)</p>
                                    </div>
                                </div>

                                {/* R&D */}
                                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                        <Terminal size={24} className="text-purple-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">연구/개발망 <span className="text-xs font-normal text-slate-500 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full ml-2">FortiClient</span></h4>
                                        <p className="text-sm text-slate-500">개발 업무 및 클라우드 리소스 접근 (내부망/인터넷망과 분리)</p>
                                    </div>
                                </div>

                                {/* Internal */}
                                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 border-l-red-500">
                                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                        <Server size={24} className="text-red-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">내부망 <span className="text-xs font-normal text-slate-500 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full ml-2">유선</span></h4>
                                        <p className="text-sm text-slate-500">서버, DB, K8S 시스템 및 관리자 사이트 (최고 수준 보안 통제)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* #4 Phased Implementation */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-600 dark:text-pink-400">
                                <Layers size={32} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                Finance ZeroTrust Security #4 단계별 구현
                            </h2>
                        </div>

                        {/* Single Auth Solution */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <Shield className="text-slate-500" /> 단일 인증 솔루션 (Single Auth)
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                FZT 적용을 위해 <strong>Okta</strong>를 단일 인증 솔루션으로 사용합니다. 강력한 보안이 필요한 서비스는 2차 인증(MFA) 및 재인증을 요구할 수 있습니다.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300">
                                    Okta SSO
                                </span>
                                <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300">
                                    Okta Verify (MFA)
                                </span>
                            </div>
                        </div>

                        {/* Implementation Phases */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Okta 적용 단계 (Phased Rollout)</h3>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Preparation */}
                                <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-700">
                                        <h4 className="text-6xl font-black opacity-20">0</h4>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 relative z-10">준비 단계</h4>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 relative z-10">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-slate-400 mt-0.5 shrink-0" />
                                            <span>단말기 Okta Verify 설치 (Mobile/Desktop)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-slate-400 mt-0.5 shrink-0" />
                                            <span>MDM 에이전트 설치 및 기기 등록</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Phase 1 */}
                                <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-blue-200 dark:border-blue-900 shadow-sm ring-1 ring-blue-100 dark:ring-blue-900">
                                    <div className="absolute top-6 right-6 text-blue-100 dark:text-blue-900">
                                        <h4 className="text-6xl font-black opacity-30">1</h4>
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4 relative z-10">1단계 : 공용 서비스</h4>
                                    <p className="text-xs text-slate-500 mb-3 relative z-10">Slack, Notion, Gmail 등 전사 공용 SaaS</p>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 relative z-10">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-blue-500 mt-0.5 shrink-0" />
                                            <span><strong>지급된 기기</strong>에서만 로그인 허용</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-blue-500 mt-0.5 shrink-0" />
                                            <span>개인 PC/노트북 접속 차단</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Phase 2 */}
                                <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-700">
                                        <h4 className="text-6xl font-black opacity-20">2</h4>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 relative z-10">2단계 : 부서별 업무</h4>
                                    <p className="text-xs text-slate-500 mb-3 relative z-10">Admin, Figma, Grafana 등 전문 SaaS</p>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 relative z-10">
                                        <li className="flex items-start gap-2">
                                            <Square size={16} className="text-slate-400 mt-0.5 shrink-0" />
                                            <span>부서별 특화 시스템 연동 확장</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Square size={16} className="text-slate-400 mt-0.5 shrink-0" />
                                            <span>민감 데이터 취급 서비스 통제 강화</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Target System List */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <List size={20} className="text-slate-500" /> 단계별 적용 대상 시스템 (Target Systems)
                            </h4>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">준비 단계</h5>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                        <li>Apple Business Manager</li>
                                        <li>Kandji (MacOS MDM)</li>
                                        <li>Intune (Windows MDM)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-3 border-b border-blue-200 dark:border-blue-900 pb-2">1단계 (Core)</h5>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                        <li>Google Workspace</li>
                                        <li>Slack (Messenger)</li>
                                        <li>Notion (Wiki)</li>
                                        <li>FortiClient (ZTNA)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">2단계 (Expansion)</h5>
                                    <div className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                                        <ul className="space-y-2">
                                            <li>AWS Identity Center</li>
                                            <li>Github / Gitlab</li>
                                            <li>Figma / Adobe</li>
                                            <li>Jira / Confluence</li>
                                            <li>Grafana / QueryPie</li>
                                            <li>Jenkins / Vercel</li>
                                            <li>ChatGPT / Claude</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main >
    );
}
