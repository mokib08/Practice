import {Link} from 'react-router-dom'

const RecipeCard = (props) => {

    const {id, image, title, chef, desc } = props.recipe

  return (
        <Link
            to={`/recipes/details/${id}`}
        >
            <img src={image} alt="" />
            <h1>{title}</h1>
            <small>{chef}</small>
            <p>{desc.slice(0, 100)}...<small>more</small></p>
        </Link>
  )
}

export default RecipeCard