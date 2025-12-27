import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="app">
            {/* Navigation */}
            <nav className="navbar glass">
                <div className="container nav-container">
                    <a href="#" className="logo">
                        <span className="gradient-text">Portfolio</span>
                    </a>
                    <div className="nav-links">
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero section">
                <div className="container">
                    <div className={`hero-content ${isLoaded ? 'animate-fade-in' : ''}`}>
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Available for opportunities
                        </div>
                        <h1>
                            Hi, I'm <span className="gradient-text">Your Name</span>
                        </h1>
                        <p className="hero-subtitle">
                            A passionate developer crafting beautiful digital experiences.
                            I build modern web applications with clean code and thoughtful design.
                        </p>
                        <div className="hero-cta">
                            <a href="#projects" className="btn btn-primary">
                                View My Work
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual animate-float">
                        <div className="hero-orb"></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section">
                <div className="container">
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                I'm a developer with a passion for creating elegant solutions to complex problems.
                                With expertise in modern web technologies, I bring ideas to life through clean,
                                efficient code and intuitive user experiences.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to
                                open source projects, or sharing knowledge with the developer community.
                            </p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-card card">
                                <span className="stat-number gradient-text">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-card card">
                                <span className="stat-number gradient-text">20+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-card card">
                                <span className="stat-number gradient-text">10+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
                <div className="container">
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="projects-grid">
                        <ProjectCard
                            title="Project One"
                            description="A modern web application built with React and Node.js featuring real-time updates and seamless user experience."
                            tags={['React', 'Node.js', 'MongoDB']}
                        />
                        <ProjectCard
                            title="Project Two"
                            description="E-commerce platform with integrated payment processing, inventory management, and analytics dashboard."
                            tags={['Next.js', 'Stripe', 'PostgreSQL']}
                        />
                        <ProjectCard
                            title="Project Three"
                            description="AI-powered productivity tool that helps teams collaborate more effectively with smart automation."
                            tags={['Python', 'AI/ML', 'FastAPI']}
                        />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section">
                <div className="container">
                    <h2 className="section-title">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="skills-grid">
                        <SkillCategory
                            title="Frontend"
                            skills={['React', 'Next.js', 'TypeScript', 'CSS/Sass']}
                        />
                        <SkillCategory
                            title="Backend"
                            skills={['Node.js', 'Python', 'PostgreSQL', 'MongoDB']}
                        />
                        <SkillCategory
                            title="Tools"
                            skills={['Git', 'Docker', 'AWS', 'Figma']}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <div className="container">
                    <div className="contact-card glass">
                        <h2>
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p>
                            Have a project in mind or just want to chat? Feel free to reach out.
                            I'm always open to discussing new opportunities.
                        </p>
                        <div className="contact-links">
                            <a href="mailto:your@email.com" className="btn btn-primary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <path d="M22 6l-10 7L2 6" />
                                </svg>
                                Email Me
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© 2024 Your Name. Built with React & Vite.</p>
                </div>
            </footer>
        </div>
    )
}

function ProjectCard({ title, description, tags }) {
    return (
        <article className="project-card card">
            <div className="project-image">
                <div className="project-placeholder"></div>
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </article>
    )
}

function SkillCategory({ title, skills }) {
    return (
        <div className="skill-category card">
            <h3 className="gradient-text">{title}</h3>
            <div className="skill-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default App
