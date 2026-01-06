export default function Header() {
  return (
    <div className="h-[80vh] py-8 gap-4 flex flex-col justify-center items-center">
      <p className="opacity-50 cursor-default">Hey, I&apos;m Val!</p>

      <div className="text-4xl text-center w-full md:w-[75%]">
        <span className="cursor-default">I&apos;m a </span>
        <span className="text-[#5762D5] !font-mono cursor-default">
          Design Engineer{' '}
        </span>
        <span className="cursor-default">based in </span>
        <span className="text-[#7AC74F]  link-underline cursor-pointer">
          <a
            href="https://www.google.com/search?q=greenville%2C+sc"
            target="_blank"
            className="!font-mono"
          >
            Greenville, SC
          </a>
        </span>
        <span className="cursor-default"> helping </span>
        <span className="text-[#9CAFB7] !font-mono cursor-default">
          SaaS products{' '}
        </span>
        <span className="cursor-default">
          build cleaner, more accessible interfaces.
        </span>
      </div>
    </div>
  );
}
