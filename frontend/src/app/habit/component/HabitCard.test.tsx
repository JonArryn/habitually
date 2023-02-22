import { server } from 'mock/mockServer';

import HabitCard from './HabitCard';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('HabitCard component', () => {
  it('Should do the thing');
});
