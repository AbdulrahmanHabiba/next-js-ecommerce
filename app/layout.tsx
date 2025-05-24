import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/_components/ui/Header";
import Footer from "@/app/_components/ui/Footer";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import ClientWrapper from "@/app/ClientWrapper";

export const metadata: Metadata = {
    title: "Ecommerce App",
    description: "This is the best ecommerce application" ,
    icons : [
        {url: "/logo2.svg",
        href : "/logo2.svg"},

    ]
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            <html lang="en" >
                <body
                    className="antialiased relative flex flex-col min-h-screen bg-bgdark bg-gradient-to-br from-bgdark via-primary-dark to-bgdark text-textmain"
                >
                <ClientWrapper>
                    <Header/>
                    <main className="flex-grow">{children}</main>
                    <Footer/>
                </ClientWrapper>
                </body>
            </html>
        </ClerkProvider>
    );
}
