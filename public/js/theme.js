// js Document

// Created on   : 15/20/2024.
// Theme Name   : Piku - Creative Saas & Software HTML5 Template
// Version      : 1.0.
// Developed by : (me@heloshape.com) / (www.me.heloshape.com)

(function ($) {
  "use strict";

  // Exit early if jQuery is not available
  if (!$ || typeof $ !== "function") {
    console.warn(
      "jQuery is not available. Theme functionality may not work properly.",
    );
    return;
  }

  // Check if GSAP is available for animations
  if (typeof gsap === "undefined") {
    console.warn(
      "GSAP is not available. Some animations may not work properly.",
    );
  }

  //-------------- Click event to scroll to top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });
  $(".scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 });
    return false;
  });

  // --------------------- Add .active class to current navigation based on URL
  var pgurl = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1,
  );
  $(".navbar-nav > li  a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == "")
      $(this).addClass("active");
    // $(this).parent("li").addClass("active");
  });

  // ----------------------------- Counter Function
  var timer = $(".counter");
  if (timer.length) {
    $(".counter").counterUp({
      delay: 10,
      time: 1200,
    });
  }

  // ------------------------ Navigation Scroll
  $(window).on("scroll", function () {
    var sticky = $(".sticky-menu"),
      scroll = $(window).scrollTop();
    if (scroll >= 180) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });

  // -------------------- Remove Placeholder When Focus Or Click
  $("input,textarea").each(function () {
    $(this).data("holder", $(this).attr("placeholder"));
    $(this).on("focusin", function () {
      $(this).attr("placeholder", "");
    });
    $(this).on("focusout", function () {
      $(this).attr("placeholder", $(this).data("holder"));
    });
  });

  // ------------------------ Feedback Slider One
  if ($(".feedback-slider-one").length) {
    $(".feedback-slider-one").slick({
      dots: false,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ------------------------ Feedback Slider Two
  if ($(".feedback-slider-two").length) {
    $(".feedback-slider-two").slick({
      dots: false,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ------------------------ Feedback Slider Three
  if ($(".feedback-slider-three").length) {
    $(".feedback-slider-three").slick({
      dots: true,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }

  // ------------------------ Feedback Slider Four
  if ($(".feedback-slider-four").length) {
    $(".feedback-slider-four").slick({
      dots: true,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }

  // ------------------------ Feedback Slider Five
  if ($(".feedback-slider-five").length) {
    $(".feedback-slider-five").slick({
      dots: true,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 300000,
    });
  }

  // ------------------------ Feedback Slider Six
  if ($(".feedback-slider-six").length) {
    $(".feedback-slider-six").slick({
      dots: false,
      arrows: true,
      prevArrow: $(".prev_b"),
      nextArrow: $(".next_b"),
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ------------------------ Feedback Slider Seven
  if ($(".feedback-slider-seven").length) {
    $(".feedback-slider-seven").slick({
      dots: false,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ------------------------ Feedback Slider Eight
  if ($(".feedback-slider-eight").length) {
    $(".feedback-slider-eight").slick({
      dots: false,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ------------------------ Service Slider One
  if ($(".service-slider-one").length) {
    $(".service-slider-one").slick({
      dots: false,
      arrows: true,
      prevArrow: $(".prev_a"),
      nextArrow: $(".next_a"),
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ------------------------ Project Slider One
  if ($(".project-slider-one").length) {
    $(".project-slider-one").slick({
      dots: false,
      arrows: true,
      prevArrow: $(".prev_a"),
      nextArrow: $(".next_a"),
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: false,
      autoplaySpeed: 3000,
    });
  }

  // ------------------------ Counter Slider One
  if ($(".counter-slider-one").length) {
    $(".counter-slider-one").slick({
      dots: false,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // ------------------------ Portfolio Slider One
  if ($(".pr-slider-one").length) {
    $(".pr-slider-one").slick({
      dots: false,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  // ------------------------ Partner Slider One
  if ($(".partner-logo-one").length) {
    $(".partner-logo-one").slick({
      dots: false,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
        {
          breakpoint: 1399,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  // ------------------------ Partner Slider Two
  if ($(".partner-logo-two").length) {
    $(".partner-logo-two").slick({
      dots: false,
      arrows: false,
      lazyLoad: "ondemand",
      centerPadding: "0px",
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  }

  // --------------------------------- Contact Form
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  if ($("#contact-form").length) {
    $("#contact-form").validator();
    // when the form is submitted
    $("#contact-form").on("submit", function (e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        var url = "inc/contact.php";

        // POST values in the background the the script URL
        $.ajax({
          type: "POST",
          url: url,
          data: $(this).serialize(),
          success: function (data) {
            // data = JSON object that contact.php returns

            // we recieve the type of the message: success x danger and apply it to the
            var messageAlert = "alert-" + data.type;
            var messageText = data.message;

            // let's compose Bootstrap alert box HTML
            var alertBox =
              '<div class="alert ' +
              messageAlert +
              ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
              messageText +
              "</div>";

            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
              // inject the alert to .messages div in our form
              $("#contact-form").find(".messages").html(alertBox);
              // empty the form
              $("#contact-form")[0].reset();
            }
          },
        });
        return false;
      }
    });
  }

  // ------------------------ Password Toggler
  if ($(".user-data-form").length) {
    $(".passVicon").on("click", function () {
      $(".passVicon").toggleClass("eye-slash");
      var input = $(".pass_log_id");
      if (input.attr("type") === "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  $(window).on("load", function () {
    // makes sure the whole site is loaded

    // -------------------- Site Preloader
    $("#ctn-preloader").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({ overflow: "visible" });

    // ------------------------------- Scroll Animation
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();

    // ------------------------------------- Fancybox
    var fancy = $("[data-fancybox]");
    if (fancy.length) {
      Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });
    }

    // ----------------------------- isotop gallery
    if ($("#isotop-gallery-wrapper").length) {
      var $grid = $("#isotop-gallery-wrapper").isotope({
        // options
        itemSelector: ".isotop-item",
        percentPosition: true,
        masonry: {
          // use element for option
          columnWidth: ".grid-sizer",
        },
      });

      // filter items on button click
      $(".isotop-menu-wrapper").on("click", "li", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $(".isotop-menu-wrapper").each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on("click", "li", function () {
          $buttonGroup.find(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
        });
      });
    }
  }); //End On Load Function

  // -------------- Hero Orbs: Parallax + 3D tilt by mouse
  (function () {
    var $orbs = $(".hero-orbs");
    if (!$orbs.length) return; // guard: if circles removed, do nothing
    var $wrapper = $(".hero-banner-four .wrapper");
    var $orbItems = $orbs.find(".orb");
    var cx = 0,
      cy = 0,
      rx = 0,
      ry = 0,
      rafId = null;
    var bounds;
    // NEW: scroll-driven Y-axis rotation state
    var scrollYDeg = 0; // degrees added to Y rotation by scroll
    var scrollMax = 14; // max degrees contributed by scroll
    function onEnter() {
      bounds = $wrapper.get(0).getBoundingClientRect();
    }
    function onMove(e) {
      if (!bounds) onEnter();
      var x =
        e.clientX !== undefined
          ? e.clientX
          : (e.touches && e.touches[0].clientX) || 0;
      var y =
        e.clientY !== undefined
          ? e.clientY
          : (e.touches && e.touches[0].clientY) || 0;
      cx = (x - (bounds.left + bounds.width / 2)) / (bounds.width / 2); // -1..1
      cy = (y - (bounds.top + bounds.height / 2)) / (bounds.height / 2); // -1..1
      if (!rafId) rafId = requestAnimationFrame(update);
    }
    function update() {
      rafId = null;
      // tilt values from mouse (no longer applied to section wrapper)
      var tiltX = -cy * 6; // deg
      var tiltY = cx * 6; // deg
      var yRot = tiltY + scrollYDeg; // combine mouse tilt and scroll-based Y rotation
      // remove section tilt: do NOT transform the wrapper anymore
      // $wrapper.css('transform','perspective(1000px) rotateX('+tiltX+'deg) rotateY('+yRot+'deg)');
      // parallax each orb based on depth
      $orbItems.each(function () {
        var depth = parseFloat(this.getAttribute("data-depth") || "8");
        var tx = cx * depth; // px
        var ty = cy * depth; // px
        // Make rotation more visible now that orbs are solid
        var orbYRot = (scrollYDeg + tiltY * 0.6) * (depth / 8);
        this.style.transform =
          "translate3d(" +
          tx +
          "px," +
          ty +
          "px,0) rotateY(" +
          orbYRot +
          "deg)";
      });
    }
    $wrapper.on("mousemove touchmove", onMove);
    $(window).on("resize", onEnter);
    // NEW: scroll listener to drive vertical-axis rotation
    function onScroll() {
      if (!$wrapper.length) return;
      var rect = $wrapper.get(0).getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var centerDist = rect.top + rect.height / 2 - vh / 2;
      var denom = vh / 2 + rect.height / 2 || 1;
      var norm = Math.max(-1, Math.min(1, centerDist / denom)); // -1..1
      scrollYDeg = -norm * scrollMax; // scroll down => rotate a bit to the right
      if (!rafId) rafId = requestAnimationFrame(update);
    }
    $(window).on("scroll", onScroll);

    onEnter();
    onScroll();
  })();

  // -------------- Ball Animation with Wave Motion
  $(document).ready(function () {
    var ball = document.querySelector("#ball");

    if (ball) {
      gsap.set(ball, { x: 100, y: 100 });

      var lastScrollTime = Date.now();
      var isScrolling = false;
      var floatingAnimation = null;

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
        var scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;

        // Calculate scroll progress very quickly (based on 0.9x screen height)
        var scrollProgress = Math.min(scrollTop / (windowHeight * 1), 1);

        // Calculate x position based on scroll (5% -> 85% of screen width)
        var currentX = windowWidth * 0.1 + scrollProgress * (windowWidth * 0.8);

        // Linearly change base y value based on x position (10% -> 70% of screen height)
        var baseY = windowHeight * 0.5 + scrollProgress * (windowHeight * 1.2);

        // Add wave effect
        var waveY = baseY + Math.cos(currentX / 100) * 30;

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
      var ticking = false;
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
    }
  });

  // -------------- Square Animation (from right to bottom left)
  $(document).ready(function () {
    var square = document.querySelector("#square");

    if (square) {
      // Set initial position to top right
      gsap.set(square, { x: window.innerWidth - 50, y: 50 });

      var lastScrollTime = Date.now();
      var isScrolling = false;
      var squareFloatingAnimation = null;

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
        var scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;

        // Calculate scroll progress
        var scrollProgress = Math.min(scrollTop / (windowHeight * 1), 1);

        // Move from right to left (95% -> 15% of screen width)
        var currentX = windowWidth * 0.9 - scrollProgress * (windowWidth * 0.8);

        // Move from top to bottom (10% -> 80% of screen height)
        var baseY = windowHeight * 0.5 + scrollProgress * (windowHeight * 1.5);

        // Add wave effect (opposite direction from ball)
        var waveY = baseY + Math.sin(currentX / 80) * 25;

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

      var ticking = false;

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
    }
  });
})(typeof jQuery !== "undefined" ? jQuery : null);
