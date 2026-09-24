export default function Education() {
  return (
    <section
      className="education"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <div className="section-label">06 / FOUNDATIONS</div>
        <div className="education-layout">
          <h2 id="education-title">
            Always a<br />
            <span>work in progress.</span>
          </h2>
          <div className="education-list">
            <article>
              <span className="education-date">2025 / DEGREE</span>
              <h3>B.E. Biomedical Engineering</h3>
              <p>Velalar College of Engineering &amp; Technology, Erode</p>
              <span className="education-detail">CGPA 9.08 / 10</span>
            </article>
            <article>
              <span className="education-date">2025 / CERTIFICATION</span>
              <h3>MERN Stack</h3>
              <p>ETS Academy</p>
              <span className="education-detail">
                React, Node.js, Express.js, MongoDB &amp; REST APIs. Built an
                end-to-end e-commerce application.
              </span>
            </article>
            <article>
              <span className="education-date">2023 / CERTIFICATION</span>
              <h3>C Programming</h3>
              <p>Browzone Infotech</p>
              <span className="education-detail">
                Programming fundamentals, algorithmic thinking, and structured
                coding.
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
