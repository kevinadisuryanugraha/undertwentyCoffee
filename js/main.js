/* ================================================
   UNDERTWENTY COFFEE CO. — Main JavaScript
   ================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Global references for visibility optimizations
  let heroInterval, reviewInterval;
  let startHeroSlider, startReviewCarousel;

  // ── Navbar scroll effect ──────────────────────
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    highlightNav();
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // ── Active nav highlight ──────────────────────
  const highlightNav = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  // ── Hero Background Slider ───────────────────
  const slides = document.querySelectorAll(".hero-slider .slide");
  if (slides.length > 0) {
    let currentSlide = 0;

    setTimeout(() => {
      slides[currentSlide].classList.add("active");
    }, 100);

    startHeroSlider = () => {
      clearInterval(heroInterval);
      heroInterval = setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
      }, 5000);
    };
    startHeroSlider();
  }

  // ── Hamburger mobile nav ──────────────────────
  const hamburger = document.querySelector(".hamburger");
  const navMobile = document.querySelector(".nav-mobile");

  if (hamburger && navMobile) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMobile.classList.toggle("open");
    });

    // Close on link click
    navMobile.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMobile.classList.remove("open");
      });
    });
  }

  // ── Menu Tabs ─────────────────────────────────
  const tabBtns = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".menu-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      tabBtns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const panel = document.getElementById(`panel-${target}`);
      if (panel) panel.classList.add("active");
    });
  });

  // ── Scroll Reveal ─────────────────────────────
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));

  // ── Smooth scroll for all anchor links ────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // ── Parallax on hero ──────────────────────────
  const heroSliderEl = document.querySelector(".hero-slider");
  window.addEventListener(
    "scroll",
    () => {
      if (heroSliderEl) {
        const scrollY = window.scrollY;
        heroSliderEl.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    },
    { passive: true }
  );

  // ── Events Countdown Timer ────────────────────
  const countdownEls = document.querySelectorAll(".countdown-timer");

  if (countdownEls.length > 0) {
    countdownEls.forEach((el) => {
      // Create a target date statically (e.g. 3 days from now)
      // so it always looks "active" when demoed.
      const daysToAdd = parseInt(el.getAttribute("data-target")) || 3;
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + daysToAdd);
      targetDate.setHours(19, 0, 0, 0); // Event starts at 19:00

      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
          el.innerHTML =
            "<div style='font-weight:700; color:var(--caramel)'>Acara Telah Dimulai!</div>";
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM
        const dEl = el.querySelector(".t-d");
        const hEl = el.querySelector(".t-h");
        const mEl = el.querySelector(".t-m");
        const sEl = el.querySelector(".t-s");

        if (dEl) dEl.innerText = days.toString().padStart(2, "0");
        if (hEl) hEl.innerText = hours.toString().padStart(2, "0");
        if (mEl) mEl.innerText = minutes.toString().padStart(2, "0");
        if (sEl) sEl.innerText = seconds.toString().padStart(2, "0");
      };

      // Initial call
      updateCountdown();
      // Tick every second
      setInterval(updateCountdown, 1000);
    });
  }

  // ── Reviews Carousel (redesigned) ──────────────
  const rCards  = Array.from(document.querySelectorAll('.rcard'));
  const rDots   = Array.from(document.querySelectorAll('.rdot'));
  const rPrev   = document.getElementById('rPrev');
  const rNext   = document.getElementById('rNext');

  if (rCards.length > 0) {
    let rCurrent = 0;
    let rAuto;

    const goToCard = (idx) => {
      rCards[rCurrent].classList.remove('active');
      rCards[rCurrent].classList.add('exit');
      rDots[rCurrent]?.classList.remove('active');

      const prevIdx = rCurrent;
      setTimeout(() => rCards[prevIdx].classList.remove('exit'), 560);

      rCurrent = (idx + rCards.length) % rCards.length;
      rCards[rCurrent].classList.add('active');
      rDots[rCurrent]?.classList.add('active');
    };

    startReviewCarousel = () => {
      clearInterval(rAuto);
      rAuto = setInterval(() => goToCard(rCurrent + 1), 6000);
      reviewInterval = rAuto;
    };
    const startAuto = startReviewCarousel;

    const resetAuto = () => {
      clearInterval(rAuto);
      startAuto();
    };

    rPrev?.addEventListener('click', () => { goToCard(rCurrent - 1); resetAuto(); });
    rNext?.addEventListener('click', () => { goToCard(rCurrent + 1); resetAuto(); });

    rDots.forEach(dot => {
      dot.addEventListener('click', () => {
        goToCard(parseInt(dot.dataset.target));
        resetAuto();
      });
    });

    // Pause on hover
    document.querySelector('.reviews-carousel-wrapper')?.addEventListener('mouseenter', () => clearInterval(rAuto));
    document.querySelector('.reviews-carousel-wrapper')?.addEventListener('mouseleave', startAuto);

    startAuto();
  }
  // Menangani jeda otomatis untuk Carousel/Slider saat tab tidak aktif
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      console.log("Tab tidak aktif: Menjeda animasi untuk menghemat daya.");
      clearInterval(heroInterval);
      clearInterval(reviewInterval);
    } else {
      console.log("Tab aktif: Menjalankan kembali animasi.");
      if (startHeroSlider) startHeroSlider();
      if (startReviewCarousel) startReviewCarousel();
    }
  });

});
