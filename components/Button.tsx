import { cn } from "@/lib/utils";
import React from "react";

interface IButton {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
}

export default function Button({
    children,
    className,
    variant = "primary",
}: IButton) {
    return (
        <button
            className={cn(
                className,
                "rounded-sm py-1 px-3 text-sm font-medium hover:opacity-85 transition-all duration-300",
                variant === "primary" && "bg-myYellow text-black",
                variant === "secondary" && ""
            )}
            // TODO: change my yellow color to actual yellow color
            // add secondary and more variants of color
        >
            {children}
        </button>
    );
}
