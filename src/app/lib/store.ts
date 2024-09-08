import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/userSlice";

// const store = configureStore({ reducer: { users: usersReducer } });

export const makeStore = () => {
  return configureStore({
    reducer: { users: usersReducer },
  });
};

// export default store;
export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
