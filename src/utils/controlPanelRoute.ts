export const CONTROL_PANEL_PATH = '/cp';

export function isControlPanelPath(pathname: string): boolean {
  return pathname.replace(/\/+$/, '') === CONTROL_PANEL_PATH;
}
