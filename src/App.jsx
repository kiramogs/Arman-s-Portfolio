import { useState, useEffect } from 'react'
import './App.css'

// Import react-bits components
import Squares from './components/Squares'
import BlurText from './components/BlurText'
import SpotlightCard from './components/SpotlightCard'
import Magnet from './components/Magnet'
import GradientText from './components/GradientText'
import Dock from './components/Dock'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const dockItems = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
            label: 'GitHub',
            onClick: () => window.open('https://github.com', '_blank')
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            label: 'LinkedIn',
            onClick: () => window.open('https://linkedin.com', '_blank')
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                </svg>
            ),
            label: 'Email',
            onClick: () => window.location.href = 'mailto:your@email.com'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
            label: 'Twitter',
            onClick: () => window.open('https://twitter.com', '_blank')
        }
    ]

    // Neutral aesthetic gradient colors
    const gradientColors = ['#a8b5a0', '#d4a5a5', '#d4c4b0', '#a8b5a0']
    const altGradientColors = ['#d4a5a5', '#c9a689', '#a8b5a0', '#d4a5a5']

    return (
        <div className="app">
            {/* Navigation */}
            <nav className="navbar glass">
                <div className="container nav-container">
                    <a href="#" className="logo">
                        <GradientText animationSpeed={4} colors={gradientColors}>Portfolio</GradientText>
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
                <Squares
                    speed={0.3}
                    squareSize={50}
                    direction='diagonal'
                    borderColor='rgba(168, 181, 160, 0.15)'
                    hoverFillColor='rgba(212, 165, 165, 0.1)'
                />
                <div className="container hero-container">
                    <div className={`hero-content ${isLoaded ? 'animate-fade-in' : ''}`}>
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Available for opportunities
                        </div>
                        <h1 className="hero-title">
                            <BlurText
                                text="Hi, I'm"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="hero-text-line"
                            />
                            <GradientText
                                animationSpeed={3}
                                colors={['#a8b5a0', '#d4a5a5', '#c9a689', '#b8a08a', '#a8b5a0']}
                                className="hero-name"
                            >
                                Your Name
                            </GradientText>
                        </h1>
                        <BlurText
                            text="A passionate developer crafting beautiful digital experiences. I build modern web applications with clean code and thoughtful design."
                            delay={50}
                            animateBy="words"
                            direction="top"
                            className="hero-subtitle"
                        />
                        <div className="hero-cta">
                            <Magnet padding={60} magnetStrength={3}>
                                <a href="#projects" className="btn btn-primary">
                                    View My Work
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </Magnet>
                            <Magnet padding={60} magnetStrength={3}>
                                <a href="#contact" className="btn btn-secondary">
                                    Get in Touch
                                </a>
                            </Magnet>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        About <GradientText animationSpeed={6} colors={gradientColors}>Me</GradientText>
                    </h2>
                    <div className="about-content">
                        <div className="about-text">
                            <BlurText
                                text="I'm a developer with a passion for creating elegant solutions to complex problems. With expertise in modern web technologies, I bring ideas to life through clean, efficient code and intuitive user experiences."
                                delay={30}
                                animateBy="words"
                                direction="top"
                                className="about-paragraph"
                            />
                            <BlurText
                                text="When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community."
                                delay={30}
                                animateBy="words"
                                direction="top"
                                className="about-paragraph"
                            />
                        </div>
                        <div className="about-stats">
                            <SpotlightCard className="stat-card" spotlightColor="rgba(168, 181, 160, 0.25)">
                                <span className="stat-number">
                                    <GradientText animationSpeed={4} colors={gradientColors}>3+</GradientText>
                                </span>
                                <span className="stat-label">Years Experience</span>
                            </SpotlightCard>
                            <SpotlightCard className="stat-card" spotlightColor="rgba(212, 165, 165, 0.25)">
                                <span className="stat-number">
                                    <GradientText animationSpeed={4} colors={altGradientColors}>20+</GradientText>
                                </span>
                                <span className="stat-label">Projects Completed</span>
                            </SpotlightCard>
                            <SpotlightCard className="stat-card" spotlightColor="rgba(201, 166, 137, 0.25)">
                                <span className="stat-number">
                                    <GradientText animationSpeed={4} colors={gradientColors}>10+</GradientText>
                                </span>
                                <span className="stat-label">Happy Clients</span>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
                <div className="container">
                    <h2 className="section-title">
                        Featured <GradientText animationSpeed={6} colors={gradientColors}>Projects</GradientText>
                    </h2>
                    <div className="projects-grid">
                        <SpotlightCard className="project-card" spotlightColor="rgba(168, 181, 160, 0.2)">
                            <div className="project-image">
                                <div className="project-placeholder sage"></div>
                            </div>
                            <div className="project-content">
                                <h3>Project One</h3>
                                <p>A modern web application built with React and Node.js featuring real-time updates and seamless user experience.</p>
                                <div className="project-tags">
                                    <span className="tag sage">React</span>
                                    <span className="tag sage">Node.js</span>
                                    <span className="tag sage">MongoDB</span>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="project-card" spotlightColor="rgba(212, 165, 165, 0.2)">
                            <div className="project-image">
                                <div className="project-placeholder rose"></div>
                            </div>
                            <div className="project-content">
                                <h3>Project Two</h3>
                                <p>E-commerce platform with integrated payment processing, inventory management, and analytics dashboard.</p>
                                <div className="project-tags">
                                    <span className="tag rose">Next.js</span>
                                    <span className="tag rose">Stripe</span>
                                    <span className="tag rose">PostgreSQL</span>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="project-card" spotlightColor="rgba(201, 166, 137, 0.2)">
                            <div className="project-image">
                                <div className="project-placeholder terracotta"></div>
                            </div>
                            <div className="project-content">
                                <h3>Project Three</h3>
                                <p>AI-powered productivity tool that helps teams collaborate more effectively with smart automation.</p>
                                <div className="project-tags">
                                    <span className="tag terracotta">Python</span>
                                    <span className="tag terracotta">AI/ML</span>
                                    <span className="tag terracotta">FastAPI</span>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        My <GradientText animationSpeed={6} colors={gradientColors}>Skills</GradientText>
                    </h2>
                    <div className="skills-grid">
                        <SpotlightCard className="skill-category" spotlightColor="rgba(168, 181, 160, 0.2)">
                            <h3><GradientText animationSpeed={5} colors={gradientColors}>Frontend</GradientText></h3>
                            <div className="skill-list">
                                <span className="skill-item">React</span>
                                <span className="skill-item">Next.js</span>
                                <span className="skill-item">TypeScript</span>
                                <span className="skill-item">CSS/Sass</span>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="skill-category" spotlightColor="rgba(212, 165, 165, 0.2)">
                            <h3><GradientText animationSpeed={5} colors={altGradientColors}>Backend</GradientText></h3>
                            <div className="skill-list">
                                <span className="skill-item">Node.js</span>
                                <span className="skill-item">Python</span>
                                <span className="skill-item">PostgreSQL</span>
                                <span className="skill-item">MongoDB</span>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="skill-category" spotlightColor="rgba(201, 166, 137, 0.2)">
                            <h3><GradientText animationSpeed={5} colors={gradientColors}>Tools</GradientText></h3>
                            <div className="skill-list">
                                <span className="skill-item">Git</span>
                                <span className="skill-item">Docker</span>
                                <span className="skill-item">AWS</span>
                                <span className="skill-item">Figma</span>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <div className="container">
                    <div className="contact-wrapper">
                        <h2 className="section-title">
                            Let's <GradientText animationSpeed={5} colors={gradientColors}>Connect</GradientText>
                        </h2>
                        <p className="contact-text">
                            Have a project in mind or just want to chat? Feel free to reach out.
                            I'm always open to discussing new opportunities.
                        </p>
                        <div className="dock-wrapper">
                            <Dock
                                items={dockItems}
                                magnification={80}
                                distance={150}
                                panelHeight={72}
                                baseItemSize={56}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© 2024 Your Name. Built with React & Vite. Components from <a href="https://github.com/DavidHDev/react-bits" target="_blank" rel="noopener noreferrer">react-bits</a>.</p>
                </div>
            </footer>
        </div>
    )
}

export default App
