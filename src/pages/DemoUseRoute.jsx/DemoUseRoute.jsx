import React, { useEffect, useState } from "react";
import useRoute from "../../hooks/useRoute";
import { useCookie } from "react-use";
import useCookieCustom from "../../hooks/useCookie";

export default function DemoUseRoute() {
  const {
    navigate =  1,
    param,
    searchParams: [search, setSearch],
  } = useRoute();
//   const {a=0,b=0,c=0} = null;
//   console.log(a,b,c);
  const [setCookie, getCookie] = useCookieCustom("my-cookie", "");
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    setCookie({value:username});
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login cookie</h3>
      <div className="form-group">
        <p>Nhập vào username</p>
        <input type="text" className="form-control" id="username" />
      </div>
      <div className="form-group mt-2">
        <p>Nhập vào password</p>
        <input type="password" id="password" className="form-control" />
      </div>
      <div className="form-group mt-2">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}
