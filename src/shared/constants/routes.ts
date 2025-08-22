export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  EXPERIENCE: '/experience',
  BLOG: '/blog',
  CONTACT: '/contact',
  RESUME: '/resume',
} as const;

export const ROUTE_LABELS = {
  [ROUTES.HOME]: '~/home',
  [ROUTES.ABOUT]: '~/about',
  [ROUTES.PROJECTS]: '~/projects',
  [ROUTES.EXPERIENCE]: '~/experience',
  [ROUTES.BLOG]: '~/blog',
  [ROUTES.CONTACT]: '~/contact',
  [ROUTES.RESUME]: '~/resume',
} as const;