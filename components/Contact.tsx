export default function Contact() {
  return (
    <div
      className="
    px-12 md:px-32 lg:px-64
    -mx-12 md:mx-[-128px] lg:mx-[-256px]
    
    h-[80vh] bg-[var(--foreground)] flex flex-col gap-6 justify-center items-center"
    >
      <p className="!font-mono text-[var(--background)]">Give me a nudge!</p>

      <div className="flex justify-center items-center gap-4">
        <a
          href="https://www.linkedin.com/in/valentina-valverde-1a179227a/"
          target="_blank"
        >
          <img
            src="/linkedin.webp"
            alt="Linked Logo"
            className="object-cover rounded-sm w-12 h-12 hover:rotate-[25deg] transition duration-300"
          />
        </a>

        <a href="https://github.com/ValentinaValverde" target="_blank">
          <img
            src="/github.webp"
            alt="Github Logo"
            className="object-cover rounded-sm w-12 h-12 hover:rotate-[-20deg] transition duration-300"
          />
        </a>

        <a
          href="https://valentinavalverde.notion.site/Digital-Resume-26a664b0ff698076acc6c6aa8fefa9b2"
          target="_blank"
        >
          <div
            className="rounded-sm w-12 h-12 flex justify-center items-center bg-[#5762D5]
          hover:rotate-90 transition duration-300"
          >
            <img
              src="/icons/asterisk.svg"
              alt="Asterisk Icon"
              className="w-8 h-8 text-white"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
