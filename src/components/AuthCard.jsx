import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { BorderBeam } from "./lightswind/border-beam";

const ROTATION_RANGE = 10;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const AuthCard = ({ children, brandColor, brandRadius, isActive, onClick }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        transform,
        "--brand-color": brandColor,
        "--brand-radius": brandRadius,
      }}
      className={`
        relative w-80 min-h-full p-6 rounded-xl glass-effect cursor-pointer
        transition-all duration-75 ease-out-back flex flex-col justify-between
        ${isActive ? "z-10 scale-105" : "z-0 scale-90 opacity-60"}
      `}
    >
      {/* Glow / interactive border layer */}
      <div className="absolute inset-0 rounded-[var(--brand-radius)] overflow-hidden pointer-events-none group">
        {" "}
        {/* Added 'group' class for glow */}
        <motion.div // Changed to motion.div to potentially allow for future animations if needed
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at var(--x, 0px) var(--y, 0px), var(--brand-color), transparent 60%)`,
            maskImage: `radial-gradient(400px circle at var(--x, 0px) var(--y, 0px), #000, transparent 60%)`,
            WebkitMaskImage: `radial-gradient(400px circle at var(--x, 0px) var(--y, 0px), #000, transparent 60%)`,
          }}
        />
        <BorderBeam
          size={200}
          duration={4}
          delay={0}
          colorFrom="#f5f5f5"
          colorTo="#ffffff"
          reverse={false}
          initialOffset={0}
          borderThickness={1.5}
          opacity={0.7}
          glowIntensity={0.4}
          beamBorderRadius={100}
          pauseOnHover={false}
          speedMultiplier={0.5}
        />
      </div>
      {/* Main content */}
      <div
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col h-full "
      >
        {children}
      </div>
    </motion.div>
  );
};

export default AuthCard;
