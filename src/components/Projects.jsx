import ProjectGallery from "./ProjectGallery";
import { galleries } from "../data/galleries";
export default function Projects() {
  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-label">05 / SELECTED WORK</div>
        <div className="section-title-row">
          <h2 id="projects-title">
            Real problems.
            <br />
            <span>Working solutions.</span>
          </h2>
          <p>
            A selection of professional and personal projects, with the work
            behind each result.
          </p>
        </div>
        <div className="work-grid">
          <article className="work-card work-featured">
            <div className="work-details">
              <div className="work-top">
                <span>HR PLATFORM · AUG 2025 — PRESENT</span>
                <span className="work-number">01</span>
              </div>
              <h3>Human Resource Management System</h3>
              <p className="work-subtitle">
                One place for the employee lifecycle.
              </p>
              <p>
                Built onboarding, leave, attendance, payroll, and multi-level
                approvals, with dashboards and role-based access for employees,
                managers, and HR admins.
              </p>
              <div className="work-result">
                <strong>100+ employees</strong>
                <span>35% less manual HR effort</span>
              </div>
              <ul className="skill-tags" aria-label="Technologies used">
                <li>React.js</li>
                <li>Python</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>REST API</li>
              </ul>
            </div>
            <ProjectGallery name="HRMS" screenshots={galleries.hrms} />
          </article>
          <article className="work-card work-featured">
            <div className="work-details">
              <div className="work-top">
                <span>LIBRARY OPERATIONS · ASCENT E-DIGIT SOLUTIONS</span>
                <span className="work-number">02</span>
              </div>
              <h3>Library Management System</h3>
              <p className="work-subtitle">
                From the catalogue to the next reader.
              </p>
              <p>
                Built library workflows for cataloguing, member registration,
                book issues and returns, overdue fine calculation, and inventory
                reporting.
              </p>
              <div className="work-result">
                <strong>Complete library workflows</strong>
                <span>Catalogue · Circulation · Fines · Reports</span>
              </div>
            </div>
            <ProjectGallery name="LMS" screenshots={galleries.lms} />
          </article>
          <article className="work-card">
            <div className="work-top">
              <span>GOVERNMENT PORTAL · AUG 2025 — PRESENT</span>
              <span className="work-number">03</span>
            </div>
            <h3>VOC Port Permit &amp; Registration</h3>
            <p className="work-subtitle">
              Clearer workflows for complex approvals.
            </p>
            <p>
              Developed online permit applications, document submission,
              approval workflows, and status tracking for V.O. Chidambaranar
              Port Trust. Added authentication, audit logs, SLA tracking, and
              department dashboards.
            </p>
            <div className="work-result">
              <strong>Permit to approval</strong>
              <span>Tracked across departments</span>
            </div>
            <ul className="skill-tags" aria-label="Technologies used">
              <li>Laravel</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>REST API</li>
            </ul>
          </article>
          <article className="work-card">
            <div className="work-top">
              <span>ENTERPRISE SOFTWARE · MAR — AUG 2025</span>
              <span className="work-number">04</span>
            </div>
            <h3>Inventory, HR &amp; Accounting ERP</h3>
            <p className="work-subtitle">
              Connected operations. Faster processing.
            </p>
            <p>
              Optimized Java-based ERP modules and database queries, integrated
              REST APIs for real-time updates, and supported deployment
              workflows for a multi-module business platform.
            </p>
            <div className="work-result">
              <strong>30% faster processing</strong>
              <span>40% less data sync delay</span>
            </div>
            <ul className="skill-tags" aria-label="Technologies used">
              <li>Java</li>
              <li>JavaScript</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>REST API</li>
            </ul>
          </article>
          <article className="work-card">
            <div className="work-top">
              <span>FULL-STACK PROJECT · JUL 2025</span>
              <span className="work-number">05</span>
            </div>
            <h3>Mini Task Tracker</h3>
            <p className="work-subtitle">
              Every task, a little more organized.
            </p>
            <p>
              Built a MERN task management application with CRUD functionality,
              optimized state management, and API integration. Improved frontend
              performance through more efficient component rendering.
            </p>
            <div className="work-result">
              <strong>40% faster frontend load</strong>
              <span>Full-stack MERN application</span>
            </div>
            <ul className="skill-tags" aria-label="Technologies used">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
