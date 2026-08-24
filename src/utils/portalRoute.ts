import type { PortalView } from '../types';
import type { AppRoute } from './appRoute';

export function getPortalForRoute(route: AppRoute): PortalView {
  switch (route.kind) {
    case 'adventure': return 'adventure';
    case 'exercise': return 'exercise';
    case 'parent': return 'parent';
    case 'arena': return 'arena';
    case 'practice-hub':
    case 'practice-list':
    case 'practice-set':
      return 'practice';
    case 'admin': return 'admin-login';
    default: return 'student';
  }
}
