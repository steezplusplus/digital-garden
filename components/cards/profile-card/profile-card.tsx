'use client';

import Image from 'next/image';
import gsap from 'gsap/dist/gsap'; // import from /dist to avoid ESM compiler issues
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // import from /dist to avoid ESM compiler issues
import { TextPlugin } from 'gsap/dist/TextPlugin'; // import from /dist to avoid ESM compiler issues
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

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

    gsap.to('.figcaption-container', {
      duration: 3,
      text: {
        value: 'Welcome to the garden.',
      },
    });
  });

  return (
    <div className="bottom-0 aspect-auto self-start rounded-xl border border-stone-400 bg-white/50 p-4 sm:sticky sm:top-10 sm:aspect-square dark:bg-indigo-100/5">
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          priority
          src="/primary.jpg"
          alt="A profile picture"
          width="128"
          height="128"
          className="rotate-img aspect-auto h-32 w-32 rounded-full"
        />
        <figcaption className="figcaption-container text-b mt-2 text-center text-sm"></figcaption>
      </div>
    </div>
  );
}
