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
      <p>{moreProjectData.title} Hello World!</p>
      {/* <div className="p-6 border border-white flex flex-col gap-4 ">
        <GoBack />
        <div className="space-y-4 py-24">
          <p className="!font-mono font-bold">{project.title}</p>

          <p className="text-4xl">{project.description}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-screen">
        {project.projectLink ? (
          <Link
            href={project.projectLink}
            target="_blank"
            className="border border-white hover:bg-white hover:text-black duration-500 w-full md:w-1/2 p-6 flex justify-center items-center"
          >
            View Project
          </Link>
        ) : (
          <div className="border border-white w-full md:w-1/2 p-6 flex justify-center items-center">
            :P
          </div>
        )}
        <div className="border border-white w-full md:w-1/2 p-6 space-y-2">
          <p>Issue</p>
          <p className="text-2xl">{project.issue}</p>
        </div>
      </div>

      <div className="w-screen h-auto p-6 py-24 space-y-4 border border-white">
        <p>Solution</p>
        <p className="text-4xl font-serif ">{project.solution}</p>
      </div> */}

      {/* First content block */}
      {/* <div className="flex flex-col-reverse md:flex-row justify-start flex-1 w-full">
        <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-1">
          <div className="flex-1 flex flex-col border border-white p-6 gap-4 justify-end">
            <h1 className="text-2xl">Challenges</h1>

            <ul className="space-y-4">
              {project.challenges?.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex items-end border border-white h-auto">
          {project.oldProjectVideo ? (
            <video
              className="w-full h-[600px] object-cover object-[0%_30%]"
              controls
            >
              <source src={project.oldProjectVideo} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          ) : project.oldProjectImage ? (
            <img src={project.oldProjectImage} alt="Old Project Image" />
          ) : null}
        </div>
      </div> */}

      {/* Second content block */}
      {/* <div className="flex flex-col-reverse md:flex-row justify-start flex-1 w-full">
        <div className="w-full md:w-2/3 flex items-end border border-white h-auto">
          {project.newProjectVideo ? (
            <video
              className="w-full h-[600px] object-cover object-[0%_30%]"
              controls
            >
              <source src={project.newProjectVideo} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          ) : project.newProjectImage ? (
            <img src={project.newProjectImage} alt="New Project Image" />
          ) : null}
        </div>

        <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-1">
          <div className="flex-1 flex flex-col border border-white p-6 gap-4">
            <h1 className="text-2xl">Wins</h1>

            <ul className="space-y-4">
              {project.wins?.map((win, index) => (
                <li key={index}>{win}</li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}

      {/* Final Thoughts / Reflections or Contact  */}
      {/* <div className="w-screen h-auto p-6 py-24 border border-white">
        <p className="text-4xl font-serif">{project.quote}</p>
      </div> */}
    </div>
  );
}
