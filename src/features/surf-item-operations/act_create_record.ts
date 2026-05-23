import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

export function actCreateRecord(actions: Pick<PantryPilotActions, 'addStarterItem'>) {
  actions.addStarterItem();
}

export default actCreateRecord;
