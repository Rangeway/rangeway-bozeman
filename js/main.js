// Rangeway Bozeman. Field-guide microsite JS.
(function () {
  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile menu overlay
  var toggle = document.querySelector("[data-rail-toggle]");
  var menu = document.querySelector("[data-rail-menu]");
  if (toggle && menu) {
    var panel = menu.querySelector(".menu__panel") || menu;
    var lastFocus = null;

    var getFocusable = function () {
      return Array.prototype.slice.call(
        panel.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(function (el) {
        return !el.hasAttribute("disabled") && el.offsetParent !== null;
      });
    };

    var setOpen = function (open) {
      menu.classList.toggle("is-open", open);
      if (open) {
        menu.removeAttribute("hidden");
      } else {
        menu.setAttribute("hidden", "");
      }
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";

      if (open) {
        lastFocus = document.activeElement;
        var focusable = getFocusable();
        if (focusable.length) focusable[0].focus();
      } else if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
        lastFocus = null;
      }
    };

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(!menu.classList.contains("is-open"));
    });

    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });

    // Close when clicking the scrim (the overlay itself, not the panel)
    menu.addEventListener("click", function (e) {
      if (e.target === menu) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (!menu.classList.contains("is-open")) return;

      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      // Focus trap
      if (e.key !== "Tab") return;
      var focusable = getFocusable();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canAnimate = !reduce && "IntersectionObserver" in window;

  // Reveal on scroll
  var reveals = document.querySelectorAll("[data-reveal]");
  if (!canAnimate) {
    reveals.forEach(function (el) { el.classList.add("rw-in"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("rw-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Rail active-section highlight (scroll spy). Marks exactly one link.
  var links = Array.prototype.slice.call(document.querySelectorAll("[data-rail-link]"));
  var sections = links
    .map(function (l) { return document.getElementById(l.getAttribute("href").slice(1)); })
    .filter(Boolean);

  if (sections.length) {
    var spy = function () {
      var line = window.innerHeight * 0.34;
      var current = sections[0];
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= line) current = s;
      });
      var id = "#" + current.id;
      links.forEach(function (l) {
        l.classList.toggle("rw-active", l.getAttribute("href") === id);
      });
    };
    spy();
    window.addEventListener("scroll", spy, { passive: true });
    window.addEventListener("resize", spy);
  }
})();
