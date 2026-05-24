import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

export function actSelectRecord(actions: Pick<PantryPilotActions, 'selectFirstItem'>) {
  actions.selectFirstItem();
}

export default actSelectRecord;
