"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      "#hero-text",
      { opacity: 0, y: 100 },
      { duration: 2, opacity: 1, y: 0, delay: 2 }
    );
    gsap.fromTo(
      "#hero-btn",
      { opacity: 0, y: 100 },
      { duration: 2, opacity: 1, y: 0, delay: 2 }
    );
  });
  return (
    <div className="flex flex-col items-center lg:justify-center py-32 lg:py-0 lg:h-screen relative">
      <p id="hero-text" className="text-[#86868B] text-3xl">
        iPhone 15 Pro
      </p>
      <video
        autoPlay
        muted
        id="hero-video"
        src="/assets/videos/hero.mp4"
        className="w-5/6 "
      ></video>
      <div id="hero-btn" className="flex flex-col items-center gap-4 ">
        <div className=" px-8 text-2xl bg-sky-700 text-white max-w-fit hover:bg-black hover:text-sky-700 hover:ring-1 hover:ring-sky-700 rounded-xl">
          Buy
        </div>
        <p className="text-white text-2xl"> From $199/month or $999</p>
      </div>
    </div>
  );
}
