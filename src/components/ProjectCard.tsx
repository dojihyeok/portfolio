"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    link?: string;
    tags?: string[];
}

export function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl border border-slate-100 dark:border-slate-700"
        >
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                {title}
                {link && (
                    <Link href={link} target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors">
                        <ExternalLink size={16} />
                    </Link>
                )}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                {description}
            </p>
            {tags && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
