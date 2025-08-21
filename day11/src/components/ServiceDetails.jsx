import { useNavigate } from "react-router-dom"

const ServiceDetails = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>service dtails</h1>
        <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default ServiceDetails