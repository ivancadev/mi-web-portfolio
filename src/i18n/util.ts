import es from './es';
import en from './en';

export const dictionaries = { es, en } as const;
export type Locale = keyof typeof dictionaries;
export const LOCALES: Locale[] = ['es', 'en'];
export const DEFAULT_LOCALE: Locale = 'es';

export function isLocale(value: string): value is Locale {
  return value in dictionaries;
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getAlternatePath(pathname: string, target: Locale): string {
  const segments = pathname.split('/');
  const first = segments[1];
  const rest = isLocale(first) ? segments.slice(2).join('/') : segments.slice(1).join('/');
  const clean = rest.replace(/^\/+|\/+$/g, '');
  if (target === DEFAULT_LOCALE) return clean ? `/${clean}` : '/';
  return clean ? `/${target}/${clean}` : `/${target}/`;
}
