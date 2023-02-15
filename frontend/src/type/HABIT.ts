interface IHabit {
  id: string;
  title: string;
  description?: string;
}

interface IHabitResponse {
  data: {
    data: {
      created_at: string;
      deleted: boolean;
      description: string;
      id: number;
      title: string;
      updated_at: string;
      user_id: number;
    };
  };
}

export type { IHabit as default, IHabitResponse };
