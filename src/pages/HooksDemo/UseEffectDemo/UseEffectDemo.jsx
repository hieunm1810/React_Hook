import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
let timeout = {};
export default function UseEffectDemo() {
  const [arrProduct, setArrayProduct] = useState([]);
  const [count, setCount] = useState(60);
  const getApi = () => {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    promise.then((result) => {
      console.log(result.data.content);
      setArrayProduct(result.data.content);
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
  useEffect(() => {
    //Callback function này sẽ chạy 1 lần dầu tiên và các lần sau thì phụ thuộc vào dependency thứ 2 của hàm useEffect( giống didupdate)

    //khi nào count thay đổi thì mới chạy hàm callback này tiếp còn state khác thay đổi thì hàm này không chạy!
  }, [count]);
  useEffect(() => {
    //Chạy 1 lần sau khi render thì để mảng rỗng (giống hệt componentdidmount bên class component)
    getApi();
    // console.log("abc");
    timeout = setInterval(() => {
      //Cách thứ hai để setState là truyền một callback function để xử lý state cũ trước khi set lại state
      setCount((count) => {
        return count - 1;
      });
      console.log("123");
    }, 1000);

    return () => {
      //function return trong useEffect sẽ đc kích hoạt trước khi component này mất khỏi giao diện giống componentwillunmount bên react class
      clearInterval(timeout);
    };
  }, []);
  return (
    <div className="container">
      <h4>Componentwillunmount</h4>
      <p>Count: {count}</p>
      <h3>UseEffectDemo</h3>
      <h4>ComponentDidMount (Sử dụng cho việc load 1 lần sau render)</h4>
      <hr />
      <h3>Shoes Shop</h3>
      <div className="row">
        {arrProduct.map((element, index) => {
          return (
            <div className="col-3" key={index}>
              <img src={element.image} alt="product" className="w-100" />
              <div
                className="card-body bg-dark text-white"
                style={{
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  padding: "10px",
                }}
              >
                <p>{element.name}</p>
                <p>{element.price}</p>
                <button className="btn btn-success">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
