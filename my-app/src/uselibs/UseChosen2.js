import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import ReactDOM from 'react-dom';

import $ from 'jquery'
import "chosen-js/chosen.css";
import "chosen-js/chosen.jquery.js";

class Chosen extends React.Component {


    componentDidMount() {
      this.$el = $(this.el);
      this.$el.chosen();
  
      this.handleChange = this.handleChange.bind(this);
      this.$el.on('change', this.handleChange);
    }
  
    componentWillUnmount() {
      this.$el.off('change', this.handleChange);
      this.$el.chosen('destroy');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            this.$el.trigger("chosen:updated");
        }
    }
  
    handleChange(e) {
      this.props.onChange(e.target.value);
    }
  
    render() {
      return (
        <div>
          <select className="Chosen-select" style={{width: "200px"}} ref={el => this.el = el}>
            {this.props.children}
          </select>
        </div>
      );
    }
  }
  
  function Example() {
    return (
      <Chosen className="chosen-container chosen-container-single" onChange={value => console.log(value)}>
        <option>vanilla</option>
        <option>chocolate</option>
        <option>strawberry</option>
      </Chosen>
    );
  }
  
  
  class App2 extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <Example/>
          </p>
        </div>
      );
    }
  }
  
  export default App2;