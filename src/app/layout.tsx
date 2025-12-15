import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "이윤혁 포트폴리오 | Security Leadership & Compliance Architecture",
    description: "보안 리더십과 규제 준수 아키텍처 전문가 이윤혁의 포트폴리오입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
