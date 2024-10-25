import { screen } from '@testing-library/react';
import Counter from '../pages/counter/index';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '@/__tests__/test-utils';
import userEvent from '@testing-library/user-event';

describe('Home Component', () => {
  it('renders counter with initial state', () => {
    renderWithProviders(<Counter />, {
      preloadedState: {
        counter: {
          value: 0,
        },
      },
    });

    expect(screen.getByText('Counter: 0')).toBeDefined();
  });

  it('increments value when increment button is clicked', async () => {
    renderWithProviders(<Counter />, {
      preloadedState: {
        counter: {
          value: 0,
        },
      },
    });

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementButton);

    expect(screen.getByText('Counter: 2')).toBeDefined();
  });
});
