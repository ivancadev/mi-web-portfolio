// Iconos de marca para el grid de tecnologías (paquete `simple-icons`).
// En tech.ts cada item referencia uno de estos por clave (campo `icon`).
// Si una tecnología no está aquí (p. ej. Java, ServiceNow), TechGrid pinta
// un monograma de reserva.
import {
  siReact,
  siAstro,
  siNextdotjs,
  siTailwindcss,
  siHtml5,
  siCss,
  siMysql,
  siSpringboot,
  siHibernate,
  siAndroid,
  siJetpackcompose,
  siMaterialdesign,
  siSqlite,
  siFirebase,
  siDocker,
  siKubernetes,
  siJavascript,
  siKotlin,
  siPython,
  siSharp,
  siGit,
  siGithub,
  siAndroidstudio,
  siIntellijidea,
  siSap,
} from 'simple-icons';

import type { SimpleIcon } from 'simple-icons';

// Mapa nombre-de-icono → objeto SimpleIcon (path SVG + color de marca `hex`).
export const TECH_ICONS: Record<string, SimpleIcon> = {
  React: siReact,
  Astro: siAstro,
  Nextdotjs: siNextdotjs,
  Tailwindcss: siTailwindcss,
  Html5: siHtml5,
  Css: siCss,
  Mysql: siMysql,
  Springboot: siSpringboot,
  Hibernate: siHibernate,
  Android: siAndroid,
  Jetpackcompose: siJetpackcompose,
  Materialdesign: siMaterialdesign,
  Sqlite: siSqlite,
  Firebase: siFirebase,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Javascript: siJavascript,
  Kotlin: siKotlin,
  Python: siPython,
  Sharp: siSharp,
  Git: siGit,
  Github: siGithub,
  Androidstudio: siAndroidstudio,
  Intellijidea: siIntellijidea,
  Sap: siSap,
};
