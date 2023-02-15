import { setupServer } from 'msw/node';
import { habitHandlers } from './mockHandlers';

const server = setupServer(...habitHandlers);

export { server };
