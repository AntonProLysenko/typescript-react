import './App.css';

import Greeting from './components/Greeting';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';

function App() {

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
      <Greeting name={'Anton'} messageCounter={99} />{/**Regular props */}
      <Person name={personName}/>{/**Object Props */}
      <PersonList names={nameList}/>{/**Array Props */}
      <Status status = {"loading"}/>{/**Predeclared custom types */}
      <Oscar>{/**Children React component props */}
         <Heading>Oscar Goes To Dicaprio!</Heading>{/**Regular Children Props */}
      </Oscar>

      {/**Here in argument props we can define a specific Element as <HTMLButtonElement> */}
      <Button handleClick={(evt,id)=>console.log(evt.target,id)}/>{/**Event as props */}
      <Input value="" handleChange={(evt)=>console.log(evt)}/>
      
    </div>
  );
}

export default App;
