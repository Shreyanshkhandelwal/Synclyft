// src/components/AuthCards.jsx

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import AuthCard from './AuthCard';

// Icons (assuming these are SVG imports or image paths)
import CardLogo from '../assets/CardLogo.png'; // Placeholder, adjust as needed

import SyncLyftSLogo from '../assets/S-Image.png'; // Using the 'S' image you uploaded as SyncLyft logo

const AuthCards = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first card (SyncLyft Intro)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // State to track screen width for responsiveness

  // Refs for custom swipe functionality
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);
  const isSwiping = useRef(false); // To prevent click when a swipe is detected

  // Define swipe threshold - Adjusted for less effort
  const swipeThreshold = 50; // pixels to swipe to trigger a card change (reduced from 80)

  // Effect to update screenWidth on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define the new card content (as provided by you)
  const cards = [
    // NEW 5th CARD: SyncLyft Intro
    {
      id: 'synclyft-intro',
      logo: SyncLyftSLogo, // Use the uploaded 'S' image
      title: 'SyncLyft',
      brandColor: '#007bff', // A neutral or primary brand color for SyncLyft
      brandRadius: '12px',
      // No description property for this card
    },
    // Existing Cards (shifted by 1 index)
    {
      id: 'students',
      logo: CardLogo, // Placeholder logo, adjust as needed
      title: 'For Students & Job Seekers',
      brandColor: '#4CAF50', // Example color
      brandRadius: '12px',
      description: (
        <div className="text-sm md:text-base space-y-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <p>
            Practice real interviews with our AI-powered bot.
          </p>
          <p>
            Get instant, actionable feedback to improve skills.
          </p>
          <p>
            Personalized analysis to boost your job readiness.
          </p>
          <p>
            Gain confidence & clarity before real-world placements.
          </p>
          <p className="font-semibold text-gradient">
            Stand out from the crowd. Be job-ready from day one.
          </p>
        </div>
      ),
    },
    {
      id: 'hr-firms',
      logo: CardLogo, // Placeholder logo, adjust as needed
      title: 'For HR Firms & Recruitment Agencies',
      brandColor: '#FFC107', // Example color
      brandRadius: '12px',
      description: (
        <div className="text-sm md:text-base space-y-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <p>
            AI-driven resume screening to cut shortlisting time.
          </p>
          <p>
            Objective candidate assessments to reduce hiring bias.
          </p>
          <p>
            Auto-generated candidate reports for confident decisions.
          </p>
          <p>
            Scalable assessments to manage large applicant volumes.
          </p>
          <p className="font-semibold text-gradient">
            Smarter shortlisting. Faster hiring. Happier clients.
          </p>
        </div>
      ),
    },
    {
      id: 'colleges',
      logo: CardLogo, // Placeholder logo, adjust as needed
      title: 'For Colleges & Placement Coordinators',
      brandColor: '#2196F3', // Example color
      brandRadius: '12px',
      description: (
        <div className="text-sm md:text-base space-y-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <p>
            AI-led mock interviews to improve student placement rates.
          </p>
          <p>
            Real-time insights on student performance and growth.
          </p>
          <p>
            Train hundreds without adding faculty workload.
          </p>
          <p>
            Centralized dashboard for tracking and benchmarking.
          </p>
          <p className="font-semibold text-gradient">
            Transform your placement cell into an AI-powered engine.
          </p>
        </div>
      ),
    },
    {
      id: 'companies',
      logo: CardLogo, // Placeholder logo, adjust as needed
      title: 'For Companies & Startups',
      brandColor: '#9C27B0', // Example color
      brandRadius: '12px',
      description: (
        <div className="text-sm md:text-base space-y-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <p>
            Slash hiring time & costs with automated interviews.
          </p>
          <p>
            Discover better talent using stress & behavior analytics.
          </p>
          <p>
            Eliminate manual screening and bias-prone filtering.
          </p>
          <p>
            Boost hiring efficiency without compromising quality.
          </p>
          <p className="font-semibold text-gradient">
            Let Synclyft handle the heavy lifting — you hire better.
          </p>
        </div>
      ),
    },
  ];

  // Function to navigate cards (used by dots and swipe)
  const navigateCards = (direction) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = cards.length - 1; // Wrap around to the last card
      } else if (newIndex >= cards.length) {
        newIndex = 0; // Wrap around to the first card
      }
      return newIndex;
    });
  };

  // --- Custom Swipe/Drag Handlers ---

  // Touch events for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isSwiping.current = false; // Reset swiping flag
  };

  const handleTouchMove = (e) => {
    touchCurrentX.current = e.touches[0].clientX;
    const deltaX = touchCurrentX.current - touchStartX.current;
    if (Math.abs(deltaX) > 10) { // Small threshold to detect actual swipe vs accidental touch
      isSwiping.current = true;
      // Optionally prevent default to stop vertical scrolling if a horizontal swipe is detected
      // e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    const deltaX = touchCurrentX.current - touchStartX.current;

    if (isSwiping.current) { // Only process if a swipe was detected
      if (deltaX < -swipeThreshold) { // Swiped Left (Right-to-Left) -> Next card
        navigateCards(1);
      } else if (deltaX > swipeThreshold) { // Swiped Right (Left-to-Right) -> Previous card
        navigateCards(-1);
      }
    }
    // Reset refs
    touchStartX.current = 0;
    touchCurrentX.current = 0;
    isSwiping.current = false;
  };

  // Mouse events for desktop drag/swipe
  const mouseDownX = useRef(0);
  const isMouseDown = useRef(false);

  const handleMouseDown = (e) => {
    isMouseDown.current = true;
    mouseDownX.current = e.clientX;
    isSwiping.current = false; // Reset swiping flag
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown.current) return;
    const deltaX = e.clientX - mouseDownX.current;
    if (Math.abs(deltaX) > 10) { // Small threshold to detect actual drag
      isSwiping.current = true;
      e.preventDefault(); // Prevent text selection during drag
    }
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown.current) return;
    isMouseDown.current = false;
    const deltaX = e.clientX - mouseDownX.current;

    if (isSwiping.current) { // Only process if a drag/swipe was detected
      if (deltaX < -swipeThreshold) { // Dragged Left (Right-to-Left) -> Next card
        navigateCards(1);
      } else if (deltaX > swipeThreshold) { // Dragged Right (Left-to-Right) -> Previous card
        navigateCards(-1);
      }
    }
    // Reset refs
    mouseDownX.current = 0;
    isSwiping.current = false;
  };

  // --- End Custom Swipe/Drag Handlers ---

  const handleCardClick = (index) => {
    // Only allow click to switch if no swipe was detected (isSwiping.current will be false for a pure click)
    if (!isSwiping.current) {
      setActiveIndex(index);
    }
  };

  return (
    <div
      className="relative w-full flex justify-center items-center h-[600px] py-8 overflow-hidden select-none"
      style={{ perspective: '1000px' }}
      // Attach custom swipe/drag event listeners to the container
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => { // Handle mouse leaving the container while dragging
        if (isMouseDown.current) {
          handleMouseUp(); // Simulate mouse up to prevent stuck drag state
        }
      }}
    >
      {cards.map((card, index) => {
        let x, z, rotateY, scale, opacity, zIndex;

        // Define responsive offsets based on screenWidth
        let baseOffsetX, baseOffsetFarX, baseOffsetZ, baseOffsetFarZ, baseRotateY, baseRotateYFar, baseScale, baseScaleFar, baseOpacity, baseOpacityFar;

        if (screenWidth < 640) { // Mobile (sm breakpoint)
          baseOffsetX = 120; // Closer on mobile
          baseOffsetFarX = 200; // Even closer for the furthest card
          baseOffsetZ = -40;
          baseOffsetFarZ = -60;
          baseRotateY = 8; // Less rotation
          baseRotateYFar = 12;
          baseScale = 0.92;
          baseScaleFar = 0.82;
          baseOpacity = 0.75;
          baseOpacityFar = 0.55;
        } else if (screenWidth < 1024) { // Tablet (md breakpoint)
          baseOffsetX = 180;
          baseOffsetFarX = 300;
          baseOffsetZ = -60;
          baseOffsetFarZ = -90;
          baseRotateY = 15;
          baseRotateYFar = 25;
          baseScale = 0.9;
          baseScaleFar = 0.78;
          baseOpacity = 0.7;
          baseOpacityFar = 0.48;
        } else { // Desktop (lg and up)
          baseOffsetX = 250; // Adjusted for 5 cards
          baseOffsetFarX = 400; // Adjusted for 5 cards
          baseOffsetZ = -80;
          baseOffsetFarZ = -120;
          baseRotateY = 20;
          baseRotateYFar = 30;
          baseScale = 0.88;
          baseScaleFar = 0.70; // More scaled down
          baseOpacity = 0.65;
          baseOpacityFar = 0.4; // More faded
        }

        // Calculate effective distance from the active card (0-based, positive values)
        const effectiveDistance = (index - activeIndex + cards.length) % cards.length;

        if (effectiveDistance === 0) { // Center card
          x = 0; z = 0; rotateY = 0; scale = 1; opacity = 1; zIndex = 20;
        } else if (effectiveDistance === 1) { // Card immediately to the right (index + 1)
          x = baseOffsetX; z = baseOffsetZ; rotateY = baseRotateY; scale = baseScale; opacity = baseOpacity; zIndex = 10;
        } else if (effectiveDistance === 2) { // Second card to the right (index + 2)
          x = baseOffsetFarX; z = baseOffsetFarZ; rotateY = baseRotateYFar; scale = baseScaleFar; opacity = baseOpacityFar; zIndex = 5;
        } else if (effectiveDistance === cards.length - 1) { // Card immediately to the left (index - 1, wraps around)
          x = -baseOffsetX; z = baseOffsetZ; rotateY = -baseRotateY; scale = baseScale; opacity = baseOpacity; zIndex = 10;
        } else if (effectiveDistance === cards.length - 2) { // Second card to the left (index - 2, wraps around)
          x = -baseOffsetFarX; z = baseOffsetFarZ; rotateY = -baseRotateYFar; scale = baseScaleFar; opacity = baseOpacityFar; zIndex = 5;
        } else { // Fallback for any unexpected state, should not happen with 5 cards
            x = 0; z = -200; rotateY = 0; scale = 0; opacity = 0; zIndex = 1;
        }

        // Conditionally apply hover properties only to the active card
        const hoverProps = index === activeIndex ? {
          scale: 1.03, // Pop out slightly
          y: -15,      // Lift up
          z: 10,       // Move forward on Z-axis
          transition: { type: "spring", stiffness: 400, damping: 10 }
        } : {};

        return (
          <motion.div
            key={card.id}
            initial={{ x, z, rotateY, scale, opacity }} // Set initial state to match target animated state
            animate={{ x, z, rotateY, scale, opacity }}
            {...(index === activeIndex && { whileHover: hoverProps })} // Apply whileHover only if active
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="absolute cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              zIndex: zIndex,
            }}
            onClick={() => handleCardClick(index)}
          >
            <AuthCard
              brandColor={card.brandColor}
              brandRadius={card.brandRadius}
              isActive={index === activeIndex}
            >
              {/* Conditional content for SyncLyft Intro card vs. other cards */}
              {card.id === 'synclyft-intro' ? (
                <div className="flex flex-col items-center justify-center h-full p-4"> {/* Added p-4 for internal padding */}
                  {/* Title */}
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-14" style={{ color: 'var(--text-primary)' }}> {/* Increased mb for spacing */}
                    {card.title}
                  </h3>
                  {/* Image - now larger and centered */}
                  {card.logo && (
                    <img
                      src={card.logo}
                      alt={`${card.title} logo`}
                      className="w-38 h-38 sm:w-48 sm:h-48 object-contain" // Made image larger and responsive
                    />
                  )}
                </div>
              ) : (
                <>
                  {/* Header Content for other cards */}
                  <div className="flex flex-col items-center text-center">
                    {card.logo && (
                      <img
                        src={card.logo}
                        alt={`${card.title} logo`}
                        className="w-10 h-10 mb-4 object-contain"
                      />
                    )}
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {card.title}
                    </h3>
                  </div>

                  {/* Description Content - Only render if description exists */}
                  {card.description && (
                    <div className="w-full">
                      {card.description}
                    </div>
                  )}
                </>
              )}
            </AuthCard>
          </motion.div>
        );
      })}

      {/* Navigation Dots */}
      <div className="absolute bottom-2 flex space-x-3 z-30">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              h-2 rounded-full transition-all duration-300 cursor-pointer
              ${index === activeIndex
                ? ' w-8 bg-gradient-to-br from-0% from-[#60a5fa] via-50% via-[#a78bfa] to-100% to-[#f472b6] '
                : 'bg-gray-600 w-2 hover:bg-gray-500'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthCards;
