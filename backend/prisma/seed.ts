import db from '../src/utils/database.server';

const getUsers = () => {
  return [
    { id: 1, username: 'bobVila' },
    { id: 2, username: 'plainJane' },
    { id: 3, username: 'johnDoe' },
  ];
};

const getHabits = () => {
  return [
    {
      title: 'Meditate',
      description: 'Meditate for 30 minutes each morning',
    },
    {
      title: 'Clip Nails',
      description: 'Clip nails once per week',
    },
    {
      title: 'Clip Nails',
      description: 'Clip nails once per week',
    },
  ];
};

const seed = async () => {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({
        data: {
          username: user.username,
        },
      });
    })
  );

  await Promise.all(
    getHabits().map((habit) => {
      const { title, description } = habit;
      return db.habit.create({
        data: {
          title: title,
          description: description,
          user_id: 1,
        },
      });
    })
  );
};

seed();
