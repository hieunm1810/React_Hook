//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = 1;

const numberReducer = createSlice({
  name: "numberReducer",
  initialState,
  reducers: {
    changeNumber: (state,action) => {
        state = action.payload;
        //ở đây sử dụng tính năng directdirect state mutation nên ko cần return, nhưng trạng thái mutation chỉ áp dụng cho biến reference thôi, còn primitive value thì luôn luôn immutatable nên phải return
        return state;
    }
  }
});

export const {changeNumber} = numberReducer.actions

export default numberReducer.reducer