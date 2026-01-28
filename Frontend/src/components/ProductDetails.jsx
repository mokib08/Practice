
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {

    const navigate = useNavigate()

  return (
    <div>
        <h1 className='text-4xl font-thin mb-3'>Product Name</h1>
        <h2 className='text-2xl font-thin mb-5'>Product Details....</h2>
        <button onClick={() => navigate("/product")} className="bg-white text-black p-4 rounded">Go Back</button>
    </div>
  )
}

export default ProductDetails