import { useState } from 'react';
import Page from '../components/Page';
import useEscape from '../components/useEscape';
import { Printer, Close } from '../components/Icons';

function Entry({ title, date, points }) {
  return (
    <div className="entry">
      <div className="entry-head">
        <h3>{title}</h3>
        <span className="muted">{date}</span>
      </div>
      {points && <ul>{points.map((point, i) => <li key={i}>{point}</li>)}</ul>}
    </div>
  );
}

export default function Resume() {
  const [preview, setPreview] = useState(false);
  useEscape(preview, () => setPreview(false));

  return (
    <Page title="Resume">
      <div className="title-row">
        <h1>Dean Wu</h1>
        <button className="icon-button" aria-label="Preview and download resume" title="Preview and download" onClick={() => setPreview(true)}>
          <Printer />
        </button>
      </div>
      <p className="muted">
        <a href="mailto:thisisdeanwu@gmail.com">thisisdeanwu@gmail.com</a> ·{' '}
        <a href="https://github.com/probably-dean-wu" target="_blank" rel="noreferrer">github.com/probably-dean-wu</a>
      </p>

      <h2>Education</h2>
      <Entry title="University of Toronto" date="September 2023 – Present" />
      <Entry title="Loyola Catholic Secondary School" date="September 2019 – June 2023" />

      <h2>Experience</h2>
      <Entry title="LLM Engineer Intern – China Telecom (TeleAI)" date="May 2026 – August 2026" />
      <Entry title="Software Engineer – University of Toronto Autonomous Scale Racing (UTASR)" date="October 2025 – May 2026" />
      <Entry
        title="Lead Software Engineer – Loyola C.S.S. Robotics Team"
        date="2022 – 2023"
        points={[
          'Designed and programmed opening and closing mechanisms for a doorway mechanic.',
          'Aided in building the hardware components of the robot such as making sure the connection between controller and robot was successful.',
        ]}
      />
      <Entry
        title="Project Manager / Lead Software Engineer – Loyola C.S.S. Game Making Team"
        date="2022"
        points={[
          <>Successfully led a team of three to <b>first place</b> in a competitive game-making contest hosted by Sheridan College and DPCDSB (Dufferin-Peel Catholic District School Board).</>,
          'Created and executed a comprehensive project plan, ensuring timely delivery of milestones and a high-quality final product.',
          "Designed and implemented the game's architecture, writing clean, efficient code and utilizing GameMaker Studio 2 to the maximum potential.",
          'Conducted thorough quality assurance and testing processes, ensuring the game met all thematic and technical requirements for a polished user experience.',
          'Facilitated clear communication with team members, promoting collaboration through code reviews and map designs.',
          'Stepped up to take additional shifts and responsibilities when a team member fell extremely ill and required surgery, ensuring the project remained on track and met the deadline.',
        ]}
      />
      <Entry
        title="Artesian – Basil Box"
        date="2021 – 2022"
        points={[
          'Maintained and cleaned the kitchen, seating area, and front counters by efficiently washing, rinsing and sanitizing countertops, equipment and dishes.',
          'Skillfully operated industrial level dishwashers ensuring all items were cleaned to high standards and promptly restocked for use.',
          'Followed all health and safety regulations set by the FDA, including proper use of chemicals and maintaining cleanliness to prevent contamination.',
          'Worked effectively with kitchen and front staff members to ensure smooth operations at both the front and back end.',
        ]}
      />

      <h2>Volunteer</h2>
      <Entry
        title="Computer Science Skills Demonstrator – Loyola C.S.S."
        date="2023"
        points={['Showcased SpringField Village and HTML portfolio to parents at Loyola C.S.S.']}
      />
      <Entry
        title="Junior Swim Instructor – South Common Community Centre"
        date="2019"
        points={[
          'Aided lead swim instructors in conducting swimming lessons and water safety instruction.',
          'Supervised and engaged with students to maintain safety and ensure proper techniques.',
          'Demonstrated swimming skills and techniques to students.',
          'Communicated effectively with students and staff members.',
        ]}
      />

      <h2>Awards</h2>
      <Entry
        title="Best Technical Video Game"
        date="2023"
        points={[
          'Recognized for the outstanding advancements in technical aspects of game development including graphics, physics and performance.',
          'Awarded by Loyola Catholic Secondary School for pushing the boundaries of technology to create immersive, seamless, and innovative gameplay experiences.',
        ]}
      />
      <Entry
        title="Certificate of Academic Excellence – Computer Engineering"
        date="2023"
        points={[
          'Awarded by Loyola Catholic Secondary School for outstanding academic performance and exceptional achievement in the field of Computer Engineering.',
          'Recognized for maintaining a high level of scholastic excellence and demonstrating a profound understanding of key engineering principles and practices.',
        ]}
      />
      <Entry
        title="Best Themed Video Game"
        date="2022"
        points={[
          'Recognized for creating the most compelling and creatively themed game.',
          'Awarded by Dufferin-Peel Catholic District School Board (DPCDSB) and Sheridan College for excellence in game design, artistic vision, and thematic execution.',
        ]}
      />
      <Entry
        title="Computer Studies Award"
        date="2022"
        points={[
          'Honoured for exceptional achievement and excellence in computer studies.',
          'Awarded by Loyola Catholic Secondary School for demonstrating outstanding skills, knowledge, and innovation in the field of computer science and technology.',
        ]}
      />

      <h2>Skills</h2>
      <p>
        <b>Languages</b> – Java, Python, ReactJS, HTML, CSS, JavaScript, GameMaker Language, Arduino Language,
        NodeJS, NPM, Raspberry Pi, MUI
      </p>

      {preview && (
        <div className="overlay" onClick={() => setPreview(false)}>
          <div className="sheet" role="dialog" aria-label="Resume preview" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-bar">
              <span className="muted">Dean_Wu_Resume.pdf</span>
              <a className="button small" href="/Dean_Wu_Resume.pdf" download>Download</a>
              <button className="icon-button" aria-label="Close preview" onClick={() => setPreview(false)}>
                <Close />
              </button>
            </div>
            <div className="sheet-body">
              <img src="/resume-preview.webp" width="1632" height="2112" alt="Preview of the resume PDF" />
            </div>
          </div>
        </div>
      )}
    </Page>
  );
}
