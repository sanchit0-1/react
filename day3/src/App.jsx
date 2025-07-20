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
// now here we will learn how to access arrays which has object in json format using map function 
let array =[
  {
    name:"sanchit",
    age:20,
    id: 1
  },
  {
    name:"anchit",
    age: 22,
    id: 2
  },
  {
    name:"anish",
    age:12,
    id:3
  }
]
let data = array.map((values, index) =>{
  return <h1 key={index}>{values.name} | {values.age}</h1> // here we had given key values which should be unique so that react can understand it well and able to make changes. otherwise it will through an array.
})

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

    {/* we are rendering data  */}
    <div>
      <ol>
        {data} /** here map func returns array now returned array is now in simpler form so it can render easily */
      </ol>  
    </div>  
  </>
  )
}

export default App

//