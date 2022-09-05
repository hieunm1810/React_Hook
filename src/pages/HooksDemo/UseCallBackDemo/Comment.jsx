import React, { memo } from "react";

function Comment(props) {
  console.log("comment");
  console.log(props);
  // console.log(props);
  return (
    <div>
      {/* <p>bạn đã thả {props.like}</p> */}
      {props.renderLike()}
      <br />
      <textarea className="w-50 form-control"></textarea> <br />
      <button>Gửi</button>
    </div>
  );
}

export default memo(Comment);
