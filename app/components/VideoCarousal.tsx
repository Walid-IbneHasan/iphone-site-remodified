import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { highlightsSlides } from "@/constants";

export default function SimpleSlider() {
  const videoRefs = useRef<HTMLVideoElement[]>([]); // Array of video references

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      if (videoRefs.current[current]) {
        videoRefs.current[current].pause(); // Pause the current video
      }
    },
    afterChange: (current: number) => {
      if (videoRefs.current[current]) {
        videoRefs.current[current].play(); // Play the new active video
      }
    },
  };

  return (
    <Slider {...settings}>
      {highlightsSlides.map((slide, index) => (
        <video
          className="rounded-xl"
          key={slide.id}
          muted
          preload="auto"
          playsInline
          autoPlay
          ref={(el) => {
            if (el) videoRefs.current[index] = el; // Assign video element to refs
          }}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      ))}
    </Slider>
  );
}
