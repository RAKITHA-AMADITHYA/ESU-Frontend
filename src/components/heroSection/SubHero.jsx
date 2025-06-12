'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SubHero() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-10rem)] px-4 sm:px-10 pt-10">
      {/* Background Image */}
      <Image
        src="/esu/heros/contact.jpg"
        alt="world map using dots"
        priority
        fill
        className="object-cover z-0"
      />

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="text-center max-w-4xl mt-50">
          <h1
            className="text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            data-aos="fade-up"
          >
            CONTACT <span className="text-[#02AEC9]">US</span>
          </h1>
          <p
            className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed text-bold"
            data-aos="fade-up"
          >
            Connect with Excellence! Reach out to ESOFT Metro Campus today – where all your questions find answers, and your future begins. Your life-changing journey towards knowledge, innovation and success starts with a simple touch. Contact us now and let's shape your future together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default SubHero;
