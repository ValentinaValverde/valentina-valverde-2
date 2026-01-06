'use client';

import { useState } from 'react';
import TimeItem from './TimeItem';

export function HeartIcon({
  size = '24',
  className = '',
}: {
  size?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
    >
      <path d="M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z" />
    </svg>
  );
}

export default function About() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div className="mb-[175px] flex flex-col-reverse md:flex-row justify-between items-center md:items-end gap-8">
      {/* container */}
      <div className="space-y-8">
        <p className="opacity-50 cursor-default">A bit about me</p>

        <div
          className="flex items-center gap-2"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {isHovering ? (
            <img src="/icons/excited-person.svg" className="w-6 h-6" />
          ) : (
            <img src="/icons/person.svg" className="w-6 h-6" />
          )}

          <p className="text-xl !font-mono cursor-default">
            Valentina Valverde
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* <img
            src="/icons/heart.svg"
            className="w-6 h-6 heartbeat hover:text-white"
          /> */}

          <HeartIcon
            size="24"
            className="heartbeat text-black hover:text-[#CF3800] transition-colors"
          />

          <p className="text-xl !font-mono cursor-default">
            Family & Sandwiches
          </p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/icons/earth.svg" className="w-6 h-6" />

          <a
            href="https://www.google.com/search?q=greenville%2C+sc"
            target="_blank"
            className="text-xl !font-mono link-underline hover:text-[#7AC74F]"
          >
            Greenville, SC
          </a>
        </div>

        <TimeItem />

        <div className="flex items-center gap-2">
          <img src="/icons/stack.svg" className="w-6 h-6" />

          <div>
            <span className="text-xl !font-mono cursor-default hover:text-[#9CAFB7] transition duration-300">
              Typescript,{' '}
            </span>
            <span className="text-xl !font-mono cursor-default hover:text-[#5762D5] transition duration-300">
              NextJS
            </span>
          </div>
        </div>
      </div>

      <img
        src="/valentina.jpg"
        className="w-64 h-64 object-cover object-[center_10%] rounded-full"
        loading="lazy"
      />
    </div>
  );
}
