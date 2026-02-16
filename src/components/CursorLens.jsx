import React, { useState, useRef, useEffect, useMemo, useId } from "react"
import {
    motion,
    useMotionValue,
    useSpring,
    useTime,
    useTransform,
} from "framer-motion"

export default function CursorLens({
    baseImage,    // Now treating as Bottom/Underneath Layer (1.png)
    revealImage,  // Now treating as Top/Cover Layer (2.png)
    objectFit = "cover",
    backgroundColor = "#F9F7F2",
    blobOutlineColor = "#A4B494",
    parallaxStrength = 10,
    showBackground = true,
    bgBlobCount = 8,
    bgBlobSize = 120,
    bgBlobComplexity = 60,
    bgBlobSpeed = 3,
    blobStrokeWidth = 1,
    previewCursor = false,
    blobSize = 150,
    shapeComplexity = 0.8,
    roughness = 10,
    speed = 250,
    viscosity = 2,
}) {

    const [isHovering, setIsHovering] = useState(false)
    const isActive = isHovering || previewCursor

    // Reference to the container
    const containerRef = useRef(null)

    // --- 1. SETUP BACKGROUND BLOBS ---
    const random = (min, max) => Math.random() * (max - min) + min
    const backgroundBlobs = useMemo(() => {
        return [...Array(bgBlobCount)].map(() => ({
            x: [random(-20, 110) + "%", random(-20, 110) + "%", random(-20, 110) + "%"],
            y: [random(-20, 110) + "%", random(-20, 110) + "%", random(-20, 110) + "%"],
            sizeFactor: random(0.5, 1.5),
            duration: random(25, 50) / bgBlobSpeed,
        }))
    }, [bgBlobCount, bgBlobSpeed])
    const bgFilterId = useId()

    // --- 2. MOUSE & PARALLAX ---
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const mouseXRatio = useMotionValue(0)
    const mouseYRatio = useMotionValue(0)
    const smoothOptions = { damping: 50, stiffness: 400 }
    const smoothX = useSpring(mouseXRatio, smoothOptions)
    const smoothY = useSpring(mouseYRatio, smoothOptions)

    // Parallax mainly affects the TOP layer as it's the "Screen"
    const revealX = useTransform(smoothX, [-1, 1], [parallaxStrength, -parallaxStrength])
    const revealY = useTransform(smoothY, [-1, 1], [parallaxStrength, -parallaxStrength])

    // --- 3. TRACKING ---
    useEffect(() => {
        const handleGlobalMove = (e) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const clientX = e.touches ? e.touches[0].clientX : e.clientX
            const clientY = e.touches ? e.touches[0].clientY : e.clientY
            const isInside = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom
            setIsHovering(isInside)
            if (isInside) {
                const x = clientX - rect.left
                const y = clientY - rect.top
                mouseX.set(x); mouseY.set(y)
                mouseXRatio.set((x / rect.width) * 2 - 1)
                mouseYRatio.set((y / rect.height) * 2 - 1)
            } else {
                mouseXRatio.set(0); mouseYRatio.set(0)
            }
        }
        window.addEventListener("mousemove", handleGlobalMove)
        window.addEventListener("touchstart", handleGlobalMove)
        window.addEventListener("touchmove", handleGlobalMove)
        return () => {
            window.removeEventListener("mousemove", handleGlobalMove)
            window.removeEventListener("touchstart", handleGlobalMove)
            window.removeEventListener("touchmove", handleGlobalMove)
        }
    }, [])

    // --- 4. FLUID PHYSICS ---
    const time = useTime()
    const createWake = (index) => {
        const stiffness = speed * (1 - index * 0.15)
        const damping = 20 + viscosity * index * 5
        const mass = 0.1 + index * 0.1
        return { x: useSpring(mouseX, { stiffness, damping, mass }), y: useSpring(mouseY, { stiffness, damping, mass }) }
    }
    const head = createWake(0); const body1 = createWake(1); const body2 = createWake(2); const tail = createWake(4);
    const complexityRadius = blobSize * shapeComplexity * 0.6
    const sat1X = useTransform(time, (t) => head.x.get() + Math.sin(t * 0.002) * complexityRadius)
    const sat1Y = useTransform(time, (t) => head.y.get() + Math.cos(t * 0.002) * complexityRadius)
    const sat2X = useTransform(time, (t) => head.x.get() + Math.cos(t * 0.004) * (complexityRadius * 0.8))
    const sat2Y = useTransform(time, (t) => head.y.get() + Math.sin(t * 0.004) * (complexityRadius * 0.8))

    const cursorFilterId = useId()
    const maskId = useId()

    return (
        <div ref={containerRef} style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", backgroundColor: backgroundColor }}>

            {/* BACKGROUND BLOBS (Optional) */}
            {showBackground && (
                <>
                    <svg width="0" height="0" style={{ position: "absolute" }}>
                        <defs>
                            <filter id={bgFilterId}>
                                <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="3" result="noise" />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale={bgBlobComplexity} xChannelSelector="R" yChannelSelector="G" />
                            </filter>
                        </defs>
                    </svg>
                    <svg style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0, overflow: "visible" }}>
                        <g filter={`url(#${bgFilterId})`}>
                            {backgroundBlobs.map((blob, i) => (
                                <motion.circle key={i} initial={{ cx: blob.x[0], cy: blob.y[0] }} animate={{ cx: blob.x, cy: blob.y }} transition={{ duration: blob.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} r={blob.sizeFactor * bgBlobSize} fill="none" stroke={blobOutlineColor} strokeWidth={blobStrokeWidth} strokeOpacity={0.5} />
                            ))}
                        </g>
                    </svg>
                </>
            )}

            {/* BASE LAYER (Underneath - 1.png) */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 10 }}>
                <div
                    style={{
                        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                        backgroundPosition: "center", backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${baseImage})`,
                        backgroundSize: objectFit,
                        // Static because it's the wall behind
                    }}
                />
                {/* Optional: TEXT VISIBLE ONLY WHEN REVEALED? 
                     No, usually text is on top of everything. I'll put text in a separate layer on top Z=30 */}
            </div>

            {/* CURSOR MASK - Fluid Eraser (Gooey Black on White) */}
            <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                <defs>
                    {/* The Gooey Filter */}
                    <filter id={cursorFilterId}>
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="
                            1 0 0 0 0  
                            0 1 0 0 0  
                            0 0 1 0 0  
                            0 0 0 20 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>

                    <mask id={maskId} maskContentUnits="userSpaceOnUse">
                        {/* 1. White Background -> Top Image Visible */}
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />

                        {/* 2. Black Blobs -> Cut Hole (Fluid) */}
                        <g filter={`url(#${cursorFilterId})`}>
                            <motion.g>
                                {/* Main Cursor Blob */}
                                <motion.circle cx={head.x} cy={head.y} r={blobSize} fill="black" />

                                {/* Trailing Blobs needed for fluid effect */}
                                <motion.circle cx={body1.x} cy={body1.y} r={blobSize * 0.9} fill="black" />
                                <motion.circle cx={body2.x} cy={body2.y} r={blobSize * 0.8} fill="black" />
                                <motion.circle cx={tail.x} cy={tail.y} r={blobSize * 0.6} fill="black" />
                            </motion.g>
                        </g>
                    </mask>
                </defs>
            </svg>

            {/* TOP LAYER (Cover - 2.png) - Masked */}
            <motion.div
                style={{
                    position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 20, pointerEvents: "none",
                    mask: `url(#${maskId})`, WebkitMask: `url(#${maskId})`
                }}
            >
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.7 }} /> {/* Optional tint? */}

                <motion.div
                    style={{
                        width: "100%", height: "100%",
                        backgroundPosition: "center", backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${revealImage})`, // Top Image
                        backgroundSize: objectFit,
                        x: revealX, y: revealY, // Parallax on Top Layer
                        scale: 1.1,
                    }}
                />
            </motion.div>

            {/* TEXT OVERLAY (Above everything - Z=30) */}
            <div style={heroOverlayStyle}>
                <h1 style={{ ...heroTextStyle, color: "#fff" }}>WE CRAFT</h1>
                <h1 style={{ ...heroTextStyle, fontStyle: "italic", fontWeight: 400, color: "#E6B8B8" }}>DIGITAL CHAOS</h1>
            </div>

        </div>
    )
}

const heroOverlayStyle = {
    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
    textAlign: "center", zIndex: 30, width: "100%", pointerEvents: "none"
}

const heroTextStyle = {
    fontFamily: '"Playfair Display", serif', fontSize: "5rem", lineHeight: "0.9", margin: 0,
    textShadow: "0 10px 30px rgba(0,0,0,0.3)" // Shadow for readability over both images
}
