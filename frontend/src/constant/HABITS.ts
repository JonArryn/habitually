export interface IHabit {
  id: number;
  title: string;
  description?: string;
}
const habits: IHabit[] = [
  {
    id: 1,
    title: 'Meditate',
    description: 'Meditate twice a day for 30 minutes',
  },
  {
    id: 2,
    title: 'Drink Water',
    description: 'Drink 8x 8oz. glasses of water per day',
  },
  {
    id: 3,
    title: 'Clip Nails',
    description: 'Clip your nails once a week',
  },
];

export default habits;
