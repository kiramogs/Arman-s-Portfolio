import React from 'react'
import BlurText from './components/BlurText/BlurText'
import SpotlightCard from './components/SpotlightCard/SpotlightCard'
import './index.css'

function App() {
    return (
        <div className="app-container">

            {/* NAVIGATION */}
            <nav className="navbar liquid-glass-nav">
                <a href="#" className="logo">
                    <span className="logo-name"><em>A</em>rman</span>
                    <svg className="logo-stroke" viewBox="0 0 60 8" fill="none"><path d="M2 6c10-5 25-5 40-2s14 2 16-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </a>
                <div className="nav-links">
                    <a href="#work" className="nav-link">Work</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#about" className="nav-link">About</a>
                </div>
                <a href="#contact" className="cta-button">Contact</a>
            </nav>

            {/* HERO SECTION — Typographic + Liquid Glass Orb */}
            <section className="hero-new">
                <div className="hero-bg-gradient"></div>

                {/* Liquid Glass Orb */}
                <div className="liquid-orb-wrap">
                    <div className="liquid-orb"></div>
                    <div className="liquid-orb orb-small"></div>
                </div>

                <div className="hero-content">
                    <BlurText
                        text="Arman"
                        delay={80}
                        animateBy="letters"
                        direction="top"
                        className="hero-name"
                    />
                    <p className="hero-role">Creative Developer & Designer</p>
                    <div className="hero-scroll-hint">
                        <span>Scroll</span>
                        <div className="scroll-line"></div>
                    </div>
                </div>
            </section>

            {/* ABOUT / PHILOSOPHY SECTION */}
            <section className="essence-section" id="about">
                <div className="section-header-clean">
                    <BlurText
                        text="About Me"
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className="blur-text-header-small"
                    />
                    <h2 className="editorial-statement">I craft digital <br /> experiences that matter.</h2>
                </div>

                <div className="spotlight-grid" id="skills">
                    <SpotlightCard className="service-card liquid-glass-card">
                        <div className="card-icon"><i className="fa-solid fa-compass-drafting"></i></div>
                        <h3>Strategy</h3>
                        <p>Data-driven narratives that cut through the noise. I don't guess; I architect relevance.</p>
                    </SpotlightCard>
                    <SpotlightCard className="service-card liquid-glass-card">
                        <div className="card-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                        <h3>Design</h3>
                        <p>Aesthetics are not accidental. I curate visual languages that feel inevitable and iconic.</p>
                    </SpotlightCard>
                    <SpotlightCard className="service-card liquid-glass-card">
                        <div className="card-icon"><i className="fa-solid fa-code"></i></div>
                        <h3>Development</h3>
                        <p>Beyond the screen. I build immersive digital ecosystems with precision and craft.</p>
                    </SpotlightCard>
                </div>
            </section>

            {/* WORK SECTION */}
            <section className="work" id="work">
                <div className="section-header-clean" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 className="editorial-statement" style={{ fontSize: '2.8rem' }}>Selected Works</h2>
                </div>

                <div className="gallery-grid-minimal">
                    <a className="gallery-card" href="#project1">
                        <div className="gallery-card-img liquid-glass-img">
                            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" alt="Abstract Gradient Study" />
                        </div>
                        <div className="gallery-card-info">
                            <span className="project-meta">Brand Identity</span>
                            <h3>The Green Sanctuary</h3>
                        </div>
                    </a>

                    <a className="gallery-card" href="#project2">
                        <div className="gallery-card-img liquid-glass-img">
                            <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80" alt="Minimal Studio" />
                        </div>
                        <div className="gallery-card-info">
                            <span className="project-meta">Campaign</span>
                            <h3>Urban Poetry</h3>
                        </div>
                    </a>

                    <a className="gallery-card" href="#project3">
                        <div className="gallery-card-img liquid-glass-img">
                            <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80" alt="Pastel Dreams" />
                        </div>
                        <div className="gallery-card-info">
                            <span className="project-meta">Art Direction</span>
                            <h3>Pastel Dreams</h3>
                        </div>
                    </a>
                </div>
            </section>

            {/* FOOTER */}
            <footer id="contact">
                <div className="footer-content">
                    <div className="footer-logo">ARMAN<span className="dot">.</span></div>
                    <p>&copy; 2025 Arman. All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default App
