import { Outlet, useNavigate } from "react-router-dom"

const Service = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>service</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <button onClick={()=> navigate("/service/details")} className="border rounded-2xl bg-amber-500">details</button>
      <hr />
      <Outlet/>
    </div>
  )
}

export default Service