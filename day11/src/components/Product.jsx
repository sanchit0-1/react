import { useNavigate } from "react-router-dom"

const Product = () => {
  const navigate = useNavigate();
  const detailHandler =() =>{
      navigate("/product/details")
  }
  return (
    <div>
      <h1>Products</h1>
      <h4>Product Details...</h4>
      <button onClick={detailHandler} className="border rounded-2xl p-1 hover:bg-amber-400"> details</button>

    </div>
  )
}

export default Product