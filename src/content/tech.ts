// Datos del grid de tecnologías (ADR-005).
// Cada item declara: nombre, categoría, nivel, icono opcional y una nota ES/EN.
// El grid (TechGrid.astro) filtra por `category` y muestra `level` + `note` al hover.

export type TechCategory =
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'cloud'
  | 'languages'
  | 'tools'
  | 'methods';

export type TechLevel = 'advanced' | 'intermediate' | 'basic' | 'learning';

export interface TechItem {
  name: string;
  category: TechCategory;
  level: TechLevel;
  /** Clave de src/content/tech-icons.ts (simple-icons); si falta → monograma */
  icon?: string;
  note_es: string;
  note_en: string;
}

export const TECH_CATEGORIES: TechCategory[] = [
  'frontend',
  'backend',
  'mobile',
  'cloud',
  'languages',
  'tools',
  'methods',
];

export const TECH: TechItem[] = [
  // --- Frontend ---
  { name: 'React', category: 'frontend', level: 'advanced', icon: 'React', note_es: 'Hooks, estado y componentes reutilizables en producción', note_en: 'Hooks, state and reusable components in production' },
  { name: 'Astro', category: 'frontend', level: 'advanced', icon: 'Astro', note_es: 'Frontend de Sagatech y este portfolio (islands + SSG)', note_en: 'Sagatech frontend and this portfolio (islands + SSG)' },
  { name: 'Next.js', category: 'frontend', level: 'intermediate', icon: 'Nextdotjs', note_es: 'SSR/SSG en Kakebo, Ligera y mi portfolio anterior', note_en: 'SSR/SSG in Kakebo, Ligera and my previous portfolio' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'advanced', icon: 'Tailwindcss', note_es: 'Diseño rápido y consistente con design tokens', note_en: 'Fast, consistent design with design tokens' },
  { name: 'HTML5', category: 'frontend', level: 'advanced', icon: 'Html5', note_es: 'Semántica y accesibilidad como base', note_en: 'Semantics and accessibility as a foundation' },
  { name: 'CSS', category: 'frontend', level: 'advanced', icon: 'Css', note_es: 'Grid, Flexbox, custom properties y animaciones', note_en: 'Grid, Flexbox, custom properties and animations' },

  // --- Backend ---
  { name: 'REST APIs', category: 'backend', level: 'advanced', note_es: 'Diseño e integración: nóminas, documentos y CRUD', note_en: 'Design and integration: payroll, documents and CRUD' },
  { name: 'JSON', category: 'backend', level: 'advanced', note_es: 'Contratos de datos y validación en cada endpoint', note_en: 'Data contracts and validation on every endpoint' },
  { name: 'MySQL', category: 'backend', level: 'intermediate', icon: 'Mysql', note_es: 'Modelado relacional y consultas', note_en: 'Relational modeling and queries' },
  { name: 'Spring Boot', category: 'backend', level: 'basic', icon: 'Springboot', note_es: 'Bases de APIs Java', note_en: 'Java API fundamentals' },
  { name: 'Hibernate / JPA', category: 'backend', level: 'basic', icon: 'Hibernate', note_es: 'Persistencia ORM en Java', note_en: 'ORM persistence in Java' },

  // --- Mobile ---
  { name: 'Android', category: 'mobile', level: 'advanced', icon: 'Android', note_es: 'Apps nativas: FocusFlow, TravelLog, Wowplan', note_en: 'Native apps: FocusFlow, TravelLog, Wowplan' },
  { name: 'Jetpack Compose', category: 'mobile', level: 'advanced', icon: 'Jetpackcompose', note_es: 'UI declarativa moderna sin XML', note_en: 'Modern declarative UI without XML' },
  { name: 'Material Design', category: 'mobile', level: 'intermediate', icon: 'Materialdesign', note_es: 'Sistemas de diseño coherentes en móvil', note_en: 'Consistent design systems on mobile' },
  { name: 'SQLite', category: 'mobile', level: 'advanced', icon: 'Sqlite', note_es: 'Persistencia local offline-first', note_en: 'Offline-first local persistence' },
  { name: 'Room', category: 'mobile', level: 'intermediate', note_es: 'Capa de datos sobre SQLite con LiveData', note_en: 'Data layer over SQLite with LiveData' },
  { name: 'Firebase', category: 'mobile', level: 'intermediate', icon: 'Firebase', note_es: 'Tiempo real en Wowplan (Realtime Database)', note_en: 'Real-time in Wowplan (Realtime Database)' },

  // --- Cloud / DevOps ---
  { name: 'Docker', category: 'cloud', level: 'learning', icon: 'Docker', note_es: 'En formación: contenedores y entornos reproducibles', note_en: 'Learning: containers and reproducible environments' },
  { name: 'Kubernetes', category: 'cloud', level: 'learning', icon: 'Kubernetes', note_es: 'En formación: orquestación de contenedores', note_en: 'Learning: container orchestration' },
  { name: 'AWS', category: 'cloud', level: 'learning', note_es: 'En formación: servicios cloud y despliegue', note_en: 'Learning: cloud services and deployment' },

  // --- Lenguajes ---
  { name: 'JavaScript (ES6+)', category: 'languages', level: 'advanced', icon: 'Javascript', note_es: 'Lenguaje principal en web y frontend', note_en: 'Primary language on the web and frontend' },
  { name: 'Kotlin', category: 'languages', level: 'advanced', icon: 'Kotlin', note_es: 'Android nativo y concisión type-safe', note_en: 'Native Android and type-safe concision' },
  { name: 'Python', category: 'languages', level: 'intermediate', icon: 'Python', note_es: 'Scripts, automatización y backend', note_en: 'Scripting, automation and backend' },
  { name: 'Java', category: 'languages', level: 'intermediate', note_es: 'Base de Spring, Hibernate y FP', note_en: 'Foundation of Spring, Hibernate and OOP' },
  { name: 'C#', category: 'languages', level: 'basic', icon: 'Sharp', note_es: 'Fundamentos y lógica de programación', note_en: 'Fundamentals and programming logic' },

  // --- Herramientas ---
  { name: 'Git', category: 'tools', level: 'advanced', icon: 'Git', note_es: 'Control de versiones a diario', note_en: 'Daily version control' },
  { name: 'GitHub', category: 'tools', level: 'advanced', icon: 'Github', note_es: 'PRs, revisión de código y CI', note_en: 'PRs, code review and CI' },
  { name: 'GitFlow', category: 'tools', level: 'advanced', note_es: 'Flujo de ramas feature → develop → main', note_en: 'Branch flow feature → develop → main' },
  { name: 'VS Code', category: 'tools', level: 'advanced', note_es: 'Editor principal con extensiones de productividad', note_en: 'Main editor with productivity extensions' },
  { name: 'Android Studio', category: 'tools', level: 'advanced', icon: 'Androidstudio', note_es: 'IDE para apps Android nativas', note_en: 'IDE for native Android apps' },
  { name: 'IntelliJ IDEA', category: 'tools', level: 'intermediate', icon: 'Intellijidea', note_es: 'IDE para JVM y Spring', note_en: 'IDE for JVM and Spring' },
  { name: 'ServiceNow', category: 'tools', level: 'intermediate', note_es: 'Gestión de incidencias en Abai Solutions', note_en: 'Incident management at Abai Solutions' },
  { name: 'SAP', category: 'tools', level: 'basic', icon: 'Sap', note_es: 'Entornos corporativos (ERP)', note_en: 'Corporate environments (ERP)' },

  // --- Metodologías y arquitecturas ---
  { name: 'Scrum / Kanban', category: 'methods', level: 'advanced', note_es: 'Trabajo iterativo en equipo', note_en: 'Iterative team workflow' },
  { name: 'SDD (Spec-first)', category: 'methods', level: 'intermediate', note_es: 'Desarrollo dirigido por especificación con IA', note_en: 'Spec-driven development with AI' },
  { name: 'MVVM', category: 'methods', level: 'advanced', note_es: 'Arquitectura en mis apps Android', note_en: 'Architecture in my Android apps' },
  { name: 'MVC', category: 'methods', level: 'advanced', note_es: 'TravelLog y Wowplan', note_en: 'TravelLog and Wowplan' },
  { name: 'Clean Architecture', category: 'methods', level: 'intermediate', note_es: 'Separación de capas y testabilidad', note_en: 'Layer separation and testability' },
];
