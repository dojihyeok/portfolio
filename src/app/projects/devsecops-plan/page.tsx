```javascript
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, AlertTriangle, Clock, XCircle, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { TIMELINE_DATA, Task } from "./data";

// --- Date Helpers (No external libs) ---
const DAY_MS = 1000 * 60 * 60 * 24;

function parseDate(str: string) {
    return new Date(str + "T00:00:00");
}

function getDaysDiff(start: Date, end: Date) {
    return Math.round((end.getTime() - start.getTime()) / DAY_MS);
}

function addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function formatMonth(date: Date) {
    return date.toLocaleString("ko-KR", { year: "numeric", month: "long" });
}

function getWeekNumber(date: Date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

// --- Layout Logic ---
const DAY_WIDTH = 40; // Pixel width per day
const ROW_HEIGHT = 48; // Height of each task row
const HEADER_HEIGHT = 60;
const SIDEBAR_WIDTH = 0; // No sidebar, full gantt

type GanttTask = Task & {
    row: number;
    startObj: Date;
    endObj: Date;
    duration: number; // in days
    offset: number; // in days from global start
};

function layoutTasks(tasks: Task[]): { layout: GanttTask[]; totalRows: number; globalStart: Date; globalEnd: Date } {
    if (tasks.length === 0) return { layout: [], totalRows: 0, globalStart: new Date(), globalEnd: new Date() };

    // 1. Convert dates and sort by start date
    const parsedTasks = tasks.map(t => ({
        ...t,
        startObj: parseDate(t.startDate),
        endObj: parseDate(t.endDate),
    })).sort((a, b) => a.startObj.getTime() - b.startObj.getTime());

    // 2. Determine global range
    let minDate = parsedTasks[0].startObj;
    let maxDate = parsedTasks[0].endObj;

    parsedTasks.forEach(t => {
        if (t.startObj < minDate) minDate = t.startObj;
        if (t.endObj > maxDate) maxDate = t.endObj;
    });

    // Pad global range (1 month buffer)
    const globalStart = new Date(minDate);
    globalStart.setDate(1); // Start of month
    
    // 3. Assign rows (Simple greedy packing)
    const rows: Date[] = []; // End date of the last task in each row
    const layout: GanttTask[] = [];

    parsedTasks.forEach(t => {
        const duration = getDaysDiff(t.startObj, t.endObj) + 1; // Inclusive
        const offset = getDaysDiff(globalStart, t.startObj);
        
        // Find first available row
        let rowIndex = -1;
        for (let i = 0; i < rows.length; i++) {
            // Check if this row is free after the last task (+ gap)
             // Buffer of 2 days for visual separation
            if (rows[i].getTime() + (2 * DAY_MS) < t.startObj.getTime()) {
                rowIndex = i;
                break;
            }
        }

        if (rowIndex === -1) {
            // New row needed
            rowIndex = rows.length;
            rows.push(t.endObj);
        } else {
            // Update row end time
            rows[rowIndex] = t.endObj;
        }

        layout.push({
            ...t,
            row: rowIndex,
            duration,
            offset,
        });
    });

    return { layout, totalRows: rows.length, globalStart, globalEnd: maxDate }; // Returning maxDate isn't strictly needed if we calculate from header
}

// --- Components ---

function StatusBadge({ status }: { status: string }) {
    let colorClass = "bg-slate-600 text-slate-100";
    if (status === "Done") colorClass = "bg-green-600/90 text-white";
    else if (status === "In Progress") colorClass = "bg-blue-600/90 text-white";
    else if (status.includes("Delayed")) colorClass = "bg-amber-600/90 text-white";
    else if (status.includes("Failed")) colorClass = "bg-red-600/90 text-white";
    else if (status === "Not Started") colorClass = "bg-slate-500/90 text-white";

    return (
        <span className={`text - [10px] px - 1.5 py - 0.5 rounded flex items - center gap - 1 shrink - 0 ${ colorClass } `}>
            {status}
        </span>
    );
}

export default function DevSecOpsPlanPage() {
    // Client-side only rendering to avoid date mismatches
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const { layout, totalRows, globalStart, globalEnd } = useMemo(() => layoutTasks(TIMELINE_DATA), []);

    if (!mounted) return <div className="min-h-screen bg-[#1e1e1e]" />;

    // Generate Month Headers
    const months = [];
    const current = new Date(globalStart);
    // Extend until end date + buffer
    const endDate = new Date(globalEnd || new Date());
    endDate.setMonth(endDate.getMonth() + 2);

    while (current < endDate) {
        months.push(new Date(current));
        current.setMonth(current.getMonth() + 1);
    }

    const totalWidth = getDaysDiff(globalStart, endDate) * DAY_WIDTH;
    const containerHeight = (totalRows * ROW_HEIGHT) + HEADER_HEIGHT + 100;

    return (
        <main className="min-h-screen bg-[#191919] text-white overflow-hidden flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 bg-[#1e1e1e] border-b border-[#333] z-50 shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <h1 className="text-lg font-bold">DevSecOps 2025 Plan</h1>
                </div>
                <div className="flex gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-[#333333] border border-gray-600"></span>
                        <span>Task</span>
                    </div>
                </div>
            </header>

            {/* Gantt Scroll Area */}
            <div className="flex-1 overflow-auto relative scrollbar-track-[#191919] scrollbar-thumb-[#333]">
                <div 
                    className="relative"
                    style={{ width: totalWidth, height: containerHeight }}
                >
                    {/* 1. Header Row (Months) */}
                    <div className="absolute top-0 left-0 flex h-[60px] border-b border-[#333] bg-[#1e1e1e] z-20">
                        {months.map((m, i) => {
                            const daysInMonth = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
                            const width = daysInMonth * DAY_WIDTH;
                            return (
                                <div 
                                    key={i} 
                                    className="flex items-center justify-center border-r border-[#333] text-sm font-medium text-gray-300"
                                    style={{ width }}
                                >
                                    {m.getMonth() === 0 ? m.getFullYear() + "년 " : ""}{m.getMonth() + 1}월
                                </div>
                            );
                        })}
                    </div>

                    {/* 2. Grid Background */}
                    <div className="absolute top-[60px] left-0 bottom-0 flex z-0">
                        {months.map((m, i) => {
                             const daysInMonth = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
                             // Render day or week lines could be too heavy, just month lines for now
                             return (
                                <div 
                                    key={i}
                                    className="border-r border-[#2a2a2a] h-full"
                                    style={{ width: new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate() * DAY_WIDTH }}
                                />
                             )
                        })}
                    </div>

                    {/* 3. Tasks */}
                    <div className="absolute top-[80px] left-0 w-full z-10">
                        {layout.map((task) => (
                            <motion.div
                                key={task.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: task.row * 0.02 }}
                                className="absolute rounded-md bg-[#2d2d2d] border border-[#444] shadow-sm flex items-center px-3 gap-2 overflow-hidden hover:bg-[#3d3d3d] hover:border-gray-500 hover:z-50 transition-colors cursor-default group"
                                style={{
                                    left: task.offset * DAY_WIDTH,
                                    top: task.row * ROW_HEIGHT,
                                    width: Math.max(task.duration * DAY_WIDTH, 40), // Min width
                                    height: ROW_HEIGHT - 8, // Gap
                                }}
                            >
                                <span className="text-xs font-bold text-gray-200 whitespace-nowrap truncate">
                                    {task.title}
                                </span>
                                <StatusBadge status={task.status} />
                                
                                {/* Tooltip on Hover */}
                                <div className="hidden group-hover:block absolute top-full left-0 mt-2 p-3 bg-black/90 border border-gray-700 rounded shadow-xl z-[100] w-64 whitespace-normal">
                                    <h4 className="font-bold text-white mb-1">{task.title}</h4>
                                    <div className="text-xs text-gray-400 space-y-1">
                                        <p>기간: {task.startDate} ~ {task.endDate}</p>
                                        <p>상태: <span className="text-white">{task.status}</span></p>
                                        <p>팀: {task.teams.join(", ")}</p>
                                        <p>담당자: {task.assignees.join(", ")}</p>
                                        {task.note && <p className="text-amber-400 mt-2">Note: {task.note}</p>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Today Line (if within range) */}
                    {/* Optional: Add a red line for Today */}
                </div>
            </div>
            
            <style jsx global>{`
                :: -webkit - scrollbar {
    height: 10px;
    width: 10px;
    background: #191919;
}
                :: -webkit - scrollbar - thumb {
    background: #333;
    border - radius: 5px;
}
                :: -webkit - scrollbar - thumb:hover {
    background: #444;
}
`}</style>
        </main>
    );
}
```
