import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const removeUser = createAsyncThunk("/user/remove", async (user) => {
  console.log("remove user line-4", user);
  await axios.delete(`http://localhost:3005/users/${user.id}`);
  return user;
});

export { removeUser };
