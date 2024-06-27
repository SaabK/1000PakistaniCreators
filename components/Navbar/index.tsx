import React from "react";
import Button from "../Button";

export default function Navbar() {
    return (
        <header className="container py-5 flex justify-between items-center">
            <h1 className="font-bold text-3xl ">
                1,000<span className="text-green-500">Pakistani</span>Creators
            </h1>

            <nav>
                <ul role="list">
                    <li>
                        <Button>Home</Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
