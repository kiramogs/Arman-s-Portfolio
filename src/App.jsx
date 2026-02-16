import React from 'react'
import BlurText from './components/BlurText/BlurText'
import './index.css'

function App() {
    return (
        <div>

            {/* NAV */}
            <nav className="navbar">
                <div className="logo">arman<span className="dot">.</span></div>
                <div className="nav-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#work" className="nav-link">Work</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
                <a href="#contact" className="cta-button">Get in touch</a>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="orb-field">
                    <div className="glass-orb orb-1"></div>
                    <div className="glass-orb orb-2"></div>
                    <div className="glass-orb orb-3"></div>
                </div>

                <div className="hero-content">
                    <BlurText
                        text="Arman"
                        delay={60}
                        animateBy="letters"
                        direction="top"
                        className="hero-name"
                    />
                    <p className="hero-sub">Creative Developer & Designer</p>
                </div>

                <div className="hero-scroll">
                    <span>Scroll</span>
                    <div className="scroll-bar"></div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="section" id="about">
                <BlurText
                    text="About"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="section-label"
                />
                <h2 className="section-title">I craft digital experiences <br />that feel inevitable.</h2>

                <div className="skills-grid">
                    <div className="skill-card">
                        <i className="fa-solid fa-compass-drafting icon"></i>
                        <h3>Strategy</h3>
                        <p>Data-driven narratives that cut through the noise. I don't guess — I architect relevance.</p>
                    </div>
                    <div className="skill-card">
                        <i className="fa-solid fa-wand-magic-sparkles icon"></i>
                        <h3>Design</h3>
                        <p>Aesthetics are not accidental. I curate visual languages that feel inevitable and iconic.</p>
                    </div>
                    <div className="skill-card">
                        <i className="fa-solid fa-code icon"></i>
                        <h3>Development</h3>
                        <p>Beyond the screen. I build immersive digital ecosystems with precision and craft.</p>
                    </div>
                </div>
            </section>

            {/* WORK */}
            <section className="section" id="work">
                <BlurText
                    text="Selected Work"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="section-label"
                />
                <h2 className="section-title">Recent projects.</h2>

                <div className="gallery">
                    <a className="gallery-item" href="#">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" alt="Abstract Gradient" />
                        <div className="gallery-meta">
                            <span>Brand Identity</span>
                            <h3>The Green Sanctuary</h3>
                        </div>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80" alt="Minimal Studio" />
                        <div className="gallery-meta">
                            <span>Campaign</span>
                            <h3>Urban Poetry</h3>
                        </div>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80" alt="Gradient Art" />
                        <div className="gallery-meta">
                            <span>Art Direction</span>
                            <h3>Pastel Dreams</h3>
                        </div>
                    </a>
                </div>
            </section>

            {/* FOOTER */}
            <footer id="contact">
                <div className="footer-logo">ARMAN<span className="dot">.</span></div>
                <p>&copy; 2025 Arman. All rights reserved.</p>
            </footer>

        </div>
    )
}

export default App
