import HabitList from './HabitList';
import { server } from 'mock/mockServer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Habit List Component', () => {
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
