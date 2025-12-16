import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google"; // Add Noto_Sans_KR
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansKr = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-noto-sans-kr",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

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
        <html lang="ko" suppressHydrationWarning>
            <body className={`${inter.variable} ${notoSansKr.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
