"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, CheckCircle2, Clock, AlertCircle, XCircle, MoreHorizontal, Users, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { TIMELINE_DATA, Task } from "./data";

function getStatusColor(status: Task["status"]) {
    switch (status) {
        case "Done":
        case "Hired":
            return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800";
        case "In Progress":
            return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800";
        case "Delayed":
            return "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800";
        case "Failed":
        case "Hiring Failed":
            return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800";
        case "Not Started":
            return "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700";
        default:
            return "bg-slate-100 text-slate-700 border-slate-200";
    }
}

function getStatusIcon(status: Task["status"]) {
    switch (status) {
        case "Done":
        case "Hired":
            return <CheckCircle2 size={14} />;
        case "In Progress":
            return <Clock size={14} />;
        case "Delayed":
            return <AlertTriangle size={14} />;
        case "Failed":
        case "Hiring Failed":
            return <XCircle size={14} />;
        case "Not Started":
            return <MoreHorizontal size={14} />;
        default:
            return <MoreHorizontal size={14} />;
    }
}

function getTeamBadgeColor(team: string) {
    switch (team) {
        case "Security":
            return "bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800";
        case "DevOps":
            return "bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800";
        case "Developer":
            return "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800";
        case "Audit":
            return "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800";
        default:
            return "bg-slate-50 text-slate-600 border-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
    }
}

// Group tasks by Month (YYYY-MM)
function groupTasksByMonth(tasks: Task[]) {
    const groups: { [key: string]: Task[] } = {};
    const sortedTasks = [...tasks].sort((a, b) => a.startDate.localeCompare(b.startDate));

    sortedTasks.forEach((task) => {
        const date = new Date(task.startDate);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`; // YYYY-MM
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(task);
    });

    return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
}

function formatMonthHeader(key: string) {
    const [year, month] = key.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export default function DevSecOpsPlanPage() {
    const groupedTasks = groupTasksByMonth(TIMELINE_DATA);

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="font-medium">Portfolio</span>
                    </Link>
                    <h1 className="font-semibold text-sm md:text-base">DevSecOps 2025 Plan</h1>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 md:px-8 pt-32 pb-20">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400"
                    >
                        2025 인력 및 업무 계획
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-slate-400"
                    >
                        DevSecOps 로드맵 및 주요보안 활동 타임라인
                    </motion.p>
                </div>

                <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-4 md:ml-12 pl-8 md:pl-12 space-y-16">
                    {groupedTasks.map(([monthKey, tasks], groupIndex) => (
                        <div key={monthKey} className="relative">
                            {/* Month Marker */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="absolute -left-[45px] md:-left-[61px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 dark:bg-white ring-4 ring-white dark:ring-slate-950 z-10"
                            >
                                <div className="w-2 h-2 rounded-full bg-white dark:bg-slate-900" />
                            </motion.div>

                            {/* Month Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-6 sticky top-20 z-20"
                            >
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-semibold shadow-sm border border-slate-200 dark:border-slate-700">
                                    {formatMonthHeader(monthKey)}
                                </span>
                            </motion.div>

                            {/* Tasks Grid */}
                            <div className="space-y-6">
                                {tasks.map((task, index) => (
                                    <motion.div
                                        key={task.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group relative bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex flex-col gap-3">
                                            {/* Header: Status & Teams */}
                                            <div className="flex flex-wrap items-center gap-2 justify-between">
                                                <div className="flex flex-wrap gap-2">
                                                    {task.teams.map((team) => (
                                                        <span key={team} className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${getTeamBadgeColor(team)}`}>
                                                            {team}
                                                        </span>
                                                    ))}
                                                </div>
                                                <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${getStatusColor(task.status)}`}>
                                                    {getStatusIcon(task.status)}
                                                    {task.status}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {task.title}
                                            </h3>

                                            {/* Meta Info */}
                                            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                                                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar size={14} className="text-slate-400" />
                                                        <span>{task.startDate} ~ {task.endDate}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                                    <Users size={14} className="mt-0.5 shrink-0 text-slate-400" />
                                                    <span className="leading-snug">{task.assignees.join(", ")}</span>
                                                </div>
                                            </div>

                                            {/* Note */}
                                            {task.note && (
                                                <div className="mt-1 flex items-start gap-2 text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                                                    <AlertCircle size={14} className="mt-0.5 shrink-0 text-amber-500" />
                                                    <p>{task.note}</p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-100 dark:border-slate-800">
                © 2025 DevSecOps Plan. Confidential.
            </footer>
        </main>
    );
}
