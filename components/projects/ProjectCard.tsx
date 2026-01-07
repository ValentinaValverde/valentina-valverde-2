'use client';

import Tag from '@/components/projects/Tag';

export default function ProjectCard({
  imageUrl,
  link,
  externalLink,
  title,
  subtitle,
  tags,
}: {
  imageUrl: string;
  link: string;
  externalLink?: boolean;
  title: string;
  subtitle: string;
  tags: string[];
}) {
  return (
    <>
      <a href={link} target={externalLink ? '_blank' : ''}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[250px] object-cover rounded-sm border border-gray-300
          hover:shadow-md transition duration-300"
        />

        <div className="space-y-2 my-4">
          <div className="flex justify-between items-center">
            <p className="text-xs opacity-50">{title}</p>

            <div className="flex gap-2">
              {tags.map((data, index) => (
                <div key={index}>
                  <Tag
                    text={data}
                    color={data === 'design' ? '#9CAFB7' : '#5762D5'}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-xl">{subtitle}</p>
        </div>
      </a>
    </>
  );
}
