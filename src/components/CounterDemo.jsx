import React from "react";
import { useCounter } from "../hooks/useCounter";

export default function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center gap-3 mt-8 border-2">
      <h2 className="text-xl font-bold text-white">Counter Demo</h2>
      <p className="text-2xl text-white">Count: {count}</p>
      <div className="flex gap-3">
        <button onClick={increment} className="px-3 py-1 rounded ">
          +
        </button>
        
        <button onClick={decrement} className="bg-gray-50 px-3 py-1 rounded ">
          -
        </button>
        
        <button onClick={reset} className="bg-gray-50 px-3 py-1 rounded ">
          Reset
        </button>
        
      </div>
    </div>
  );
}
