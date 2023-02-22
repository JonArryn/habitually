import ENDPOINTS from 'constant/ENDPOINTS';
import { rest, RestHandler } from 'msw';
import {
  getHabitSuccessResponse,
  getOneHabitSuccessResponse,
} from './mockResponses';

const habitHandlers: RestHandler[] = [
  rest.get(
    `${process.env.REACT_APP_DEV_API_URL}${ENDPOINTS.HABIT}`,
    getHabitSuccessResponse
  ),
  rest.get(
    `${process.env.REACT_APP_DEV_API_URL}${ENDPOINTS.HABIT}/:id`,
    getOneHabitSuccessResponse
  ),
];

export { habitHandlers };
