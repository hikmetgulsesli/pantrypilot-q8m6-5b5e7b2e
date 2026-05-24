import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../App';

describe('settings preferences action wiring', () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.replaceState(null, '', '/');
  });

  it('produces visible state or URL feedback for settings controls', () => {
    const { container } = render(<App />);

    const settingsLink = container.querySelector<HTMLElement>('[data-action-id="settings-3"]');
    expect(settingsLink).not.toBeNull();
    settingsLink?.addEventListener('click', (event) => event.preventDefault(), { capture: true });
    fireEvent.click(settingsLink as HTMLElement);
    expect(screen.getByText('Workflow Preferences')).toBeInTheDocument();

    const searchButton = container.querySelector<HTMLElement>('[data-action-id="button-2-2"]');
    expect(searchButton).not.toBeNull();
    fireEvent.click(searchButton as HTMLElement);
    expect(window.location.pathname).toBe('/search');
    expect(screen.getByRole('status')).toHaveTextContent('Settings search opened at /search.');

    fireEvent.click(screen.getByRole('button', { name: /compact/i }));
    expect(screen.getByRole('button', { name: /compact/i })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('status')).toHaveTextContent('Pantry changes saved locally.');

    const deleteFilterButton = container.querySelector<HTMLElement>('[data-action-id="button-7-7"]');
    expect(deleteFilterButton).not.toBeNull();
    fireEvent.click(deleteFilterButton as HTMLElement);
    expect(screen.getByRole('status')).toHaveTextContent('Delete confirmation opened for saved filter: Expiring Soon.');

    fireEvent.click(screen.getByRole('button', { name: /save preferences/i }));
    expect(screen.getByRole('status')).toHaveTextContent('Preferences saved locally.');
  });
});
