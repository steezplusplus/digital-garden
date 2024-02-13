'use client';

export function NavActions() {
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

  return (
    <li className="ml-auto">
      <a className="cursor-pointer hover:underline" onClick={() => smoothScroll('#project-id')}>
        Projects
      </a>
    </li>
  );
}
