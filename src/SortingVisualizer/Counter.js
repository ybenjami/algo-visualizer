import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(40);

    const handleIncrement = () => {
        setCount(count +5);
    };

    const handleDecrement = () => {
        setCount(count -5);
    };
   

    return(
        <div>
         <p>Array index is {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
export default Counter;