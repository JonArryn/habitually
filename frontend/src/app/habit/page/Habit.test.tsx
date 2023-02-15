import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Habit from './Habit';

describe('Habit root page component', () => {
  const HabitPage = () => {
    return (
      <MemoryRouter>
        <Habit />
      </MemoryRouter>
    );
  };

  it('should display habits header and navigation buttons', () => {
    render(<HabitPage />);

    expect(
      screen.getByRole('heading', {
        name: /habit/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /habits-home/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /new-habit/i,
      })
    ).toBeInTheDocument();
  });
});
