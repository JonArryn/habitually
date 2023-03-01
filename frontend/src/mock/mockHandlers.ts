import { mockGetEndpoint } from './handlerBuilders';
import { getAllHabits, getHabitById } from './mockData';

const habitHandlers = {
  getAllHabits: mockGetEndpoint('/habit', 200, getAllHabits),
  getOneHabit: mockGetEndpoint('/habit/:id', 200, getHabitById),
};

const mockHandlers = { ...habitHandlers };

export { habitHandlers, mockHandlers };
