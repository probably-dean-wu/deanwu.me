import Page from '../components/Page';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Page title="Projects" wide>
      <h1>Projects</h1>
      <p className="lead">Games, websites and hardware I've built.</p>
      <div className="grid spaced">
        {projects.map((p) => <ProjectCard key={p.name} {...p} />)}
      </div>
    </Page>
  );
}
