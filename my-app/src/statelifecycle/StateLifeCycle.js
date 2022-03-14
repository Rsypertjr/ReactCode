import React from 'react';
import ReactDOM, { render } from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){   // runs after component output has been rendered to the DOM
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)  // teardown the timer
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }   
}

function App(){
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );


}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);