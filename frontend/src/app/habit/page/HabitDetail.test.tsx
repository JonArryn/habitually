import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorPage from 'app/page/ErrorPage';
import { mockGetEndpoint } from 'mock/handlerBuilders';
import { server } from 'mock/mockServer';
import { habitHandlers } from 'mock/mockHandlers';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HabitDetail from './HabitDetail';

interface iProps {
  habitId: number;
}

const HabitDetailWithRoutes = ({ habitId }: iProps) => {
  return (
    <MemoryRouter initialEntries={[`/habit/${habitId}`]}>
      <Routes>
        <Route path='/habit/:habitId' element={<HabitDetail />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </MemoryRouter>
  );
};

const clickEdit = async () => {
  const editButton = await screen.findByRole('button', { name: /edit/i });

  userEvent.click(editButton);
};

describe('Habit detail page', () => {
  server.use(habitHandlers.getOneHabit);
  it('Should display the habit details', async () => {
    server.use();
    render(<HabitDetailWithRoutes habitId={1} />);

    expect(
      await screen.findByRole('heading', { name: /details/i })
    ).toBeInTheDocument();

    expect(
      await screen.findByRole('textbox', { name: /habit title/i })
    ).toBeInTheDocument();

    expect(
      await screen.findByDisplayValue(/test habit title 1/i)
    ).toBeInTheDocument();

    expect(
      await screen.findByDisplayValue(/test habit description 1/i)
    ).toBeInTheDocument();
  });
  it('Should navigate to error page if habit ID is not found', async () => {
    server.use(
      mockGetEndpoint('/habit/:id', 404, [{ message: '404 Not Found' }])
    );

    render(<HabitDetailWithRoutes habitId={99} />);

    expect(
      await screen.findByRole('heading', { name: /oops!/i }, { timeout: 4000 })
    ).toBeInTheDocument();
  });
  it('Should disable editing when edit mode is not active', async () => {});
  it('Should allow details to be edited when edit button is clicked', async () => {});
  it('Should undo changes and prevent editing when cancel button is clicked', async () => {});
  it('Should update habit when save button is clicked', async () => {});
  it('Should delete habit when delete button is clicked', async () => {});
});
