import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

export const PANTRY_ITEM_EDITOR_MESSAGES = {
  editCanceledStatus: 'Item editing canceled.',
} as const;

export function actCancelEdit(actions: Pick<PantryPilotActions, 'navigate' | 'markAction'>) {
  actions.navigate('pantry');
  actions.markAction(PANTRY_ITEM_EDITOR_MESSAGES.editCanceledStatus);
}

export default actCancelEdit;
