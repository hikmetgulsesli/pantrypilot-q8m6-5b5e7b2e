import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

export function actCancelEdit(actions: Pick<PantryPilotActions, 'navigate' | 'markAction'>) {
  actions.navigate('pantry');
  actions.markAction('Item editing canceled.');
}

export default actCancelEdit;
