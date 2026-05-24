import { useEffect, useMemo, useState } from 'react';
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
  const [settingsSearchQuery, setSettingsSearchQuery] = useState('');

  useEffect(() => {
    publishPantryPilotBridge(snapshot);
  }, [snapshot]);

  const settingsPreferences = useMemo(
    () => ({
      defaultView: 'list' as const,
      density: snapshot.preferences.density,
      expiryThresholdDays: 7 as const,
      lowStockAlerts: snapshot.preferences.notifications,
    }),
    [snapshot.preferences.density, snapshot.preferences.notifications],
  );

  const openSettingsSearch = () => {
    window.history.pushState(null, '', '/search');
    actions.markAction('Settings search opened at /search.');
  };

  const pantryActions: Partial<Record<ItemOperationsPantrypilotQ8m6ActionId, () => void>> = {
    'button-1-1': () => actions.navigate('pantry'),
    'sync-2': actions.retryLoad,
    'add-item-3': actions.addStarterItem,
    'all-items-4': () => actions.focusPanel('all-items'),
    'produce-5': () => actions.focusPanel('produce'),
    'dairy-6': () => actions.focusPanel('dairy'),
    'canned-goods-7': () => actions.focusPanel('canned-goods'),
    'expiring-8': () => actions.focusPanel('expiring'),
    'button-9-9': () => actions.focusPanel('meal-plan'),
    'button-10-10': () => actions.focusPanel('inventory-health'),
    'button-11-11': () => actions.focusPanel('shopping-priority'),
    'button-12-12': () => actions.markAction('Pantry sort preference updated.'),
    'button-13-13': () => actions.markAction('Pantry list view refreshed.'),
    'button-14-14': () => actions.markAction('Pantry quantity review marked complete.'),
    'button-15-15': () => actions.markAction('Pantry planning queue updated.'),
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
    'button-3-3': () => actions.markAction('Item category details updated.'),
    'button-4-4': () => actions.markAction('Item expiration details updated.'),
    'cancel-5': () => actions.navigate('pantry'),
    'save-changes-6': () => actions.navigate('pantry'),
    'pantry-1': () => actions.navigate('pantry'),
    'insights-2': () => actions.navigate('insights'),
    'settings-3': () => actions.navigate('settings'),
    'back-to-pantry-4': () => actions.navigate('pantry'),
  };

  const settingsActions: Partial<Record<SettingsAndPreferencesPantrypilotQ8m6ActionId, () => void>> = {
    'button-1-1': () => actions.navigate('settings'),
    'button-2-2': openSettingsSearch,
    'add-item-3': actions.addStarterItem,
    'compact-4': () => actions.setDensity('compact'),
    'comfortable-5': () => actions.setDensity('comfortable'),
    'manage-all-6': () => actions.navigate('pantry'),
    'button-7-7': () => actions.markAction('Delete confirmation opened for saved filter: Expiring Soon.'),
    'button-8-8': () => actions.markAction('Delete confirmation opened for saved filter: Baking Supplies.'),
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
      {activeRoute === 'editor' && <ItemEditorPantrypilotQ8m6 actions={editorActions} />}
      {activeRoute === 'settings' && (
        <SettingsAndPreferencesPantrypilotQ8m6
          actions={settingsActions}
          preferences={settingsPreferences}
          searchQuery={settingsSearchQuery}
          statusMessage={snapshot.statusMessage}
          onSearchChange={(query) => {
            setSettingsSearchQuery(query);
            actions.markAction(query ? `Filtering settings for "${query}".` : 'Settings search cleared.');
          }}
        />
      )}
      {activeRoute === 'empty' && <EmptyAndErrorRecoveryPantrypilotQ8m6 actions={emptyActions} />}
      {activeRoute === 'insights' && <InsightsPlaceholder />}
    </div>
  );
}
