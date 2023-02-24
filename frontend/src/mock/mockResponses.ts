// import IHabit, { IHabitResponse } from '../type/HABIT';

import { ResponseComposition, RestContext, RestRequest } from 'msw';
import { getAllHabits, getHabitById } from './mockData';

// create an interface so you don't have to type these responseResolvers all the time I don't know why msw and TS aren't getting along right now, maybe resolve that instead

const getHabitSuccessResponse = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(
    ctx.json({
      data: getAllHabits,
    })
  );
};
const getOneHabitSuccessResponse = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  console.log('get one habit msw fired');
  return res(
    ctx.json({
      data: getHabitById,
    })
  );
};

export { getHabitSuccessResponse, getOneHabitSuccessResponse };
