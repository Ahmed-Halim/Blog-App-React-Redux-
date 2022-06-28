import React, { useReducer } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + 1,
        lastAction: "increment",
      };
    case "decrement":
      return {
        ...state,
        value: state.value - 1,
        lastAction: "decrement",
      };
    case "incrementValue":
      return {
        ...state,
        value: state.value + parseInt(action.payload),
        lastAction: "incrementValue",
      };
    case "decrementValue":
      return {
        ...state,
        value: state.value - parseInt(action.payload),
        lastAction: "decrementValue",
      };
    case "inputChange":
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      break;
  }
}

function ReducerPractise() {
  const [count, dispatch] = useReducer(countReducer, {
    value: 0,
    lastAction: "none",
  });
  return (
    <>
      <input
        onChange={(e) =>
          dispatch({ type: "inputChange", payload: e.target.value })
        }
        value={count.inputValue}
      />
      <button
        onClick={() =>
          dispatch({ type: "incrementValue", payload: count.inputValue })
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({ type: "decrementValue", payload: count.inputValue })
        }
      >
        -
      </button>
      <hr />
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <h1>{count.value}</h1>
      <p>Last Action : {count.lastAction}</p>
    </>
  );
}

export default ReducerPractise;
