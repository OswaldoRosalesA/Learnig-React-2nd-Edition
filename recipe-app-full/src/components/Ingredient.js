// ./src/components/Ingredient.js

import React from 'react';

const Ingredient = ({amount, measure, name}) => {
    return <li>{amount} {measure} {name}</li>
};

export default Ingredient;
