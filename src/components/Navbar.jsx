import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon } from './Icons';

const links = [
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/experience', 'Experience'],
  ['/awards', 'Awards'],
  ['/notes', 'Notes'],
  ['/resume', 'Resume'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(document.documentElement.dataset.theme);
  const { pathname } = useLocation();

  // Close the mobile menu and start each page at the top.
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    const apply = () => { document.documentElement.dataset.theme = next; };
    // Crossfade between themes in browsers that support it.
    document.startViewTransition ? document.startViewTransition(apply) : apply();
    try { localStorage.theme = next; } catch (e) {}
    setTheme(next);
  }

  return (
    <header className={open ? 'nav open' : 'nav'}>
      <div className="nav-inner">
        <Link to="/" className="brand">Dean Wu</Link>
        <nav className="nav-links">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))}
        </nav>
        <button
          className="icon-button theme-toggle"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
        <button className="menu" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
