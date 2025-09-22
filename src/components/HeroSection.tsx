"use client";

import { useEffect, useRef } from "react";
import { FadeInStagger } from "./FadeInStagger";
// import { Button } from "./Button";
// import { mainData } from "../data/main";

export function HeroSection() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideos = async () => {
      if (videoRef1.current) {
        try {
          await videoRef1.current.play();
        } catch (error) {
          console.log("Video 1 autoplay failed:", error);
        }
      }
      if (videoRef2.current) {
        try {
          await videoRef2.current.play();
        } catch (error) {
          console.log("Video 2 autoplay failed:", error);
        }
      }
    };

    playVideos();
  }, []);

  return (
    <section className="relative mb-20 md:mb-40">
      <div className="relative w-full pb-[140%] xs:pb-[100%] md:pb-[72.25%] lg:pb-[68.25%] xl:pb-[60.25%] 2xl:pb-[45.25%] bg-transparent overflow-hidden mb-10 md:mb-20">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef1}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover brightness-[0.2]"
          >
            <source src="/videos/film02.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/50 md:hidden z-30"></div>
        <div className="absolute inset-0 flex items-center justify-center md:justify-end z-20">
          <video
            ref={videoRef2}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-[140%] md:h-[150%] w-auto"
          >
            <source src="/videos/film02.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute bottom-10 xs:bottom-20 md:bottom-auto top-auto md:top-36 lg:top-40 xl:top-48 2xl:top-48 left-2 xs:left-3 md:left-8 2xl:left-0 right-0 max-w-7xl mx-auto z-30">
        <h1
          className="text-xl sm:text-4xl lg:text-5xl !leading-loose xs:tracking-widest text-center md:text-start 
                     [&_span]:text-3xl [&_span]:sm:text-5xl [&_span]:lg:text-6xl [&_span]:text-yellow-300 [&_span]:font-bold"
        >
          <FadeInStagger delay={0} staggerDelay={200}>
            <div>I like making fun,</div>
            <div>interactive</div>
            <div>things with code.</div>
          </FadeInStagger>
        </h1>

        <div className="text-sm sm:text-lg lg:text-xl font-semibold !leading-loose !tracking-widest [&_span]:text-yellow-300 text-center md:text-start my-10 md:my-12 lg:my-14">
          <FadeInStagger delay={1000} staggerDelay={200}>
            <div>
              Where creativity sparks curiosity and brings ideas to life.
            </div>
          </FadeInStagger>
        </div>

        {/* <FadeInStagger delay={1500}>
          <div className="flex justify-center md:justify-start">
            <a
              href={mainData.contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                無料相談・お申し込み
              </Button>
            </a>
          </div>
        </FadeInStagger> */}
      </div>
    </section>
  );
}
