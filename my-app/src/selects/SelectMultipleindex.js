import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectOptions: []
      };
    }
    
    handleChange = (e) => {
      let target = e.target
          let name = target.name
      //here
      let value = Array.from(target.selectedOptions, option => option.value);
      this.setState({
        [name]: value
      });
    }
    
    render(){
      return (
        <div>
          <select name="selectOptions" multiple={true} onChange={this.handleChange}  value={this.state.selectOptions} >
                  <option value="zen">Zen</option>
                  <option value="ana">Ana</option>
                  <option value="junk">Junk</option>
          </select>
        <div>
          {this.state.selectOptions.join(', ')}
        </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );