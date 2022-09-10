import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [arrProduct, setArrProduct] = useState([]);
  const getApiProduct = async () => {
    try {
      const api = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      // console.log(api.data.content);
      setArrProduct(api.data.content);
    } catch (error) {
      console.log(error);
    }
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
                  <NavLink to={`/detail/${element.id}`} className="btn btn-success">View detail</NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
