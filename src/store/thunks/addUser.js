import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import axios from "axios";

const addUser = createAsyncThunk("user/add", async (state, action) => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  return response.data;
});

export { addUser };
