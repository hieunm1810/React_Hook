import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function HeaderHome(props) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        React Hook
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/" aria-current="page">
              Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hooks
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/usestate">
                UseStateDemo
              </NavLink>
              <NavLink className="dropdown-item" to="/useeffect">
                UseEffectDemo
              </NavLink>
              <NavLink className="dropdown-item" to="/usecallback">
                UseCallBackDemo
              </NavLink>
              <NavLink className="dropdown-item" to="/usememo">
                UseMemoDemo
              </NavLink>
              <NavLink className="dropdown-item" to="/useref">
                UseRef
              </NavLink>
              <NavLink className="dropdown-item" to="/customhook">
                Custom Hook
              </NavLink>
              <NavLink className="dropdown-item" to="/animation">
                DemoAnimation
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/reduxnumber">
                Demo number
              </NavLink>
              <NavLink className="dropdown-item" to="/reduxfacebookapp">
                DemoFacebookApp
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Router hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/reactform">
                Demo navigate
              </NavLink>
            </div>
          </li>
        </ul>
        <form className="d-flex my-2 my-lg-0" onSubmit={(e) => {
          e.preventDefault();
          const keyword = document.querySelector("#keyword").value;
          navigate(`search?keyword=${keyword}`);
        }}>
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
            id="keyword"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
