import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);  // For initialization only.
    //console.log("Component is rendered")

    let incCount = () => {
        //Callbacks are used in set state function when the new value is dependent on old value.
        setCount((currCount) => {  
            return currCount+1;
        });
        setCount((currCount) => {
            return currCount+1;
        });
    };

    return (
        <div>
          <h4>Count = {count}</h4>
          <button onClick={incCount}>Increase Count</button>
        </div>
    )
};