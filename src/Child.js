import React, { useContext } from 'react';
import counterContext from './CounterContext';

function Child() {
  let counterValue =useContext(counterContext);
  console.log(counterValue)
  return (
    <div >
     <h1>heloo</h1>   
      <h3> Child number {counterValue[0]}</h3>
      <button onClick={()=> {counterValue[1](++counterValue[0])}}>Update no</button>
    </div>
  );
}

export default Child;
