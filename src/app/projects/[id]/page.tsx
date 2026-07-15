"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Shield, Target, Cpu, Book, FileText, Terminal, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/projectsData";

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const project = projectsData[params.id];

    if (!project) {
        notFound();
    }

    const { title, category, description, tags, details } = project;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 w-full max-w-[100vw] overflow-hidden">
            {/* Header / Hero */}
            <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-24 pb-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/security"
                        className="inline-flex items-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 mb-6 transition-colors font-medium"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Security Portfolio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                            {category}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight break-keep">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 break-keep">
                            {description}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Meta Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Target size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">역할</p>
                                    <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm">정보보안 리더 (CISO)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                    <Shield size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">소속 / 연도</p>
                                    <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm">MOIN / 2024.11 ~ Present</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-4 md:px-8 mt-12">
                <div className="grid grid-cols-1 gap-8">
                    {/* Goal & Selection Reason Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                <Target className="text-blue-500" size={20} />
                                프로젝트 추진 배경 및 목표
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line break-keep">
                                {details.goal}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                <Cpu className="text-indigo-500" size={20} />
                                솔루션 선정 이유
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line break-keep">
                                {details.selectionReason}
                            </p>
                        </motion.div>
                    </div>

                    {/* Requirements & Regulations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                <FileText className="text-emerald-500" size={20} />
                                도입 요구 기술 및 인프라
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {details.required.map((req) => (
                                    <span
                                        key={req}
                                        className="px-3 py-1.5 text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-lg border border-emerald-100 dark:border-emerald-900"
                                    >
                                        {req}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                <Shield className="text-rose-500" size={20} />
                                관련 법규 및 컴플라이언스
                            </h3>
                            {details.laws.length > 0 ? (
                                <ul className="space-y-2">
                                    {details.laws.map((law, index) => (
                                        <li key={index} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2 break-keep">
                                            <span className="text-rose-500 font-bold mt-0.5">•</span>
                                            {law}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-slate-400 dark:text-slate-500 text-sm italic">
                                    해당 사항 없음
                                </p>
                            )}
                        </motion.div>
                    </div>

                    {/* Detailed Script / Implementation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <Terminal className="text-slate-700 dark:text-slate-300" size={24} />
                            상세 설계 및 수행 내용
                        </h3>

                        {Array.isArray(details.script) && typeof details.script[0] === "string" ? (
                            <ul className="space-y-4">
                                {(details.script as string[]).map((step, index) => (
                                    <li key={index} className="flex gap-4 items-start bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-xs font-bold mt-0.5">
                                            {index + 1}
                                        </div>
                                        <p className="text-slate-700 dark:text-slate-200 text-sm font-medium leading-relaxed break-keep">
                                            {step}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="space-y-6">
                                {(details.script as { title: string; items: string[] }[]).map((group, groupIdx) => (
                                    <div key={groupIdx} className="border border-slate-150 dark:border-slate-800 rounded-2xl overflow-hidden">
                                        <div className="bg-slate-50 dark:bg-slate-800/50 px-5 py-3 border-b border-slate-150 dark:border-slate-800">
                                            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                                <Book size={16} className="text-blue-500" />
                                                {group.title}
                                            </h4>
                                        </div>
                                        <ul className="divide-y divide-slate-100 dark:divide-slate-800 px-5 py-2 bg-white dark:bg-slate-900">
                                            {group.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="py-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed break-keep flex items-start gap-2">
                                                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Results / Deliverables */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                        <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                            <Star size={24} />
                            기대 효과 및 수행 결과
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            {details.results.split("\n").map((result, index) => (
                                <li key={index} className="flex gap-3 items-start">
                                    <CheckCircle size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                                    <p className="text-slate-200 text-sm leading-relaxed font-medium break-keep">
                                        {result}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
