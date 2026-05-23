import type { PantryPilotActions, PantryPilotPanel } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

const CATEGORY_TO_PANEL: Record<string, PantryPilotPanel> = {
  produce: 'produce',
  dairy: 'dairy',
  'canned-goods': 'canned-goods',
  expiring: 'expiring',
};

export type SearchRecordsInput = {
  query?: string;
  category?: string;
};

export function actSearchRecords(actions: Pick<PantryPilotActions, 'clearFilters' | 'focusPanel' | 'markAction'>, input: SearchRecordsInput = {}) {
  const query = input.query?.trim();

  if (query) {
    actions.focusPanel('all-items');
    actions.markAction(`Searching pantry records for "${query}".`);
    return;
  }

  const panel = input.category ? CATEGORY_TO_PANEL[input.category] : undefined;
  if (panel) {
    actions.focusPanel(panel);
    return;
  }

  actions.clearFilters();
}

export default actSearchRecords;
