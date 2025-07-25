// src/components/ThemeToggle.jsx

import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // Default to system preference if no saved theme
      setIsDarkMode(true);
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      setIsDarkMode(false);
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <div className={`toggle-cont ${isDarkMode ? "checked" : ""} scale-90 sm:scale-100`}> {/* Adjusted scale for smaller screens */}
        <input
          className="toggle-input"
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <label className="toggle-label p-0.5 sm:p-1" htmlFor="toggle"> {/* Adjusted padding */}
          <div className="cont-icon">
            {/* Sparkles for dark mode */}
            {!isDarkMode && (
              <>
                <span
                  style={{ "--width": 2, "--deg": 25, "--duration": 11 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 100, "--duration": 18 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 280, "--duration": 5 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 200, "--duration": 3 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 30, "--duration": 20 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 300, "--duration": 9 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 250, "--duration": 4 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 210, "--duration": 8 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 100, "--duration": 9 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 15, "--duration": 13 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 75, "--duration": 18 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 65, "--duration": 6 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 50, "--duration": 7 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 320, "--duration": 5 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 220, "--duration": 5 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 215, "--duration": 2 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 135, "--duration": 9 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 45, "--duration": 4 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 78, "--duration": 16 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 89, "--duration": 19 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 65, "--duration": 14 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 2, "--deg": 97, "--duration": 1 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 174, "--duration": 10 }}
                  className="sparkle"
                ></span>
                <span
                  style={{ "--width": 1, "--deg": 236, "--duration": 5 }}
                  className="sparkle"
                ></span>
              </>
            )}

            {/* Icon for dark mode (moon-like) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              className="icon"
              style={{ display: isDarkMode ? "block" : "none" }}
            >
              <path d="M0.96233 28.61C1.36043 29.0081 1.96007 29.1255 2.47555 28.8971L10.4256 25.3552C13.2236 24.11 16.4254 24.1425 19.2107 25.4401L27.4152 29.2747C27.476 29.3044 27.5418 29.3023 27.6047 29.32C27.6563 29.3348 27.7079 29.3497 27.761 29.3574C27.843 29.3687 27.9194 29.3758 28 29.3688C28.1273 29.3617 28.2531 29.3405 28.3726 29.2945C28.4447 29.262 28.5162 29.2287 28.5749 29.1842C28.6399 29.1446 28.6993 29.0994 28.7509 29.0477L28.9008 28.8582C28.9468 28.7995 28.9793 28.7274 29.0112 28.656C29.0599 28.5322 29.0811 28.4036 29.0882 28.2734C29.0939 28.1957 29.0868 28.1207 29.0769 28.0415C29.0705 27.9955 29.0585 27.9524 29.0472 27.9072C29.0295 27.8343 29.0302 27.7601 28.9984 27.6901L25.1638 19.4855C23.8592 16.7073 23.8273 13.5048 25.0726 10.7068L28.6145 2.75679C28.8429 2.24131 28.7318 1.63531 28.3337 1.2372C27.9165 0.820011 27.271 0.721743 26.7491 0.9961L19.8357 4.59596C16.8418 6.15442 13.2879 6.18696 10.2615 4.70062L1.80308 0.520214C1.7055 0.474959 1.60722 0.441742 1.50964 0.421943C1.44459 0.409215 1.37882 0.395769 1.3074 0.402133C1.14406 0.395769 0.981436 0.428275 0.818095 0.499692C0.77284 0.519491 0.719805 0.545671 0.67455 0.578198C0.596061 0.617088 0.524653 0.675786 0.4596 0.74084C0.394546 0.805894 0.335843 0.877306 0.296245 0.956502C0.263718 1.00176 0.237561 1.05477 0.217762 1.10003C0.152708 1.24286 0.126545 1.40058 0.120181 1.54978C0.120181 1.61483 0.126527 1.6735 0.132891 1.73219C0.15269 1.85664 0.178881 1.97332 0.237571 2.08434L4.41798 10.5427C5.91139 13.5621 5.8725 17.1238 4.3204 20.1099L0.720514 27.0233C0.440499 27.5536 0.545137 28.1928 0.96233 28.61Z"></path>
            </svg>
            {/* Icon for light mode (sun-like) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              className="light-switchicon-light"
              style={{ display: isDarkMode ? "none" : "block" }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 .723a.75.75 0 0 1 .75.75v1.27a.75.75 0 0 1-1.5 0v-1.27a.75.75 0 0 1 .75-.75ZM3.44 3.44a.75.75 0 0 1 1.06 0l.898.898a.75.75 0 0 1-1.06 1.06l-.898-.897a.75.75 0 0 1 0-1.06Zm13.12 0a.75.75 0 0 1 0 1.06l-.898.898a.75.75 0 0 1-1.06-1.06l.897-.898a.75.75 0 0 1 1.06 0Zm-3.997 3.997a3.625 3.625 0 1 0-5.126 5.126 3.625 3.625 0 0 0 5.126-5.126Zm-6.187-1.06a5.125 5.125 0 1 1 7.248 7.247 5.125 5.125 0 0 1-7.248-7.248ZM.723 10a.75.75 0 0 1 .75-.75h1.27a.75.75 0 0 1 0 1.5h-1.27a.75.75 0 0 1-.75-.75Zm15.784 0a.75.75 0 0 1 .75-.75h1.27a.75.75 0 0 1 0 1.5h-1.27a.75.75 0 0 1-.75-.75Zm-1.906 4.602a.75.75 0 0 1 1.061 0l.898.897a.75.75 0 1 1-1.06 1.061l-.899-.898a.75.75 0 0 1 0-1.06Zm-9.202 0a.75.75 0 0 1 0 1.06l-.898.898a.75.75 0 1 1-1.06-1.06l.897-.898a.75.75 0 0 1 1.06 0ZM10 16.508a.75.75 0 0 1 .75.75v1.27a.75.75 0 0 1-1.5 0v-1.27a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;