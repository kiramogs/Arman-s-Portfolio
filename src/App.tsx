import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn, FaVideo, FaPalette, FaCompass, FaArrowRight } from 'react-icons/fa';
import CursorLens from './components/CursorLens';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="app-container">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="hero-section" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <CursorLens
            baseImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            revealImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
            blobSize={150} // Larger, more visible blob
            shapeComplexity={0.9} // Organic shape
            showBackground={true}
            bgBlobCount={15}
          />
        </div>

        <div className="hero-content container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-badge"
          >
            <span className="badge-dot" /> Available for Projects
          </motion.div>

          <h1 className="hero-title">
            <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="block">I Create</motion.span>
            <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="block gradient-text">Digital Stories</motion.span>
            <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="block">That Captivate</motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-description"
          >
            Freelance creative director & video editor crafting scroll-stopping content for brands that dare to stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-buttons"
          >
            <a href="#work" className="btn btn-primary">
              View Work <FaArrowRight style={{ marginLeft: '8px' }} />
            </a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </motion.div>
        </div>

        <motion.div style={{ opacity: scrollOpacity }} className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {Array(4).fill(["Video Editing", "Motion Graphics", "Social Media", "Content Strategy"]).flat().map((item, i) => (
            <span key={i}>
              {item} <span className="marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* WORK SECTION */}
      <section id="work" className="section bg-secondary">
        <div className="container">
          <SectionHeader label="Selected Projects" title={<>Recent <span className="gradient-text">Work</span></>} />

          <div className="projects-grid">
            <ProjectCard
              title="Luminary Wellness"
              category="Brand Campaign"
              image="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
              className="project-featured"
            />
            <ProjectCard
              title="Midnight Stories"
              category="Video Series"
              image="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2600&auto=format&fit=crop"
            />
            <ProjectCard
              title="Tech Pulse"
              category="Motion Design"
              image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
            />
            <ProjectCard
              title="Urban Threads"
              category="Social Campaign"
              image="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2670&auto=format&fit=crop"
              className="project-wide"
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section">
        <div className="container">
          <SectionHeader label="What I Do" title={<>My <span className="gradient-text">Services</span></>} />

          <div className="services-grid">
            <ServiceCard
              icon={<FaVideo />}
              title="Video Editing"
              desc="Transforming raw footage into compelling visual stories. From short-form reels to long-form content."
            />
            <ServiceCard
              icon={<FaPalette />}
              title="Motion Graphics"
              desc="Eye-catching animations and visual effects that make your content pop."
            />
            <ServiceCard
              icon={<FaCompass />}
              title="Creative Direction"
              desc="Strategic vision and creative guidance to elevate your brand's visual presence."
            />
            <ServiceCard
              icon={<FaInstagram />}
              title="Social Media"
              desc="End-to-end social media content creation and strategy for maximum engagement."
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section bg-secondary">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <div className="section-label">About Me</div>
              <h2 className="section-title">Hey, I'm <span className="gradient-text">Arman</span></h2>
              <p className="about-bio">
                I'm a freelance creative director and video editor with a passion for crafting visual stories that resonate. With 5+ years of experience, I've helped brands transform their digital presence and connect with audiences in meaningful ways.
              </p>
              <div className="stats-grid">
                <Stat number="50+" label="Projects" />
                <Stat number="20M+" label="Views" />
                <Stat number="30+" label="Clients" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-visual"
            >
              <div className="about-image-wrapper">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" alt="Arman" className="about-img" />
                <div className="about-shape" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <SectionHeader label="Get in Touch" title={<>Let's Create <span className="gradient-text">Together</span></>} align="left" />
              <p className="contact-desc">Have a project in mind? I'd love to hear about it.</p>
              <a href="mailto:hello@arman.studio" className="contact-email">hello@arman.studio</a>
              <div className="social-links">
                <SocialLink href="#" icon={<FaInstagram />} />
                <SocialLink href="#" icon={<FaTiktok />} />
                <SocialLink href="#" icon={<FaYoutube />} />
                <SocialLink href="#" icon={<FaLinkedinIn />} />
              </div>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <select>
                <option>Select Service</option>
                <option>Video Editing</option>
                <option>Motion Design</option>
                <option>Full Strategy</option>
              </select>
              <textarea rows={4} placeholder="Tell me about your project..."></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">Arman<span className="dot" /></div>
            <div className="footer-copy">© 2026 Arman. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sub-components for cleaner file
const SectionHeader = ({ label, title, align = 'center' }: { label: string, title: React.ReactNode, align?: 'center' | 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`section-header ${align === 'left' ? 'text-left' : 'text-center'}`}
  >
    <span className="section-label">{label}</span>
    <h2 className="section-title">{title}</h2>
  </motion.div>
);

const ProjectCard = ({ title, category, image, className = '' }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`project-card ${className}`}
  >
    <div className="project-image">
      <img src={image} alt={title} />
      <div className="project-overlay">
        <span className="view-btn">View Project</span>
      </div>
    </div>
    <div className="project-info">
      <span className="project-cat">{category}</span>
      <h3>{title}</h3>
    </div>
  </motion.div>
);

const ServiceCard = ({ icon, title, desc }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="service-card"
  >
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

const Stat = ({ number, label }: any) => (
  <div className="stat-item">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const SocialLink = ({ href, icon }: any) => (
  <a href={href} className="social-link">{icon}</a>
);

export default App
