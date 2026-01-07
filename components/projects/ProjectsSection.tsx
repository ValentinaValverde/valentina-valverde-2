import { projectData } from '@/lib/constants';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projectData.map((data, index) => (
        <div key={index}>
          <ProjectCard
            title={data.title}
            subtitle={data.subtitle}
            link={data.link}
            imageUrl={data.imageUrl}
            tags={data.tags}
            externalLink={data?.externalLink}
          />
        </div>
      ))}
    </div>
  );
}
