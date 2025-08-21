import { Route, Routes } from "react-router-dom"
import About from '../components/About'
import Home from '../components/Home'
import Service from '../components/Service'
import Product from '../components/Product'
import ProductDetails from "../components/ProductDetails"
import ServiceDetails from "../components/ServiceDetails"

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/product" element = {<Product/>}/>
        <Route path="/product/details/:name" element = {<ProductDetails/>} />
        <Route path="/service" element = {<Service/>}>
            <Route path="/service/details" element = {<ServiceDetails/>} />
        </Route>

        <Route path="/about" element = {<About/>}/>
    </Routes>
  )
}

export default Mainroutes