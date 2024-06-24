'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ProfileCard() {
  const spinnerRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const element = spinnerRef.current;

    if (element) {
      gsap.to(element, {
        rotation: 720,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: true, // This will add visual markers for debugging
        },
      });

      // Clean up the ScrollTrigger instance on unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  });

  return (
    <div
      className="
        bottom-0 aspect-auto self-start
        rounded-xl border border-stone-400 bg-white/50 p-4
        dark:bg-indigo-100/5 sm:sticky sm:top-10
        sm:aspect-square
      "
    >
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          priority
          src="/primary.jpg"
          alt="A profile picture"
          width="128"
          height="128"
          className="aspect-auto h-32 w-32 rounded-full"
          ref={spinnerRef}
        />
        <figcaption className="mt-2 text-center text-sm">Welcome to the garden.</figcaption>
      </div>
    </div>
  );
}
