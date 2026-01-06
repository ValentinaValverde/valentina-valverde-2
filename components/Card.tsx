'use client';

export default function Card({
  imageUrl,
  link,
  title,
  subtitle,
}: {
  imageUrl: string;
  link: string;
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <a href={link} target="_blank">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[250px] object-cover rounded-sm border border-gray-300
          hover:shadow-md transition duration-300"
        />

        <div className="space-y-2 my-4">
          <p className="text-xs opacity-50">{title}</p>
          <p className="text-xl">{subtitle}</p>
        </div>
      </a>
    </>
  );
}
