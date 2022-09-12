import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productsReducer = createSlice({
  name: "productsReducer",
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    }
  },
});

export const { setArrProductAction, setProductDetail } = productsReducer.actions;

export default productsReducer.reducer;

//--------------action api-------------
export const getProductApi = async (dispatch2) => {
  //xử lý logic api để trả về kết quả
  try {
    const api = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    // console.log(api.data.content);
    // setArrProduct(api.data.content);
    //dispatch len redux
    console.log(api.data.content);
    const action = setArrProductAction(api.data.content);
    dispatch2(action);
  } catch (error) {
    console.log(error);
  }
};

// closure function: mượn một hàm bên ngoài bọc lại để truyền tham số
export const getProductDetail = (productId) => {
  return async (dispatch) => {
    //xử lý logic ở đây
    try {
      const api = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`,
        method: "GET",
      });
      //Sau khi có dữ liệu gửi lên action loại 1 đưa lên reducer
      const action = setProductDetail(api.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
