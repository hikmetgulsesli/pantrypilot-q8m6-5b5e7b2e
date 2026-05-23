import type { PantryPilotSnapshot } from '../features/pantrypilot-q8m6/pantrypilot-q8m6.store';

declare global {
  interface Window {
    app?: PantryPilotSnapshot;
  }
}

export function publishPantryPilotBridge(snapshot: PantryPilotSnapshot) {
  window.app = snapshot;
}
