
import React, { Component } from 'react';
import './RecipeList.css';

class RecipeList extends Component {

    getListItems() {
        return this.props.recipes.map((recipe) =>
            <li key={recipe.idMeal}>
                <h1 className='recipeName'>{recipe.strMeal}</h1>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <p className='instructions'>{recipe.strInstructions}</p>
                <ul className='list'>
                    {this.getIngredientList(recipe)}
                </ul>
            </li>
        );
    }

    getIngredientList(recipe) {
        let output = [];

        for (var i = 1; i <= 20; i ++) {
            const ingredientIdentifier = 'strIngredient' + i;
            const amountIdentifier = 'strMeasure' + i;
            if (recipe[ingredientIdentifier] !== '' && recipe[ingredientIdentifier] !== null) {
                output.push(<li key={i}>{recipe[ingredientIdentifier]}: {recipe[amountIdentifier]}</li>);
            }
        }

        return output;
    }

    render() {
        if (this.props.recipes.length > 0) {
            return (
                <ul className='list'>{this.getListItems()}</ul>
            );
        } else {
            return (
                <h1>No recipes were found. Please try a different letter or keyword.</h1>
            );
        }
    }
}

export default RecipeList;