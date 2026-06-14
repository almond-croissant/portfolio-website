import "./index.css";

export default function App() {
  return (
    <div className="container">
      <section className="hero">
        <div className="accent"></div>

        <div>
          <p className="intro">Hello, I'm</p>

          <h1>
            Sushanth
            <br />
            Bhat
          </h1>

          <div className="status">Researching Machine Unlearning @ CoDMAV</div>

          <p className="hero-text">
            Computer Science student at PES University exploring AI, software
            engineering, startups, and research.
          </p>

          <div className="links">
            <a href="https://github.com/almond-croissant">GitHub</a>

            <a href="https://www.linkedin.com/in/sushanth-bhat-04a190360/">
              LinkedIn
            </a>

            <a
              href="/my-resume-2.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2>About</h2>

        <p>
          I enjoy building things from scratch, whether that's a research
          project, a web application, or an event. Currently working on machine
          unlearning security research while exploring deep learning, product
          thinking, and startup ecosystems.
        </p>
      </section>

      <section>
        <h2>Currently</h2>

        <div className="card">
          <ul className="now">
            <li>Researching machine unlearning security</li>
            <li>Learning neural networks and deep learning</li>
            <li>Building software projects</li>
            <li>Exploring startups and product management</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Selected Work</h2>

        <div className="card">
          <h3>Baby Safety Monitor</h3>

          <p>
            Real-time infant monitoring using YOLOv8 pose estimation, breathing
            estimation through FFT analysis, Flask backend, and React
            visualization.
          </p>
        </div>

        <div className="card">
          <h3>Interactive Historical Event Map</h3>

          <p>
            Full-stack web application for visualizing and exploring historical
            events.
          </p>

          <a
            href="https://github.com/almondcrossaint/Interactive-Historical-Event-Map"
            target="_blank"
          >
            View Project →
          </a>
        </div>
      </section>

      <section>
        <h2>Research</h2>

        <div className="card">
          <h3>Machine Unlearning Security</h3>

          <p>
            Undergraduate Research Intern at CoDMAV working on machine
            unlearning attacks, adversarial machine learning, and data
            attribution.
          </p>
        </div>
      </section>

      <section>
        <h2>Beyond Code</h2>

        <div className="card">
          <h3>Music Club Co-Head</h3>

          <p>
            Coordinated Treble & Tale and supported planning and execution of
            club activities and performances.
          </p>
        </div>

        <div className="card">
          <h3>Design Teams</h3>

          <p>
            Created promotional content and event posters for Rotaract Club and
            Apostrophe Club.
          </p>
        </div>
      </section>

      <section>
        <h2>Contact</h2>

        <p>Interested in AI, research, startups, and interesting problems.</p>

        <a href="mailtosushanthbhat59@gmail.com">sushanthbhat59@gmail.com</a>
      </section>

      <footer>Built with React, curiosity, and excessive caffeine.</footer>
    </div>
  );
}
