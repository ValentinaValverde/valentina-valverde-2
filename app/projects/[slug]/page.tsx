import Tag from '@/components/projects/Tag';
import Contact from '@/components/Contact';
import { moreProjectData } from '@/lib/constants';
import { notFound } from 'next/navigation';

export default async function DevelopmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = moreProjectData.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <div className="mt-[150px] py-8 flex flex-col items-center justify-center text-center gap-6">
        {/* <p>{project.title}</p> */}
        <p className="text-3xl">{project.description}</p>

        <div className="flex gap-2">
          {project.tags.map((data, index) => (
            <div key={index}>
              <Tag
                text={data}
                color={data === 'design' ? '#9CAFB7' : '#5762D5'}
              />
            </div>
          ))}
        </div>

        <img
          src={project.mainImageUrl}
          alt=""
          className="mt-32 shadow-xs rounded-sm border border-gray-200"
        />

        <a
          href={project.projectLink}
          target="_blank"
          className="py-2 px-6 bg-[var(--foreground)] border text-white text-sm rounded-full hover:bg-transparent hover:text-black transition duration-300"
        >
          Visit Project
        </a>
      </div>

      <div className="space-y-2 mt-24">
        <p className="opacity-50 text-xs">ISSUE</p>
        <p className="w-1/2">{project.issue}</p>
      </div>

      <div className="flex flex-col items-end gap-2 my-24 text-right">
        <p className="opacity-50 text-xs">SOLUTION</p>
        <p className="w-1/2">{project.solution}</p>
      </div>

      <div>
        {project.oldVideo ? (
          <video
            className="w-full object-cover shadow-xs rounded-sm mb-4 border border-gray-200"
            controls
          >
            <source src={project.oldVideo} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        ) : (
          <img
            src={project.oldImage}
            alt="New Project Image"
            className="shadow-xs rounded-sm  mb-4 border border border-gray-200"
          />
        )}
        <p className="opacity-50 text-xs">{project.oldImageSubtitle}</p>
      </div>

      <div className="space-y-2 mt-24">
        <p className="opacity-50 text-xs">CHALLENGES</p>
        <ul className="space-y-4 w-1/2">
          {project.challenges?.map((challenge, index) => (
            <li key={index}>
              {index + 1}. {challenge}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-end gap-2 my-24 text-right">
        <p className="opacity-50 text-xs">WINS</p>
        <ul className="space-y-4 w-1/2">
          {project.wins?.map((win, index) => (
            <li key={index}>{win}</li>
          ))}
        </ul>{' '}
      </div>

      <div>
        {project.newVideo ? (
          <video
            className="w-full object-cover shadow-xs rounded-sm mb-4 border border-gray-200"
            controls
          >
            <source src={project.newVideo} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        ) : (
          <img
            src={project.newImage}
            alt="New Project Image"
            className="shadow-xs rounded-sm  mb-4 border border border-gray-200"
          />
        )}
        <p className="opacity-50 text-xs">{project.newImageSubtitle}</p>
      </div>

      <p className="text-3xl text-center my-64">{project.finalQuote}</p>

      <Contact />
    </div>
  );
}
