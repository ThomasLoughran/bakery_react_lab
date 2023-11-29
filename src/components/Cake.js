const Cake = ({name, ingredients, rating, price}) => {

    const IngredientsList = ingredients.map((ingredient) => <li>{ingredient}</li>);

    return (
        <>
            <div>Name: {name}</div>
            <ul>{IngredientsList}</ul>
            <div>Rating: {rating}</div>
            <div>£{price}</div>
        </>
    )

}

export default Cake;