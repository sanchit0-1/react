import { useNavigate, useParams } from "react-router-dom"

const Product = () => {
  
  
  const navigate = useNavigate();
  const detailHandler =(name) =>{
    navigate(`/product/details/${name}`)
  }
  return (
    <>
    <div>
      <h1></h1>
      <h4>Product Details...</h4>
      <button onClick={() => detailHandler("Product1")} className="border rounded-2xl p-1 hover:bg-amber-400"> details</button>
    </div>
    <div>
      
      <h4>Product Details...</h4>
      <button onClick={() => detailHandler("Product2")} className="border rounded-2xl p-1 hover:bg-amber-400"> details</button>
    </div>
    <div>
      <h4>Product Details...</h4>
      <button onClick={() => detailHandler("Product3")} className="border rounded-2xl p-1 hover:bg-amber-400"> details</button>
    </div>
    </>
  )
}

export default Product