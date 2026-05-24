import type { PantryPilotActions } from '../pantrypilot-q8m6/pantrypilot-q8m6.store';

export function actRetryLoad(actions: Pick<PantryPilotActions, 'retryLoad'>) {
  actions.retryLoad();
}

export default actRetryLoad;
