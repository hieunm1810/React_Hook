import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/reducers/productsReducer";

export default function Detail(props) {
  // const [productDetail, setProductDetail] = useState({});
  const {productDetail} = useSelector(state => state.productsReducer);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProductDetailApi = async () => {
    // try {
    //   const api = await axios({
    //     url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
    //     method: "GET",
    //   });
    //   console.log(api.data.content);
    //   // setProductDetail(api.data.content);
    // } catch (error) {
    //   console.log(error);
    // }
    const actionThunk = getProductDetail(params.id);
    // hàm trên sẽ trả về hàm bên dưới
    // async dispatch => {
    //   //xử lý logic ở đây
      
    // }
    dispatch(actionThunk);
  };
  useEffect(() => {
    getProductDetailApi();
    //muon trang do link lai chinh no thi phai dung params de nhan biet su thay doi
  }, [params.id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img className="mw-100" src={productDetail.image} alt="..." />
        </div>
        <div className="col-8">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
        </div>
      </div>

      <div className="mt-2">
        <h3>Related product</h3>
        <div className="row">
            {/* toan tu optional chaning: neu thuoc tinh do co thi moi . tiep duoc, ko thi bo qua */}
          {productDetail.relatedProducts?.map((element) => {
            return (
              <div className="col-3" key={element.id}>
                <div className="card">
                  <img src={element.image} alt="..." />
                  <div className="card-body">
                    <p>{element.name}</p>
                    <p>{element.price}$</p>
                    <button className="btn btn-success" onClick={() => {
                        navigate(`/detail/${element.id}`);
                    }}>View detail</button>
                    <NavLink to={`/detail/${element.id}`} className="btn btn-secondary mx-2">View detail</NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
