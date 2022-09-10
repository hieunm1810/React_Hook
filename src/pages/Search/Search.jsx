import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
let timeout = null;
export default function Search() {
  const [arrProduct, setArrProduct] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  //   const [keyword, setKeyWord] = useState(searchParam.get("keyword"));

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSearchParam({
      keyword: value,
    });
    // console.log(searchParam.get("keyword"));
  };
  const getProductByKeywordApi = async () => {
    try {
      const api = await axios({
        url:
          "https://shop.cyberlearn.vn/api/Product?keyword=" +
          searchParam.get("keyword"),
        method: "GET",
      });
      setArrProduct(api.data.content);
      //   console.log("abc");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //gọi api thực thi
    // submit mới search
    getProductByKeywordApi();
  };
  //   useEffect(() => {
  //     //Nếu state thay đổi thì link param(?keyword) thay đổi theo
  //     //setSearchParam là một hàm bất đồng bộ
  //     // async function handler() {
  //     //   return await setTimeout(() => {

  //     //     //vừa gõ vừa search
  //     //     getProductByKeywordApi();
  //     //   }, 1000);
  //     // //   console.log(keyword);
  //     // }
  //     // handler().then((result) => {
  //     //     console.log(result);
  //     // });
  //   }, [keyword]);
  useEffect(() => {
    // setKeyWord(searchParam.get("keyword"));
    //debounce search: delay thời gian truy xuất api lại để ko phải liên tục truy xuất api mỗi lần gõ phím
    timeout = setTimeout(() => {
      getProductByKeywordApi();
      console.log(searchParam.get("keyword"));
    }, 1000);
    //mỗi lần timeout sinh ra thì đều bị clear timeout xoá cho đến kí tự cuối cùng nhập vào thì ko xoá nữa mà thực thi hàm bên trong timeout
    console.log("abc");
    return () => {
      if (timeout != null) {
        console.log("time out");
        clearTimeout(timeout);
      }
    };
  }, [searchParam.get("keyword")]);
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keyword"
            onChange={handleChange}
            value={searchParam.get("keyword")}
          />
          <button className="btn bg-dark text-white">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={item.image} alt={"..."} />
                </div>
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="btn btn-success">View detail</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}
