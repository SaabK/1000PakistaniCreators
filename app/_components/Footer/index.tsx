import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="text-xs text-center py-2 lowercase">
            Made by{" "}
            <Link
                href="https://www.instagram.com/bakwasboye/"
                className="text-myYellow border-b hover:border-b-2"
            >
                Ali Bin Naseer
            </Link>
        </footer>
    );
}
