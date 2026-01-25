import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navStyles = {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isScrolled ? '1rem var(--container-padding)' : '1.5rem var(--container-padding)',
        background: isScrolled ? 'rgba(10, 10, 11, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none',
        transition: 'all 0.3s ease'
    };

    return (
        <motion.nav
            style={navStyles}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Arman</span>
                <span style={{ width: '8px', height: '8px', background: 'var(--gradient-primary)', borderRadius: '50%' }} />
            </a>

            <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                {['Work', 'Services', 'About', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                        {item}
                    </a>
                ))}
                <a href="#contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex' }}>
                    Let's Talk
                </a>
            </div>

            {/* Mobile Toggle would go here, simplified for desktop focus first */}
        </motion.nav>
    );
}
