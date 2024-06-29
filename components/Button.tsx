import { cn } from "@/lib/utils";
import React from "react";

interface IButton {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "link";
    size?: "large" | "normal" | "small";
}

export default function Button({
    children,
    className,
    variant = "primary",
    size = "normal",
}: IButton) {
    return (
        <button
            className={cn(
                "rounded-sm py-1 px-3 text-sm font-medium transition-all duration-200 w-fit",
                variant === "primary" &&
                    "bg-myYellow text-black hover:bg-myYellow/90",
                variant === "secondary" &&
                    "bg-myWhite text-black hover:bg-myWhite/90",
                variant === "link" && "bg-none hover:bg-myWhite/20 text-white",
                {
                    "text-lg py-2.5 px-5": size === "large",
                    "text-base py-1.5 px-3": size === "normal",
                    "py-1 px-3 text-xs md:text-sm": size === "small",
                },
                className
            )}
            // add secondary and more variants of color
        >
            {children}
        </button>
    );
}
