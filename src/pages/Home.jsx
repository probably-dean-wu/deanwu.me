import { Link } from 'react-router-dom';
import Page from '../components/Page';
import { ProjectLinks } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { experience } from '../data/experience';

export default function Home() {
  return (
    <Page>
      <section className="intro">
        <h1>Hi, I'm Dean.</h1>
        <p>
          I'm a computer science student at the University of Toronto who builds things with LLMs, game engines
          and small autonomous race cars. When I'm not coding, I'm probably playing basketball, watching anime or
          tuning a mechanical keyboard. Welcome to my digital haven.
        </p>
        <nav className="quick-links">
          <a href="https://github.com/probably-dean-wu" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/dean-wu-86ba0b252/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:thisisdeanwu@gmail.com">Email ↗</a>
          <Link to="/resume">Resume →</Link>
        </nav>
      </section>

      <h2 className="label">Recently</h2>
      <ul className="rows">
        {experience.slice(0, 3).map((item) => (
          <li key={item.title}>
            <span>{item.title}</span>
            <span className="date">{item.date}</span>
          </li>
        ))}
      </ul>
      <Link to="/experience">All experience →</Link>

      <h2 className="label">Selected work</h2>
      <ul className="rows work">
        {projects.filter((p) => p.featured).map((p) => (
          <li key={p.name}>
            <img src={p.thumb} alt="" width="64" height="64" loading="lazy" />
            <div>
              <strong>{p.name}</strong>
              <p className="muted">{p.description}</p>
            </div>
            <div className="row-end">
              <span className="date">{p.date}</span>
              <ProjectLinks links={p.links} />
            </div>
          </li>
        ))}
      </ul>
      <Link to="/projects">All projects →</Link>

      <p className="note">This website will be updated regularly as it is still an unfinished project.</p>
    </Page>
  );
}
