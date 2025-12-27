import { useState, useEffect } from 'react'
import './App.css'

// Import react-bits components
import Squares from './components/Squares'
import BlurText from './components/BlurText'
import SpotlightCard from './components/SpotlightCard'
import Magnet from './components/Magnet'
import TiltedCard from './components/TiltedCard'
import CircularGallery from './components/CircularGallery'

import Counter from './components/Counter'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [projectCount, setProjectCount] = useState(0)
    const [clientCount, setClientCount] = useState(0)
    const [viewCount, setViewCount] = useState(0)

    useEffect(() => {
        setIsLoaded(true)
        // Animate counters on load
        const timer = setTimeout(() => {
            setProjectCount(150)
            setClientCount(50)
            setViewCount(25)
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    // Portfolio items for gallery
    const galleryItems = [
        { image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop', text: 'Brand Campaign' },
        { image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop', text: 'Social Content' },
        { image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop', text: 'Video Production' },
        { image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop', text: 'Commercial Edit' },
        { image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop', text: 'Motion Graphics' },
        { image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop', text: 'Reel Content' }
    ]

    const services = [
        {
            title: 'Social Media Management',
            description: 'Full-service social media strategy, content creation, and community management.',
            icon: '📱'
        },
        {
            title: 'Video Production',
            description: 'High-quality video content from concept to final cut, optimized for every platform.',
            icon: '🎬'
        },
        {
            title: 'Motion Graphics',
            description: 'Eye-catching animations and motion design that make your brand stand out.',
            icon: '✨'
        },
        {
            title: 'Paid Advertising',
            description: 'Data-driven ad campaigns that maximize ROI across all social platforms.',
            icon: '📈'
        }
    ]

    const socialLinks = [
        { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
        { name: 'TikTok', url: 'https://tiktok.com', icon: 'tiktok' },
        { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
        { name: 'X', url: 'https://x.com', icon: 'x' },
        { name: 'Email', url: 'mailto:hello@agency.com', icon: 'email' }
    ]

    const renderSocialIcon = (icon) => {
        switch (icon) {
            case 'instagram':
                return (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                )
            case 'tiktok':
                return (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                )
            case 'youtube':
                return (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                )
            case 'x':
                return (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                )
            case 'email':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                    </svg>
                )
            default:
                return null
        }
    }

    return (
        <div className="app">
            {/* Navigation */}
            <nav className="navbar glass-nav">
                <div className="container nav-container">
                    <a href="#" className="logo">STUDIO</a>
                    <div className="nav-links">
                        <a href="#work">Work</a>
                        <a href="#services">Services</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <Magnet padding={40} magnetStrength={2}>
                        <a href="#contact" className="nav-cta">Start Project</a>
                    </Magnet>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero section">
                <Squares
                    speed={0.3}
                    squareSize={50}
                    direction='diagonal'
                    borderColor='rgba(26, 24, 22, 0.05)'
                    hoverFillColor='rgba(26, 24, 22, 0.02)'
                />
                <div className="container hero-container">
                    <div className={`hero-content ${isLoaded ? 'animate-fade-in' : ''}`}>
                        <div className="hero-badge glass-badge">
                            <span className="badge-dot"></span>
                            SMMA & Video Agency
                        </div>
                        <h1 className="hero-title">
                            <BlurText
                                text="We make"
                                delay={80}
                                animateBy="words"
                                direction="top"
                                className="hero-line"
                            />
                            <BlurText
                                text="brands"
                                delay={80}
                                animateBy="words"
                                direction="top"
                                className="hero-line hero-accent"
                            />
                            <BlurText
                                text="go viral."
                                delay={80}
                                animateBy="words"
                                direction="top"
                                className="hero-line"
                            />
                        </h1>
                        <p className="hero-subtitle">
                            We craft scroll-stopping content that turns viewers into customers.
                            Social media management, video production, and paid ads that actually convert.
                        </p>
                        <div className="hero-cta">
                            <Magnet padding={50} magnetStrength={3}>
                                <a href="#work" className="btn btn-primary">
                                    See Our Work
                                </a>
                            </Magnet>
                            <Magnet padding={50} magnetStrength={3}>
                                <a href="#contact" className="btn btn-secondary">
                                    Book a Call
                                </a>
                            </Magnet>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll</span>
                    <div className="scroll-line"></div>
                </div>
            </section>



            {/* Stats Section */}
            <section className="stats-section section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-box glass-card">
                            <div className="stat-value">
                                <Counter
                                    value={projectCount}
                                    fontSize={64}
                                    places={[100, 10, 1]}
                                    gap={4}
                                    textColor="#1a1816"
                                    fontWeight="400"
                                />
                                <span className="stat-suffix">+</span>
                            </div>
                            <span className="stat-title">Projects Delivered</span>
                        </div>
                        <div className="stat-box glass-card">
                            <div className="stat-value">
                                <Counter
                                    value={clientCount}
                                    fontSize={64}
                                    places={[10, 1]}
                                    gap={4}
                                    textColor="#1a1816"
                                    fontWeight="400"
                                />
                                <span className="stat-suffix">+</span>
                            </div>
                            <span className="stat-title">Happy Clients</span>
                        </div>
                        <div className="stat-box glass-card">
                            <div className="stat-value">
                                <Counter
                                    value={viewCount}
                                    fontSize={64}
                                    places={[10, 1]}
                                    gap={4}
                                    textColor="#1a1816"
                                    fontWeight="400"
                                />
                                <span className="stat-suffix">M+</span>
                            </div>
                            <span className="stat-title">Views Generated</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Gallery Section */}
            <section id="work" className="section section-gallery">
                <div className="gallery-header container">
                    <span className="section-label">Our Work</span>
                    <h2>Content That Performs</h2>
                    <p className="gallery-subtitle">Drag or scroll to explore our latest projects</p>
                </div>
                <div className="gallery-wrapper">
                    <CircularGallery
                        items={galleryItems}
                        bend={2}
                        textColor="#1a1816"
                        borderRadius={0.03}
                        font="600 18px Inter"
                    />
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section section-dark">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-label">What We Do</span>
                        <h2>Services</h2>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <SpotlightCard
                                key={index}
                                className="service-card"
                                spotlightColor="rgba(245, 241, 235, 0.08)"
                            >
                                <span className="service-icon">{service.icon}</span>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>



            {/* About Section with Tilted Card */}
            <section id="about" className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text-content">
                            <span className="section-label">About Us</span>
                            <h2>We're a team of creators obsessed with results.</h2>
                            <p>
                                Founded by digital natives who understand what makes content click.
                                We combine creative storytelling with data-driven strategy to help brands
                                dominate social media.
                            </p>
                            <p>
                                From startups to established brands, we've helped businesses across
                                industries grow their online presence and convert followers into customers.
                            </p>
                            <div className="about-cta">
                                <Magnet padding={40} magnetStrength={2}>
                                    <a href="#contact" className="btn btn-primary">Work With Us</a>
                                </Magnet>
                            </div>
                        </div>
                        <div className="about-card">
                            <TiltedCard
                                imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
                                altText="Our creative team"
                                captionText="The Team"
                                containerHeight="450px"
                                containerWidth="100%"
                                imageHeight="420px"
                                imageWidth="340px"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section section-dark">
                <div className="container">
                    <div className="contact-layout">
                        <div className="contact-header">
                            <span className="section-label">Get Started</span>
                            <h2>Ready to go viral?</h2>
                            <p>Let's chat about your next project and how we can help you grow.</p>
                        </div>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <Magnet key={index} padding={30} magnetStrength={2}>
                                    <a
                                        href={link.url}
                                        target={link.icon !== 'email' ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="social-link glass-social"
                                        aria-label={link.name}
                                    >
                                        {renderSocialIcon(link.icon)}
                                        <span>{link.name}</span>
                                    </a>
                                </Magnet>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content">
                    <p>© 2024 STUDIO — SMMA & Video Agency</p>
                    <p>Making brands go viral since 2021</p>
                </div>
            </footer>
        </div>
    )
}

export default App
