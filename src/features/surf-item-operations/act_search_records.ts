import type { PantryPilotActions, PantryPilotPanel } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

const CATEGORY_TO_PANEL = new Map<string, PantryPilotPanel>([
  ['produce', 'produce'],
  ['dairy', 'dairy'],
  ['canned-goods', 'canned-goods'],
  ['expiring', 'expiring'],
]);

export const PANTRY_ITEM_OPERATION_MESSAGES = {
  searchStatus: (query: string) => `Searching pantry records for "${query}".`,
} as const;

export type SearchRecordsInput = {
  query?: string;
  category?: string;
};

export function actSearchRecords(actions: Pick<PantryPilotActions, 'clearFilters' | 'focusPanel' | 'markAction'>, input: SearchRecordsInput = {}) {
  const query = input.query?.trim();

  if (query) {
    actions.focusPanel('all-items');
    actions.markAction(PANTRY_ITEM_OPERATION_MESSAGES.searchStatus(query));
    return;
  }

  const panel = input.category ? CATEGORY_TO_PANEL.get(input.category) : undefined;
  if (panel) {
    actions.focusPanel(panel);
    return;
  }

  actions.clearFilters();
}

export default actSearchRecords;
