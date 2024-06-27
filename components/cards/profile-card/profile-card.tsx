'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ProfileCard() {
  useGSAP(() => {
    gsap.to('.rotate-img', {
      scrollTrigger: {
        trigger: '.rotate-container', // start and end animation when element with this classname enters and leaves viewport
        start: '-40px top', // start at -40px above the rotate-container top of viewport
        end: 'bottom top', // end at bottom of rotate-container reaches top of scroller end
        scrub: true,
      },
      rotation: 360,
    });
  });

  return (
    <div className="bottom-0 aspect-auto self-start rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5 sm:sticky sm:top-10 sm:aspect-square">
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          priority
          src="/primary.jpg"
          alt="A profile picture"
          width="128"
          height="128"
          className="rotate-img aspect-auto h-32 w-32 rounded-full"
        />
        <figcaption className="mt-2 text-center text-sm">Welcome to the garden.</figcaption>
      </div>
    </div>
  );
}
