import React from 'react';
import ReactDOM from 'react-dom';

class Reservation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }); 
        //alert(this.state[name]);
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />                  
                </label>
                <h1> { this.state.numberOfGuests }</h1>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputchange} />
                </label>
            </form>
        );
    }
   
}
ReactDOM.render(
  <Reservation />,
  document.getElementById('root')  
);

/*
//Locked input that opens after short delay because value attribute assigned non-null locks input

    ReactDOM.render(<input value="hi" />, mountNode);

    setTimeout(function() {
    ReactDOM.render(<input value={null} />, mountNode);
    }, 1000);

*/