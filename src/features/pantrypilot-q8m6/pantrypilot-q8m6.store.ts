import { useEffect, useMemo, useRef, useState } from 'react';
import type { PantryCategory, PantryItem, PantryPreferences } from '../../__fixtures__/pantrypilot-q8m6.fixture';
import {
  loadPantryPilotState,
  resetPantryPilotState,
  savePantryPilotState,
  type PantryPilotLoadResult,
} from './pantrypilot-q8m6.repo';

export type PantryPilotRoute = 'pantry' | 'empty' | 'editor' | 'settings' | 'insights';
export type PantryPilotStorageStatus = PantryPilotLoadResult['status'] | 'saved' | 'error';

export type PantryPilotSnapshot = {
  activeScreen: PantryPilotRoute;
  route: PantryPilotRoute;
  activePanel: PantryPilotRoute;
  selectedRecord: PantryItem | null;
  counts: {
    total: number;
    produce: number;
    dairy: number;
    cannedGoods: number;
    expiring: number;
    reorder: number;
  };
  storageStatus: PantryPilotStorageStatus;
  lastError: string | null;
  preferences: PantryPreferences;
};

export type PantryPilotActions = {
  navigate: (route: PantryPilotRoute) => void;
  selectFirstItem: () => void;
  addStarterItem: () => void;
  clearFilters: () => void;
  retryLoad: () => void;
  reorderSelected: () => void;
  setDensity: (density: PantryPreferences['density']) => void;
  resetPreferences: () => void;
  savePreferences: () => void;
};

const EXPIRING_SOON_DAYS = 7;

const dateDiffInDays = (isoDate: string) => {
  const expires = new Date(`${isoDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((expires.getTime() - today.getTime()) / 86_400_000);
};

const makeDraftItem = (defaultCategory: PantryCategory): PantryItem => ({
  id: `item-draft-${Date.now()}`,
  name: 'New pantry item',
  category: defaultCategory,
  quantity: 1,
  unit: 'unit',
  expiresOn: new Date(Date.now() + 14 * 86_400_000).toISOString().slice(0, 10),
  reorderAt: 1,
});

export function usePantryPilotStore(): [PantryPilotSnapshot, PantryPilotActions] {
  const [loadResult, setLoadResult] = useState(() => loadPantryPilotState());
  const [items, setItems] = useState(() => loadResult.state.items);
  const [preferences, setPreferences] = useState(() => loadResult.state.preferences);
  const [activeRoute, setActiveRoute] = useState<PantryPilotRoute>('pantry');
  const [selectedId, setSelectedId] = useState<string | null>(() => loadResult.state.items[0]?.id ?? null);
  const [storageStatus, setStorageStatus] = useState<PantryPilotStorageStatus>(loadResult.status);
  const [lastError, setLastError] = useState<string | null>(loadResult.error);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const error = savePantryPilotState({ items, preferences });
    setStorageStatus(error ? 'error' : 'saved');
    setLastError(error);
  }, [items, preferences]);

  const selectedRecord = useMemo(
    () => items.find((item) => item.id === selectedId) ?? items[0] ?? null,
    [items, selectedId],
  );

  const counts = useMemo(
    () => ({
      total: items.length,
      produce: items.filter((item) => item.category === 'produce').length,
      dairy: items.filter((item) => item.category === 'dairy').length,
      cannedGoods: items.filter((item) => item.category === 'canned-goods').length,
      expiring: items.filter((item) => dateDiffInDays(item.expiresOn) <= EXPIRING_SOON_DAYS).length,
      reorder: items.filter((item) => item.quantity <= item.reorderAt).length,
    }),
    [items],
  );

  const snapshot: PantryPilotSnapshot = {
    activeScreen: activeRoute,
    route: activeRoute,
    activePanel: activeRoute,
    selectedRecord,
    counts,
    storageStatus,
    lastError,
    preferences,
  };

  const actions: PantryPilotActions = {
    navigate: (route) => {
      setActiveRoute(route);
    },
    selectFirstItem: () => {
      const next = items[0] ?? makeDraftItem(preferences.defaultCategory);
      setSelectedId(next.id);
      setActiveRoute('editor');
      if (!items.length) setItems([next]);
    },
    addStarterItem: () => {
      const next = makeDraftItem(preferences.defaultCategory);
      setItems((current) => [next, ...current]);
      setSelectedId(next.id);
      setActiveRoute('editor');
    },
    clearFilters: () => {
      setActiveRoute(items.length ? 'pantry' : 'empty');
      setLastError(null);
    },
    retryLoad: () => {
      const next = loadPantryPilotState();
      setLoadResult(next);
      setItems(next.state.items);
      setPreferences(next.state.preferences);
      setSelectedId(next.state.items[0]?.id ?? null);
      setStorageStatus(next.status);
      setLastError(next.error);
      setActiveRoute(next.state.items.length ? 'pantry' : 'empty');
    },
    reorderSelected: () => {
      if (!selectedRecord) return;
      setItems((current) =>
        current.map((item) => (item.id === selectedRecord.id ? { ...item, quantity: item.quantity + item.reorderAt } : item)),
      );
      setActiveRoute('pantry');
    },
    setDensity: (density) => {
      setPreferences((current) => ({ ...current, density }));
      setActiveRoute('settings');
    },
    resetPreferences: () => {
      const next = resetPantryPilotState();
      setItems(next.items);
      setPreferences(next.preferences);
      setSelectedId(next.items[0]?.id ?? null);
      setStorageStatus('ready');
      setLastError(null);
      setActiveRoute('settings');
    },
    savePreferences: () => {
      const error = savePantryPilotState({ items, preferences });
      setStorageStatus(error ? 'error' : 'saved');
      setLastError(error);
      setActiveRoute('pantry');
    },
  };

  return [snapshot, actions];
}
