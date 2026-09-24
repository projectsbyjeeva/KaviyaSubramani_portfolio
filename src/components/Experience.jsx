export default function Experience() {
  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-heading">
          <span>MY PROFESSIONAL JOURNEY</span>
          <h2 id="experience-title">Work Experience</h2>
          <p className="experience-intro">
            Building business applications, improving performance, and
            supporting reliable releases.
          </p>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-card">
              <div className="experience-meta">
                <span className="year">Aug 2025 – Present</span>
                <span className="current-role">Current role</span>
              </div>
              <h3>Junior Software Developer</h3>
              <h4>Ascent E-Digit Solutions Pvt. Ltd.</h4>
              <p className="experience-location">Erode, India</p>
              <ul className="experience-achievements">
                <li>
                  Built an HRMS covering leave, attendance, payroll, and
                  multi-level approvals for 100+ employees, reducing manual HR
                  effort by 35%.
                </li>
                <li>
                  Developed the V.O. Chidambaranar Port Trust permit and
                  registration system with Laravel, including role-based access,
                  approval workflows, tracking, and audit logs.
                </li>
                <li>
                  Built a Library Management System with cataloguing, member
                  registration, issue/return workflows, overdue fines, and
                  inventory reports.
                </li>
                <li>
                  Designed RESTful APIs, real-time data sync, and admin
                  dashboards using modular architecture and Git version control.
                </li>
              </ul>
              <ul className="experience-stack" aria-label="Technologies used">
                <li>React.js</li>
                <li>Python</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>REST API</li>
                <li>Git</li>
              </ul>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-card">
              <div className="experience-meta">
                <span className="year">May 2025 – Aug 2025</span>
              </div>
              <h3>DevOps Engineer</h3>
              <h4>Vyoog Information Pvt. Ltd.</h4>
              <p className="experience-location">Coimbatore, India</p>
              <ul className="experience-achievements">
                <li>
                  Managed CI/CD pipelines and deployments for an ERP covering
                  inventory, HR, and accounting, serving 50+ concurrent users.
                </li>
                <li>
                  Implemented structured release management and
                  environment-specific configurations to reduce rollback
                  incidents and deployment downtime.
                </li>
                <li>
                  Coordinated build, test, and release cycles with development
                  and QA teams; monitored production performance and provided
                  diagnostics.
                </li>
              </ul>
              <ul className="experience-stack" aria-label="Technologies used">
                <li>Java (basics)</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-card">
              <div className="experience-meta">
                <span className="year">Mar 2025 – May 2025</span>
              </div>
              <h3>Software Developer Intern</h3>
              <h4>Vyoog Information Pvt. Ltd.</h4>
              <p className="experience-location">Coimbatore, India</p>
              <ul className="experience-achievements">
                <li>
                  Optimized Java-based ERP modules for 50+ active users,
                  improving backend processing speed by 30%.
                </li>
                <li>
                  Integrated REST APIs through AJAX, reducing data sync delays
                  by 40% and error rates by 20%.
                </li>
                <li>
                  Built responsive interfaces with HTML, CSS, and JavaScript,
                  improving cross-device accessibility and user satisfaction by
                  25%.
                </li>
                <li>
                  Managed 10,000+ records in PostgreSQL and MySQL with zero
                  data-integrity incidents.
                </li>
              </ul>
              <ul className="experience-stack" aria-label="Technologies used">
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>REST API</li>
                <li>AJAX</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Git</li>
              </ul>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-card">
              <div className="experience-meta">
                <span className="year">Jan 2025 – Mar 2025</span>
              </div>
              <h3>Web Developer Intern</h3>
              <h4>Ascent E-Digit Solutions Pvt. Ltd.</h4>
              <p className="experience-location">Erode, India</p>
              <ul className="experience-achievements">
                <li>
                  Built secure web applications with Laravel and MySQL,
                  improving data processing efficiency by 25%.
                </li>
                <li>
                  Developed CRUD operations for 1,000+ database records to
                  streamline internal content management.
                </li>
                <li>
                  Optimized queries to reduce retrieval time by 30% and improved
                  application reliability by 20% through secure data handling.
                </li>
              </ul>
              <ul className="experience-stack" aria-label="Technologies used">
                <li>PHP</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
