import { MemoryRouter, Routes, Route, useParams } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getHabitById } from 'mock/mockData';

import HabitCard from './HabitCard';

describe('HabitCard component', () => {
  const singleHabit = getHabitById.data;

  const TestDetailPage = () => {
    const { habitId } = useParams();
    return (
      <div>
        <h1>Test Detail Page</h1>
        <p>habit id: {habitId}</p>
      </div>
    );
  };

  const HabitCardRoutes = () => {
    return (
      <MemoryRouter initialEntries={['/habit']}>
        <Routes>
          <Route
            path='/habit'
            element={<HabitCard habitData={singleHabit} />}
          />
          <Route path='/habit/:habitId' element={<TestDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
  };
  it('Should display habit title and description', async () => {
    render(<HabitCardRoutes />);

    expect(await screen.findByText('Test Habit Title 1')).toBeInTheDocument();
    expect(
      await screen.findByText('Test Habit Description 1')
    ).toBeInTheDocument();
  });

  it('Should navigate to the habit detail page', async () => {
    render(<HabitCardRoutes />);

    const manageButton = await screen.findByRole('button', { name: /manage/i });

    userEvent.click(manageButton);

    expect(await screen.findByText(/test detail page/i)).toBeInTheDocument();
    expect(await screen.findByText(/habit id: 1/i)).toBeInTheDocument();
  });
});
