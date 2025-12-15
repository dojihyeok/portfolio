"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    title?: string;
}

export function Section({ children, className, id, title }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 px-6 md:px-12 max-w-5xl mx-auto", className)}>
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-slate-900 dark:text-slate-100"
                >
                    {title}
                </motion.h2>
            )}
            <div className="space-y-8">{children}</div>
        </section>
    );
}
