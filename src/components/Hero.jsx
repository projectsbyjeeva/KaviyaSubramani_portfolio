export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-kicker">
          <span>FULL STACK DEVELOPER</span>
          <span>BASED IN ERODE, TAMIL NADU</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="intro-name">Hello, I&#x27;m Kaviya Subramani.</p>
            <h1 id="hero-title">
              Purpose in
              <br />
              every <span>line of code.</span>
            </h1>
            <p className="hero-description">
              I build applications that make complex work simpler — from
              employee management to enterprise operations and government
              services.
            </p>
            <a className="button primary" href="#projects">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
          </div>
          <aside className="hero-panel" aria-label="Professional overview">
            <div className="panel-top">
              <span>DEVELOPER / AT A GLANCE</span>
              <span aria-hidden="true">&#123; ks &#125;</span>
            </div>
            <p className="panel-role">
              From interface
              <br />
              to <em>impact.</em>
            </p>
            <dl>
              <div>
                <dt>Currently</dt>
                <dd>
                  Junior Software Developer
                  <br />
                  <span>Ascent E-Digit Solutions</span>
                </dd>
              </div>
              <div>
                <dt>Working across</dt>
                <dd>React · Python · Laravel · SQL</dd>
              </div>
              <div>
                <dt>Building</dt>
                <dd>HRMS · ERP · Government portals</dd>
              </div>
            </dl>
            <div className="panel-bottom">
              <span className="status-dot" aria-hidden="true"></span>Thoughtful
              interfaces. Practical solutions.
            </div>
          </aside>
        </div>
        <div className="hero-bottom">
          <span>01 / INTRODUCTION</span>
          <a href="#about">
            A little more about me <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
