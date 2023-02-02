import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Habit from '../Habit';

describe('Habit root page component', () => {
  it('should display habits header and buttons', () => {
    render(
      <MemoryRouter>
        <Habit />
      </MemoryRouter>
    );

    screen.getByRole('heading', {
      name: /habit/i,
    });
    screen.getByRole('button', {
      name: /habits home/i,
    });
    screen.getByRole('button', {
      name: /new habit/i,
    });
  });
});
