import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-0 mt-4 z-100 w-full flex justify-center items-center">
      <div className="bg-[var(--foreground)] py-4 px-8 rounded-full space-x-8">
        <Link href="/" className="text-[var(--background)]">
          Home
        </Link>

        <a href="/projects" className="text-[var(--background)]">
          Projects
        </a>
      </div>
    </div>
  );
}
