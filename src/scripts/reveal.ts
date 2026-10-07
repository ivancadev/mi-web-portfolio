// Animación de aparición al hacer scroll (progressive enhancement).
// - Solo oculta elementos si hay JS (la clase .js la añade Base.astro).
// - Con `prefers-reduced-motion` o sin IntersectionObserver, muestra todo.
// - `[data-reveal-stagger]`: sus hijos aparecen en cascada (--reveal-index).
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Asigna a cada hijo de un grupo stagger su atributo data-reveal y un índice,
// que el CSS usa para retrasar la transición (efecto cascada).
function applyStagger() {
  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      const el = child as HTMLElement;
      el.setAttribute('data-reveal', '');
      el.style.setProperty('--reveal-index', String(index));
    });
  });
}

// Marca todos los elementos como visibles de golpe (fallback sin animación).
function revealAll(targets: NodeListOf<HTMLElement>) {
  targets.forEach((el) => el.classList.add('is-visible'));
}

function init() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

  // Sin JS de animación (reduced-motion / navegador antiguo): todo visible.
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealAll(targets);
    return;
  }

  // Observa cada elemento y le añade .is-visible la primera vez que entra en pantalla.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // una sola vez
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  targets.forEach((el) => observer.observe(el));
}

applyStagger();
init();