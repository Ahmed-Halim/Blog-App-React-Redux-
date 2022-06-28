import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    default:
      break;
  }
};

function TestMemo() {
  const [count, dispatch] = useReducer(countReducer, 1);
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: "increment", payload: count })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: count })}>
        -
      </button>
    </div>
  );
}

export default TestMemo;
