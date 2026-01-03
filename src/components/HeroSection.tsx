"use client";

import { FadeInStagger } from "./FadeInStagger";

export function HeroSection() {
  return (
    <section className="relative h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-0">
        <div className="text-center md:text-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl !leading-loose xs:tracking-widest font-bold">
            <FadeInStagger delay={0} staggerDelay={200}>
              <div>I like making fun,</div>
              <div>interactive</div>
              <div>things with code.</div>
            </FadeInStagger>
          </h1>

          <div className="text-base sm:text-lg lg:text-xl font-semibold !leading-loose !tracking-widest [&_span]:text-primary-400 my-10 md:my-12 lg:my-20">
            <FadeInStagger delay={1000} staggerDelay={200}>
              <div>
                Where creativity sparks curiosity and brings ideas to life.
              </div>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
