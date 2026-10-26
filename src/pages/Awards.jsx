import { useState } from 'react';
import Page from '../components/Page';
import useEscape from '../components/useEscape';
import { awards } from '../data/awards';

export default function Awards() {
  const [open, setOpen] = useState(null);
  useEscape(open, () => setOpen(null));

  return (
    <Page title="Awards" wide>
      <h1>Awards</h1>
      <p className="lead">Recognition for game development, engineering and academics.</p>
      <div className="grid spaced">
        {awards.map((award) => (
          <button key={award.name} className="card award" onClick={() => setOpen(award)}>
            <img src={award.image} alt={award.name} loading="lazy" />
            <span className="card-body">
              <span className="eyebrow">{award.date}</span>
              <strong>{award.name}</strong>
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <img src={open.image} alt={open.name} />
        </div>
      )}
    </Page>
  );
}
