import React from 'react';

function Recipe(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Calories: {Math.ceil(props.calories)}</p>
            <img src={props.image} alt="" />
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;