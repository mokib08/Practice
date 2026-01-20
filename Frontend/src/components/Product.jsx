
import { useNavigate } from 'react-router-dom'

const Product = () => {


    const navigate = useNavigate()

    const NavigateHandler = (name) => {
        navigate(`/product/details/${name}`)
    }


    return (
        <div>
            <h1 className='text-5xl font-thin mb-5'>Product</h1>
            <div className="flex items-center gap-4">
                <div className="mb-10 bg-amber-500 text-black p-10 rounded">
                    <h1 className='text-3xl font-thin mb-3'>Product 1</h1>
                    <button onClick={NavigateHandler} className='bg-white text-black px-4 py-2 rounded outline-0'>See Details</button>
                </div>

                <div className="mb-10 bg-amber-500 text-black p-10 rounded">
                    <h1 className='text-3xl font-thin mb-3'>Product 2</h1>
                    <button onClick={NavigateHandler} className='bg-white text-black px-4 py-2 rounded outline-0'>See Details</button>
                </div>

                <div className="mb-10 bg-amber-500 text-black p-10 rounded">
                    <h1 className='text-3xl font-thin mb-3'>Product 3</h1>
                    <button onClick={NavigateHandler} className='bg-white text-black px-4 py-2 rounded outline-0'>See Details</button>
                </div>

                <div className="mb-10 bg-amber-500 text-black p-10 rounded">
                    <h1 className='text-3xl font-thin mb-3'>Product 4</h1>
                    <button onClick={NavigateHandler} className='bg-white text-black px-4 py-2 rounded outline-0'>See Details</button>
                </div>
            </div>
        </div>
    )
}

export default Product