"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";

export function DashboardWidgets() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                        <TrendingUp size={24} />
                    </div>
                    <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+12.5%</span>
                </div>
                <div>
                    <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">최근 개선된 리스크</h4>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">142</span>
                        <span className="text-slate-400 text-sm font-medium">건</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                        <Clock size={24} />
                    </div>
                    <span className="text-xs font-bold text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">Weekly</span>
                </div>
                <div>
                    <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">자동화된 업무 시간</h4>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">32.5</span>
                        <span className="text-slate-400 text-sm font-medium">시간</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                        <ShieldCheck size={24} />
                    </div>
                    <span className="text-xs font-bold text-purple-500 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded-full">Optimal</span>
                </div>
                <div>
                    <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">인프라 보안 강도</h4>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">98</span>
                        <span className="text-slate-400 text-sm font-medium">%</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
                        <Zap size={24} />
                    </div>
                    <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full">Real-time</span>
                </div>
                <div>
                    <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">AI 탐지 정확도</h4>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">99.9</span>
                        <span className="text-slate-400 text-sm font-medium">%</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
