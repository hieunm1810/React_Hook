import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi, setArrProductAction } from "../../redux/reducers/productsReducer";
export default function Home() {
  // const [arrProduct, setArrProduct] = useState([]);
  const {arrProduct} = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  const getApiProduct = async () => {
    // try {
    //   const api = await axios({
    //     url: "https://shop.cyberlearn.vn/api/Product",
    //     method: "GET",
    //   });
    //   // console.log(api.data.content);
    //   // setArrProduct(api.data.content);
    //   //dispatch len redux
    //   console.log(api.data.content);
    //   const action = setArrProductAction(api.data.content);
    //   dispatch(action);
    // } catch (error) {
    //   console.log(error);
    // }
    /*
      action có hai dạng: 
      + action dạng 1:
        action = {
          type: action_name,
          payload: data
        }
      +action (thunk) dạng 2: 
        action = (dispatch2,getState) => {
          logic xử lý ở đây sau đó có dữ liệu sẽ dùng tham số dispatch2 để đưa lên redux hoặc thực hiện tiếp 1 logic khác
        }
     */
    const actionType2 = getProductApi;
    dispatch(actionType2);
  };

  useEffect(() => {
    getApiProduct();
  }, []);
  return (
    <div className="container">
      <h3>Shoes shop</h3>
      <div className="row">
        {arrProduct.map((element) => {
          return (
            <div className="col-3 mt-2" key={element.id}>
              <div className="card">
                <img src={element.image} alt="..." />
                <div className="card-body bg-dark text-light">
                  <p>{element.name}</p>
                  <p>{element.price}$</p>
                  {/* <button className="btn btn-success">View detail</button> */}
                  <NavLink
                    to={`/detail/${element.id}`}
                    className="btn btn-success"
                  >
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
