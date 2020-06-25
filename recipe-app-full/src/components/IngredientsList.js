// ./src/components/ingredientsList.js

import React from 'react';
import Ingredient from './Ingredient';

const IngredientsList = ({ingredients}) => {
    return (
        <ul className="ingredients">
            {ingredients.map((ingredient, i) => <Ingredient key={i} {...ingredient}/>)}
        </ul>
    );
};

export default IngredientsList;