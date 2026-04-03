import {Zap, Share2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Navbar />

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-8 py-24 text-center">
                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
                    Your thoughts, <br />
                    <span className="text-[#bda06d]">perfectly organized.</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Stop losing great ideas. Save YouTube videos, Tweets, and notes into your digital garden. Secure, private, and always available.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/signup">
                        <Button varient="tertiary" text="Get Started for Free"/>
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section className="bg-white py-24 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        <FeatureCard
                            icon={<Zap className="text-[#bda06d]" />}
                            title="Quick Capture"
                            desc="Save any link in seconds. We handle the formatting so you can focus on thinking."
                        />
                        <FeatureCard
                            icon={<Share2 className="text-[#bda06d]" />}
                            title="Easy Sharing"
                            desc="Share your curated collections with a single link. Perfect for portfolios or research."
                        />
                        <FeatureCard
                            icon={<ShieldCheck className="text-[#bda06d]" />}
                            title="Private by Design"
                            desc="Your data is encrypted and tied strictly to your account. No trackers, no ads."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};



export default LandingPage