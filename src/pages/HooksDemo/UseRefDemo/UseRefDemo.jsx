import React from "react";
import { useRef } from "react";
import { useState } from "react";
/*
    Tương tự useState, tuy nhiên khi thay đổi giá trị useRef component không render lại (useRef dùng để lưu lại giá trị sau mỗi lần render hoặc sử dụng để thay đổi input của form mà không cần render lại, tăng performance)
    useRef thường sử dụng cho các form ko có validation hoặc load dữ liệu chỉnh sửa

 */
export default function UseRefDemo(props) {
  // const [userLogin, setUserLogin] = useState({username: "", password: ""});
//   const userLogin = { username: "", password: "" };
//   console.log(userLogin);
console.log("render");
const [number, setNumber] = useState(1);
const userLoginRef = useRef({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLoginRef.current);
  };
  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    userLoginRef.current[id] = value;
    //giá trị sẽ đc lưu trong thuộc tính current của useRef
    console.log(userLoginRef.current);

    //C1
    // setUserLogin({
    //     ...userLogin,
    //     [id]: value
    // });
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
        <h1>Number: {number}</h1>
        <button className="btn btn-secondary" onClick={() => {
            setNumber(number + 1);
        }}>+</button>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input
          type="text"
          id="username"
          className="form-control"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          type="password"
          id="password"
          className="form-control"
          onChange={handleChangeInput}
        />
      </div>
      <button className="btn btn-success">Login</button>
    </form>
  );
}
