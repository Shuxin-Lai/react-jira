import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { User } from "interface/user.interface"

export const fetchUserById = createAsyncThunk("auth/fetchByIdStatus", async (): Promise<User> => {
  return { email: "fake@gmail.com" }
})

export interface authState {
  user: Nullable<User>
}

const initialState: authState = {
  user: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      // eslint-disable-next-line no-debugger
      state.user = action.payload
      console.log("payload: ", action.payload)
    })
  },
})

// Action creators are generated for each case reducer function
// export const {} = counterSlice.actions

export default authSlice.reducer
