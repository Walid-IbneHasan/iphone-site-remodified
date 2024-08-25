"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Explore() {
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
      "#explore-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: { trigger: "#explore-text-div" },
      }
    );
    gsap.fromTo(
      "#explore-header",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,

        scrollTrigger: { trigger: "#explore-section" },
      }
    );
    gsap.fromTo(
      "#explore-para",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,

        scrollTrigger: { trigger: "#explore-section" },
      }
    );
  });

  return (
    <div id="explore-section" className="w-4/6 mx-auto py-16">
      <h1 className="text-[#86868B] text-7xl " id="explore-header">
        Explore the full story
      </h1>
      <div className="w-5/6 mx-auto">
        <p className="text-white text-5xl mt-12" id="explore-para">
          iPhone <br />
          Forged in titanium
        </p>
        <div className="flex flex-col gap-8">
          <video id="video-explore" ref={videoRef}>
            <source src="/assets/videos/explore.mp4" type="video/mp4" />
          </video>
          <div className="flex gap-2">
            <Image
              src="/assets/pictures/explore1.jpg"
              alt="explore-pic-1"
              width={600}
              height={400}
            />
            <Image
              src="/assets/pictures/explore2.jpg"
              alt="explore-pic-2"
              width={600}
              height={400}
            />
          </div>
          <div
            className="flex gap-32 text-[#86868B] text-2xl mt-12"
            id="explore-text-div"
          >
            <p id="explore-text">
              iPhone 15 Pro is the first iPhone to feature an aerospace grade
              titanium design, using the same alloy that spacecraft use for
              missions to Mars.
            </p>
            <p id="explore-text">
              Titanium has one of the best strength to weight ratios of any
              metal, making these our lightest Pro models ever. You&apos;ll
              notice the difference the moment you pick one up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
