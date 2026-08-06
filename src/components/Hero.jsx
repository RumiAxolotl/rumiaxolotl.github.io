export default function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-card">
        <div className="hero-avatar">
          <div className="hero-ring" />
          <img src="/Profile.png" alt="RumiAxolotl profile picture" className="hero-image" />
        </div>

        <p className="eyebrow">Hello, I&apos;m</p>
        <h1 className="name">RumiAxolotl</h1>

        <p className="quote">Smile Alot Liek An Axolotl</p>
        <p className="sub">Welcome to my little corner of the internet.</p>

        <div className="cta">
          <a className="btn btn-primary" href="https://rumiaxolotl.github.io/portfolio/">
            <i className="fa-solid fa-briefcase" /> View My Portfolio
          </a>
          <a className="btn btn-ghost" href="https://rumiaxolotl.xyz/portfolio/#contact">
            <i className="fa-solid fa-envelope" /> Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}
