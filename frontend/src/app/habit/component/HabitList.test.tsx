import HabitList from './HabitList';
import { render, screen } from '@testing-library/react';
import { server } from '../../../mock/mockServer';
import { MemoryRouter } from 'react-router-dom';
import { habitHandlers } from 'mock/mockHandlers';

describe('Habit List Component', () => {
  server.use(habitHandlers.getAllHabits);
  it('Should display tiled grid of habits', async () => {
    render(<HabitList />, { wrapper: MemoryRouter });

    expect(await screen.findByText('Test Habit Title 1')).toBeInTheDocument();
    expect(
      await screen.findByText('Test Habit Description 1')
    ).toBeInTheDocument();
    expect(await screen.findByText('Test Habit Title 2')).toBeInTheDocument();
    expect(
      await screen.findByText('Test Habit Description 2')
    ).toBeInTheDocument();
    expect(await screen.findByText('Test Habit Title 3')).toBeInTheDocument();
    expect(
      await screen.findByText('Test Habit Description 3')
    ).toBeInTheDocument();
  });
});
