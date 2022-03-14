import React from 'react';
import ReactDOM from 'react-dom';

function App(WrappedComponent) {
    class LogProps extends React.Component {
        constructor(props){
            super(props);

            this.test = React.createRef;

            console.log(props);
            this.state = {
                count: '0',
            }; 

            this.handleClickListen = () => {
                console.log("Button Clicked");
                //alert(this.state.count);
                let cnt = parseInt(this.state.count);
                this.setState({count: (cnt + 1).toString()});
            }; 

        }

        componentDidUpdate(prevProps){
            console.log('LogProps old props:', prevProps);
            console.log('LogProps new props:', this.props); 
        }


        render() {
            const {forwardedRef, ...rest} = this.props;
            return  <WrappedComponent          
                        counter={this.state.count}
                        ref={this.test}
                        seeref={this.test}
                        {...rest}
                        handleClick={this.handleClickListen}
                        />
        }
    }

    // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef" 
   // return React.forwardRef((props, ref) => {
   //     return <LogProps {...props} forwardedRef={ref} />;
   // });

   return LogProps;
}

class FancyButton extends React.Component {
    constructor(props) {
        super(props);
        // Create a ref to store the button DOM element
        //this.fancyButton = React.createRef();
     

    }

    componentDidUpdate(prevProps){
        console.log('Wrapped old props:', prevProps);
        console.log('Wrapped new props:', this.props); 
    }

    focus(){
        // Explicitly focus the button using the raw DOM API
        // Note:  we're accessing "current" to get the DOM node
       // this.fancyButton.current.focus();
    }

   

    render() {
        // Use the `ref` callback to store a reference to the button DOM
        // element in an instance field (for example, this.textInput).
            return (
                <div>
                    <button 
                        type="button" 
                        onClick={this.props.handleClick}
                        >{ this.props.label }
                    </button>
                    <p>{ this.props.counter }</p>
                </div>
                
            );
    }
}

export default App(FancyButton);