import React from "react";

export default function Hero() {
    return (
        <section className="container md:w-[70%]">
            <h1 className="text-2xl md:text-4xl font-semibold text-center capitalize">
                join{" "}
                <span className="text-myYellow">
                    10,000+ pakistani creators
                </span>{" "}
                on a <br className="hidden lg:block" /> journey to earn money
                online and <br className="hidden lg:block" /> make your{" "}
                <span className="text-myYellow">parents</span> proud
            </h1>

            <div className="flex flex-col items-center gap-5 mt-8 mx-auto">
                <iframe
                    src="https://embeds.beehiiv.com/b92a5d0f-829f-4083-8a96-1d8835cfdc06?slim=true"
                    data-test-id="beehiiv-embed"
                    height="52"
                    scrolling="no"
                    style={{
                        margin: 0,
                        borderRadius: "0px",
                        backgroundColor: "transparent",
                    }}
                    // className=" md:w-96 lg:w-[500px]"
                    className="w-4/5 md:w-3/5 min-w-80"
                ></iframe>

                <span className="text-gray-300 italic text-xs text-center w-[80%] md:w-full">
                    (the email might be in spam, promotion, social or update{" "}
                    <br className="hidden lg:block" /> tab in gmail.)
                </span>
            </div>
        </section>
    );
}
