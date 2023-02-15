import { rest, RestHandler } from 'msw';
import ENDPOINTS from '../constant/ENDPOINTS';
import { getHabitSuccessResponse } from './mockResponses';

const habitHandlers: RestHandler[] = [
  rest.get(ENDPOINTS.HABIT, getHabitSuccessResponse),
];

export { habitHandlers };
