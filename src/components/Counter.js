import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dataByVbl = useSelector((state) => state.counter.vbl);

  const incHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };
  const decHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggle());
  };
  // const incrementBy5 = () => {
  //   dispatch(counterActions.incrementBy5(5)); //{type: SOME_UNIQ_IDENTIFIER, pyload:5}
  // };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        console.log(resp.data);
        dispatch(counterActions.api({ payload: resp.data }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(dataByVbl, "---------------");

  return (
    <>
      <h2>Functional Base Component</h2>
      {show && <h4 className="stu">{counter}</h4>}
      <div>
        <button className="btn btn-primary" onClick={incHandler}>
          Increment
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => dispatch(counterActions.incrementBy5(5))}
        >
          Increment by 5
        </button>{" "}
        <button onClick={decHandler} className="btn btn-primary">
          Decrement
        </button>
      </div>
      <hr />
      <button className="btn btn-primary" onClick={toggleCounterHandler}>
        Toggle Counter
      </button>

      {dataByVbl?.payload?.map((val) => (
        <ul>
          <li key={val.id}>{val.title}</li>
        </ul>
      ))}
    </>
  );
};
export default Counter;
