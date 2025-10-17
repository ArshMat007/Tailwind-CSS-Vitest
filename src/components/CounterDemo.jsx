import React from "react";
import { useCounter } from "../hooks/useCounter";

export default function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-3xl border border-gray-100 flex flex-col items-center gap-6 font-sans">
      <h2 className="text-xl font-bold text-black">Counter Demo</h2>
      <p className="text-2xl text-black">Count: {count}</p>
      <div className=" flex gap-8">
        <button onClick={increment} className="px-4 py-1 rounded ">
          +
        </button>
        
        <button onClick={decrement} className="bg-gray-50 px-4 py-1 rounded ">
          -
        </button>
        
        <button onClick={reset} className="bg-gray-50 px-4 py-1 rounded ">
          Reset
        </button>
        
      </div>
    </div>
  );
}
