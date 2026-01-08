'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);

    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  return (
    <div
      className={`fixed top-0 mt-4 z-50 w-full flex justify-center items-center transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-[100px]'
      }`}
    >
      <div className="bg-[var(--foreground)] py-4 px-8 rounded-full space-x-8">
        <Link
          href="/"
          className={
            pathname === '/'
              ? 'text-[var(--background)] link-underline'
              : 'text-[#9CAFB7] hover:text-[var(--background)] transition duration-300 link-underline'
          }
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={
            pathname === '/projects'
              ? 'text-[var(--background)] link-underline'
              : 'text-[#9CAFB7] hover:text-[var(--background)] transition duration-300 link-underline'
          }
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
