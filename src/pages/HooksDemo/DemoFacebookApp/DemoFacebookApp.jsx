import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../redux/reducers/facebookReducer";

export const DemoFacebookApp = (props) => {
  const { arrComment} = useSelector((state) => state.facebookReducer);
  const dispatch = useDispatch();
  const commentObjRef = useRef({ name: "", content: "" });
  const handleInput = (e) => {
    const { id, value } = e.target;
    commentObjRef.current[id] = value;
    console.log(commentObjRef.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //phải clone state vì khi submit lần 2, state trong array vẫn là vùng nhớ của ref, và khi nhập input vào thì sẽ báo lỗi vì cố tình thay đổi state mà ko thông qua action
    const action = addComment({...commentObjRef.current});
    dispatch(action);
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Demo facebook app</h3>
      <div className="card">
        <div className="card-header">
          {arrComment.map((element, index) => {
            return (
              <div className="d-flex" key={index}>
                <div className="avatar" style={{ width: 50 }}>
                  <img
                    src={`https://i.pravatar.cc?u=${element.name}`}
                    alt="avatar"
                    className="w-100"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="content mx-2">
                  <h5 className="text-danger">{element.name}</h5>
                  <p>{element.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-body">
          <div className="form-group">
            <p>Name</p>
            <input
              type="text"
              className="form-control"
              id="name"
              onInput={handleInput}
            />
          </div>
          <div className="form-group">
            <p>content</p>
            <input
              type="text"
              className="form-control"
              id="content"
              onInput={handleInput}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>
        </div>
      </div>
    </form>
  );
};
