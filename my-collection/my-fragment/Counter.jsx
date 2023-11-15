import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(prevCount => prevCount + 1)
  const dsc = () => setCount(prevCount => prevCount - 1);

  return <>
    <output>{count}</output>
    <button onClick={inc} type="button">+</button>
    <button onClick={dsc} type="button">-</button>
  </>
}
