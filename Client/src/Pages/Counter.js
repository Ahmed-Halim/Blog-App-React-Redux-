import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "./counterSlice";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const [inputValue, seInputValue] = useState();
  const dispatch = useDispatch();
  return (
    <>
      <div>Counter: {counter.value}</div>
      <input
        value={inputValue}
        onChange={(e) => seInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(increament(inputValue))}>+</button>
      <button onClick={() => dispatch(decreament(inputValue))}>-</button>
    </>
  );
}
