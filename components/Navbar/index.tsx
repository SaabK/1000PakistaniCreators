import React from "react";
import Button from "../Button";

export default function Navbar() {
    return (
        <header className="container py-3.5 md:py-5 flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-bold text-xl md:text-2xl mb-1.5 md:mb-0 ">
                1,000<span className="text-myYellow">Pakistani</span>Creators
            </h1>

            <nav>
                <ul role="list" className="flex gap-0.5">
                    <li>
                        <Button variant="link" size="small">
                            Home
                        </Button>
                    </li>
                    <li>
                        <Button variant="link" size="small">
                            Community
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
