"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DevSecOpsPlanPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                    <span className="font-semibold text-lg">DevSecOps 2025</span>
                </div>
            </nav>

            {/* Content using iframe */}
            <div className="pt-16 h-screen w-full flex flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 w-full h-full bg-white"
                >
                    <iframe
                        src="/devsecops-plan.html"
                        className="w-full h-full border-none"
                        title="DevSecOps 2025 Plan"
                    />
                </motion.div>
            </div>
        </main>
    );
}
