export default function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills-heading">
          <div>
            <span className="skills-eyebrow">THE ENGINEERING TOOLKIT</span>
            <h2 id="skills-title">
              Built with intent.
              <br />
              <span>Backed by experience.</span>
            </h2>
          </div>
          <p className="skills-intro">
            From the first interaction to the final release — the technologies I
            use to bring applications to life.
          </p>
        </div>
        <div className="skills-strip" aria-hidden="true">
          <span>STACK / OVERVIEW</span>
          <span>INTERFACE → LOGIC → DATA → DELIVERY</span>
        </div>
        <div className="tech-grid">
          <article className="tech-card">
            <div className="tech-card-top">
              <span className="tech-symbol" aria-hidden="true">
                &lt;/&gt;
              </span>
              <span className="tech-number" aria-hidden="true">
                /01
              </span>
            </div>
            <p className="tech-label">THE INTERFACE</p>
            <h3>Frontend</h3>
            <ul className="skill-tags" aria-label="Frontend skills">
              <li>React.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>AJAX</li>
              <li>Responsive Design</li>
            </ul>
            <p className="tech-footnote">Responsive by design</p>
          </article>
          <article className="tech-card">
            <div className="tech-card-top">
              <span className="tech-symbol" aria-hidden="true">
                &#123; &#125;
              </span>
              <span className="tech-number" aria-hidden="true">
                /02
              </span>
            </div>
            <p className="tech-label">THE LOGIC</p>
            <h3>Backend</h3>
            <ul className="skill-tags" aria-label="Backend skills">
              <li>Python</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Java (basics)</li>
              <li>REST APIs</li>
            </ul>
            <p className="tech-footnote">Connected through APIs</p>
          </article>
          <article className="tech-card">
            <div className="tech-card-top">
              <span className="tech-symbol" aria-hidden="true">
                [=]
              </span>
              <span className="tech-number" aria-hidden="true">
                /03
              </span>
            </div>
            <p className="tech-label">THE DATA</p>
            <h3>Databases</h3>
            <ul className="skill-tags" aria-label="Databases skills">
              <li>SQL</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Schema Design</li>
              <li>Query Optimization</li>
              <li>CRUD</li>
            </ul>
            <p className="tech-footnote">Structured for performance</p>
          </article>
          <article className="tech-card">
            <div className="tech-card-top">
              <span className="tech-symbol" aria-hidden="true">
                $_
              </span>
              <span className="tech-number" aria-hidden="true">
                /04
              </span>
            </div>
            <p className="tech-label">THE DELIVERY</p>
            <h3>Tools &amp; DevOps</h3>
            <ul className="skill-tags" aria-label="Tools &amp; DevOps skills">
              <li>Git</li>
              <li>GitHub</li>
              <li>CI/CD Pipelines</li>
              <li>Postman</li>
              <li>Release Management</li>
            </ul>
            <p className="tech-footnote">Versioned. Tested. Released.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
