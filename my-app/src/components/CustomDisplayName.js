import React from 'react';
import ReactDOM from 'react-dom';

function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        constructor(props){
            super(props);

            console.log(props);
            this.state = {
                count: '0',
                isFocus:true
            }; 


            this.handleClickListen = () => {
                console.log("Button Clicked");
                //alert(this.state.count);
                let cnt = parseInt(this.state.count);
                this.setState({count: (cnt + 1).toString()});
                this.setState(currentState => ({
                    isFocus: !currentState.isFocus
                }));

                // Explicitly focus the button using the raw DOM API
                // Note:  we're accessing "current" to get the DOM node
                this.state.isFocus ? this.props.forwardedRef.current.focus() : this.props.forwardedRef.current.blur();
            }; 

        }

        componentDidUpdate(prevProps){
            
            //document.getElementById("myAnchor").focus();
            console.log('LogProps old props:', prevProps);
            console.log('LogProps new props:', this.props); 
        }


        render() {
            const {forwardedRef, ...rest} = this.props;
            return  <WrappedComponent          
                        counter={this.state.count}
                        forwardedRef={forwardedRef}
                        {...rest}
                        handleClick={this.handleClickListen}
                        />
        }

    }

    function forwardRef(props, ref){
        return <LogProps {...props} forwardedRef={ref} />;
    }

    // Give this component a more helpful display name in DevTools.
    // e.g. "ForwardRef(logProps(MyComponent))"
    const name = WrappedComponent.displayName || WrappedComponent.name;
    console.log(name);
    forwardRef.displayName = `logProps(${name})`;

    return React.forwardRef(forwardRef);
}


class FancyButton extends React.Component {
    constructor(props) {
        super(props);

        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);

        
          this.myBlur = () => {
            this.props.forwardedRef.current.style.background = "white";
             
            this.props.forwardedRef.current.textContent = "Now On Blur";
          };

    }

    onFocusHandler() {
        this.props.forwardedRef.current.style.background = "yellow";           
        
        this.props.forwardedRef.current.textContent = "Now On Focus";
      }

      onBlurHandler(){
        this.props.forwardedRef.current.style.background = "white";
         
        this.props.forwardedRef.current.textContent = "Now On Blur";
      }

    componentDidUpdate(prevProps){
        console.log('Wrapped old props:', prevProps);
        console.log('Wrapped new props:', this.props); 
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
                    <p>Counter: { this.props.counter }</p>
                    <button
                        id="textholder"
                        ref={this.props.forwardedRef}
                        onFocus={this.onFocusHandler}
                        onBlur={this.onBlurHandler}>Test Focus</button>
                </div>
                
            );
    }
}

export default logProps(FancyButton);