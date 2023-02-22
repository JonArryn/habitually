import HabitList from './HabitList';
import { server } from 'mock/mockServer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Habit List Component', () => {
  const TestDetailPage = () => {
    return <h1>Test Detail Page</h1>;
  };

  const HabitListWrapped = () => {
    return (
      <MemoryRouter initialEntries={['/habit']}>
        <Routes>
          <Route path='/habit' element={<HabitList />} />
          <Route path='/habit/:id' element={<TestDetailPage />} />
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
  it('Should navigate to the test detail page', async () => {
    render(<HabitListWrapped />);

    const buttons = await screen.findAllByRole('button', { name: /manage/i });

    userEvent.click(buttons[0]);

    await screen.findByText('Test Detail Page');
  });
});
