"use client";

import { User, AlertTriangle } from "lucide-react";
import { Task } from "./data";

export function TaskList({ data }: { data: Task[] }) {
    return (
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-8 pl-8 md:pl-12 py-4">
            {data.map((task) => (
                <div key={task.id} className="relative">
                    {/* Dot on the line */}
                    <div className={`absolute -left-[39px] md:-left-[55px] top-5 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 shadow-sm ring-4 ring-slate-50 dark:ring-slate-900 ${task.status === 'Done' ? 'bg-green-500' :
                        task.status === 'In Progress' ? 'bg-blue-500' :
                            task.status === 'Delayed' ? 'bg-orange-500' :
                                task.status === 'Failed' || task.status === 'Hiring Failed' ? 'bg-red-500' :
                                    'bg-slate-400'
                        }`}></div>

                    {/* Content Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                            <div>
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className={`px-2.5 py-0.5 rounded textxs font-medium text-xs ${task.status === 'Done' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                        task.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                            task.status === 'Delayed' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                                task.status === 'Failed' || task.status === 'Hiring Failed' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                    'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                        }`}>
                                        {
                                            task.status === 'Done' ? '완료' :
                                                task.status === 'In Progress' ? '진행 중' :
                                                    task.status === 'Delayed' ? '지연' :
                                                        task.status === 'Failed' ? '미달성' :
                                                            task.status === 'Not Started' ? '시작 전' :
                                                                task.status === 'Hired' ? '채용 완료' :
                                                                    task.status === 'Hiring Failed' ? '채용 실패' :
                                                                        task.status
                                        }
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-500">
                                        {task.startDate} ~ {task.endDate}
                                    </span>
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                                    {task.title}
                                </h4>
                            </div>
                            <div className="flex flex-wrap gap-1">
                                {task.teams.map(team => (
                                    <span key={team} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded text-xs">
                                        {team}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mt-3 border-t border-slate-100 dark:border-slate-800 pt-3">
                            <User size={14} />
                            <span>{task.assignees.join(", ")}</span>
                        </div>

                        {task.note && (
                            <div className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/20 rounded text-sm text-yellow-800 dark:text-yellow-500 flex items-start gap-2">
                                <AlertTriangle size={14} className="mt-1 flex-shrink-0" />
                                <span>{task.note}</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
