import React from 'react'
import { Fragment } from 'react';
let string = 'sanchit'
let boolean = true;
let arr = ['string ', 3, true, false, null, undefined]
let nulll = null
let undefinedd = undefined;
let arrWithObject = ['string', 3, , null,, ] // note donot make object in array it will not render.
let object = {  // if you are going to view your object to frontend then specify its key show that it can render that key values otherwise it will through an error in console.
  name:"sanchit",
  age:21
}

const App = () => {
  return (
  <>
  <h1>
    hello
  </h1>
  <h3>
    string:{string}
  </h3>
  <h3>
    booolean:{boolean}
  </h3>
  <h3>
    arr: {arr}
  </h3>
  <h3>
    null:{nulll}
  </h3>
    <h3>
      undefined:{undefinedd}
    </h3>
    <h3>
      arrWithObject:{arrWithObject}
    </h3>
    <h1>
      object: {object.name} || {object.age}
    </h1>
    
  </>
  )
}

export default App

//