import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../hooks/useCounter";
import {describe, it, expect} from "vitest";


describe("useCounter custom hook", () => {

    
  it("should initialize with default value", () => {  //mounting hook in a fake component and checking what it returns
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });
  
  
  it("should increment and decrement correctly", () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => result.current.increment());
    expect(result.current.count).toBe(6);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(5);
  });
   
  it("should reset to initial value", () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => result.current.increment());
    act(() => result.current.increment());
    expect(result.current.count).toBe(12);

    act(() => result.current.reset());
    expect(result.current.count).toBe(10);
  });
});
