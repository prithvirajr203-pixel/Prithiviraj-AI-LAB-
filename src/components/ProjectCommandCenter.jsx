import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/projects";

export default function ProjectCommandCenter() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Project Command Center"
          title="Five systems. Five different ways an agent can act."
          description="Each entry expands into its own workflow — click a card to see the problem it solves, the AI's role, and how input becomes output."
        />
        <div className="grid gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
