import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ElephantColorI {
  open: boolean;
  color: string;
}

const initialElephantColorState: ElephantColorI = {
  open: false,
  color: "#808080",
};

const elephantColorSlice = createSlice({
  name: "elephantColorState",
  initialState: initialElephantColorState,
  reducers: {
    openColorPicker: (state) => {
      state.open = true;
    },
    closeColorPicker: (state) => {
      state.open = false;
    },
    setColor: (state, actions: PayloadAction<string>) => {
      state.color = actions.payload;
    },
  },
});

export const { openColorPicker, closeColorPicker, setColor } =
  elephantColorSlice.actions;
export default elephantColorSlice.reducer;
