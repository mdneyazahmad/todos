import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  name: string;
}

const initialState: AppState = {
  name: "Todos",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setName: function (state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export default appSlice.reducer;
