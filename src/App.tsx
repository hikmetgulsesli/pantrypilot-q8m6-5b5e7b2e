import { useEffect } from 'react';
import {
  EmptyAndErrorRecoveryPantrypilotQ8m6,
  ItemEditorPantrypilotQ8m6,
  ItemOperationsPantrypilotQ8m6,
  SettingsAndPreferencesPantrypilotQ8m6,
  type EmptyAndErrorRecoveryPantrypilotQ8m6ActionId,
  type ItemOperationsPantrypilotQ8m6ActionId,
  type SettingsAndPreferencesPantrypilotQ8m6ActionId,
} from './screens';
import type { ItemEditorPantrypilotQ8m6Actions } from './screens/ItemEditorPantrypilotQ8m6';
import { usePantryPilotStore } from './features/pantrypilot-q8m6/pantrypilot-q8m6.store';
import { actCancelEdit } from './features/surf-item-editor/act_cancel_edit';
import { actSaveRecord } from './features/surf-item-editor/act_save_record';
import { actCreateRecord } from './features/surf-item-operations/act_create_record';
import { actRetryLoad } from './features/surf-item-operations/act_retry_load';
import { actSearchRecords } from './features/surf-item-operations/act_search_records';
import { actSelectRecord } from './features/surf-item-operations/act_select_record';
import { publishPantryPilotBridge } from './test/bridge';

function InsightsPlaceholder() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-41px)] max-w-5xl flex-col justify-center px-6 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Insights</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">Pantry insights are being prepared.</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
        Shopping priority, meal planning, and inventory health panels are available from the pantry action tabs while the
        dedicated insights view is completed.
      </p>
    </main>
  );
}

export default function App() {
  const [snapshot, actions] = usePantryPilotStore();

  useEffect(() => {
    publishPantryPilotBridge(snapshot);
  }, [snapshot]);

  const pantryActions: Partial<Record<ItemOperationsPantrypilotQ8m6ActionId, () => void>> = {
    'button-1-1': () => actions.navigate('pantry'),
    'sync-2': () => actRetryLoad(actions),
    'add-item-3': () => actCreateRecord(actions),
    'all-items-4': () => actSearchRecords(actions),
    'produce-5': () => actSearchRecords(actions, { category: 'produce' }),
    'dairy-6': () => actSearchRecords(actions, { category: 'dairy' }),
    'canned-goods-7': () => actSearchRecords(actions, { category: 'canned-goods' }),
    'expiring-8': () => actSearchRecords(actions, { category: 'expiring' }),
    'button-9-9': () => actions.focusPanel('meal-plan'),
    'button-10-10': () => actions.focusPanel('inventory-health'),
    'button-11-11': () => actions.focusPanel('shopping-priority'),
    'button-12-12': () => actions.markAction('Pantry sort preference updated.'),
    'button-13-13': () => actions.markAction('Pantry list view refreshed.'),
    'button-14-14': () => actions.markAction('Pantry quantity review marked complete.'),
    'button-15-15': () => actions.markAction('Pantry planning queue updated.'),
    'edit-16': () => actSelectRecord(actions),
    'reorder-17': actions.reorderSelected,
    'pantry-1': () => actions.navigate('pantry'),
    'insights-2': () => actions.navigate('insights'),
    'settings-3': () => actions.navigate('settings'),
  };

  const emptyActions: Partial<Record<EmptyAndErrorRecoveryPantrypilotQ8m6ActionId, () => void>> = {
    'add-item-1': () => actCreateRecord(actions),
    'retry-load-2': () => actRetryLoad(actions),
    'create-first-item-3': () => actCreateRecord(actions),
    'clear-all-filters-4': actions.clearFilters,
    'pantry-1': () => actions.navigate('pantry'),
    'insights-2': () => actions.navigate('insights'),
    'settings-3': () => actions.navigate('settings'),
  };

  const editorActions: ItemEditorPantrypilotQ8m6Actions = {
    'button-1-1': () => actions.navigate('pantry'),
    'add-item-2': () => actCreateRecord(actions),
    'button-3-3': () => actions.markAction('Item quantity decreased.'),
    'button-4-4': () => actions.markAction('Item quantity increased.'),
    'cancel-5': () => actCancelEdit(actions),
    'save-changes-6': (draft) => actSaveRecord(actions, snapshot.selectedRecord, draft),
    'pantry-1': () => actions.navigate('pantry'),
    'insights-2': () => actions.navigate('insights'),
    'settings-3': () => actions.navigate('settings'),
    'back-to-pantry-4': () => actions.navigate('pantry'),
  };

  const settingsActions: Partial<Record<SettingsAndPreferencesPantrypilotQ8m6ActionId, () => void>> = {
    'button-1-1': () => actions.navigate('settings'),
    'button-2-2': () => actions.navigate('settings'),
    'add-item-3': () => actCreateRecord(actions),
    'compact-4': () => actions.setDensity('compact'),
    'comfortable-5': () => actions.setDensity('comfortable'),
    'manage-all-6': () => actions.navigate('pantry'),
    'button-7-7': () => actions.focusPanel('notifications'),
    'button-8-8': () => actions.focusPanel('storage-check'),
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

  const activeRoute = snapshot.activeScreen;

  return (
    <div data-setfarm-root="pantrypilot-q8m6" data-active-route={snapshot.route} className="min-h-screen bg-slate-50 text-slate-950">
      <div
        role="status"
        aria-live="polite"
        data-storage-status={snapshot.storageStatus}
        data-active-panel={snapshot.activePanel}
        data-item-count={snapshot.itemCount}
        className="border-b border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
      >
        <span>{snapshot.statusMessage}</span>
        {snapshot.lastError && <span className="ml-2 font-semibold text-amber-700">{snapshot.lastError}</span>}
      </div>
      {activeRoute === 'pantry' && <ItemOperationsPantrypilotQ8m6 actions={pantryActions} />}
      {activeRoute === 'editor' && <ItemEditorPantrypilotQ8m6 actions={editorActions} item={snapshot.selectedRecord} />}
      {activeRoute === 'settings' && <SettingsAndPreferencesPantrypilotQ8m6 actions={settingsActions} />}
      {activeRoute === 'empty' && <EmptyAndErrorRecoveryPantrypilotQ8m6 actions={emptyActions} />}
      {activeRoute === 'insights' && <InsightsPlaceholder />}
    </div>
  );
}
