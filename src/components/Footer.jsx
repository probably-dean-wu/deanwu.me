const socials = [
  ['Instagram', 'https://www.instagram.com/probably_dean_wu/'],
  ['Facebook', 'https://www.facebook.com/almighty.dean.wu'],
  ['LinkedIn', 'https://www.linkedin.com/in/dean-wu-86ba0b252/'],
  ['X', 'https://twitter.com/Dean_Wu1'],
  ['GitHub', 'https://github.com/probably-dean-wu'],
  ['Email', 'mailto:thisisdeanwu@gmail.com'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <nav>
          {socials.map(([name, href]) => (
            <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>
          ))}
        </nav>
        <p>Copyright © {new Date().getFullYear()} deanwu.me</p>
      </div>
    </footer>
  );
}
