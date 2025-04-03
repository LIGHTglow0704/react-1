import { useState } from 'react';

import MyB from "./MyButton"
import { Button1, Button2, Button3 } from "./ButtonLib"
import AP from "./AboutPage"
import Profile from "./profile"
import Splist from './Shoppinglist'
import Count from './CountState'

import './App.css'


function CountState2({count, onClick}) {
  return (
    <div>
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
    );
  }




export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="wrapper">
      <h1>Welcome to my app</h1>
      <div>
      <p>default export example</p>
      <MyB />
      <p>named export example</p>
      <Button1 /><br />
      <Button2 />&nbsp;
      <Button3 />
      <p>wrapping example</p>
      <AP />
      <p>Displaying data</p>
      <Profile />
      <p>Rendering lists</p>
      <Splist />
      </div>

      <div>
        <h1>Updating the screen</h1>
      <Count />
      <Count />
      <Count />
      

      
        <p>Sharing data between components</p>
        <CountState2 count={count} onClick={handleClick} />
        <CountState2 count={count} onClick={handleClick} />
      </div>
</div>
    
  ) 
}