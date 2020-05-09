import React, { Component } from 'react';

class Feeling extends Component {
    handleSubmit = () => {
        console.log('in handleSubmit');
    }



    render() {
        return (
            <div>
                <h2>Feeling.jsx</h2>
                <main id="input">
                    <input type="number" placeholder="1-10"></input>
                    <button onClick={this.handleSubmit}>Next</button>

                </main>
            </div>
        )
    }
}


export default Feeling;