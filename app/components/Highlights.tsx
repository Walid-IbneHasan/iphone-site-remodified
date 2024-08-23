"use client";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoCarousal from "./VideoCarousal";
gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  useGSAP(() => {
    gsap.fromTo(
      "#highlight-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#highlights",
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      "#watch-text",
      { opacity: 0, y: 100 },
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: 0.25,
        scrollTrigger: {
          trigger: "#highlights",
          start: "top center",
        },
      }
    );
  });
  return (
    <section className="h-screen bg-[#101010]" id="highlights  ">
      <div className="flex justify-evenly py-8">
        <p className="text-[#86868B] text-5xl" id="highlight-text">
          Get the highlights
        </p>
        <div className="flex gap-4" id="watch-text">
          <p className="hover:underline text-sky-600 flex gap-1 items-center text-xl">
            Watch the film{" "}
            <span>
              <FaRegCirclePlay color="sky-blue" size={25} />
            </span>{" "}
          </p>
          <p className="hover:underline text-sky-600 flex gap-1 items-center text-xl">
            Watch the event{" "}
            <span>
              <MdKeyboardArrowRight color="sky-blue" size={25} />
            </span>
          </p>
        </div>
      </div>
      <div className="w-2/3 mx-auto  rounded-xl  mt-4">
        <VideoCarousal />
      </div>
    </section>
  );
}
