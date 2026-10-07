export const THEMES = ['premium', 'aurora', 'editorial', 'claro', 'cyber'] as const;

export type Theme = (typeof THEMES)[number];

export function isTheme(value: string | undefined): value is Theme {
  return typeof value === 'string' && (THEMES as readonly string[]).includes(value);
}

export const THEME_COLORS: Record<Theme, string> = {
  premium: '#0a0a0b',
  aurora: '#0a0a0b',
  editorial: '#0d0c0a',
  claro: '#fafaf9',
  cyber: '#040705',
};
