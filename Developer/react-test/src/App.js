import MyB from "./MyButton"
import { Button1, Button2, Button3 } from "./ButtonLib"
import AP from "./AboutPage"
import Profile from "./profile"
import './App.css'

export default function App() {
  return (
    <div className="wrapper">
      <h1>Hello, React!</h1>
      <MyB />
      <Button1 /><br />
      <Button2 />&nbsp;
      <Button3 />
      <AP />
      <Profile />
    </div>
  ) 
}