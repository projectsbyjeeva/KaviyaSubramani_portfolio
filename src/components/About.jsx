import { assetUrl } from "../utils";
export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-label">02 / ABOUT ME</div>
        <div className="about-layout">
          <h2 id="about-title">
            Software for
            <br />
            <span>the way people work.</span>
          </h2>
          <div className="about-copy">
            <p className="lead">
              I&#x27;m a full stack developer with experience building HRMS
              platforms, ERP systems, and government portals.
            </p>
            <p>
              My work connects responsive interfaces, application logic, and
              data. At Ascent E-Digit Solutions, I develop tools that support
              employee workflows, permit approvals, and library operations.
            </p>
            <p>
              My earlier roles at Vyoog Information covered ERP development and
              DevOps — from improving API performance and database queries to
              coordinating reliable releases.
            </p>
            <a
              className="button outline"
              href={assetUrl("images/Kaviya_Subramani.pdf")}
              download="Kaviya_Subramani_Resume.pdf"
            >
              Download Resume <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="impact-row">
          <div>
            <strong>
              100<span>+</span>
            </strong>
            <p>Employees supported by the HRMS</p>
          </div>
          <div>
            <strong>
              35<span>%</span>
            </strong>
            <p>Reduction in manual HR effort</p>
          </div>
          <div>
            <strong>
              30<span>%</span>
            </strong>
            <p>Faster ERP backend processing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
