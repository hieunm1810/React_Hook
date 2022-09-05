import React, { useState } from "react";

//hook la mot cai ham do react tao ra cho minh su dung thay the nhung khai niem ben class

// state = {
//     number: 1
// }
export default function UserStateDemo() {
  const [number, setNumber] = useState(1); //useState là một hàm sẽ trả ra một mảng chứa 2 giá trị (state, một hàm set lại state) nên mình sử dụng bóc tách phần tử để lấy thẳng hai dữ liệu này
  // useState có thể sử dụng nhiều lần trong component
  const [like, setLike] = useState(1);
  const [img, setImg] = useState("./img/products/black-car.jpg");
  console.log(like);
  const handleClick = () => {
    //setNumber làm hai nhiệm vụ là thay đổi giá trị number = giá trị mới, và gọi lại function component chạy lại
    setNumber(number + 1);
  };
  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          handleClick();
        }}
      >
        +
      </button>
      <div className="card w-25 mt-2">
        <img src="https://i.pravatar.cc?u=1" alt="avatar" />
        <div className="card-body">
          <h3>Name: Gia Lạp</h3>
          <p>Age: 18</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            {like} <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <img src={img} alt="..." className="col-6" />
        <div className="col-6">
          <button className="btn btn-success mx-2" onClick={() => {
            setImg("./img/products/red-car.jpg");
          }}>red</button>
          <button className="btn btn-secondary mx-2" onClick={() => {
            setImg("./img/products/black-car.jpg");
          }}>black</button>
          <button className="btn btn-danger mx-2" onClick={() => {
            setImg("./img/products/silver-car.jpg");
          }}>silver</button>
          <button className="btn btn-warning mx-2" onClick={() => {
            setImg("./img/products/steel-car.jpg");
          }}>steel</button>
        </div>
      </div>
    </div>
  );
}
