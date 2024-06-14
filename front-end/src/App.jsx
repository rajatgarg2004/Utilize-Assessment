import React from 'react';
import './App.css';
import Home from './Component/Home';
const App = () => {
  
  return (
      <div className='flex flex-col w-[100vw] items-center justify-center'>
        <Home iconHeight={"50px"} iconWidth={"100px"} rowsInOnePage={"10"} columnsInOnePage={"5"} />
      </div>
  );
};

export default App;
