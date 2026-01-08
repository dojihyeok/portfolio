"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, CheckCircle, Shield, Server, Lock, FileText, Database, Globe, Smartphone, RefreshCw, AlertTriangle, Cloud, LayoutList, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Modal } from "@/components/Modal";
import { DetailAccessControl } from "./details/DetailAccessControl";
import { DetailDevSecOps } from "./details/DetailDevSecOps";
import { DetailOperations } from "./details/DetailOperations";
import { DetailCompliance } from "./details/DetailCompliance";
import { DetailNetwork } from "./details/DetailNetwork";
import { GanttChart } from "./GanttChart";
import { TaskList } from "./TaskList";
import { TIMELINE_DATA } from "./data";

export default function DevSecOpsPlan() {
    const [selectedDetail, setSelectedDetail] = useState<number | null>(null);
    const [viewMode, setViewMode] = useState<'list' | 'gantt'>('gantt');

    const renderDetailContent = () => {
        switch (selectedDetail) {
            case 1: return <DetailAccessControl />;
            case 2: return <DetailDevSecOps />;
            case 3: return <DetailOperations />;
            case 4: return <DetailCompliance />;
            case 5: return <DetailNetwork />;
            default: return null;
        }
    };

    const getModalTitle = () => {
        switch (selectedDetail) {
            case 1: return "1. 접근통제 (Access Control)";
            case 2: return "2. IT 도입 및 개발 (DevSecOps)";
            case 3: return "3. 운영관리 (Operations Security)";
            case 4: return "4. 전자금융 & 컴플라이언스";
            case 5: return "5. 망분리 및 네트워크 보안";
            default: return "";
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Header / Hero */}
            <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-24 pb-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Portfolio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight break-keep">
                            <a
                                href="https://cat-silica-24e.notion.site/1905807b4ad680e99d21e86055d720b0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex flex-wrap items-center gap-3 hover:text-blue-600 transition-colors"
                            >
                                <span className="border-b-2 border-transparent group-hover:border-blue-600/30 transition-all">
                                    전자금융 기반시설 관리체계 <br className="md:hidden" /> 자체 점검 후 개선 계획 수립
                                </span>
                                <ExternalLink strokeWidth={2.5} size={32} className="text-blue-500 flex-shrink-0" />
                            </a>

                            <span className="block mt-5 text-2xl md:text-3xl text-slate-500 dark:text-slate-400 font-normal">
                                DevSecOps & Compliance Roadmap 2025
                            </span>
                        </h1>

                        {/* Meta Information Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">기간</p>
                                    <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm">2025.01.27 ~ 02.21</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                                    <User size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">담당자</p>
                                    <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm">이윤혁 (Security Lead)</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                                    <CheckCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">진행상태</p>
                                    <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm">계획 수립 완료</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Team</p>
                                    <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Security Squad</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
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

            <div className="max-w-4xl mx-auto px-4 mt-8 space-y-4">

                {/* 1. Core Categories */}
                <Section title="1. 핵심 개선 영역 (Core Areas)" className="py-8 md:py-12">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg border border-blue-100 dark:border-blue-800/30 inline-flex items-center">
                        <span className="mr-2">💡</span>
                        각 항목 카드를 클릭하면 상세 실행 계획(Action Items) 및 세부 평가 내용을 확인하실 수 있습니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ImprovementCard
                            icon={<Shield />}
                            title="1. 접근통제 (Access Control)"
                            desc="통합 계정 관리, 망분리 대체 통제, 중요 작업 승인 절차 강화"
                            onClick={() => setSelectedDetail(1)}
                        />
                        <ImprovementCard
                            icon={<RefreshCw />}
                            title="2. IT 도입 및 개발 (DevSecOps)"
                            desc="시큐어코딩, 형상관리, 보안성 심의 절차 내재화"
                            onClick={() => setSelectedDetail(2)}
                        />
                        <ImprovementCard
                            icon={<Server />}
                            title="3. 운영관리 (Operations Security)"
                            desc="서버/DB 접근제어, 로그 통합, 패치 관리 자동화"
                            onClick={() => setSelectedDetail(3)}
                        />
                        <ImprovementCard
                            icon={<FileText />}
                            title="4. 전자금융 & 컴플라이언스"
                            desc="전자금융감독규정 준수, 비상계획, 외부 주문 관리"
                            onClick={() => setSelectedDetail(4)}
                        />
                        <ImprovementCard
                            icon={<Globe />}
                            title="5. 망분리 및 네트워크 보안"
                            desc="제로트러스트 기반 망분리 대체 통제 및 아키텍처 수립"
                            onClick={() => setSelectedDetail(5)}
                        />
                    </div>
                </Section>

                {/* 2. Detailed Measures Plan */}
                <Section title="2. 2025년 관리체계 보안대책 요약" className="py-8 md:py-12">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                                    <tr>
                                        <th className="px-6 py-4 w-1/4">구분</th>
                                        <th className="px-6 py-4">보안 대책 (Action Item)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <MeasureRow category="1. 접근통제" badge="yellow" title="통합 계정 관리 방안 (IAM)" />
                                    <MeasureRow category="1. 접근통제" badge="yellow" title="망분리 대체 통제 수립 (Zero Trust)" />
                                    <MeasureRow category="1. 접근통제" badge="yellow" title="전산원장 변경 통제 절차 수립" />
                                    <MeasureRow category="1. 접근통제" badge="yellow" title="통합 로그 시스템 구축" />
                                    <MeasureRow category="1. 접근통제" badge="yellow" title="이용자 비밀번호 규칙 및 웹 취약점 점검 개선" />
                                    <MeasureRow category="1. 접근통제" badge="yellow" title="중요 작업 수행 시 책임자 이중 확인 프로세스" />
                                    <MeasureRow category="1. 접근통제" badge="yellow" title="사고위험도 높은 거래 기준 수립 및 승인 절차" />

                                    <MeasureRow category="2. IT 도입 개발" badge="red" title="IT 투자 및 비용 관리 지침" />
                                    <MeasureRow category="2. IT 도입 개발" badge="red" title="정보처리시스템 감리 지침" />
                                    <MeasureRow category="2. IT 도입 개발" badge="red" title="직무분리 및 프로그램 통제 (개발보안 지침)" />
                                    <MeasureRow category="2. IT 도입 개발" badge="red" title="보안성 심의 절차 수립" />

                                    <MeasureRow category="3. 운영관리" badge="blue" title="서버/DB 접근제어 시스템 고도화" />
                                    <MeasureRow category="3. 운영관리" badge="blue" title="AWS 및 VPN 접속 IP/단말기 통제 정책" />
                                    <MeasureRow category="3. 운영관리" badge="blue" title="중요 단말기 지정 및 보안 관리 (백신, 매체제어)" />
                                    <MeasureRow category="3. 운영관리" badge="blue" title="정보보호 점검의 날 및 침해사고 대응 훈련" />
                                    <MeasureRow category="3. 운영관리" badge="blue" title="자산 관리 및 패치 관리 자동화 (MDM/Kandji)" />
                                    <MeasureRow category="3. 운영관리" badge="blue" title="무선 네트워크(WIPS) 및 비인가 단말 통제(NAC)" />

                                    <MeasureRow category="4. 전자금융 등" badge="default" title="개인정보 보호 정책 및 지침 개정" />
                                    <MeasureRow category="4. 전자금융 등" badge="default" title="비상지원인력 연수 및 모의훈련" />
                                    <MeasureRow category="4. 전자금융 등" badge="default" title="SIEM (통합 보안 관제) 체계 구축" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Section>

                {/* 3. Solutions Roadmap */}
                <Section title="3. 2025년 도입 솔루션" className="py-8 md:py-12">
                    <p className="text-slate-600 dark:text-slate-400 mb-6 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                        💡 예상 투자 규모: <span className="font-bold text-slate-900 dark:text-white">약 1억 5천만원 + α</span> (AWS 리소스 및 미정 견적 제외)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SolutionCard
                            title="1. 보안관제"
                            current="사이버원 (912만원)"
                            plan="기존 유지 (재위탁 해결)"
                            cost="약 912만원/년"
                            tag="Operations"
                        />
                        <SolutionCard
                            title="2. 기반시설 취약점 점검"
                            current="-"
                            plan="서버, DB, NW, AP 전체 점검"
                            cost="견적 확인 필요"
                            tag="Compliance"
                        />
                        <SolutionCard
                            title="3. 홈페이지 취약점 점검"
                            current="모인 Web/App (600만원)"
                            plan="연 2회 정기 수행"
                            cost="약 600만원+/년"
                        />
                        <SolutionCard
                            title="4. DB 접근제어 (DAC)"
                            current="DB Safer (1840만원)"
                            plan="QueryPie DAC (10 Core)"
                            cost="약 1000만원/년"
                            tag="Access Control"
                        />
                        <SolutionCard
                            title="5. 서버 접근제어 (SAC)"
                            current="-"
                            plan="QueryPie SAC (10 User)"
                            cost="약 1000만원/년"
                            tag="Access Control"
                        />
                        <SolutionCard
                            title="6. K8S 접근제어 (KAC)"
                            current="-"
                            plan="QueryPie KAC (10 User)"
                            cost="약 1000만원/년"
                            tag="Access Control"
                        />
                        <SolutionCard
                            title="7. Antivirus & PC 개인정보"
                            current="엑소스피어 / 지란지교"
                            plan="엑소스피어 통합"
                            cost="약 300만원/년"
                            tag="Endpoint"
                        />
                        <SolutionCard
                            title="8. MDM for Windows"
                            current="MS365 Basic"
                            plan="Intune (MS365 Premium)"
                            cost="약 2575만원 (구축포함)"
                            tag="Endpoint"
                        />
                        <SolutionCard
                            title="9. MDM for Mac"
                            current="-"
                            plan="Kandji (40 Device)"
                            cost="약 600만원/년"
                            tag="Endpoint"
                        />
                        <SolutionCard
                            title="10. APT / ZeroTrust"
                            current="-"
                            plan="Forti ZTNA"
                            cost="약 1100만원 (구축포함)"
                            tag="Network"
                        />
                        <SolutionCard
                            title="11. 비인가 단말 통제 (Switch)"
                            current="-"
                            plan="Forti Switch (4대)"
                            cost="약 850만원 (구매)"
                            tag="Network"
                        />
                        <SolutionCard
                            title="12. 비인가 단말 통제 (AP)"
                            current="-"
                            plan="Forti AP"
                            cost="약 600만원 (구매)"
                            tag="Network"
                        />
                        <SolutionCard
                            title="13. 업무용 망분리"
                            current="-"
                            plan="Menlo or 소캠"
                            cost="약 2400~4200만원"
                            tag="Network"
                        />
                        <SolutionCard
                            title="14. 보안 USB"
                            current="-"
                            plan="도입 검토 중"
                            cost="미정"
                        />
                        <SolutionCard
                            title="15. 통합 계정 관리 (IAM)"
                            current="-"
                            plan="Okta (75 User)"
                            cost="약 1626만원 ($11,340)"
                            tag="Identity"
                        />
                        <SolutionCard
                            title="16. WIPS (무선침입방지)"
                            current="-"
                            plan="추후 검토 (매체제어 우선)"
                            cost="-"
                        />
                        <SolutionCard
                            title="17. DDoS 방어"
                            current="-"
                            plan="AWS Shield"
                            cost="약 450만원/년"
                            tag="Cloud"
                        />
                        <SolutionCard
                            title="18. AWS Network Firewall"
                            current="-"
                            plan="AWS NFW 도입"
                            cost="Usage Base"
                            tag="Cloud"
                        />
                        <SolutionCard
                            title="19. SIEM (통합로그분석)"
                            current="-"
                            plan="OpenSearch (Splunk 대안)"
                            cost="AWS Resource"
                            tag="Monitoring"
                        />
                    </div>
                </Section>



                {/* 4. Annual Plan */}
                <Section title="4. DevSecOps 연간 계획 수립" className="py-8 md:py-12 !max-w-none !w-full px-2 md:px-4">

                    {/* Toggle Switch */}
                    <div className="flex justify-end mb-6 px-4 md:px-0">
                        <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg inline-flex">
                            <button
                                onClick={() => setViewMode('gantt')}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'gantt'
                                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                                    : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
                                    }`}
                            >
                                <BarChart3 size={16} />
                                <span className="hidden sm:inline">타임라인 (Gantt)</span>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'list'
                                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                                    : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
                                    }`}
                            >
                                <LayoutList size={16} />
                                <span className="hidden sm:inline">리스트 (Table)</span>
                            </button>
                        </div>
                    </div>

                    {viewMode === 'gantt' ? (
                        <div className="px-1 md:px-2">
                            <GanttChart data={TIMELINE_DATA} />
                        </div>
                    ) : (
                        <TaskList data={TIMELINE_DATA} />
                    )}
                </Section>
            </div>

            {/* Detail Modal */}
            <Modal
                isOpen={!!selectedDetail}
                onClose={() => setSelectedDetail(null)}
                title={getModalTitle()}
            >
                {renderDetailContent()}
            </Modal>
        </main >
    );
}

