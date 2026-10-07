const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function applyStagger() {
  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      const el = child as HTMLElement;
      el.setAttribute('data-reveal', '');
      el.style.setProperty('--reveal-index', String(index));
    });
  });
}

function revealAll(targets: NodeListOf<HTMLElement>) {
  targets.forEach((el) => el.classList.add('is-visible'));
}

function init() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealAll(targets);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  targets.forEach((el) => observer.observe(el));
}

applyStagger();
init();