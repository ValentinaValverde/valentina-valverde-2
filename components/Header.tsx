export default function Header() {
  return (
    <div className="py-8 gap-4 flex flex-col justify-center items-center h-[80vh]">
      <p className="opacity-50 text-xs">Hey, I&apos;m Val!</p>

      <div className="text-4xl text-center w-full md:w-[75%]">
        <span>I&apos;m a </span>
        <span className="text-[#5762D5] !font-mono">Design Engineer </span>
        <span>based in </span>
        <span className="text-[#7AC74F] !font-mono">Greenville, SC </span>
        <span>helping </span>
        <span className="text-[#9CAFB7] !font-mono">SaaS products </span>
        <span>build cleaner, more accessible interfaces.</span>
      </div>
    </div>
  );
}