function ImprovementCard({ icon, title, desc, onClick }: { icon: any, title: string, desc: string, onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
        >
            <div className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 w-fit p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug mb-3">{desc}</p>
                <div className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-semibold flex items-center gap-1 transition-colors">
                    상세 내용 보기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    )
}

function MeasureRow({ category, badge, title }: { category: string, badge: string, title: string }) {
    const badgeColors: { [key: string]: string } = {
        yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
        red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
        default: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
    };

    return (
        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <td className="px-6 py-4 font-medium">
                <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-medium ${badgeColors[badge] || badgeColors.default}`}>
                    {category}
                </span>
            </td>
            <td className="px-6 py-4 text-slate-700 dark:text-slate-300 font-medium">{title}</td>
        </tr>
    )
}

function SolutionCard({ title, current, plan, cost, tag }: { title: string, current: string, plan: string, cost: string, tag?: string }) {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            {tag && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl">
                    {tag}
                </div>
            )}
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                {title}
            </h3>
            <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="text-slate-500 dark:text-slate-400">현재 상태</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-right max-w-[60%]">{current}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="text-slate-500 dark:text-slate-400">도입 계획</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-right max-w-[60%]">{plan}</span>
                </div>
                <div className="flex justify-between pt-1">
                    <span className="text-slate-500 dark:text-slate-400">예산 (연간)</span>
                    <span className="text-slate-900 dark:text-white font-bold">{cost}</span>
                </div>
            </div>
        </div>
    )
}
