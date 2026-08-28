import type { PortalView } from '../types';
import type { AppRoute } from './appRoute';

export function getPortalForRoute(route: AppRoute): PortalView {
  switch (route.kind) {
    case 'adventure': return 'adventure';
    case 'exercise': return 'exercise';
    case 'parent': return 'parent';
    case 'arena':
    case 'practice-hub':
    case 'practice-list':
    case 'practice-set':
    case 'practice-competition-list':
    case 'practice-competition-set':
    case 'practice-custom-set':
      return 'practice';
    case 'logic-hub':
    case 'logic-game':
      return 'logic';
    case 'admin': return 'admin-login';
    default: return 'student';
  }
}
