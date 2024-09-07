import { User, UsersState } from "@/app/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: UsersState = {
  users: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearFilters(state) {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload;
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

export default usersSlice.reducer;
