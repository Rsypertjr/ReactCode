import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery'

import $ from 'jquery'
import "chosen-js/chosen.css";
import "chosen-js/chosen.jquery.js";

class Chosen extends React.Component {
    componentDidMount(){
        this.$el = $(this.el);
        this.$el.chosen();
    }

    componentWillUnmount(){
        this.$el.chosen('destroy');
    }

    render(){
        return (
          <div>
              <select className="Chosen-select" ref={el => this.el = el}>
                  {this.props.children}
              </select>
          </div>  
        );
    }
}