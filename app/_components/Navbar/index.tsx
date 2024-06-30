import React from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="container py-3.5 md:py-5 flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-bold text-xl md:text-2xl mb-1.5 md:mb-0 ">
                1,000<span className="text-myYellow">Pakistani</span>Creators
            </h1>

            <nav className="flex gap-0.5">
                <Link href="/">
                    <Button variant="link">Home</Button>
                </Link>
                <Link href="/community">
                    <Button variant="link">Community</Button>
                </Link>
            </nav>
        </header>
    );
}
