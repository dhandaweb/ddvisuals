import React from 'react';
import './index.css';

const clickHandle = () =>{
console.log("click handle is working");
}

function ButtonPage() {
  return (
    <div>
     <button onClick={clickHandle}>My first Button</button>
    </div>
  );
}

export default ButtonPage;