import { useEffect } from 'react';
import {
  EmptyAndErrorRecoveryPantrypilotQ8m6,
  ItemEditorPantrypilotQ8m6,
  ItemOperationsPantrypilotQ8m6,
  SettingsAndPreferencesPantrypilotQ8m6,
  type EmptyAndErrorRecoveryPantrypilotQ8m6ActionId,
  type ItemEditorPantrypilotQ8m6ActionId,
  type ItemOperationsPantrypilotQ8m6ActionId,
  type SettingsAndPreferencesPantrypilotQ8m6ActionId,
} from './screens';
import { usePantryPilotStore } from './features/pantrypilot-q8m6/pantrypilot-q8m6.store';
import { publishPantryPilotBridge } from './test/bridge';

export default function App() {
  const [snapshot, actions] = usePantryPilotStore();

  useEffect(() => {
    publishPantryPilotBridge(snapshot);
  }, [snapshot]);

  const pantryActions: Partial<Record<ItemOperationsPantrypilotQ8m6ActionId, () => void>> = {
    'button-1-1': () => actions.navigate('pantry'),
    'sync-2': actions.retryLoad,
    'add-item-3': actions.addStarterItem,
    'all-items-4': () => actions.navigate('pantry'),
    'produce-5': () => actions.navigate('pantry'),
    'dairy-6': () => actions.navigate('pantry'),
    'canned-goods-7': () => actions.navigate('pantry'),
    'expiring-8': () => actions.navigate('pantry'),
    'edit-16': actions.selectFirstItem,
    'reorder-17': actions.reorderSelected,
    'pantry-1': () => actions.navigate('pantry'),
    'insights-2': () => actions.navigate('insights'),
    'settings-3': () => actions.navigate('settings'),
  };

  const emptyActions: Partial<Record<EmptyAndErrorRecoveryPantrypilotQ8m6ActionId, () => void>> = {
    'add-item-1': actions.addStarterItem,
    'retry-load-2': actions.retryLoad,
    'create-first-item-3': actions.addStarterItem,
    'clear-all-filters-4': actions.clearFilters,
    'pantry-1': () => actions.navigate('pantry'),
    'insights-2': () => actions.navigate('insights'),
    'settings-3': () => actions.navigate('settings'),
  };

  const editorActions: Partial<Record<ItemEditorPantrypilotQ8m6ActionId, () => void>> = {
    'button-1-1': () => actions.navigate('pantry'),
    'add-item-2': actions.addStarterItem,
    'cancel-5': () => actions.navigate('pantry'),
    'save-changes-6': () => actions.navigate('pantry'),
    'pantry-1': () => actions.navigate('pantry'),
    'insights-2': () => actions.navigate('insights'),
    'settings-3': () => actions.navigate('settings'),
    'back-to-pantry-4': () => actions.navigate('pantry'),
  };

  const settingsActions: Partial<Record<SettingsAndPreferencesPantrypilotQ8m6ActionId, () => void>> = {
    'button-1-1': () => actions.navigate('settings'),
    'button-2-2': () => actions.navigate('settings'),
    'add-item-3': actions.addStarterItem,
    'compact-4': () => actions.setDensity('compact'),
    'comfortable-5': () => actions.setDensity('comfortable'),
    'manage-all-6': () => actions.navigate('pantry'),
    'reset-to-defaults-9': actions.resetPreferences,
    'cancel-10': () => actions.navigate('pantry'),
    'save-preferences-11': actions.savePreferences,
    'pantry-1': () => actions.navigate('pantry'),
    'insights-2': () => actions.navigate('insights'),
    'settings-3': () => actions.navigate('settings'),
    'pantry-4': () => actions.navigate('pantry'),
    'insights-5': () => actions.navigate('insights'),
    'settings-6': () => actions.navigate('settings'),
  };

  const activeRoute = snapshot.activeScreen === 'empty' || snapshot.activeScreen === 'insights' ? 'empty' : snapshot.activeScreen;

  return (
    <div data-setfarm-root="pantrypilot-q8m6" data-active-route={snapshot.route} className="min-h-screen bg-slate-50 text-slate-950">
      {activeRoute === 'pantry' && <ItemOperationsPantrypilotQ8m6 actions={pantryActions} />}
      {activeRoute === 'editor' && <ItemEditorPantrypilotQ8m6 actions={editorActions} />}
      {activeRoute === 'settings' && <SettingsAndPreferencesPantrypilotQ8m6 actions={settingsActions} />}
      {activeRoute === 'empty' && <EmptyAndErrorRecoveryPantrypilotQ8m6 actions={emptyActions} />}
    </div>
  );
}
