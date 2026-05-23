import {
  PANTRYPILOT_Q8M6_FIXTURE_ITEMS,
  PANTRYPILOT_Q8M6_FIXTURE_PREFERENCES,
  type PantryItem,
  type PantryPreferences,
} from '../../__fixtures__/pantrypilot-q8m6.fixture';

const STORAGE_KEY = 'pantrypilot-q8m6:shell';

const getBrowserStorage = (): Storage | undefined => {
  try {
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
};

export type PantryPilotPersistedState = {
  items: PantryItem[];
  preferences: PantryPreferences;
};

export type PantryPilotLoadResult = {
  state: PantryPilotPersistedState;
  status: 'ready' | 'recovered' | 'unavailable';
  error: string | null;
};

const fallbackState = (): PantryPilotPersistedState => ({
  items: PANTRYPILOT_Q8M6_FIXTURE_ITEMS.map((item) => ({ ...item })),
  preferences: { ...PANTRYPILOT_Q8M6_FIXTURE_PREFERENCES },
});

const isPersistedState = (value: unknown): value is PantryPilotPersistedState => {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as PantryPilotPersistedState;
  return Array.isArray(candidate.items) && Boolean(candidate.preferences);
};

export function loadPantryPilotState(storage: Storage | undefined = getBrowserStorage()): PantryPilotLoadResult {
  const state = fallbackState();

  if (!storage) {
    return {
      state,
      status: 'unavailable',
      error: 'Local storage is unavailable; using starter pantry data.',
    };
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) {
      return { state, status: 'ready', error: null };
    }

    const parsed: unknown = JSON.parse(raw);
    if (!isPersistedState(parsed)) {
      storage.removeItem(STORAGE_KEY);
      return {
        state,
        status: 'recovered',
        error: 'Saved pantry data was invalid and has been reset.',
      };
    }

    return {
      state: {
        items: parsed.items,
        preferences: {
          ...PANTRYPILOT_Q8M6_FIXTURE_PREFERENCES,
          ...parsed.preferences,
        },
      },
      status: 'ready',
      error: null,
    };
  } catch {
    try {
      storage.removeItem(STORAGE_KEY);
    } catch {
      // Storage may be blocked after the failed read; fallback state still keeps the app usable.
    }

    return {
      state,
      status: 'recovered',
      error: 'Saved pantry data could not be loaded and has been reset.',
    };
  }
}

export function savePantryPilotState(
  state: PantryPilotPersistedState,
  storage: Storage | undefined = getBrowserStorage(),
): string | null {
  if (!storage) return 'Local storage is unavailable; changes are kept for this session only.';

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
    return null;
  } catch {
    return 'Local storage could not save the latest pantry changes.';
  }
}

export function resetPantryPilotState(storage: Storage | undefined = getBrowserStorage()): PantryPilotPersistedState {
  try {
    storage?.removeItem(STORAGE_KEY);
  } catch {
    // Reset still returns the in-memory default when storage cannot be modified.
  }

  return fallbackState();
}
