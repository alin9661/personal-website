import type { NavigationItem } from '../../../shared/types';
import { ROUTES, ROUTE_LABELS } from '../../../shared/constants/routes';
import type { IconName } from '../../../shared/components/icons/Icon';

export const NAVIGATION_ITEMS: ReadonlyArray<NavigationItem & { iconName: IconName }> = [
  { path: ROUTES.HOME, label: ROUTE_LABELS[ROUTES.HOME], iconName: 'home' },
  { path: ROUTES.ABOUT, label: ROUTE_LABELS[ROUTES.ABOUT], iconName: 'user' },
  { path: ROUTES.PROJECTS, label: ROUTE_LABELS[ROUTES.PROJECTS], iconName: 'folder' },
  { path: ROUTES.EXPERIENCE, label: ROUTE_LABELS[ROUTES.EXPERIENCE], iconName: 'briefcase' },
  { path: ROUTES.BLOG, label: ROUTE_LABELS[ROUTES.BLOG], iconName: 'document' },
  { path: ROUTES.CONTACT, label: ROUTE_LABELS[ROUTES.CONTACT], iconName: 'mail' },
  { path: ROUTES.RESUME, label: ROUTE_LABELS[ROUTES.RESUME], iconName: 'file' },
] as const;