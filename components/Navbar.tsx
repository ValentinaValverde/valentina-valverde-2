'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="fixed top-0 mt-4 z-100 w-full flex justify-center items-center">
      <div className="bg-[var(--foreground)] py-4 px-8 rounded-full space-x-8">
        <Link
          href="/"
          className={
            pathname === '/'
              ? 'text-[var(--background)]'
              : 'text-[#9CAFB7] hover:text-[var(--background)] transition duration-300'
          }
        >
          Home
        </Link>

        <a
          href="/projects"
          className={
            pathname === '/projects'
              ? 'text-[var(--background)]'
              : 'text-[#9CAFB7] hover:text-[var(--background)] transition duration-300'
          }
        >
          Projects
        </a>

        <a
          href="/archives"
          className={
            pathname === '/projects'
              ? 'text-[var(--background)]'
              : 'text-[#9CAFB7] hover:text-[var(--background)] transition duration-300'
          }
        >
          Archives
        </a>
      </div>
    </div>
  );
}
