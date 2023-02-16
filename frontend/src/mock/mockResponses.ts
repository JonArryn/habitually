// import IHabit, { IHabitResponse } from '../type/HABIT';

import { ResponseComposition, RestContext, RestRequest } from 'msw';

// create an interface so you don't have to type these responseResolvers all the time I don't know why msw and TS aren't getting along right now, maybe resolve that instead

const getHabitSuccessResponse = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(
    ctx.json({
      data: [
        {
          id: '1',
          title: 'Test Habit Title 1',
          description: 'Test Habit Description 1',
        },
        {
          id: '2',
          title: 'Test Habit Title 2',
          description: 'Test Habit Description 2',
        },
        {
          id: '3',
          title: 'Test Habit Title 3',
          description: 'Test Habit Description 3',
        },
      ],
    })
  );
};

export { getHabitSuccessResponse };
