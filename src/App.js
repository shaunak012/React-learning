//Components
import Headers from "./MyComponents/Headers";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

//CSS
import './App.css';

//hooks
import React, { useState } from 'react';


// if (True) {
//   user.imageSize= 90,
// }
// else{
//   user.imageSize= 180
// }

function App() {
  const onDelete=(todo)=>{
    console.log(todo," DELETED IN 3 2 ... 1 !!!!")
    setTodo(todos.filter((e)=>{
      return e!==todo
    }))
  }
  const [todos, setTodo] = useState([
    {
      sno:1,
      tittle:"Go to the market and get fish",
      desc:"My mother has asked me to get salmon from market"
    },{
      sno:2,
      tittle:"Go to the market and get milk",
      desc:"My mother has asked me to get goat milk from market"
    },{
      sno:3,
      tittle:"Go to the market and get ice cream",
      desc:"My mother has asked me to get amul ice cream from market"
    },
  ])
  return (
    <>
      <Headers tittle="Hi Mummy!!"/>
      <Todos todo={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
