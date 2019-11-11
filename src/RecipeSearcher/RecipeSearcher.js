
import React, { Component } from 'react';
import axios from 'axios';

class RecipeSearcher extends Component {

    constructor(props) {
        super(props);
        this.state = { recipes: [] }
    }

    componentDidMount() {
        this.getRandomRecipe();
    }

    getRandomRecipe = () => {

        const _this = this;

        axios({
            /* we can configure everything we need to about the http request here */
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        })
        .then(function(response) {
            _this.setState({ recipes: response.data.meals || [] });
        })
        .catch(function(error){
            console.log(error);
        })
    }

    getRecipeByName = (name) => {

        const _this = this;

        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params: {
                s: name
            }
        })
        .then(function(response) {
            _this.setState({ recipes: response.data.meals || [] });
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    /* create a function called getRecipeByLetter that takes in a letter as a parameter. This should carry out the proper Axios call to the database. You will need to pass in the letter as the param f in the call */
    getRecipeByLetter = (letter) => {

        const _this = this;

        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params: {
                f: letter
            }
        })
        .then(function(response) {
            _this.setState({ recipes: response.data.meals || [] });
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {

        this.getRecipeByLetter('B');

        return (
            <div>

            </div>
        );
    }
}

export default RecipeSearcher;