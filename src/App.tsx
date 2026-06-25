import { useState } from 'react'
import './App.css'

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Java', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Render', 'SonarQube'],
  },
]

const projects = [
  {
    name: 'Finance Dashboard',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    description:
      'Built a finance dashboard for transaction monitoring and analytics with authentication and deployment using Docker, Vercel, and Render.',
  },
  {
    name: 'Task Manager Backend',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    description:
      'Developed secure REST APIs with JWT authentication, role-based authorization, email OTP verification, and CRUD functionality.',
  },
]

const profileCards = [
  {
    icon: '🎯',
    title: 'Focus',
    content: 'Full Stack Development • Backend Engineering • DevOps',
  },
  {
    icon: '📍',
    title: 'Location',
    content: 'Delhi, India',
  },
  {
    icon: '💻',
    title: 'Current Tech Stack',
    content: 'React • Node.js • Express.js • MongoDB • Docker • Git',
  },
]

function App() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('chauhan.shashank987@gmail.com')
    setEmailCopied(true)
    window.setTimeout(() => setEmailCopied(false), 1800)
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          Shashank Chauhan
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">Computer Science Engineering Student</p>
          <h1>Shashank Chauhan</h1>
          <p className="lead">
            Aspiring Full Stack Developer | Backend Developer | DevOps Enthusiast
          </p>
          <p className="summary">
            Building scalable web applications with modern technologies while continuously
            learning cloud and DevOps practices.
          </p>
          <div className="cta-row">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-panel reveal delay-1" aria-label="Profile highlights">
          {profileCards.map((card) => (
            <article className="stat-card" key={card.title}>
              <span className="stat-icon" aria-hidden="true">
                {card.icon}
              </span>
              <span className="stat-label">{card.title}</span>
              <strong>{card.content}</strong>
            </article>
          ))}
        </aside>
      </section>

      <section className="section split-section" id="about">
        <div className="section-heading reveal">
          <p className="eyebrow">About Me</p>
          <h2>Problem solving through practical software</h2>
        </div>
        <div className="card content-card reveal delay-1">
          <p>
            Hello! I&apos;m Shashank Chauhan, a Computer Science Engineering student at KIET
            Group of Institutions.
          </p>
          <p>
            I enjoy building full-stack web applications and learning modern software development
            practices. My interests include backend development, DevOps, cloud technologies, and
            scalable application design.
          </p>
          <p>
            I am passionate about solving real-world problems through technology and continuously
            improving my programming and development skills.
          </p>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading reveal">
          <p className="eyebrow">Skills</p>
          <h2>Tools and technologies I work with</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className={`card skill-card reveal delay-${(index % 3) + 1}`} key={group.title}>
              <h3>{group.title}</h3>
              <div className="pill-row">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading reveal">
          <p className="eyebrow">Projects</p>
          <h2>Selected work</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`card project-card reveal delay-${index + 1}`} key={project.name}>
              <div className="project-top">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="tech-row">
                {project.tech.map((tech) => (
                  <span className="tech-chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <div className="section-heading reveal">
          <p className="eyebrow">Education</p>
          <h2>Academic background and certifications</h2>
        </div>
        <div className="education-grid">
          <article className="card education-card reveal delay-1">
            <p className="card-kicker">Bachelor of Technology</p>
            <h3>Computer Science & Engineering</h3>
            <p>KIET Group of Institutions</p>
            <div className="meta-row">
              <span>CGPA: 8.39</span>
              <span>2024 – Present</span>
            </div>
          </article>
          <article className="card education-card reveal delay-2">
            <p className="card-kicker">Certifications</p>
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>Cisco Networking Academy – Networking Essentials</p>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-heading reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect</h2>
        </div>
        <div className="card contact-card reveal delay-1">
          <a href="mailto:chauhan.shashank987@gmail.com">chauhan.shashank987@gmail.com</a>
          <a href="tel:+918840361014">+91 8840361014</a>
          <div className="contact-links">
            <a href="https://github.com/Shashank01-hub" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shashank-chauhan-8854b4340"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer reveal delay-1" aria-label="Site footer">
        <div className="footer-brand">
          <a className="brand footer-logo" href="#hero">
            Shashank Chauhan
          </a>
          <p>
            Computer Science Engineering student focused on building clean, scalable, and
            modern web experiences.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span className="footer-title">Navigate</span>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </div>
          <div>
            <span className="footer-title">Connect</span>
            <button className="footer-action" type="button" onClick={handleCopyEmail}>
              {emailCopied ? 'Email copied' : 'Copy Email'}
            </button>
            <span className="footer-note">chauhan.shashank987@gmail.com</span>
            <a href="https://github.com/Shashank01-hub" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shashank-chauhan-8854b4340"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Delhi, India</span>
          <span>© 2026 Shashank Chauhan. All rights reserved.</span>
        </div>
      </footer>
    </main>
  )
}

export default App
