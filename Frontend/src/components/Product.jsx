
import { useNavigate } from 'react-router-dom'

const Product = () => {


    const navigate = useNavigate()

    const NavigateHandler = (name) => {
        navigate(`/product/details/${name}`)
    }


  return (
    <div>
        <h1 className="text-5xl font-thin mb-5">Product</h1>
        <div className="mb-10">
            <h1 className="text-3xl font-thin mb-3">Prosuct 1 </h1>
            <button onClick={NavigateHandler} className="bg-white text-black px-4 py-2 rounded">see Details</button>
        </div>
        <div className="mb-10">
            <h1 className="text-3xl font-thin mb-3">Prosuct 2 </h1>
            <button onClick={NavigateHandler} className="bg-white text-black px-4 py-2 rounded">see Details</button>
        </div>
        <div className="mb-10">
            <h1 className="text-3xl font-thin mb-3">Prosuct 3 </h1>
            <button  onClick={NavigateHandler} className="bg-white text-black px-4 py-2 rounded">see Details</button>
        </div>
    </div>
  )
}

export default Product