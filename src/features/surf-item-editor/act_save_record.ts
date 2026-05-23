import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';
import { loadPantryPilotState, savePantryPilotState } from '../pantrypilot-q8m6/pantrypilot-q8m6.repo';
import type { PantryCategory, PantryItem } from '../../__fixtures__/pantrypilot-q8m6.fixture';

export type ItemEditorDraft = {
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiresOn: string;
};

const isPantryCategory = (category: string): category is PantryCategory =>
  ['produce', 'dairy', 'canned-goods', 'bakery', 'frozen'].includes(category);

export function actSaveRecord(
  actions: Pick<PantryPilotActions, 'navigate' | 'markAction' | 'retryLoad'>,
  selectedRecord: PantryItem | null,
  draft?: ItemEditorDraft,
) {
  if (!selectedRecord || !draft) {
    actions.navigate('pantry');
    actions.markAction('Item changes saved.');
    return;
  }

  const current = loadPantryPilotState();
  const nextItems = current.state.items.map((item) =>
    item.id === selectedRecord.id
      ? {
          ...item,
          name: draft.name || item.name,
          category: isPantryCategory(draft.category) ? draft.category : item.category,
          quantity: draft.quantity,
          unit: draft.unit || item.unit,
          expiresOn: draft.expiresOn || item.expiresOn,
        }
      : item,
  );
  const error = savePantryPilotState({ ...current.state, items: nextItems });

  actions.retryLoad();
  actions.navigate('pantry');
  actions.markAction(error ?? `${draft.name || selectedRecord.name} changes saved.`);
}

export default actSaveRecord;
