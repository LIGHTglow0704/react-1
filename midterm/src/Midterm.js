import { useState } from 'react';

export default function CountState() {
  const [fruit, setfruit] = useState();

  function handleClick() {
    const fruit = "사과";
    setfruit(fruit);
  }

  function handleClick1() {
    const fruit = "오렌지";
    setfruit(fruit);
  }

  function handleClick2() {
    const fruit = "바나나";
    setfruit(fruit);
  }

  return (
    <div>
      <h1>당신은 어떤 과일을 좋아하나요? {fruit}</h1>
      <button onClick={handleClick}>사과</button>
      <button onClick={handleClick1}>오렌지</button>
      <button onClick={handleClick2}>바나나</button>
    </div> 
  );
}