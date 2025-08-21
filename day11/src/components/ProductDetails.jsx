
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const navigate = useNavigate()
  const params = useParams()
  console.log(params);
  
  return (
    <div>
        <h1>{params.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, odio fuga corporis provident omnis unde recusandae hic, repudiandae odit pariatur officia?</p>
        <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default ProductDetails