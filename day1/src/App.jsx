import { Fragment } from "react";

const App = () => {
  // here we will be writting our js part
  let handler = ()=>{
    alert('button clicked')
  }
  // here is the example of argument passing
  let qoute = (argument)=> {// this is parametrised function
    alert(argument)
  }
  // here we will make wrrapper function which will be non parametrised 
  let warraper = () =>{ // this is non parametrised function
    qoute('raat ho gayi hai!')
  }     

  return (
    // in return we will be writting our html and eventlistner and in above see
    // note {} in this bracketes we will write js which jsx make it run immediately
    <>
    <h1>
      {3+1}
    </h1>
    <button onClick={handler}>click</button>
    {/* suppose if we are making a non paramaterised function or if we are passing any argument then { } it will call the function automatically then for that situation we will make a wrraper function and pass that fnc reference */}
    <button onClick={warraper}>tap!</button>
    {/* here is another method of doing in place of tap button here on need to make another non-parametrized func we will pass parameter using a fat arrow func*/}
    <button onClick={()=> {qoute('another method')}}>2nd method </button> 
    </>
  );
};

export default App;
export const x = "hello ";
export const y = "sanchit ";
