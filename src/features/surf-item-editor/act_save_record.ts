import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

export function actSaveRecord(actions: Pick<PantryPilotActions, 'navigate' | 'markAction'>) {
  actions.navigate('pantry');
  actions.markAction('Item changes saved.');
}

export default actSaveRecord;
