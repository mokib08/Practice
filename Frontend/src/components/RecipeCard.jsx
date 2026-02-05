
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {

    const {id, image, title, desc, chef} = props.recipe

  return (
    <Link
        to={`/recipes/details/${id}`}
        className="duration-150 hover:scale-101 mr-3 mt-15 mb-3 block w-[23vw] rounded overflow-hidden shadow"
    >
        <img className="object-cover w-full h-[20vh]" src={image} alt="" />
        <h1 className="mt-2 font-black px-2">{title}</h1>
        <small className="px-2 text-red-400">{chef}</small>
        <p className="px-2">{desc}... <small className="text-blue-400">more</small></p>
    </Link>
  )
}

export default RecipeCard