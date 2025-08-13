import Create from "./components/create";
import Read from "./components/read"
import { useState } from "react";
const App = () => {
const [hello, sethello] = useState([
    { name: "sanchit", age: 22 },
    { name: "pooja", age: 24 },
    { name: "pk", age: 21 },
    { name: "priyanka ", age: 79999 },
  ]);

  return (
    <>
    <Create/>
    <Read user = {hello}/>
    </>
  );
};

export default App;
