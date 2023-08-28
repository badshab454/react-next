"use client";
import React, {useState} from 'react';

const page = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count+1)}>click me</button>
    </div>
  )
}

export default page;