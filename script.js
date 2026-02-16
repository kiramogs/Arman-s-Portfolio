// --- 1. CORE SETUP & FUNDAMENTALS ---

// Initialize Smooth Scroll (Lenis) - High Performance Settings
const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Setup
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor - Elegant & Laggy
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

// Animation loop for smooth cursor lag
function animateCursor() {
    let dt = 1.0 - Math.pow(1.0 - 0.15, 2); // Ease factor

    cursorX += (mouseX - cursorX) * dt;
    cursorY += (mouseY - cursorY) * dt;

    cursorOutline.style.left = `${cursorX}px`;
    cursorOutline.style.top = `${cursorY}px`;

    requestAnimationFrame(animateCursor);
}
animateCursor();

// --- 2. THREE.JS 3D BACKGROUND (The "Lando" Vibe) ---

// Check if Three is loaded to avoid errors if CDN fails
if (typeof THREE !== 'undefined') {
    const canvas = document.querySelector('#fluid-canvas');
    if (canvas) {
        const scene = new THREE.Scene();
        /* Fog for depth - fading into the background color */
        scene.fog = new THREE.Fog(0xF9F7F2, 10, 50);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 15;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // GEOMETRY - Abstract Crystal Shape
        // Icosahedron with detail 0 (sharp, crystal like)
        const geometry = new THREE.IcosahedronGeometry(8, 0);

        // MATERIAL - Physical Glass/Crystal look
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xE6B8B8, // Dusty Pink base
            roughness: 0.2,  // Slight matte
            metalness: 0.1,
            reflectivity: 0.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            transparent: true,
            opacity: 0.6,
            flatShading: true,
            side: THREE.DoubleSide
        });

        const shape = new THREE.Mesh(geometry, material);
        scene.add(shape);

        // WIREFRAME OVERLAY (For that "Tech/Architect" feel)
        const wireGeo = new THREE.IcosahedronGeometry(8.1, 0); // Slightly larger
        const wireMat = new THREE.MeshBasicMaterial({
            color: 0xA4B494, // Sage Green
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        const wireframe = new THREE.Mesh(wireGeo, wireMat);
        shape.add(wireframe);

        // LIGHTING
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0xffffff, 0.8);
        pointLight1.position.set(20, 20, 20);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xD4A5A5, 1); // Pinkish light
        pointLight2.position.set(-20, -10, 10);
        scene.add(pointLight2);


        // ANIMATION LOOP (3D)
        function animate3D() {
            requestAnimationFrame(animate3D);

            // Constant slow rotation
            shape.rotation.x += 0.001;
            shape.rotation.y += 0.002;

            // Mouse Interaction Parallax
            // Subtle rotation based on mouse position relative to center
            const targetRotX = (mouseY / window.innerHeight - 0.5) * 0.5;
            const targetRotY = (mouseX / window.innerWidth - 0.5) * 0.5;

            shape.rotation.x += 0.05 * (targetRotX - shape.rotation.x);
            shape.rotation.y += 0.05 * (targetRotY - shape.rotation.y);

            renderer.render(scene, camera);
        }
        animate3D();

        // Resize Handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Scroll Based Rotation
        // Rotate the shape faster when scrolling
        window.addEventListener('scroll', () => {
            shape.rotation.y += 0.05;
        });
    }
}


// --- 3. ADVANCED INTERACTIONS & HORIZONTAL SCROLL ---

const workSection = document.querySelector('.work');

// REVEAL ANIMATIONS (Staggered Text)
// Helper to split text into spans (Manual SplitText)
function splitTextToSpans(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        const text = el.innerText;
        el.innerHTML = text.split('').map(char => `<span style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
    });
}

// Apply to Hero Heading
splitTextToSpans('.glitch-text');
splitTextToSpans('.outlined-text');

// Animate characters
gsap.from(".glitch-text span", {
    y: 100,
    opacity: 0,
    rotationX: -90,
    duration: 1.2,
    stagger: 0.05,
    ease: "power4.out",
    delay: 0.5
});

gsap.from(".outlined-text span", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.05,
    ease: "power4.out",
    delay: 0.8
});


// Bento Grid Parallax
const bentoItems = document.querySelectorAll('.bento-item');

bentoItems.forEach(item => {
    gsap.fromTo(item,
        { y: 100, opacity: 0 },
        {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }
    );

    // Mouse Tilt Effect (3D Card)
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(item, {
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

// Magnetic Buttons (Enhanced)
const magnets = document.querySelectorAll('.primary-btn, .secondary-btn, .nav-link, .social-btn');
magnets.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;

        gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// MARQUEE SPEED CONTROL
// Speed it up on scroll
let marqueeTween = gsap.to(".marquee-content", {
    xPercent: -50,
    repeat: -1,
    duration: 20,
    ease: "linear"
});

ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
        // Change timeScale based on scroll velocity
        const velocity = Math.abs(self.getVelocity());
        const scale = 1 + (velocity / 200); // Base speed + scroll boost

        gsap.to(marqueeTween, {
            timeScale: scale,
            duration: 0.2
        });

        // Return to normal speed after stop scrolling
        gsap.delayedCall(0.5, () => {
            gsap.to(marqueeTween, { timeScale: 1, duration: 0.5 });
        });
    }
});
