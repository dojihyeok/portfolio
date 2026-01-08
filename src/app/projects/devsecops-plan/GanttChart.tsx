"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Task } from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GanttChartProps {
    data: Task[];
}

export function GanttChart({ data }: GanttChartProps) {
    // 날짜 범위 설정 (2024년 11월 ~ 2026년 2월)
    const startDate = new Date("2024-11-01");
    const endDate = new Date("2026-02-28");
    const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;

    // 월별 헤더 생성
    const months = useMemo(() => {
        const result = [];
        let currentDate = new Date(startDate);

        for (let i = 0; i < totalMonths; i++) {
            result.push({
                year: currentDate.getFullYear(),
                month: currentDate.getMonth() + 1,
                label: `${currentDate.getMonth() + 1}월`,
                date: new Date(currentDate)
            });
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
        return result;
    }, []);

    // 태스크 위치 계산
    const getTaskPosition = (taskStart: string, taskEnd: string) => {
        const start = new Date(taskStart);
        const end = new Date(taskEnd);

        // 시작점이 전체 범위 이전이면 조정
        const effectiveStart = start < startDate ? startDate : start;

        const totalDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
        const startDiff = (effectiveStart.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
        const duration = (end.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60 * 24);

        const left = (startDiff / totalDays) * 100;
        const width = (duration / totalDays) * 100;

        return { left: `${left}%`, width: `${width}%` };
    };

    // 상태별 색상
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Done': return "bg-green-500/20 border-green-500 text-green-300";
            case 'In Progress': return "bg-blue-500/20 border-blue-500 text-blue-300";
            case 'Delayed': return "bg-orange-500/20 border-orange-500 text-orange-300";
            case 'Failed': case 'Hiring Failed': return "bg-red-500/20 border-red-500 text-red-300";
            default: return "bg-slate-500/20 border-slate-500 text-slate-300";
        }
    };

    // 상태 뱃지
    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Done': return <span className="text-[10px] px-1 bg-green-900/50 text-green-400 rounded border border-green-800">완료</span>;
            case 'In Progress': return <span className="text-[10px] px-1 bg-blue-900/50 text-blue-400 rounded border border-blue-800">진행중</span>;
            case 'Delayed': return <span className="text-[10px] px-1 bg-orange-900/50 text-orange-400 rounded border border-orange-800">지연</span>;
            case 'Failed': return <span className="text-[10px] px-1 bg-red-900/50 text-red-400 rounded border border-red-800">미달성</span>;
            case 'Hiring Failed': return <span className="text-[10px] px-1 bg-red-900/50 text-red-400 rounded border border-red-800">채용실패</span>;
            case 'Hired': return <span className="text-[10px] px-1 bg-purple-900/50 text-purple-400 rounded border border-purple-800 ml-1">채용완료</span>;
            case 'Not Started': return <span className="text-[10px] px-1 bg-slate-800 text-slate-400 rounded border border-slate-700 ml-1">시작전</span>;
            default: return null;
        }
    };

    // 연도 그룹화
    const yearGroups = useMemo(() => {
        const groups: { year: number, count: number }[] = [];
        let currentYear = months[0].year;
        let count = 0;

        months.forEach(m => {
            if (m.year !== currentYear) {
                groups.push({ year: currentYear, count });
                currentYear = m.year;
                count = 0;
            }
            count++;
        });
        groups.push({ year: currentYear, count });
        return groups;
    }, [months]);

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative h-[750px]">
            {/* 현재 시점 표시선 (Red Line) - 오늘 날짜 기준 */}
            {(() => {
                const today = new Date();
                const totalDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
                const todayDiff = (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
                const leftPos = (todayDiff / totalDays) * 100;

                if (leftPos >= 0 && leftPos <= 100) {
                    return (
                        <div
                            className="absolute top-0 bottom-0 w-[2px] bg-red-500/70 z-30 pointer-events-none"
                            style={{ left: `${leftPos}%` }}
                        >
                            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                        </div>
                    );
                }
                return null;
            })()}

            <div className="overflow-x-auto custom-scrollbar h-full">
                <div className="min-w-[3000px] p-6 text-slate-300 h-full">

                    {/* Header: Years & Months */}
                    <div className="flex border-b border-slate-800 mb-2 pb-2">
                        {/* Years */}
                        <div className="absolute top-6 left-6 right-6 flex pointer-events-none opacity-50">
                            {/* This is a visual approximation for years, actual grid is below */}
                        </div>
                    </div>

                    <div className="grid grid-cols-[repeat(16,1fr)] gap-0 border-b border-slate-800 pb-2 mb-4 text-sm font-medium text-slate-400 sticky top-0 bg-slate-900/95 z-20 backdrop-blur-sm">
                        {months.map((m, i) => (
                            <div key={i} className="text-center border-l border-slate-800/50 py-1 relative group">
                                {m.month === 1 && (
                                    <span className="absolute -top-6 left-2 text-xs font-bold text-slate-500">{m.year}</span>
                                )}
                                <span className={m.month === 1 ? "text-slate-200 font-bold" : ""}>{m.month}월</span>
                            </div>
                        ))}
                    </div>

                    {/* Timeline Grid Background */}
                    <div className="relative h-[calc(100%-80px)]">
                        {/* Background Lines */}
                        <div className="absolute inset-0 flex">
                            {months.map((_, i) => (
                                <div key={i} className="flex-1 border-l border-slate-800/30 h-full"></div>
                            ))}
                        </div>

                        {/* Tasks */}
                        <div className="relative space-y-1 pt-2 z-10 font-sans">
                            {data.map((task, index) => {
                                const pos = getTaskPosition(task.startDate, task.endDate);
                                const isShort = parseFloat(pos.width) < 5; // 태스크가 너무 짧으면 텍스트를 옆으로 뺌

                                return (
                                    <motion.div
                                        key={task.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="relative h-6 group hover:z-50"
                                        style={{
                                            marginLeft: pos.left,
                                            width: pos.width
                                        }}
                                    >
                                        <div
                                            className={`
                                                h-full rounded-md border text-xs flex items-center px-2 cursor-pointer shadow-sm min-w-[20px] whitespace-nowrap overflow-hidden
                                                hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all
                                                ${getStatusColor(task.status)}
                                            `}
                                            title={`${task.title} (${task.startDate} ~ ${task.endDate})`}
                                        >
                                            <span className="truncate font-medium mr-2">{task.title}</span>
                                            <div className="hidden sm:flex ml-auto gap-1 opacity-80">
                                                {getStatusBadge(task.status)}
                                            </div>
                                        </div>

                                        {/* Hover Tooltip */}
                                        <div className="hidden group-hover:block absolute bottom-full left-0 mb-2 bg-slate-800 border border-slate-700 p-3 rounded-lg shadow-xl z-50 w-max max-w-[300px]">
                                            <div className="font-bold text-white mb-1">{task.title}</div>
                                            <div className="text-xs text-slate-400 mb-2">{task.startDate} ~ {task.endDate}</div>
                                            <div className="flex gap-2 mb-2">
                                                {getStatusBadge(task.status)}
                                                {task.teams.map(t => <span key={t} className="text-[10px] bg-slate-700 px-1 rounded text-slate-300">{t}</span>)}
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                담당: {task.assignees.join(", ")}
                                            </div>
                                            {task.note && (
                                                <div className="mt-2 text-xs text-yellow-500/80 border-t border-slate-700 pt-2">
                                                    ⚠️ {task.note}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-900/50 backdrop-blur text-xs text-slate-500 flex justify-between items-center">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> 완료</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> 진행중</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500"></span> 지연</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> 미달성/채용실패</span>
                </div>
                <div>
                    * 마우스 호버하여 상세 내용 확인 가능
                </div>
            </div>
        </div>
    );
}
