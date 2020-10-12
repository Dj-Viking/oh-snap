import React, { useState } from "react";


function SomeComponent() {
  //useState() always returns an array and we are destructuring that array
  // and setting variable names of the returned values in that array
  // first item is value of the initial state
  // second item is a setter function which allows 
  // to set the state of something else.
  const [red, setRed] = useState(0);//updating the virtual DOM with useState hook
  const [green, setGreen] = useState(0);
  let updatedRed = red;
  let updatedGreen = green;
  //console.log(useState(0));
  function startSequence(event) {
    updatedRed = 10;
    updatedGreen = 10;
    setRed(updatedRed);
    setGreen(updatedGreen);
    event.persist();
    console.log(event.type);


  }
  function reset(event) {//detach onMouseOver event listener?
    event.persist();
    console.log(event.type);
    updatedRed = 0;
    setRed(updatedRed);
    updatedGreen = 0;
    setGreen(updatedGreen);
  }

  const buttonStyleRed = {
    backgroundColor: `rgba(${red}, 0, 150, 1)`
  }
  const buttonStyleGreen = {
    backgroundColor: `rgba(0, ${green}, 150, 1)`
  }

  return (
    <div id="seq-btn"
      onMouseLeave = {startSequence}
      onClick={reset}
    >
      {red}
      <button 
        style={buttonStyleRed}
        // onMouseOver={startSequence}
      > Click me
      </button>
      {green}
      <button 
        style={buttonStyleGreen}
      > Click me
      </button>
    </div>
  )
}

export default SomeComponent; 