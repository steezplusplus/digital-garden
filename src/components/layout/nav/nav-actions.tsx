'use client';

function smoothScroll(target: string) {
  const element: HTMLElement | null = document.querySelector(target);

  if (!element) {
    return;
  }

  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth',
  });
}

export function NavActions() {
  return (
    <li className="ml-auto flex items-center gap-4">
      <button
        className="cursor-pointer hover:underline"
        onClick={() => smoothScroll('#projects-section-heading')}
      >
        Projects
      </button>
      <button
        className="cursor-pointer hover:underline"
        onClick={() => smoothScroll('#about-section-heading')}
      >
        About
      </button>
    </li>
  );
}
