import { NavLink } from "react-router-dom"
const Nav = () => {
  return (
    <div className="flex justify-center gap-10 m-5 p-5">
        <NavLink className={(e) =>e.isActive ? "text-pink-400":" " } to="/home" >Home</NavLink>
        <NavLink className={(e) =>e.isActive ? "text-pink-400":" " } to="/product" >Product</NavLink>
        <NavLink className={(e) =>e.isActive ? "text-pink-400":" " } to="/service" >Service</NavLink>
        <NavLink className={(e) =>e.isActive ? "text-pink-400":" " } to="/about" >About</NavLink>
    </div>
  )
}

export default Nav