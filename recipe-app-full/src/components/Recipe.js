// ./src/components/Recipe.js

import React from 'react';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';
import StarRating from "./StarRating";

const Recipe = ({name, ingredients, steps, rating, onRate = f => f}) => {
    return (
        <section id={name.toLowerCase().replace(/ /g, '-')}>
            <h1>name</h1>
            <IngredientsList ingredients={ingredients}/>
            <Instructions title='Cooking Instructions' steps={steps}/>
            <StarRating selectedStars={rating} onRate={rating => onRate(name, rating)}/>
        </section>
    );
};

export default Recipe;
