export type User = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type UsersState = {
  users: User[];
  filteredUsers: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  loading: boolean;
};
