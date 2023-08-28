"use client";
import React, {useState} from 'react';


const page = () => {
  const [count, setCount] = useState(0)
  return <>
    <p>You clicked {count} times.</p>
    <button onClick={() => setCount(count+1)}>Click Me</button>
  </>
}

export default page;