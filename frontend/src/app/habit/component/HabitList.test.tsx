import HabitList from './HabitList';
import { server } from 'mock/mockServer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import HabitDetail from '../page/HabitDetail';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Habit List Component', () => {
  const HabitListWrapped = () => {
    return (
      <MemoryRouter initialEntries={['/habit']}>
        <Routes>
          <Route path='/habit' element={<HabitList />} />
          <Route path=':id' element={<HabitDetail />} />
        </Routes>
      </MemoryRouter>
    );
  };
  it('Should display tiled grid of habits', async () => {
    render(<HabitListWrapped />);

    await screen.findByText('Test Habit Title 1');
    await screen.findByText('Test Habit Description 1');
    await screen.findByText('Test Habit Title 2');
    await screen.findByText('Test Habit Description 2');
    await screen.findByText('Test Habit Title 3');
    await screen.findByText('Test Habit Description 3');
  });
  it('Should navigate to the HabitDetail page', async () => {
    render(<HabitListWrapped />);

    await screen.findByRole('button', { name: /manage/i }, { timeout: 5000 });
  });
});
