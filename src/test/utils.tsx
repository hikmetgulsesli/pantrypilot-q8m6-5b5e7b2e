import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../App';

describe('pantry operations inventory state', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the pantry screen from live store data instead of generated placeholders', () => {
    render(<App />);

    const totalItemsMetric = screen.getByText('Total Items').parentElement;
    const expiringMetric = screen.getByText('Expiring Soon').parentElement;
    const lowStockMetric = screen.getByText('Low Stock').parentElement;

    expect(totalItemsMetric).not.toBeNull();
    expect(expiringMetric).not.toBeNull();
    expect(lowStockMetric).not.toBeNull();

    expect(within(totalItemsMetric as HTMLElement).getByText('3')).toBeInTheDocument();
    expect(within(expiringMetric as HTMLElement).getByText('1')).toBeInTheDocument();
    expect(within(lowStockMetric as HTMLElement).getByText('0')).toBeInTheDocument();

    expect(screen.getAllByText('Baby spinach').length).toBeGreaterThan(0);
    expect(screen.getByText('Greek yogurt')).toBeInTheDocument();
    expect(screen.getByText('Black beans')).toBeInTheDocument();

    expect(screen.queryByText('342')).not.toBeInTheDocument();
    expect(screen.queryByText('Organic Almond Milk')).not.toBeInTheDocument();
    expect(screen.queryByText('Whole Wheat Pasta')).not.toBeInTheDocument();
    expect(screen.queryByText('Fresh Spinach')).not.toBeInTheDocument();
  });
});
