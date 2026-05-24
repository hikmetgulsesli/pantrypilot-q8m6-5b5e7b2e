import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

const ITEM_EDIT_CANCELED_STATUS = 'Item editing canceled.';

export function actCancelEdit(actions: Pick<PantryPilotActions, 'navigate' | 'markAction'>) {
  actions.navigate('pantry');
  actions.markAction(ITEM_EDIT_CANCELED_STATUS);
}

export default actCancelEdit;
