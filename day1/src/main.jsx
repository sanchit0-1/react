
import { createRoot } from 'react-dom/client'
import Abc from './App.jsx'
import {x, y} from "./App.jsx";

console.log(x+y);


createRoot(document.getElementById('root')).render(
    <Abc/>
  
)
