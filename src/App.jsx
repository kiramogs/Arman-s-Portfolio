import React from 'react'
import CursorLens from './components/CursorLens'
import BlurText from './components/BlurText/BlurText'
import SpotlightCard from './components/SpotlightCard/SpotlightCard'
import './index.css'

function App() {
    return (
        <div className="app-container">

            {/* NAVIGATION */}
            <nav className="navbar">
                <div className="logo">zenofied<span className="dot">.</span></div>
                <div className="nav-links">
                    <a href="#work" className="nav-link">Journal</a>
                    <a href="#services" className="nav-link">Atelier</a>
                    <a href="#about" className="nav-link">Essence</a>
                </div>
                <a href="#contact" className="cta-button">Inquire</a>
            </nav>

            {/* HERO SECTION with CURSOR LENS */}
            <section id="home" className="hero-wrapper">
                <CursorLens
                    baseImage="/1.png"
                    revealImage="/2.png"
                    backgroundColor="#F9F7F2"
                    blobOutlineColor="#A4B494"
                    blobSize={105}
                />
            </section>

            {/* ESSENCE / SERVICES SECTION */}
            <section className="essence-section">
                <div className="section-header-clean">
                    <BlurText
                        text="The Philosophy"
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className="blur-text-header-small"
                    />
                    <h2 className="editorial-statement">We engineer digital <br /> experiences through chaos.</h2>
                </div>

                <div className="spotlight-grid">
                    <SpotlightCard className="service-card">
                        <div className="card-icon"><i className="fa-solid fa-compass-drafting"></i></div>
                        <h3>Strategy</h3>
                        <p>Data-driven narratives that cut through the noise. We don't guess; we architect relevance.</p>
                    </SpotlightCard>
                    <SpotlightCard className="service-card">
                        <div className="card-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                        <h3>Curation</h3>
                        <p>Aesthetics are not accidental. We curate visual languages that feel inevitable and iconic.</p>
                    </SpotlightCard>
                    <SpotlightCard className="service-card">
                        <div className="card-icon"><i className="fa-solid fa-cube"></i></div>
                        <h3>Experience</h3>
                        <p>Beyond the feed. We build immersive digital ecosystems that retain attention.</p>
                    </SpotlightCard>
                </div>
            </section>

            {/* WORK SECTION (Minimalist Gallery) */}
            <section className="work" id="work">

                <div className="section-header-clean" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 className="editorial-statement" style={{ fontSize: '2.8rem' }}>Selected Works</h2>
                </div>

                <div className="gallery-grid-minimal">

                    {/* Project 1 */}
                    <a className="gallery-card" href="#project1">
                        <div className="gallery-card-img">
                            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" alt="Abstract Gradient Study" />
                        </div>
                        <div className="gallery-card-info">
                            <span className="project-meta">Brand Identity</span>
                            <h3>The Green Sanctuary</h3>
                        </div>
                    </a>

                    {/* Project 2 */}
                    <a className="gallery-card" href="#project2">
                        <div className="gallery-card-img">
                            <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80" alt="Minimal Studio" />
                        </div>
                        <div className="gallery-card-info">
                            <span className="project-meta">Campaign</span>
                            <h3>Urban Poetry</h3>
                        </div>
                    </a>

                    {/* Project 3 */}
                    <a className="gallery-card" href="#project3">
                        <div className="gallery-card-img">
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
            <footer>
                <div className="footer-content">
                    <div className="footer-logo">ZENOFIED<span className="dot">.</span></div>
                    <p>&copy; 2025 Zenofied Agency.</p>
                </div>
            </footer>

        </div>
    )
}

export default App
