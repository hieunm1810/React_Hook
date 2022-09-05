import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrComment: [
    { name: "Tran Gia Lap", content: "Anh oi" },
    { name: "Tran Gia Lap", content: "Em nho anh" },
  ],
};

const facebookReducer = createSlice({
  name: "facebookReducer",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.arrComment.push(action.payload);
    },
  },
});

export const { addComment } = facebookReducer.actions;

export default facebookReducer.reducer;
