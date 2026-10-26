import Page from '../components/Page';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Page title="Experience">
      <h1>Experience</h1>
      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.title}>
            <p className="eyebrow">{item.date}</p>
            <h3>{item.title}</h3>
            {item.text && <p className="muted">{item.text}</p>}
          </li>
        ))}
      </ol>
    </Page>
  );
}
