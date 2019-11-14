
import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This app was created using the free recipe database at <a rel='noopener noreferrer' target='_blank' href='https://www.themealdb.com/api.php'>The Meal</a>.</p>
            </div>
        );
    }
}

export default About;