import React from 'react';
import recipes from './data/recipes.json'
import Recipe from "./components/Recipe";

function App() {
    return (
        <article>
            <header>
                <h1>Delicious Recipes</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (<Recipe key={i} {...recipe}/>))}
            </div>
        </article>
    );
}

export default App;
