import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../../../redux/reducers/numberReducer";

export default function DemoNumber(props) {
  //useSelector là hook của redux có tác dụng giống như mapstatetoprops
  //   const number = useSelector((state) => state.number);
  //hoac co the viet nhu v, ket qua nhu nhau, vi state trong useSelector dai dien cho rootreducer nen minh co the boc tach phan tu
  const { number } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Number: {number}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          //   const action = {
          //     //tự tạo action để dispatch reducer slice
          //     //C1: tự tạo ra action
          //     type: "numberReducer/changeNumber",
          //     payload: number + 1,
          //   };
          //C2: sử dụng cách này sẽ tự tạo action như trên
          const action = changeNumber(number+1);
          dispatch(action);
        }}
      >
        +
      </button>
    </>
  );
}

// const mapStateToProps = (state) => ({
//   number: state.number,
// });

// export default connect(mapStateToProps)(DemoNumber);
