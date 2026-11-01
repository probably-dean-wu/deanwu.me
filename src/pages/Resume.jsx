import { useState } from 'react';
import Page from '../components/Page';
import useEscape from '../components/useEscape';
import { Printer, Close } from '../components/Icons';

function Entry({ title, date, subtitle, place, points }) {
  return (
    <div className="entry">
      <div className="entry-head">
        <h3>{title}</h3>
        {date && <span className="muted">{date}</span>}
      </div>
      {(subtitle || place) && (
        <div className="entry-sub muted">
          {subtitle && <i>{subtitle}</i>}
          {place && <span>{place}</span>}
        </div>
      )}
      {points && <ul>{points.map((point, i) => <li key={i}>{point}</li>)}</ul>}
    </div>
  );
}

// Bulleted point with a bold lead-in, matching the PDF resume's style.
function Point({ label, children }) {
  return <><b>{label}:</b> {children}</>;
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
      <Entry
        title="University of Toronto"
        date="September 2023 – Present"
        subtitle="Bachelor of Science in Computer Science, Statistics and Mathematics"
        place="Mississauga, Canada"
      />

      <h2>Experience</h2>
      <Entry
        title="China Telecom (TeleAI)"
        date="May 2026 – August 2026"
        subtitle="LLM Engineer Intern"
        place="Beijing, China"
        points={[
          <Point label="WeCom AI Assistant">
            Built a LangChain/LangGraph ReAct agent for WeCom (WeChat Work) that creates, reads, edits, and searches company
            documents and spreadsheets using LLMs (DeepSeek and Kimi), streaming replies over a persistent WebSocket connection
            with per-user conversation memory by using vector databases mixed with JSON metadata filtering.
          </Point>,
          <Point label="Agent Skills & Context Design">
            Built a modular skill architecture (docs, sheets, search, memory, file uploads) on a shared JSON tool dispatcher, and
            used Google&apos;s OKF method to give the LLM short Markdown skill summaries, so it knew its tools without being
            overloaded by lengthy descriptions, greatly speeding up responses.
          </Point>,
          <Point label="Agent Gym">
            Contributed the harness-side agent loop for an internal agent gym (sandboxed RL environment) used for agent training
            and data synthesis: the agent plans a JSON TODO list of subtasks with shell check commands, the harness drives each
            step, then runs a final verification pass and re-prompts failed items with stdout/stderr feedback until checks pass.
          </Point>,
          <Point label="Coding Harness">
            Helped design an internal coding-agent harness, contributing core features such as agent loop and auto-dreaming.
          </Point>,
        ]}
      />
      <Entry
        title="UTASR (University of Toronto Autonomous Scale Racing)"
        date="October 2025 – May 2026"
        subtitle="Software & Optimization Engineer"
        place="Toronto, Canada"
        points={[
          <Point label="Nvidia Jetson Orin NX">
            Architecting a stable, high-performance runtime on a headless Jetson Orin NX, using Python multiprocessing and IPC
            queues to manage parallel ML and Data Engineering workloads.
          </Point>,
          <Point label="Automation">
            Developing a complete system automation and monitoring framework integrating Bash, cron, tegrastats, and htop to
            ensure low-overhead logging (&lt;1ms) and rapid watchdog restarts (&lt;5s).
          </Point>,
          <Point label="Remote System">
            Implementing a robust remote orchestration system via SSH, delivering automated scripts for system startup, health
            checks, and repository updates.
          </Point>,
        ]}
      />
      <Entry
        title="Game Making Team | Loyola C.S.S."
        date="December 2022 – May 2023"
        subtitle="Lead Software Engineer / Project Manager"
        place="Mississauga, Canada"
        points={[
          <Point label="First Place">
            Led a team of three to <b>first place</b> in a competitive game-making contest hosted by Sheridan College and
            DPCDSB (Dufferin-Peel Catholic District School Board).
          </Point>,
          <Point label="Project Management">
            Managed the project&apos;s development using Scrum methods. This involved planning work in focused sprints and
            leading regular team check-ins to meet all deadlines with a high-quality result.
          </Point>,
          <Point label="Software Implementations">
            Led the game development by architecting the project in GameMaker Studio 2, coding core systems (such as movement,
            fighting, quests) in GML, and leading quality assurance in map design and collaborative team code reviews.
          </Point>,
          <Point label="Quality Assurance">
            Conducted thorough quality assurance and testing processes, ensuring the game met all thematic and technical
            requirements for a polished user experience.
          </Point>,
          <Point label="Collaboration">
            Facilitated clear communication with team members, promoting collaboration through code reviews and map designs.
          </Point>,
          <Point label="Ownership">
            Stepped up to take additional shifts and responsibilities when a team member fell extremely ill and required
            surgery, ensuring the project remained on track and met the deadline.
          </Point>,
        ]}
      />
      <Entry
        title="Robotics Team | Loyola C.S.S."
        date="September 2022 – March 2023"
        subtitle="Lead Software Engineer"
        place="Mississauga, Canada"
        points={[
          <Point label="Automated Doorway System">
            Developed C++ firmware for an Arduino microcontroller to manage the control logic and actuation of an automated
            doorway system in a remote-controlled floor hockey robot.
          </Point>,
          <Point label="Physical Structure">
            Designed and fabricated a custom chassis to house and integrate the control system (Arduino, sensors, actuators)
            for a remote-controlled floor hockey robot.
          </Point>,
          <Point label="Hardware Integration">
            Aided in building the robot&apos;s hardware components, including making sure the connection between the
            controller and the robot was reliable.
          </Point>,
        ]}
      />
      <Entry
        title="Basil Box"
        date="2021 – 2022"
        subtitle="Artisan"
        points={[
          'Maintained and cleaned the kitchen, seating area, and front counters by efficiently washing, rinsing and sanitizing countertops, equipment and dishes.',
          'Skillfully operated industrial level dishwashers ensuring all items were cleaned to high standards and promptly restocked for use.',
          'Followed all Ontario food safety and health regulations, including proper use of chemicals and maintaining cleanliness to prevent contamination.',
          'Worked effectively with kitchen and front staff members to ensure smooth operations at both the front and back end.',
        ]}
      />

      <h2>Projects</h2>
      <Entry
        title="Discord AI"
        points={[
          'Developed a multimodal Discord AI bot with autonomous agents for web search, stock/crypto tracking, weather forecasting, and gaming statistics using Python, LangChain, Vision AI, and Upstash Redis for persistent memory.',
        ]}
      />
      <Entry
        title="Project Mura"
        points={['Developed a top-down 2D action game using GameMaker Studio 2 with custom GLSL shader programming.']}
      />
      <Entry
        title="deanwu.me"
        points={['Developed and deployed a responsive personal portfolio website using React, React Router, and Vite with custom CSS.']}
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
        <b>Languages</b> – Python, Java, GameMaker Language, RISC-V Assembly, C++
      </p>
      <p>
        <b>Technologies</b> – LangChain, LangGraph, ChromaDB, asyncio, Pydantic, pytest, React, Vite, NPM, Upstash, NodeJS,
        Raspberry Pi, Arduino, Git
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
