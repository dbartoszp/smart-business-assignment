export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type UsersState = {
  users: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  loading: boolean;
};
