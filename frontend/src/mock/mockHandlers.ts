import ENDPOINTS from 'constant/ENDPOINTS';
import { rest, RestHandler } from 'msw';
import { getHabitSuccessResponse } from './mockResponses';

const habitHandlers: RestHandler[] = [
  rest.get(
    `${process.env.REACT_APP_DEV_API_URL}${ENDPOINTS.HABIT}`,
    getHabitSuccessResponse
  ),
];

export { habitHandlers };
