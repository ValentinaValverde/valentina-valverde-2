import ProjectsHeader from '@/components/projects/ProjectsHeader';
import ProjectsSection from '@/components/projects/ProjectsSection';
import Contact from '@/components/Contact';

export default function Projects() {
  return (
    <div className="space-y-24">
      <ProjectsHeader />
      <ProjectsSection />
      <Contact />
    </div>
  );
}
