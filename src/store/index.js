import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// what this say is find every thing that exports from fetchUsers file
// and export it from index file as well.
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
