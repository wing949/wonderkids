export const CONTROL_PANEL_PATH = '/cp';

export function isControlPanelPath(pathname: string): boolean {
  return pathname.replace(/\/+$/, '') === CONTROL_PANEL_PATH;
}

export function isControlPanelRoute(pathname: string): boolean {
  return pathname === CONTROL_PANEL_PATH || pathname.startsWith(`${CONTROL_PANEL_PATH}/`);
}
