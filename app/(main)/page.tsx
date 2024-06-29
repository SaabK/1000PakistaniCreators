import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import bgimage from "@/app/assets/yellow effect bg.png";

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <Hero />
            </div>
        </>
    );
}
