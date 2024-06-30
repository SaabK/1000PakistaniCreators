import Newsletter from "@/app/_components/Newsletter";
import React from "react";

export default function Hero() {
    return (
        <section className="container md:w-[70%]">
            <h1 className="text-xl md:text-4xl font-semibold text-center capitalize max-w-[700px] mx-auto">
                join{" "}
                <span className="text-myYellow">
                    10,000+ pakistani creators
                </span>{" "}
                on a journey to earn money online and make your{" "}
                <span className="text-myYellow">parents</span> proud
            </h1>

            <div className="flex flex-col items-center gap-5 mt-8 mx-auto">
                <Newsletter />

                <span className="text-gray-300 italic text-xs text-center w-[80%] md:w-full">
                    (the email might be in spam, promotion, social or update tab
                    in gmail.)
                </span>
            </div>
        </section>
    );
}
