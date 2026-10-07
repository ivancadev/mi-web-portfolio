// Utilidades de idioma: diccionarios, tipo Locale y resolución de la ruta.
import es from './es';
import en from './en';

// Ambos diccionarios indexados por idioma.
export const dictionaries = { es, en } as const;
export type Locale = keyof typeof dictionaries;
export const LOCALES: Locale[] = ['es', 'en'];
export const DEFAULT_LOCALE: Locale = 'es';

// Comprueba si un string es un idioma soportado (type guard).
export function isLocale(value: string): value is Locale {
  return value in dictionaries;
}

// Deduce el idioma a partir del primer segmento de la URL ('/en/...' → 'en').
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

// Devuelve el diccionario del idioma indicado.
export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

// Calcula la ruta equivalente en el otro idioma (quita/añade el prefijo /en).
export function getAlternatePath(pathname: string, target: Locale): string {
  const segments = pathname.split('/');
  const first = segments[1];
  const rest = isLocale(first) ? segments.slice(2).join('/') : segments.slice(1).join('/');
  const clean = rest.replace(/^\/+|\/+$/g, '');
  if (target === DEFAULT_LOCALE) return clean ? `/${clean}` : '/';
  return clean ? `/${target}/${clean}` : `/${target}/`;
}
