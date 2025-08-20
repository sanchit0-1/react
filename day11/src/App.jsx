import { Route, Routes } from "react-router-dom"
import About from './components/About'
import Home from './components/Home'
import Service from './components/Service'
import Product from './components/Product'
import Nav from "./components/Nav"

const App = () => {
  return (
    <div className="bg-black h-screen w-screen text-amber-100">
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/product" element = {<Product/>}/>
        <Route path="/service" element = {<Service/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
    </div>
  )
}

export default App                                 