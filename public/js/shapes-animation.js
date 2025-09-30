// Shapes Animation - Pure JavaScript with GSAP
document.addEventListener("DOMContentLoaded", function () {
  console.log("Shapes animation script loaded");

  // -------------- Ball Animation with Wave Motion
  const ball = document.querySelector("#ball");

  if (ball) {
    console.log("Ball element found");
    gsap.set(ball, { x: 100, y: 100 });

    let lastScrollTime = Date.now();
    let isScrolling = false;
    let floatingAnimation = null;

    // Floating animation (when stopped)
    function startFloatingAnimation() {
      if (floatingAnimation) return; // Prevent duplicate execution if already running

      floatingAnimation = gsap.to(ball, {
        y: "+=15", // Move 15px up and down from current position
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "center center",
      });
    }

    // Stop floating animation
    function stopFloatingAnimation() {
      if (floatingAnimation) {
        floatingAnimation.kill();
        floatingAnimation = null;
      }
    }

    // Scroll-based ball animation (smooth movement)
    function updateBallPosition() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Calculate scroll progress very quickly (based on 0.9x screen height)
      const scrollProgress = Math.min(scrollTop / (windowHeight * 1), 1);

      // Calculate x position based on scroll (5% -> 85% of screen width)
      const currentX = windowWidth * 0.1 + scrollProgress * (windowWidth * 0.8);

      // Linearly change base y value based on x position (10% -> 70% of screen height)
      const baseY = windowHeight * 0.5 + scrollProgress * (windowHeight * 1.2);

      // Add wave effect
      const waveY = baseY + Math.cos(currentX / 100) * 30;

      // Stop floating animation when scrolling
      stopFloatingAnimation();
      isScrolling = true;
      lastScrollTime = Date.now();

      // Detect scroll stop and start floating animation
      gsap.to(ball, {
        x: currentX,
        y: waveY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    }

    // Detect scroll stop
    function checkScrollStop() {
      if (isScrolling && Date.now() - lastScrollTime > 500) {
        // Consider stopped after 0.5 seconds
        isScrolling = false;
        startFloatingAnimation();
      }
    }

    // Periodically check for scroll stop
    setInterval(checkScrollStop, 100);

    // Add scroll event listener (with throttle)
    let ticking = false;
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateBallPosition);
        ticking = true;
      }
    }

    function handleScroll() {
      ticking = false;
      requestTick();
    }

    window.addEventListener("scroll", handleScroll);

    // Set initial position and start floating animation
    updateBallPosition();
    setTimeout(startFloatingAnimation, 1000); // Start floating animation after 1 second
  } else {
    console.log("Ball element not found");
  }

  // -------------- Square Animation (from right to bottom left)
  const square = document.querySelector("#square");

  if (square) {
    console.log("Square element found");
    // Set initial position to top right
    gsap.set(square, { x: window.innerWidth - 50, y: 50 });

    let lastScrollTime = Date.now();
    let isScrolling = false;
    let squareFloatingAnimation = null;

    // Square floating animation (when stopped)
    function startSquareFloatingAnimation() {
      if (squareFloatingAnimation) return; // Prevent duplicate execution if already running

      squareFloatingAnimation = gsap.to(square, {
        y: "+=12", // Move 12px up and down from current position (smaller than ball)
        duration: 3.0, // Slightly slower than ball
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "center center",
      });
    }

    // Stop square floating animation
    function stopSquareFloatingAnimation() {
      if (squareFloatingAnimation) {
        squareFloatingAnimation.kill();
        squareFloatingAnimation = null;
      }
    }

    // Scroll-based square animation (from right to bottom left)
    function updateSquarePosition() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Calculate scroll progress
      const scrollProgress = Math.min(scrollTop / (windowHeight * 1), 1);

      // Move from right to left (95% -> 15% of screen width)
      const currentX = windowWidth * 0.9 - scrollProgress * (windowWidth * 0.8);

      // Move from top to bottom (10% -> 80% of screen height)
      const baseY = windowHeight * 0.5 + scrollProgress * (windowHeight * 1.5);

      // Add wave effect (opposite direction from ball)
      const waveY = baseY + Math.sin(currentX / 80) * 25;

      // Stop floating animation when scrolling
      stopSquareFloatingAnimation();
      isScrolling = true;
      lastScrollTime = Date.now();

      // Detect scroll
      gsap.to(square, {
        x: currentX,
        y: waveY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    }

    // Detect scroll stop
    function checkSquareScrollStop() {
      if (isScrolling && Date.now() - lastScrollTime > 500) {
        isScrolling = false;
        startSquareFloatingAnimation();
      }
    }

    // Periodic check for scroll stop detection
    setInterval(checkSquareScrollStop, 100);

    let ticking = false;

    function requestSquareTick() {
      if (!ticking) {
        requestAnimationFrame(updateSquarePosition);
        ticking = true;
      }
    }

    function handleSquareScroll() {
      ticking = false;
      requestSquareTick();
    }

    window.addEventListener("scroll", handleSquareScroll);

    // Set initial position and start floating animation
    updateSquarePosition();
    setTimeout(startSquareFloatingAnimation, 1200); // Start floating animation after 1.2 seconds (slightly different from ball)
  } else {
    console.log("Square element not found");
  }
});
