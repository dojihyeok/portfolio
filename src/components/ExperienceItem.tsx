"use client";

import { motion } from "framer-motion";

interface ExperienceItemProps {
    company: string;
    role: string;
    period: string;
    description?: React.ReactNode;
}

export function ExperienceItem({ company, role, period, description }: ExperienceItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-slate-200 dark:border-slate-700 pl-6 py-2"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{company}</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">{period}</span>
            </div>
            <p className="text-md font-medium text-slate-700 dark:text-slate-300 mb-2">{role}</p>
            {description && <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</div>}
        </motion.div>
    );
}
