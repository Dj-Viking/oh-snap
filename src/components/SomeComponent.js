import React, { useState } from "react"
//import Observable from '../utils/Observable.js';


function SomeComponent() {
  //useState() always returns an array and we are destructuring that array
  // and setting variable names of the returned values in that array
  // first item is value of the initial state
  // second item is a setter function which allows 
  // to set the state of something else.
  const [red, setRed] = useState(0);//updating the virtual DOM with useState hook
  const [green, setGreen] = useState(0);
  //console.log(useState(0));
  async function startStopwatch(event) {
    event.persist();
    console.log(event.view)
    console.log(event.type);
    console.log(event.cancelable);
    let updatedRed = red;
    let updatedGreen = green;
    const redUp = async (period) => {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          updatedRed += 1;
          updatedGreen += 1;
          setRed(updatedRed);
          setGreen(updatedGreen);
          if(updatedRed === 255 && updatedGreen === 255) {
            clearInterval(interval);
            resolve(updatedRed);
          }
        }, period);
      });
    };

    async function alternate(...args){
      console.log(args);
      console.log(event.type);
      if (event.type === 'click') {
      }
      let redMin = 0;
      let redMax = 0;
      redMax = await redUp(1);
      console.log(redMax);
      if (redMax === 255) {
        redMin = await redDown(1);
        console.log(redMin);
      }
      alternate(event);
    }
    alternate(event);

    function redDown(period){
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          updatedRed -= 1;
          updatedGreen -= 1;
          setRed(updatedRed);
          setGreen(updatedGreen);
          if(updatedRed === 0 && updatedGreen === 0) {
            clearInterval(interval);
            resolve(updatedRed);
          }
        }, period);
      });
    }
  }
  

  return (
    <div onClick={startStopwatch}>
      {/* {red} */}
      <button 
        style={{backgroundColor: `rgba(${red}, 0, 150, 1`}}
        // onMouseOver={startStopwatch}
      > Click me
      </button>
      {/* {green} */}
      <button 
        style={{backgroundColor: `rgba(0, ${green}, 150, 1`}}
      > Click me
      </button>
    </div>
  )
}

export default SomeComponent; 