import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { error: null };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        try {
            // Simulate a JS error
            throw new Error('I crashed!');
        } catch (error) {
            this.setState( { error });
        }
    } 

    render() {
        if (this.state.error) {
            return <h1>Caught an error.</h1>
        }
        return <button onClick={this.handleClick}>Click Me</button>
    }
}


export default App;
