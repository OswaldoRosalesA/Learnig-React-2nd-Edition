import React, {useState} from "react";
import recipesData from "../data/recipes.json";
import Recipe from "./Recipe";

const Menu = () => {
    const [recipes, setRecipes] = useState(recipesData);
    const onRateRecipe = (name, rating) => setRecipes(recipes.map(recipe => recipe.name === name ? {...recipe, rating} : recipe));
    return (
        <article>
            <header>
                <h1>Delicious Recipes</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (<Recipe key={i} {...recipe} onRate={onRateRecipe}/>))}
            </div>
        </article>
    );
};

export default Menu;