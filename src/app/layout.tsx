import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Task Manager",
    description: "Task Manager App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="my-gradient-bg mx-auto min-h-screen max-w-3xl space-y-4 p-4 text-lg">
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
