(function () {
  const slidesEl = document.getElementById("slides");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicatorsEl = document.getElementById("indicators");
  const viewport = document.getElementById("carouselViewport");

  // ✅ Create 12 slides dynamically (for 12 months)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  months.forEach((month, i) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.id = "slide-" + (i + 1);
    slide.textContent = month;
    slidesEl.appendChild(slide);
  });

  const slideEls = Array.from(slidesEl.children);
  const total = slideEls.length;

  let index = 0;
  let autoplay = false;
  let intervalId = null;
  const AUTOPLAY_DELAY = 3500;

  // ✅ Build indicators
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("button");
    dot.className = "indicator";
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.dataset.index = i;
    indicatorsEl.appendChild(dot);
  }

  const indicatorDots = Array.from(indicatorsEl.children);

  // ✅ Move to a specific slide
  function goTo(i, animate = true) {
    let month_name=document.querySelector('.name')
    month_name.innerHTML=months[i]
    index = (i + total) % total;
    const offset = -index * 100;
    slidesEl.style.transition = animate ? "transform 0.5s ease" : "none";
    slidesEl.style.transform = `translateX(${offset}%)`;

    indicatorDots.forEach((dot, di) =>
      dot.classList.toggle("active", di === index)
    );
  }

  function next() {
    goTo(index + 1);
  }

  function prev() {
    goTo(index - 1);
  }

  // ✅ Autoplay handling
  function startAutoplay() {
    stopAutoplay();
    intervalId = setInterval(next, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function resetAutoplay() {
    if (autoplay) {
      stopAutoplay();
      startAutoplay();
    }
  }

  // ✅ Event listeners
  nextBtn.addEventListener("click", () => {
    next();
    resetAutoplay();
  });

  prevBtn.addEventListener("click", () => {
    prev();
    resetAutoplay();
  });

  indicatorDots.forEach((dot) =>
    dot.addEventListener("click", (e) => {
      goTo(Number(e.currentTarget.dataset.index));
      resetAutoplay();
    })
  );

  // ✅ Pause autoplay on hover/focus
  [viewport, prevBtn, nextBtn, ...indicatorDots].forEach((el) => {
    el.addEventListener("mouseenter", stopAutoplay);
    el.addEventListener("mouseleave", () => {
      if (autoplay) startAutoplay();
    });
    el.addEventListener("focusin", stopAutoplay);
    el.addEventListener("focusout", () => {
      if (autoplay) startAutoplay();
    });
  });

  // ✅ Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      next();
      resetAutoplay();
    } else if (e.key === "ArrowLeft") {
      prev();
      resetAutoplay();
    }
  });
  const currentMonth = new Date().getMonth(); // 0 = January, 11 = December
  goTo(currentMonth, false);
})();
