
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1 className='text-3xl font-thin mb-3'>Casual Printed T-Shirt</h1>
            <h3 className='text-xl font-thin mb-5 '>Navy round-neck t-shirt with graphic print, half sleeve</h3>

            <button onClick={() => navigate('/product')} className="bg-white text-black p-4 rounded">Go back</button>
        </div>
    )
}

export default ProductDetails