"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Shield, Lock, FileCode, Layout, Cloud,
    ArrowLeft, CheckCircle, Terminal,
    Server, Share2, GitBranch
} from 'lucide-react';
import Link from 'next/link';

export default function ZeroTrustPage() {
    const [lang, setLang] = useState<'ko' | 'en'>('ko');

    const content = {
        ko: {
            title: <>Identity 중심의<br /><span className="text-indigo-600 dark:text-indigo-400">Zero Trust 아키텍처</span> 구축</>,
            summary: <>전통적인 VPN 중심의 망분리 환경을 <span className="font-bold text-slate-900 dark:text-slate-200">Identity(Okta) 기반의 Zero Trust 모델</span>로 마이그레이션한 엔지니어링 프로젝트입니다. 사용자 경험을 저해하는 보안 통제를 제거하고, 코드 기반(IaC)으로 관리되는 인프라를 설계했습니다.</>,
            architecture: {
                title: "시스템 아키텍처",
                caption: "* Hybrid Work Environment와 Cloud Resource를 Identity Layer로 중개하는 구조"
            },
            background: {
                title: "프로젝트 배경",
                desc: <>금융 규제 준수를 위해 도입된 망분리(VDI) 환경은 개발자 생산성을 심각하게 저하시키고 있었습니다. 특히, AWS와 같은 클라우드 리소스 접근 시에도 VDI를 거쳐야 하는 병목 현상이 발생하여, <span className="font-bold text-slate-900 dark:text-slate-200">"보안성을 유지하면서도 로컬 수준의 개발 경험을 제공"</span>하는 것이 핵심 과제였습니다.</>
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
                        title: "인프라의 코드화 (IaC)",
                        desc: "Okta 정책, AWS 권한, Zscaler(ZIA/ZPA) 설정 등 모든 보안 구성을 Terraform으로 코드로 정의했습니다. 이를 통해 보안 정책의변경 이력을 Git으로 관리하고, 휴먼 에러를 제거했습니다.",
                        icon: <GitBranch size={20} />
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
            iac: {
                title: "구현 상세 (IaC)",
                desc: "실제 프로젝트에서 Okta와 AWS SSO를 연동하기 위해 작성했던 Terraform 코드의 일부입니다. GUI 설정을 배제하고 코드로만 정책을 선언했습니다."
            },
            impact: {
                title: "엔지니어링 성과",
                items: [
                    { label: "VPN Client", value: "0", desc: <>VPN 클라이언트 완전 제거 및<br />Zscaler ZPA 전환</> },
                    { label: "IaC Coverage", value: "99%", desc: <>모든 보안 정책의<br />코드화 및 버전 관리 달성</> },
                    { label: "ISO 27001", value: "Certified", desc: <>Zero Trust 모델을 기반으로<br />글로벌 보안 인증 획득</> }
                ]
            }
        },
        en: {
            title: <>Identity-Centric<br /><span className="text-indigo-600 dark:text-indigo-400">Zero Trust Architecture</span> Implementation</>,
            summary: <>An engineering project migrating a traditional VPN-centric network separation environment to an <span className="font-bold text-slate-900 dark:text-slate-200">Identity (Okta) & SSE (Zscaler) based Zero Trust model</span>. Eliminated security controls that hindered user experience and designed infrastructure managed by code (IaC).</>,
            architecture: {
                title: "System Architecture",
                caption: "* Structure mediating Hybrid Work Environment and Cloud Resources via Identity Layer"
            },
            background: {
                title: "Project Background",
                desc: <>The network separation (VDI) environment introduced for financial compliance was severely degrading developer productivity. In particular, accessing cloud resources like AWS required going through VDI, causing bottlenecks. The key challenge was to <span className="font-bold text-slate-900 dark:text-slate-200">"provide a local-level development experience while maintaining security"</span>.</>
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
                        title: "Infrastructure as Code",
                        desc: "Defined all security configurations such as Okta policies, AWS permissions, and Zscaler settings (ZIA/ZPA) as code using Terraform. This allowed managing security policy change history with Git.",
                        icon: <GitBranch size={20} />
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
            iac: {
                title: "Implementation Detail (IaC)",
                desc: "Part of the Terraform code written to integrate Okta and AWS SSO in the actual project. Excluded GUI settings and declared policies only with code."
            },
            impact: {
                title: "Engineering Impact",
                items: [
                    { label: "VPN Client", value: "Zero", desc: <>Complete removal of VPN clients<br />Switched to Zscaler ZPA</> },
                    { label: "IaC Coverage", value: "99%", desc: <>Codification and version control<br />of all security policies</> },
                    { label: "ISO 27001", value: "Certified", desc: <>Global security certification<br />based on Zero Trust model</> }
                ]
            }
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
                    {["Okta", "AWS", "Terraform", "Zscaler", "Jamf", "Splunk"].map((tech) => (
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

            {/* Engineering Context & Implementation */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* 1. Background */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t.background.title}</h3>
                        </div>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>{t.background.desc}</p>
                        </div>
                    </div>

                    {/* 2. Key Architecture Decisions */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                            {t.decisions.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {t.decisions.items.map((item, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <div className={`p-2 w-fit rounded-lg mb-4 ${idx === 0 ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600' :
                                        idx === 1 ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                                            idx === 2 ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' :
                                                'bg-orange-100 dark:bg-orange-900/30 text-orange-600'
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Implementation Code */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <FileCode size={24} />
                            {t.iac.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            {t.iac.desc}
                        </p>

                        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-[#3e3e3e]">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-xs text-slate-400 ml-2 font-mono">main.tf</span>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="text-xs md:text-sm font-mono leading-relaxed text-[#d4d4d4]">
                                    {`// AWS IAM Identity Center (Successor to AWS SSO) Configuration
resource "okta_app_saml" "aws_sso" {
  label       = "AWS IAM Identity Center"
  preconfigured_app = "aws_sso"
  
  // Map Okta Attributes to SAML Assertions
  attribute_statements {
    type      = "EXPRESSION"
    name      = "Department"
    namespace = "urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
    values    = ["user.department"]
  }

  // Enforce Phishing-Resistant MFA (FIDO2/WebAuthn)
  authentication_policy = okta_app_sign_on_policy.phishing_resistant.id
  
  // Assign to Engineering Group Key
  groups = [data.okta_group.engineering.id]
}

// Just-in-Time Access Rule
resource "okta_policy_rule_signon" "require_device_trust" {
  policy_id = okta_policy_signon.global.id
  name      = "Require Managed Device"
  
  access = "ALLOW"
  
  // Verify Device Context via MDM signal
  device_assurance {
    platform = "MACOS"
    disk_encryption = true
    screen_lock = true
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* 4. Outcomes */}
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                            {t.impact.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {t.impact.items.map((item, idx) => (
                                <div key={idx} className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                                    <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.value}</div>
                                    <div className="font-bold text-slate-800 dark:text-slate-200">{item.label}</div>
                                    <p className="text-xs text-slate-500 mt-2">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 text-center border-t border-slate-100 dark:border-slate-800">
                <p className="text-slate-500 mb-6 font-mono text-sm">Want to look into the code?</p>
                <Link href="https://github.com/yunhyeok" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg hover:bg-slate-800 transition-colors">
                    <Share2 size={18} />
                    View More Projects
                </Link>
            </section>
        </main>
    );
}
