import { useEffect } from "react";
import "./App.css";

function App() {

  useEffect(() => {
    const hero = document.querySelector(".hero");

    if (!hero) return;

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      hero.style.setProperty("--cursor-x", `${x}px`);
      hero.style.setProperty("--cursor-y", `${y}px`);
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  // Scroll animation for Experience and Education
  useEffect(() => {
    const cards = document.querySelectorAll(
      "#experience .timeline-item, #education .timeline-item"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("journey-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card, index) => {
      card.classList.add(
        index % 2 === 0
          ? "journey-from-left"
          : "journey-from-right"
      );
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Cursor-reactive background for Experience and Education
  useEffect(() => {
    const sections = document.querySelectorAll(
      "#experience, #education"
    );

    const handlePointerMove = (event) => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        section.style.setProperty("--glow-x", `${x}%`);
        section.style.setProperty("--glow-y", `${y}%`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);


  return (
    <div className="portfolio">

      {/* ================= NAVIGATION ================= */}

      <nav className="navbar">
        <div className="logo">
          RIKTA<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="resume-button" href="#contact">
          Resume
        </a>
      </nav>


      {/* ================= HERO ================= */}

      <main className="hero">
<div className="cursor-glow"></div>
        <div className="hero-content">


          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Rikta <span>Maity</span>
          </h1>

          <h2>
            AI/ML <span>•</span> Cybersecurity <span>•</span> Cryptography
          </h2>

          <p className="hero-description">
            Computer Science and Engineering student passionate about
            building intelligent, secure and privacy-preserving solutions
            through AI, cybersecurity, cryptography and emerging technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>

          </div>

          <div className="hero-tags">
            <span>Research</span>
            <span>Innovation</span>
            <span>Hackathons</span>
          </div>

        </div>


        {/* Hero Visual */}


    <div className="hero-visual">

<div className="hero-profile">

  <div className="hero-profile-glow"></div>

  <div className="hero-profile-ring">

    <img
      src="/rikta-profile.jpeg"
      alt="Rikta Maity"
      className="hero-profile-image"
    />

  </div>

</div>
</div>

  

      </main>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="section-heading">

          <p className="section-number">01 / ABOUT</p>

          <h2>
            Building technology
            <span> with purpose.</span>
          </h2>

        </div>

        <div className="about-content">

          <div className="about-text">

            <p>
              I am a Computer Science and Engineering student with a strong
              interest in Artificial Intelligence, Machine Learning,
              Cybersecurity, Cryptography and emerging technologies.
            </p>

            <p>
              My work spans privacy-preserving systems, post-quantum
              cryptography, predictive analytics, blockchain and IoT.
              I enjoy exploring challenging problems through research,
              technical projects and hackathons.
            </p>

            <p>
              I believe technology becomes meaningful when it can transform
              a complex problem into a practical and useful solution.
            </p>

          </div>


          <div className="about-cards">

            <div className="info-card">
              <span className="info-icon">🎓</span>
              <h3>Computer Science</h3>
              <p>
                B.Tech in Computer Science & Engineering
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">🤖</span>
              <h3>AI / ML</h3>
              <p>
                Machine Learning & Predictive Analytics
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">🔐</span>
              <h3>Security</h3>
              <p>
                Cryptography & Privacy-Preserving Systems
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">🔬</span>
              <h3>Research</h3>
              <p>
                Research-driven technical projects
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">

        <div className="section-heading">

          <p className="section-number">02 / SKILLS</p>

          <h2>
            Tools I use to
            <span> build.</span>
          </h2>

        </div>


        <div className="skills-grid">

          {/* Programming */}

          <div className="skill-card">

            <div className="skill-top">
              <span className="skill-number">01</span>
              <span className="skill-icon">⌘</span>
            </div>

            <h3>Programming</h3>

            <div className="skill-list">
              <span>C</span>
              <span>Python</span>
            </div>

          </div>


          {/* CS Fundamentals */}

          <div className="skill-card">

            <div className="skill-top">
              <span className="skill-number">02</span>
              <span className="skill-icon">◇</span>
            </div>

            <h3>CS Fundamentals</h3>

            <div className="skill-list">
              <span>Data Structures</span>
              <span>Algorithms</span>
            </div>

          </div>


          {/* AI / ML */}

          <div className="skill-card">

            <div className="skill-top">
              <span className="skill-number">03</span>
              <span className="skill-icon">◉</span>
            </div>

            <h3>AI / ML</h3>

            <div className="skill-list">
              <span>Machine Learning</span>
              <span>Predictive Analytics</span>
              <span>Data Analytics</span>
            </div>

          </div>


          {/* Cryptography */}

          <div className="skill-card">

            <div className="skill-top">
              <span className="skill-number">04</span>
              <span className="skill-icon">⌘</span>
            </div>

            <h3>Cryptography / ZK</h3>

            <div className="skill-list">
              <span>Groth16 zk-SNARKs</span>
              <span>Poseidon Hash</span>
              <span>Circom</span>
              <span>SnarkJS</span>
            </div>

          </div>


          {/* Tools */}

          <div className="skill-card">

            <div className="skill-top">
              <span className="skill-number">05</span>
              <span className="skill-icon">⚙</span>
            </div>

            <h3>Tools & Platforms</h3>

            <div className="skill-list">
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Linux</span>
              <span>Google Colab</span>
              <span>Figma</span>
              <span>Kaggle</span>
            </div>

          </div>


          {/* Research */}

          <div className="skill-card">

            <div className="skill-top">
              <span className="skill-number">06</span>
              <span className="skill-icon">✦</span>
            </div>

            <h3>Research Interests</h3>

            <div className="skill-list">
              <span>Cybersecurity</span>
              <span>Post-Quantum Cryptography</span>
              <span>Privacy</span>
              <span>Emerging Technologies</span>
            </div>

          </div>

        </div>

      </section>


     {/* ================= PROJECTS ================= */}

<section id="projects" className="section projects-section">

  <div className="section-heading">

    <p className="section-number">03 / PROJECTS</p>

    <h2>
      Things I've <span>built.</span>
    </h2>

  </div>


  <div className="projects-list">


    {/* PROJECT 01 */}

    <article className="project-card featured-project">

      <div className="project-number">
        01
      </div>

      <div className="project-content">

        <div className="project-category">
          CYBERSECURITY • RESEARCH
        </div>

        <h3>
          Post-Quantum Cryptography
          <br />
          for 5G/6G Networks
        </h3>

        <p>
          Working on a crypto-agile migration framework to identify
          quantum-vulnerable cryptographic operations in 3GPP 5G/6G
          security and evaluate hybrid and post-quantum alternatives.
        </p>

        <div className="project-tags">

          <span>3GPP</span>
          <span>PQC</span>
          <span>ML-KEM</span>
          <span>ML-DSA</span>
          <span>5G / 6G</span>

        </div>

        <button className="project-button">
          View Project <span>↗</span>
        </button>

      </div>

      <div className="project-visual pqc-visual">

        <div className="visual-grid"></div>

        <div className="visual-core">
          PQC
        </div>

        <div className="visual-node node-1"></div>
        <div className="visual-node node-2"></div>
        <div className="visual-node node-3"></div>
        <div className="visual-node node-4"></div>

      </div>

    </article>


    {/* PROJECT 02 */}

    <article className="project-card">

      <div className="project-number">
        02
      </div>

      <div className="project-content">

        <div className="project-category">
          UNDERGRADUATE RESEARCH • CRYPTOGRAPHY
        </div>

        <h3>
          CRCS —
          <br />
          Collusion-Resistant Credential System
        </h3>

        <p>
          A privacy-preserving credential protocol leveraging Groth16
          zk-SNARKs, Poseidon hash commitments and threshold secret
          sharing to mitigate collusion attacks.
        </p>

        <div className="project-tags">

          <span>Groth16</span>
          <span>zk-SNARKs</span>
          <span>Poseidon</span>
          <span>Circom</span>

        </div>

        <button className="project-button">
          View Project <span>↗</span>
        </button>

      </div>

      <div className="project-visual crcs-visual">

        <div className="lock-symbol">
          🔐
        </div>

        <div className="zk-text">
          ZERO
          <br />
          KNOWLEDGE
        </div>

      </div>

    </article>


    {/* PROJECT 03 */}

    <article className="project-card">

      <div className="project-number">
        03
      </div>

      <div className="project-content">

        <div className="project-category">
          AI • BLOCKCHAIN • IoT
        </div>

        <h3>
          JAGROOK
          <br />
          Tourist Safety System
        </h3>

        <p>
          A smart tourist safety and incident response system combining
          AI anomaly detection, geo-fencing, panic alerts, automated
          e-FIRs and IoT-based risk monitoring.
        </p>

        <div className="project-tags">

          <span>AI</span>
          <span>Blockchain</span>
          <span>IoT</span>
          <span>Geo-fencing</span>

        </div>

        <button className="project-button">
          View Project <span>↗</span>
        </button>

      </div>

      <div className="project-visual jagrook-visual">

        <div className="radar-circle">
          <div className="radar-line"></div>
        </div>

        <div className="location-dot">
          +
        </div>

        <div className="location-label">
          SAFE ZONE
        </div>

      </div>

    </article>


    {/* PROJECT 04 */}

    <article className="project-card">

      <div className="project-number">
        04
      </div>

      <div className="project-content">

        <div className="project-category">
          MACHINE LEARNING • HEALTHCARE
        </div>

        <h3>
          Smart Pharmacy
          <br />
          Predictive Inventory System
        </h3>

        <p>
          A machine-learning based pharmacy model designed to forecast
          medicine demand and help prevent stock-outs of life-saving
          medicines, supported by an interactive Streamlit dashboard.
        </p>

        <div className="project-tags">

          <span>Machine Learning</span>
          <span>Predictive Analytics</span>
          <span>Streamlit</span>

        </div>

        <button className="project-button">
          View Project <span>↗</span>
        </button>

      </div>

      <div className="project-visual pharmacy-visual">

        <div className="chart-bars">

          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>

        <div className="chart-line"></div>

      </div>

    </article>


    {/* PROJECT 05 */}

    <article className="project-card small-project">

      <div className="project-number">
        05
      </div>

      <div className="project-content">

        <div className="project-category">
          ROBOTICS • HARDWARE
        </div>

        <h3>
          IBOT
        </h3>

        <p>
          Built the IBOT Sumobot and contributed to its design,
          hardware setup, strategy and performance for arena battles.
        </p>

        <div className="project-tags">

          <span>Robotics</span>
          <span>Hardware</span>
          <span>Strategy</span>

        </div>

        <button className="project-button">
          View Project <span>↗</span>
        </button>

      </div>

      <div className="project-visual ibot-visual">

        <div className="robot-face">
          <span></span>
          <span></span>
        </div>

        <div className="robot-label">
          IBOT
        </div>

      </div>

    </article>


  </div>

</section>


      {/* ================= RESEARCH ================= */}

<section id="research" className="section research-section">

  <div className="section-heading">

    <p className="section-number">04 / RESEARCH</p>

    <h2>
      Research &
      <span> publications.</span>
    </h2>

    <p className="section-intro">
      Exploring scientific and technological problems through
      experimentation, data analysis and research-driven engineering.
    </p>

  </div>


  <div className="research-list">


    {/* RESEARCH 01 */}

    <article className="research-item">

      <div className="research-year">
        2025
      </div>

      <div className="research-main">

        <div className="research-type">
          PUBLICATION • EXPERIMENTAL STUDY
        </div>

        <h3>
          Study of the Dependence of Refractive Index
          of an Aqueous Solution on Concentration
          and Density Using a Novel Set-Up
        </h3>

        <p>
          Conducted an experimental study to analyze the variation
          of refractive index of NaCl aqueous solutions with
          concentration and density using a self-designed
          spectrometer setup.
        </p>

        <div className="research-details">

          <span>532 nm Laser</span>
          <span>Spectrometer</span>
          <span>NaCl Solution</span>
          <span>Python</span>

        </div>

        <a href="#" className="research-link">
          View Publication <span>↗</span>
        </a>

      </div>

      <div className="research-index">
        01
      </div>

    </article>


    {/* RESEARCH 02 */}

    <article className="research-item">

      <div className="research-year">
        2025–26
      </div>

      <div className="research-main">

        <div className="research-type">
          IOT • PRECISION AGRICULTURE
        </div>

        <h3>
          IoT Based NPK and Humic Acid
          Sensor Device for Orchid Plant
        </h3>

        <p>
          Contributed to the development of an IoT-based sensor
          device for monitoring NPK levels and humic acid in
          orchid plants to support precision agriculture.
        </p>

        <div className="research-details">

          <span>IoT</span>
          <span>NPK Monitoring</span>
          <span>Humic Acid</span>
          <span>Real-Time Data</span>

        </div>

        <a href="#" className="research-link">
          View Research <span>↗</span>
        </a>

      </div>

      <div className="research-index">
        02
      </div>

    </article>


    {/* RESEARCH 03 */}

    <article className="research-item research-active">

      <div className="research-year">
        2026
      </div>

      <div className="research-main">

        <div className="research-type">
          ONGOING RESEARCH • CYBERSECURITY
        </div>

        <h3>
          Post-Quantum Cryptography
          for 5G/6G Networks
        </h3>

        <p>
          Working on a crypto-agile migration framework to identify
          quantum-vulnerable cryptographic operations in 3GPP 5G/6G
          security and evaluate hybrid and post-quantum alternatives
          such as ML-KEM and ML-DSA.
        </p>

        <div className="research-details">

          <span>3GPP</span>
          <span>PQC</span>
          <span>ML-KEM</span>
          <span>ML-DSA</span>

        </div>

        <a href="#projects" className="research-link">
          Explore Project <span>↗</span>
        </a>

      </div>

      <div className="research-index">
        03
      </div>

    </article>


  </div>

</section>

      

{/* ================= EXPERIENCE ================= */}

<section id="experience" className="section experience-section">

  <div className="section-heading">
    <p className="section-number">05 / EXPERIENCE</p>

    <h2>
      Experience
      <span> &amp; research.</span>
    </h2>

    <p className="section-intro">
      Exploring research, emerging technologies, and
      hands-on technical experience through projects
      and academic opportunities.
    </p>
  </div>

  <div className="timeline">

    {/* EXPERIENCE 01 — EMBS */}

    <div className="timeline-item">
      <div className="timeline-date">JUNE 2026</div>
      <div className="timeline-dot"></div>

      <div className="timeline-card">
        <div className="timeline-type">RESEARCH INTERNSHIP</div>

        <h3>
          Engineering in Medicine &amp; Biology
          Society — Pune Chapter
        </h3>

        <p>
          Developed a Smart Pharmacy Model using machine learning
          and predictive analytics to forecast medicine demand
          and prevent stock-outs. Built an interactive Streamlit
          dashboard for inventory insights.
        </p>

        <div className="timeline-tags">
          <span>Machine Learning</span>
          <span>Predictive Analytics</span>
          <span>Streamlit</span>
        </div>
      </div>
    </div>

    {/* EXPERIENCE 02 — TIFR */}

    <div className="timeline-item">
      <div className="timeline-date">JULY 2026</div>
      <div className="timeline-dot"></div>

      <div className="timeline-card">
        <div className="timeline-type">NATIONAL SUMMER SCHOOL</div>

        <h3>STCS Vigyan Vidushi 2026</h3>

        <h4>
          Tata Institute of Fundamental Research (TIFR),
          Colaba, Mumbai
        </h4>

        <p>
          Selected as one of only 30 participants nationwide
          for the two-week summer school. Participated in
          academic lectures, research discussions, and
          collaborative learning focused on computer science
          and research.
        </p>

        <div className="timeline-tags">
          <span>Research</span>
          <span>Computer Science</span>
          <span>Collaboration</span>
          <span>Summer School</span>
        </div>
      </div>
    </div>

  </div>
</section>


{/* ================= EDUCATION ================= */}

<section id="education" className="section education-section">

  <div className="section-heading">
    <p className="section-number">06 / EDUCATION</p>

    <h2>
      Education
      <span> &amp; learning.</span>
    </h2>

    <p className="section-intro">
      Building my academic foundation through engineering,
      interdisciplinary learning, and continued exploration.
    </p>
  </div>

  <div className="timeline">

    {/* EDUCATION 01 — B.TECH */}

    <div className="timeline-item">
      <div className="timeline-date">
        JULY 2024
        <br />
        — MAY 2028
      </div>

      <div className="timeline-dot education-dot"></div>

      <div className="timeline-card">
        <div className="timeline-type">BACHELOR OF TECHNOLOGY</div>

        <h3>Institute of Engineering &amp; Management</h3>

        <p>
          Bachelor of Technology in Computer Science
          and Engineering, Kolkata, India.
        </p>

        

        <div className="timeline-tags">
          <span>Computer Science</span>
          <span>Engineering</span>
          <span>AI / ML</span>
          <span>Cybersecurity</span>
        </div>
      </div>
    </div>

    {/* EDUCATION 02 — NUS */}

    <div className="timeline-item">
      <div className="timeline-date">JULY 2025</div>
      <div className="timeline-dot education-dot"></div>

      <div className="timeline-card">
        <div className="timeline-type">
          INTERNATIONAL STUDY ABROAD PROGRAM
        </div>

        <h3>National University of Singapore</h3>

        <p>
          Successfully completed a 7-day international study
          abroad program focused on the fundamentals and practical
          applications of Artificial Intelligence, IoT, Machine
          Learning and Data Analytics.
        </p>

        <div className="timeline-tags">
          <span>Artificial Intelligence</span>
          <span>IoT</span>
          <span>Machine Learning</span>
          <span>Data Analytics</span>
        </div>
      </div>
    </div>

    {/* EDUCATION 03 — CLASS XII */}

    <div className="timeline-item">
      <div className="timeline-date">2023–24</div>
      <div className="timeline-dot education-dot"></div>

      <div className="timeline-card">
        <div className="timeline-type">CLASS XII • WBCHSE</div>

        <h3>Basantapur Jhareswar Bani Bhaban</h3>

        <div className="education-score">
          <strong>88%</strong>
          <span>GRADE</span>
        </div>
      </div>
    </div>

    {/* EDUCATION 04 — CLASS X */}

    <div className="timeline-item">
      <div className="timeline-date">2021–22</div>
      <div className="timeline-dot education-dot"></div>

      <div className="timeline-card">
        <div className="timeline-type">CLASS X • WBBSE</div>

        <h3>Panchgeria Netaji Vidyayatan</h3>

        <div className="education-score">
          <strong>92%</strong>
          <span>GRADE</span>
        </div>
      </div>
    </div>

  </div>
</section>

{/* LEADERSHIP */}
<section id="leadership" className="section leadership-section">

  <div className="section-heading">
    <span>07</span>
    <h2>Leadership</h2>
  </div>

  <div className="leadership-intro">
    <p className="section-label">LEADERSHIP & COMMUNITY</p>

    <h3>
      Creating, Leading &<br />
      Building Together.
    </h3>

    <p>
      Taking creative and leadership responsibilities across
      student communities and research initiatives at IEM.
    </p>
  </div>

  <div className="leadership-grid">

    <div className="leadership-card leadership-featured">

      <div className="leadership-top">
        <div className="leadership-icon">
          ✦
        </div>

        <span className="leadership-index">
          01
        </span>
      </div>

      <div className="leadership-body">

        <span className="leadership-role">
          LEADERSHIP ROLE
        </span>

        <h3>
          Lead Graphic Designer
        </h3>

        <h4>
          Gen AI CoE — IEM
        </h4>

        <p>
          Leading graphic design and visual communication
          initiatives for the Gen AI Center of Excellence
          at the Institute of Engineering & Management.
        </p>

        <div className="leadership-tags">
          <span>Leadership</span>
          <span>Graphic Design</span>
          <span>GenAI</span>
        </div>

      </div>

    </div>

    <div className="leadership-card">

      <div className="leadership-top">
        <div className="leadership-icon">
          ◈
        </div>

        <span className="leadership-index">
          02
        </span>
      </div>

      <div className="leadership-body">

        <span className="leadership-role">
          LEADERSHIP ROLE
        </span>

        <h3>
          Co-Lead Graphic Designer
        </h3>

        <h4>
          IEM Institute of Fundamental Research
        </h4>

        <p>
          Contributing to visual design and creative
          communication initiatives within the IIFR Lab
          community.
        </p>

        <div className="leadership-tags">
          <span>Creative Direction</span>
          <span>Design</span>
          <span>Research</span>
        </div>

      </div>

    </div>

  </div>

</section>



{/* ACHIEVEMENTS */}
<section id="achievements" className="section achievements-section">
  <div className="section-heading">
    <span>06</span>
    <h2>Achievements</h2>
  </div>

  <div className="achievements-intro">
    <div>
      <p className="section-label">MILESTONES & RECOGNITION</p>
      <h3>Turning Ideas Into Impact.</h3>
    </div>

    <p>
      A collection of hackathon wins, competition achievements,
      research recognition, and academic milestones.
    </p>
  </div>

  <div className="achievements-grid">

    {/* Featured Achievement */}
    <div className="achievement-card featured-achievement">
      <div className="achievement-number">01</div>

      <div className="achievement-icon">🏆</div>

      <div className="achievement-content">
        <span className="achievement-tag">JOINT FIRST PRIZE</span>

        <h3>ISEA Hackathon 2026</h3>

        <p>
          Joint First Prize at the ISEA Hackathon 2026,
          organized by ISI Kolkata, FortyTwo Labs, and MeitY.
        </p>

        <div className="achievement-footer">
          <span>Cybersecurity • ZKP</span>
          <span>2026</span>
        </div>
      </div>
    </div>

    {/* Achievement 2 */}
    <div className="achievement-card">
      <div className="achievement-number">02</div>

      <div className="achievement-icon">🥇</div>

      <div className="achievement-content">
        <span className="achievement-tag">WINNER</span>

        <h3>IdeaSprint 2026</h3>

        <p>
          Winner at IdeaSprint 2026 for developing and presenting
          an innovative technology-driven solution.
        </p>

        <div className="achievement-footer">
          <span>Innovation</span>
          <span>2026</span>
        </div>
      </div>
    </div>

    {/* Achievement 3 */}
    <div className="achievement-card">
      <div className="achievement-number">03</div>

      <div className="achievement-icon">🛡️</div>

      <div className="achievement-content">
        <span className="achievement-tag">1ST RUNNER-UP</span>

        <h3>TCS Tech Day</h3>

        <p>
          1st Runner-Up in the Cybersecurity Domain at TCS Tech Day.
        </p>

        <div className="achievement-footer">
          <span>Cybersecurity</span>
          <span>Competition</span>
        </div>
      </div>
    </div>

    {/* Achievement 4 */}
    <div className="achievement-card">
      <div className="achievement-number">04</div>

      <div className="achievement-icon">⭐</div>

      <div className="achievement-content">
        <span className="achievement-tag">TOP 30 WOMEN</span>

        <h3>STCS Vigyan Vidushi 2026</h3>

        <p>
          Selected among the Top 30 women nationwide for
          STCS Vigyan Vidushi 2026 at TIFR Mumbai.
        </p>

        <div className="achievement-footer">
          <span>STCS</span>
          <span>2026</span>
        </div>
      </div>
    </div>

    {/* Achievement 5 */}
    <div className="achievement-card">
      <div className="achievement-number">05</div>

      <div className="achievement-icon">🚀</div>

      <div className="achievement-content">
        <span className="achievement-tag">TOP 3</span>

        <h3>Synapse Sprint Hackathon</h3>

        <p>
          Secured a Top 3 position in the 12-hour Synapse Sprint
          Hackathon.
        </p>

        <div className="achievement-footer">
          <span>Hackathon</span>
          <span>12 Hours</span>
        </div>
      </div>
    </div>

    {/* Achievement 6 */}
    <div className="achievement-card">
      <div className="achievement-number">06</div>

      <div className="achievement-icon">🔬</div>

      <div className="achievement-content">
        <span className="achievement-tag">WINNER</span>

        <h3>SPECTRUM 2025</h3>

        <p>
          Winner of the 6th International Conference on Current
          Advancement in Science & Technology.
        </p>

        <div className="achievement-footer">
          <span>Research</span>
          <span>2025</span>
        </div>
      </div>
    </div>

    {/* Achievement 7 */}
    <div className="achievement-card">
      <div className="achievement-number">07</div>

      <div className="achievement-icon">🤖</div>

      <div className="achievement-content">
        <span className="achievement-tag">1ST PLACE</span>

        <h3>Robowars Competition</h3>

        <p>
          Secured 1st Place in the Robowars Competition at
          Innovacion 2025.
        </p>

        <div className="achievement-footer">
          <span>Robotics</span>
          <span>2025</span>
        </div>
      </div>
    </div>

  </div>
</section>

     {/* CONTACT */}
<section id="contact" className="section contact-section">

  <div className="section-heading">
    <span>08</span>
    <h2>Contact</h2>
  </div>

  <div className="contact-wrapper">

    {/* Left Side */}
    <div className="contact-intro">

      <p className="section-label">
        GET IN TOUCH
      </p>

      <h3>
        Let's build something
        <span> meaningful.</span>
      </h3>

      <p className="contact-description">
        Whether it's an AI project, cybersecurity research,
        a hackathon collaboration, or an interesting idea,
        I'd love to connect.
      </p>

      <div className="contact-availability">
        <span className="availability-dot"></span>
        <span>Open to opportunities & collaborations</span>
      </div>

    </div>


    {/* Right Side */}
    <div className="contact-cards">

      {/* Email */}
      <a
        href="mailto:riktamaity77@gmail.com"
        className="contact-card"
      >

        <div className="contact-card-icon">
          ✉
        </div>

        <div>
          <span className="contact-card-label">
            EMAIL
          </span>

          <h4>
            riktamaity77@gmail.com
          </h4>
        </div>

        <span className="contact-arrow">
          ↗
        </span>

      </a>


      {/* Phone */}
      <a
        href="tel:+919832450828"
        className="contact-card"
      >

        <div className="contact-card-icon">
          ☎
        </div>

        <div>
          <span className="contact-card-label">
            PHONE
          </span>

          <h4>
            +91 9832450828
          </h4>
        </div>

        <span className="contact-arrow">
          ↗
        </span>

      </a>


      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/rikta226"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >

        <div className="contact-card-icon">
          in
        </div>

        <div>
          <span className="contact-card-label">
            LINKEDIN
          </span>

          <h4>
            linkedin.com/in/rikta226
          </h4>
        </div>

        <span className="contact-arrow">
          ↗
        </span>

      </a>

    </div>

  </div>


  {/* Bottom CTA */}
  <div className="contact-cta">

    <div>
      <span>HAVE AN IDEA?</span>

      <h3>
        Let's make it happen.
      </h3>
    </div>

    <a
      href="mailto:riktamaity77@gmail.com"
      className="contact-cta-button"
    >
      Start a Conversation
      <span>↗</span>
    </a>

  </div>

</section>


      {/* ================= SCROLL ================= */}

      <div className="scroll-indicator">
        <span></span>
        SCROLL TO EXPLORE
         </div>
  </div>

  );
}

export default App;

