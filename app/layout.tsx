import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const poppins = Poppins({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "1,000 Pakistani Creators",
    description:
        "1,000 Pakistani Creators is a community where you'll find like-minded people on a journey to earn their first income online and build a business that will generate them millions. The purpose of this community is to help eachother & grow together.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    poppins.className,
                    "text-myWhite bg-black min-h-screen flex flex-col justify-between"
                )}
            >
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
