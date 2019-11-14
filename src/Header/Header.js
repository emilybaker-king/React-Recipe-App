
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { textFieldValue: '' }

        /* binds the value of 'this' in the current context as the 'this; inside of the handleChange function */
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ textFieldValue: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.recipeByNameHandler(this.state.textFieldValue);
        this.setState({ textFieldValue: '' });
    }

    generateLetterButtons() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <button className='alphabet' key={letter} onClick={() => this.props.recipeByLetterHandler(letter)}>
                {letter}
            </button>
        ));
    }

    render() {
        return (
            <div>
                <h1>Recipe Finder</h1>
                <p>Get Recipes By Letter:</p>
                {this.generateLetterButtons()}
                <p>Get Recipes By Keyword:</p>
                <form onSubmit={this.handleSubmit}>
                    <input className='textField' type='text' value={this.state.textFieldValue} onChange={this.handleChange} />
                    <input className='submitButton' type='submit' value='Submit' />
                </form>
                <p>Get Random Recipe:</p>
                <button className='randomButton' onClick={() => this.props.randomRecipeHandler()}>Random</button>
            </div>
        );
    }
}

export default Header;