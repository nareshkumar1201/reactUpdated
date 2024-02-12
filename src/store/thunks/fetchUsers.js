import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");
  await pause(1000);
  return response.data;
});

// Automatically addedin
// fetchUsers.pending === 'users/fetch/pending',
// fetchUsers.fulfilled === 'users/fetch/fulfilled',
// fetchUsers.rejected === 'users/fetch/rejected '

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
