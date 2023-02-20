import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TestState {
  example: boolean;
}

const initialState: TestState = {
  example: false,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    testSuccess: (state) => {
      state.example = true;
    },
    testFailure: (state) => {
      state.example = false;
    },
  },
  extraReducers: (builder) => {
    //  builder.addCase(
    //     for communicate with other slices
    //     otherSlice.actions.logout,
    //     (state) => {
    //       state.test = false;
    //     }
    // );
  },
});

export const { testSuccess } = testSlice.actions;

export default testSlice.reducer;
