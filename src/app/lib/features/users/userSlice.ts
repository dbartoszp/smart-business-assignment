import { User, UsersState } from "@/app/utils/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  loading: false,
};

const filterUsers = (users: User[], filters: UsersState["filters"]) => {
  return users.filter(
    (user) =>
      (!filters.name ||
        user.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.username ||
        user.username.toLowerCase().includes(filters.username.toLowerCase())) &&
      (!filters.email ||
        user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (!filters.phone ||
        user.phone.toLowerCase().includes(filters.phone.toLowerCase()))
  );
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilterName(state, action: PayloadAction<string>) {
      state.filters.name = action.payload;
      state.filteredUsers = filterUsers(state.users, state.filters);
    },
    setFilterUsername(state, action: PayloadAction<string>) {
      state.filters.username = action.payload;
      state.filteredUsers = filterUsers(state.users, state.filters);
    },
    setFilterEmail(state, action: PayloadAction<string>) {
      state.filters.email = action.payload;
      state.filteredUsers = filterUsers(state.users, state.filters);
    },
    setFilterPhone(state, action: PayloadAction<string>) {
      state.filters.phone = action.payload;
      state.filteredUsers = filterUsers(state.users, state.filters);
    },
    clearFilters(state) {
      state.filters = initialState.filters;
      state.filteredUsers = state.users;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload;
      state.filteredUsers = filterUsers(payload, state.filters);
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();
  return data;
});

export const {
  setFilterName,
  setFilterUsername,
  setFilterEmail,
  setFilterPhone,
  clearFilters,
} = usersSlice.actions;

export default usersSlice.reducer;
