export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">RumiAxolotl</a>
      <nav className="navbar-links" aria-label="Navigation">
        <a href="#home">Home</a>
        <a href="https://rumiaxolotl.github.io/portfolio/">Portfolio</a>
        <a href="https://rumiaxolotl.xyz/portfolio/#about">About</a>
        <a href="https://rumiaxolotl.xyz/portfolio/#contact">Contact</a>
      </nav>
    </header>
  );
}
