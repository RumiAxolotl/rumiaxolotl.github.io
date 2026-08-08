import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const links = [
  { label: 'Home', href: 'https://rumiaxolotl.site/' },
  { label: 'Portfolio', href: 'https://portfolio.rumiaxolotl.site/' },
  { label: 'About', href: 'https://portfolio.rumiaxolotl.site/#about' },
  { label: 'Experience', href: 'https://portfolio.rumiaxolotl.site/#experience' },
  { label: 'Projects', href: 'https://portfolio.rumiaxolotl.site/#projects' },
  { label: 'Contact', href: 'https://portfolio.rumiaxolotl.site/#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="https://rumiaxolotl.site/" className="navbar-brand">RumiAxolotl</a>

      <nav className={`navbar-links ${open ? 'open' : ''}`} aria-label="Navigation">
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <i className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} />
        </button>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i className="fa-solid fa-bars" />
        </button>
      </div>
    </header>
  );
}