import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ReactForm() {
  const navigate = useNavigate(); // su dung khi muon thuc hien chuyen huong sau mot hanh dong nao do
  const userLoginRef = useRef({
    userName: "",
    passWord: "",
  });
  const handleChange = (e) => {
    const { value, id } = e.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //Chặn reload browser
    console.log(userLoginRef.current);
    const a = 0;
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Đăng nhập api");
        if(userLoginRef.current.userName === "gia lap") {
            resolve("Đăng nhập thành công");
        } else {
            reject("Đăng nhập thất bại");
        }
      }, 3000);
    });
    // let result = await promise;
    promise.then((result => {
        console.log(result);
        navigate("/profile");
    }));
    promise.catch(err => {
        console.log(err);
        navigate("/");
    })
    // navigate("home");
    //Có replace : là k lưu lại lịch sử khi back trang
    //Không có replace là lưu lại lịch sử khi back trang
    // history.push('/');
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input className="form-control" id="userName" onChange={handleChange} />
      </div>
      <div className="form-group">
        <p>password</p>
        <input className="form-control" id="passWord" onChange={handleChange} />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}
