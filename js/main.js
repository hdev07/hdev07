/* ═══════════════════════════════════════════
   Alejandro Cruz — Portfolio JS
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Custom Cursor ── */
  const dot = document.getElementById('cursorDot');
  const glow = document.getElementById('cursorGlow');

  if (dot && glow && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', function (e) {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .btn').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        glow.style.width = '52px';
        glow.style.height = '52px';
        glow.style.borderColor = 'rgba(16,185,129,0.6)';
      });
      el.addEventListener('mouseleave', function () {
        glow.style.width = '36px';
        glow.style.height = '36px';
        glow.style.borderColor = 'rgba(37,99,235,0.4)';
      });
    });
  }

  /* ── Mobile Nav Toggle ── */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }

  /* ── Scroll Reveal (IntersectionObserver) ── */
  var reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    reveals.forEach(function (el) {
      el.classList.add('active');
    });
  }

  /* ── Timeline animated line ── */
  var timelineLine = document.getElementById('timelineLine');
  var timelineSection = document.getElementById('timeline');

  if (timelineLine && timelineSection) {
    function updateTimeline() {
      var rect = timelineSection.getBoundingClientRect();
      var sectionTop = rect.top;
      var sectionHeight = rect.height;
      var windowH = window.innerHeight;

      if (sectionTop < windowH) {
        var scrolled = Math.min(1, (windowH - sectionTop) / (sectionHeight + windowH * 0.3));
        timelineLine.style.height = (scrolled * 100) + '%';
      }
    }

    window.addEventListener('scroll', updateTimeline, { passive: true });
    updateTimeline();
  }

  /* ── Navbar background on scroll ── */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        navbar.style.background = 'rgba(11,15,25,0.92)';
      } else {
        navbar.style.background = 'rgba(11,15,25,0.7)';
      }
    }, { passive: true });
  }

  /* ── Active nav link highlight ── */
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function highlightNav() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function (a) {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + id) {
            a.style.color = '#fff';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
})();
