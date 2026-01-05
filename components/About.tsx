export default function About() {
  return (
    <div className="mb-[175px] flex flex-col-reverse md:flex-row justify-between items-center md:items-end gap-8">
      {/* container */}
      <div className="space-y-8">
        <p className="opacity-50">A bit about me</p>

        <div className="flex items-center gap-2">
          <img src="/icons/person.svg" className="w-6 h-6" />

          <p className="text-xl !font-mono">Valentina Valverde</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/icons/heart.svg" className="w-6 h-6" />

          <p className="text-xl !font-mono">Family & Sandwiches</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/icons/earth.svg" className="w-6 h-6" />

          <p className="text-xl !font-mono">Greenville, SC</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/icons/sun.svg" className="w-6 h-6" />

          <p className="text-xl !font-mono">Local Time</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/icons/stack.svg" className="w-6 h-6" />

          <p className="text-xl !font-mono">Typescript, NextJS</p>
        </div>
      </div>

      <img
        src="/valentina.jpg"
        className="w-64 h-64 object-cover object-[center_10%] rounded-full"
      />
    </div>
  );
}
