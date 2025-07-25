// src/components/Footer.jsx

import React, { useState, useEffect, useRef } from "react"; // Added useRef
import { motion } from "framer-motion";

const Footer = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode
  const [formValid, setFormValid] = useState(false); // New state to track form validity
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // New state for submission feedback
  
  // Refs for form inputs to check validity
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);
  const otherRoleInputRef = useRef(null);

  useEffect(() => {
    // Listen for changes in the body's class list to determine theme
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Initial check
    setIsDarkMode(document.body.classList.contains("dark"));

    return () => observer.disconnect();
  }, []); // Run once on mount

  // Effect to re-check form validity whenever relevant states change
  useEffect(() => {
    const checkFormValidity = () => {
      const nameValid = nameRef.current?.value.trim() !== '';
      const emailValid = emailRef.current?.value.trim() !== '' && emailRef.current?.checkValidity(); // Check email format
      
      let roleValid = false;
      if (selectedRole === "Other") {
        roleValid = otherRoleInputRef.current?.value.trim() !== '';
      } else {
        roleValid = selectedRole !== '';
      }
      
      setFormValid(nameValid && emailValid && roleValid);
    };

    // Add event listeners to inputs for real-time validation check
    const inputs = [nameRef.current, emailRef.current, roleRef.current, otherRoleInputRef.current];
    inputs.forEach(input => {
      if (input) {
        input.addEventListener('input', checkFormValidity);
        input.addEventListener('change', checkFormValidity); // For select dropdown
      }
    });

    // Initial check on mount
    checkFormValidity();

    // Cleanup listeners
    return () => {
      inputs.forEach(input => {
        if (input) {
          input.removeEventListener('input', checkFormValidity);
          input.removeEventListener('change', checkFormValidity);
        }
      });
    };
  }, [selectedRole, otherRole]); // Re-run when selectedRole or otherRole changes


  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    if (e.target.value !== "Other") {
      setOtherRole(""); // Clear other role if a different option is selected
    }
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();

    // Re-check validity on submit in case user bypassed real-time checks
    if (!formValid) {
        console.log("Form is not valid. Please fill all required fields.");
        return;
    }

    console.log("Waitlist form submitted!");
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Phone Number:", e.target.phone.value); // Phone is optional, no ref needed for validity check
    console.log("Role:", selectedRole === "Other" ? otherRoleInputRef.current.value : selectedRole);
    
    // Visual feedback for successful submission
    setSubmissionSuccess(true);
    setTimeout(() => {
        setSubmissionSuccess(false); // Reset success state after a short delay
        // You might want to clear the form here, or show a persistent success message
        e.target.reset(); // Reset form fields
        setSelectedRole(""); // Reset dropdown
        setOtherRole(""); // Reset other role input
        setFormValid(false); // Reset form validity state
    }, 2000); // Show success effect for 2 seconds
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="relative w-full py-12 px-4 md:px-8 mt-10 overflow-hidden sm:py-16"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Background grid/lines for consistency with HeroSection */}
      <div className="hero-lines-grid opacity-20">
        <div className="hero-h-line hero-h-line-1" style={{ gridArea: "1/1/2/7" }}></div>
        <div className="hero-h-line hero-h-line-2" style={{ gridArea: "2/1/3/7" }}></div>
        <div className="hero-h-line hero-h-line-3" style={{ gridArea: "3/1/4/7" }}></div>
        <div className="hero-h-line hero-h-line-4" style={{ gridArea: "4/1/5/7" }}></div>
        <div className="hero-h-line hero-h-line-5" style={{ gridArea: "5/1/6/7" }}></div>
        <div className="hero-h-line hero-h-line-6" style={{ gridArea: "6/1/7/7" }}></div>
        <div className="hero-v-line hero-v-line-1" style={{ gridArea: "1/1/7/2" }}></div>
        <div className="hero-v-line hero-v-line-2" style={{ gridArea: "1/2/7/3" }}></div>
        <div className="hero-v-line hero-v-line-3" style={{ gridArea: "1/3/7/4" }}></div>
        <div className="hero-v-line hero-v-line-4" style={{ gridArea: "1/4/7/5" }}></div>
        <div className="hero-v-line hero-v-line-5" style={{ gridArea: "1/5/7/6" }}></div>
        <div className="hero-v-line hero-v-line-6" style={{ gridArea: "1/6/7/7" }}></div>
      </div>
      <span className="hero-cross cross-1" style={{ top: "15%", left: "10%" }}></span>
      <span className="hero-cross cross-2" style={{ bottom: "20%", right: "10%" }}></span>
      <span className="hero-cross" style={{ top: "50%", left: "70%" }}></span>


      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center text-center sm:max-w-4xl">
        {/* Heading and Subheading - Top and Middle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gradient leading-tight">
          Don’t miss early access!
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10" style={{ color: 'var(--text-secondary)' }}>
          Synclyft is launching soon. Be part of our exclusive early waitlist and
          redefine how hiring works for you.
        </p>

        {/* Form Section - small, horizontal fields (responsive) */}
        <div className="w-full max-w-sm glass-effect p-6 md:p-10 rounded-xl sm:max-w-3xl sm:p-8">
          <form onSubmit={handleWaitlistSubmit} className="w-full space-y-4 sm:space-y-6">
            {/* Horizontal Input Fields for Name, Email, Phone */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4">
              <div className="w-full">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  className="input-field"
                  type="text"
                  placeholder="Your Full Name"
                  required
                  ref={nameRef} // Attach ref
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  className="input-field"
                  type="email"
                  placeholder="Your Email Address"
                  required
                  ref={emailRef} // Attach ref
                />
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  className="input-field"
                  type="tel"
                  placeholder="Phone Number (Optional)"
                />
              </div>
            </div>

            {/* Dropdown for Role */}
            <div className="w-full mt-4 sm:mt-6">
              <label htmlFor="role" className="sr-only">Your Role</label>
              <div className="relative">
                <select
                  id="role"
                  className="input-field appearance-none pr-8"
                  value={selectedRole}
                  onChange={handleRoleChange}
                  required
                  ref={roleRef} // Attach ref
                >
                  <option value="" disabled>Select your role</option>
                  <option value="Student">Student</option>
                  <option value="Job Seeker">Job Seeker</option>
                  <option value="Company Representative">Company Representative</option>
                  <option value="Recruiter / HR Professional">Recruiter / HR Professional</option>
                  <option value="College / Placement Coordinator">College / Placement Coordinator</option>
                  <option value="Hiring Consultant / Agency">Hiring Consultant / Agency</option>
                  <option value="Other">Other - specify</option>
                </select>
                {/* Custom arrow for select */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z" />
                  </svg>
                </div>
              </div>
              {selectedRole === "Other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <label htmlFor="otherRole" className="sr-only">Please specify your role</label>
                  <input
                    id="otherRole"
                    className="input-field"
                    type="text"
                    placeholder="e.g., Freelancer, Entrepreneur"
                    value={otherRole}
                    onChange={(e) => setOtherRole(e.target.value)}
                    required
                    ref={otherRoleInputRef} // Attach ref
                  />
                </motion.div>
              )}
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              className={`btn-glass mt-4 sm:mt-6 ${formValid ? 'btn-glass-valid' : 'btn-glass-invalid'} ${submissionSuccess ? 'btn-glass-success' : ''}`}
              whileHover={formValid ? { scale: 1.02, boxShadow: "0 6px 16px rgba(0,0,0,0.2)" } : {}} // Slightly more pronounced hover on valid button
              whileTap={{ scale: 0.98 }} // Add tap effect
              disabled={!formValid && !submissionSuccess} // Disable if not valid and not in success state
            >
              {submissionSuccess ? (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Submitted! 🎉
                </motion.span>
              ) : (
                "Click me to stay tuned"
              )}
            </motion.button>
          </form>
        </div>
      </div>

      {/* Basic copyright/branding at the very bottom, consistent with overall app */}
      <div className="text-center mt-8 sm:mt-12 text-sm" style={{ color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} SyncLyft. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
