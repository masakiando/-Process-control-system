import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";
import rootReducer from "../../rootReducer";
import { incrementCounter, decrementCounter, resetCounter } from "./counterSlice";

type RootState = ReturnType<typeof rootReducer>;

const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const { theCounter } = useSelector( ( state: RootState ) => state.counter );

    return (
        <div className="Counter">
            the counter:
            {" "}
            {theCounter}
            <button onClick={ () => dispatch( incrementCounter() ) }>Increment</button>
            <button onClick={ () => dispatch( decrementCounter() ) }>Decrement</button>
            <button onClick={ () => dispatch( resetCounter() ) }>Reset</button>
        </div>
    );
};

export default Counter;
