"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!email) return;

        setEmail("");

        console.log(
            "publication id: ",
            process.env.NEXT_PUBLIC_PUBLICATION_ID,
            email
        );

        const response = await axios.post(
            "http://localhost:3000/api/newsletter",
            {
                email,
            }
        );

        console.log("POST REQ RESPONSE: ", response);
    }

    return (
        <form className="flex gap-1" onSubmit={handleSubmit}>
            <Input
                placeholder="Email"
                className="ring-1 ring-white w-52 md:w-72"
                value={email}
                max={80}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-myYellow" type="submit">
                Submit
            </Button>
        </form>
    );
}
