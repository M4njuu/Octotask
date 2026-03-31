import { useState } from "react";
import ".././App.css";

function buttonPlus() {
  const [count, setCount] = useState(0);

    async function increment() {
        setCount(count + 1);
    }

    async function decrement() {
        setCount(count - 1);
    }

  return (
    <div>
        <button onClick={(e)=>{
            e.preventDefault();
            increment();
        }
        }>+
        </button>
        {count}
        <button onClick={(e)=>{
            e.preventDefault();
            decrement();
        }
        }>-
        </button>
    </div>
  )
}
  export default buttonPlus;