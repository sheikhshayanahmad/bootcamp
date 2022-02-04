import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import counterContext from './CounterContext';
// import counterReducer from './CounterReducer';

function App() {
  let countState = useState(1);
  // let value = 83;
  return (
    
      <counterContext.Provider value={countState}>
      <div>
      Hello World
      <Parent></Parent>
      {/* <button onClick={()=>{ setNumber(++number) }} >Update Number</button> */}
    </div>
    </counterContext.Provider>
  );
}

export default App;


// let [number, setNumber] = useState(45);
//   return (
//     <div >
//       Hello World
//       <Parent num={number}></Parent>
//       <button onClick={()=>{ setNumber(++number) }} >Update Number</button>
//     </div>