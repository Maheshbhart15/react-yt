import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter ,setbyMaheshCounter]=useState(0)
 // let Counter = 4 ;
  
 const [title, setTitle] = useState('My App Dev Mahesh ');

  const addValue = ()=>{
    //counter =counter + 1
    if(counter<20)
    {
    setbyMaheshCounter(counter+1);
    console.log("Clicked ",counter);
    }
  }
 const removeValue = () =>{
  if (counter >0 )
  {
  setbyMaheshCounter(counter-1)
  }
 }
  return (
    <> 
    <h2>App Name Dev {title}</h2>
    <h2>Counter value {counter}</h2>
  
    <button onClick={addValue} >Add value {counter}</button>
    <br/>
    <button onClick={removeValue}>remove value {counter}</button>
    <p><footer>:{counter}</footer></p>
    </>
  )
}

export default App
