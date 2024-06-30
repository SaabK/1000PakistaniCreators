import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "hello" });
}

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // console.log("BACKEND: ", email);

        await axios.post(
            `https://api.beehiiv.com/v2/publications/${process.env.NEXT_PUBLIC_PUBLICATION_ID}/subscriptions`,
            {
                email: email,
                send_welcome_email: true,
                utm_source: "Project 1,000 Pakistani Creators",
                utm_campaign: "2024 QIII Campaign",
                utm_medium: "organic",
                referring_site: "https://1000pakistanicreators.netlify.app/",
            }
        );

        return NextResponse.json({ email });
    } catch (error) {
        console.error("Error in POST request: ", error);
        return NextResponse.json(
            { error: "Failed to subscribe" },
            { status: 500 }
        );
    }
}
