import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';
import { loadPantryPilotState, savePantryPilotState } from '../pantrypilot-q8m6/pantrypilot-q8m6.repo';
import type { PantryPreferences } from '../../__fixtures__/pantrypilot-q8m6.fixture';

export type SettingsPreferencesDraft = {
  defaultView: 'list' | 'grid';
  density: PantryPreferences['density'];
  expiryThresholdDays: 3 | 7 | 14 | 30;
  lowStockAlerts: boolean;
};

export const PANTRY_SETTINGS_MESSAGES = {
  validationError: 'Choose a valid expiry alert threshold before saving preferences.',
  success: (draft: SettingsPreferencesDraft) =>
    `Preferences saved locally. ${draft.density === 'compact' ? 'Compact' : 'Comfortable'} density and ${
      draft.lowStockAlerts ? 'low stock alerts' : 'muted low stock alerts'
    } are active.`,
} as const;

const VALID_EXPIRY_THRESHOLDS = new Set<SettingsPreferencesDraft['expiryThresholdDays']>([3, 7, 14, 30]);

export function actSavePreferences(
  actions: Pick<PantryPilotActions, 'markAction'>,
  draft: SettingsPreferencesDraft,
) {
  if (!VALID_EXPIRY_THRESHOLDS.has(draft.expiryThresholdDays)) {
    actions.markAction(PANTRY_SETTINGS_MESSAGES.validationError);
    return PANTRY_SETTINGS_MESSAGES.validationError;
  }

  const current = loadPantryPilotState();
  const error = savePantryPilotState({
    ...current.state,
    preferences: {
      ...current.state.preferences,
      density: draft.density,
      notifications: draft.lowStockAlerts,
    },
  });
  const message = error ?? PANTRY_SETTINGS_MESSAGES.success(draft);

  actions.markAction(message);
  return message;
}

export default actSavePreferences;
