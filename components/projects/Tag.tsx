export default function Tag({ text, color }: { text: string; color: string }) {
  return (
    <div
      className={`py-1 px-2 w-fit text-xs rounded-full text-[${color}] 
      border border-[${color}] hover:bg-[${color}] transition duration-300`}
    >
      <p>{text}</p>
    </div>
  );
}
