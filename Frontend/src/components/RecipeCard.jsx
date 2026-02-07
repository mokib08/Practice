import {Link} from 'react-router-dom'

const RecipeCard = (props) => {
    const {id, image, title, chef, desc, } = props.recipe
  return (
    <Link
        to={`/recipe/details/${id}`}
    >
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{chef}</p>
        <small>{desc}</small>
    </Link>
  )
}

export default RecipeCard