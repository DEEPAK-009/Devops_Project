import "../styles/home.css";

const Home = () => {
  const year = new Date().getFullYear();

  return (
    <div className="cover">
      <header className="cover__topbar">
        <a className="cover__brand" href="#top">
          <span className="cover__brand-mark" aria-hidden="true" />
          <span className="cover__brand-text">DevOps Project</span>
        </a>
        <nav className="cover__nav" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a className="cover__nav-cta" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="cover__hero" aria-labelledby="hero-title">
          <p className="cover__eyebrow">Ship with confidence</p>
          <h1 id="hero-title" className="cover__headline">
            Build, test, and deploy from one place...
          </h1>
          <p className="cover__lede">
            A clean frontend wired for your CI/CD pipeline—lint, build, and container
            images ready when you push.
          </p>
          <div className="cover__actions">
            <a className="cover__btn cover__btn--primary" href="#features">
              Explore
            </a>
            <a className="cover__btn cover__btn--ghost" href="#contact">
              Reach out
            </a>
          </div>
        </section>

        <section id="features" className="cover__section" aria-labelledby="features-title">
          <div className="cover__section-head">
            <h2 id="features-title">Why this stack</h2>
            <p>Everything you need for a dependable release flow.</p>
          </div>
          <ul className="cover__grid">
            <li className="cover__card">
              <div className="cover__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                  <path
                    d="M4 6h16M4 12h10M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Consistent checks</h3>
              <p>Automated lint and build steps catch issues before they reach production.</p>
            </li>
            <li className="cover__card">
              <div className="cover__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Container-ready</h3>
              <p>Production assets ship in a minimal nginx image for predictable deploys.</p>
            </li>
            <li className="cover__card">
              <div className="cover__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M12 6v6l4 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Fast feedback</h3>
              <p>Push to main and your pipeline runs the same steps every time.</p>
            </li>
          </ul>
        </section>

        <section id="about" className="cover__band">
          <div className="cover__band-inner">
            <h2>Built for clarity</h2>
            <p>
              This cover page is intentionally simple: one route, no backend coupling, and a
              layout that works on phones and desktops. Use it as the face of your project
              while your pipeline does the heavy lifting.
            </p>
          </div>
        </section>

        <section id="contact" className="cover__cta">
          <h2>Ready when you are</h2>
          <p>Swap this section for a form, email link, or docs—still one page.</p>
          <a className="cover__btn cover__btn--primary cover__btn--lg" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </section>
      </main>

      <footer className="cover__footer">
        <div className="cover__footer-inner">
          <span className="cover__footer-brand">DevOps Project</span>
          <div className="cover__footer-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <small className="cover__copyright">&copy; {year} All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};

export default Home;
