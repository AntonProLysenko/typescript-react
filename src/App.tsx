import { useState } from "react"
import './App.css';

import Greeting from './components/Greeting';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import LogIn from "./components/state/LogIn";

import { Name } from "./components/Types/Person-types";





function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false)

  const[user,setUser] = useState<Name | null>(null)//in case if the value changes type we are declaring in <> all possiple types

  const personName ={
    first:"John",
    last:"Waine"
  };

  const nameList = [
    {
      first:"Freddie",
      last:"Mercury"
    },
    {
      first:"Jim",
      last:"Boy"
    },
    {
      first:"Lady",
      last:"Gaga"
    }
  ]


  return (
    <div className="App">
      <Greeting name={user} messageCounter={99} isLoggedIn={isLoggedIn} />{/**Regular props */}
      <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>{/**State Props */}

      <Person name={personName}/>{/**Object Props */}
      <PersonList names={nameList}/>{/**Array Props */}
      <Status status = {"loading"}/>{/**Predeclared custom types */}
      <Oscar>{/**Children React component props */}
         <Heading>Oscar Goes To Dicaprio!</Heading>{/**Regular Children Props */}
      </Oscar>

      {/**Here in argument props we can define a specific Element as <HTMLButtonElement> */}
      <Button handleClick={(evt,id)=>console.log(evt.target,id)}/>{/**Event as props */}
      <Input value="" handleChange={(evt)=>console.log(evt)}/>


      <Container styles={{border:"1px solid red", padding:"1rem"}}/>
      
    </div>
  );
}

export default App;
