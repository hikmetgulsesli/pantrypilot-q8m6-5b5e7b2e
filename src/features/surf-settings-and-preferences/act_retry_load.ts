import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

export function actRetryLoad(actions: Pick<PantryPilotActions, 'retryLoad' | 'focusPanel' | 'markAction'>) {
  actions.retryLoad();
  actions.focusPanel('settings');
  actions.markAction('Settings data reloaded from local storage.');
}

export default actRetryLoad;
