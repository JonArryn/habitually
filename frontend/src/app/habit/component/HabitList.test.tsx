import HabitList from './HabitList';
import { server } from 'mock/mockServer';
import { render, screen } from '@testing-library/react';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Habit List Component', () => {
  it('Should display tiled grid of habits', async () => {
    render(<HabitList />);

    await screen.findByText('Test Habit Title 1');
  });
});
