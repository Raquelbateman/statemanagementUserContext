import { useState } from "react";


const Counter = () => {


const [count, setCount] = useState<number>(0);


const increment = () => {
  setCount(count + 1);
};

const decrement = () => {
  setCount(count - 1);
};


const reset = () => {
  setCount(0);
};


  return (
    <div>

    <h1 className="text-center">My Counter Component</h1>

 <div>
      <h1>Counter: {count}</h1>
      <button className="btn btn-primary mx-3" onClick={increment}>Increment</button>
      <button className="btn btn-primary mx-3" onClick={decrement}>Decrement</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div>
    
    </div>
  )
}

export default Counter