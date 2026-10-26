import { Link } from 'react-router-dom';

// "Play ↗" for other sites, "Watch →" for pages on this site.
export function ProjectLinks({ links }) {
  return (
    <div className="card-links">
      {Object.entries(links).map(([label, href]) =>
        href.startsWith('/')
          ? <Link key={label} to={href}>{label} →</Link>
          : <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>
      )}
    </div>
  );
}

export default function ProjectCard({ name, date, image, description, links }) {
  return (
    <article className="card">
      <img src={image} alt={name} loading="lazy" />
      <div className="card-body">
        <p className="eyebrow">{date}</p>
        <h3>{name}</h3>
        {description && <p className="muted">{description}</p>}
        <ProjectLinks links={links} />
      </div>
    </article>
  );
}
