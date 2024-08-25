"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Chip() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust this value as needed
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      "#chip-header",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: { trigger: "#video-chip" },
      }
    );
    gsap.fromTo(
      "#chip-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: { trigger: "#video-chip" },
      }
    );
  });

  return (
    <div className="w-4/6 mx-auto mt-32" id="chip-section">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/pictures/chip.jpeg"
          alt="chip-pic"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p
          className="text-white text-5xl lg:text-7xl text-center mt-16 mb-8"
          id="chip-header"
        >
          A17 Pro Chip. <br />A monster win for gaming{" "}
        </p>
        <p className="text-[#86868B] text-xl lg:text-3xl" id="chip-header">
          It&apos;s here. The biggest redesign in the history of Apple
          GPU&apos;s
        </p>
      </div>
      <div className="flex items-center justify-center mt-32">
        <video
          ref={videoRef}
          id="video-chip"
          width={900}
          className="rounded-xl"
        >
          <source src="/assets/videos/frame.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="grid pb-8 lg:pb-0 grid-cols-1 gap-4 lg:grid-cols-2 justify-items-end w-4/6 mx-auto mt-16 ">
        <p className="text-[#86868B] text-xl" id="chip-text">
          A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
          <span className="text-white">best graphics performance by far.</span>{" "}
          <br />
          Mobile{" "}
          <span className="text-white">
            {" "}
            games will look and feel so immersive,
          </span>{" "}
          with incredibly detailed environments and more realistic characters.
          And with industry-leading speed and efficiency, A17 Pro takes fast and
          runs with it{" "}
        </p>
        <div className="flex flex-col gap-2 " id="chip-text">
          <p className="text-[#86868B]">New</p>
          <h1 className="text-white text-3xl">Pro-Class GPU</h1>
          <p className="text-[#86868B]">with 6 cores</p>
        </div>
      </div>
    </div>
  );
}
