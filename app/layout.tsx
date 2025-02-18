import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
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
                    className={`antialiased relative  `}
                >
                    <ClientWrapper>
                        <Header/>
                         {children}
                        <Footer/>
                    </ClientWrapper>
                </body>
            </html>
        </ClerkProvider>
    );
}
