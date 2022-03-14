import React from 'react';
import ReactDOM from 'react-dom';
import DataSource from './DataSource';
import Comment from './Comment';

// This functions takes a component ...
function withSubscription(WrappedComponent, selectData) {
    // ... and returns another component...
    class GetSocialMedia extends React.Component {
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            }
        } 

        componentDidMount() {
            // ... that takes care of the subscription...
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount(){
            DataSource.removeChangeListener(this.handleChange);
        }

        componentDidUpdate(prevProps){
            console.log('Current props: ', this.props);
            console.log('Previous props: ', prevProps);
        }

        handleChange(){
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent comments={this.state.data} {...this.props} />;
        }
    }

    GetSocialMedia.displayName = `GetSocialMedia(${getDisplayName(WrappedComponent)})`;

    return GetSocialMedia;


}
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function selectData(DataSource, props=null){
    console.log("WithSubscription Comments:", DataSource.getComments());
    return DataSource.getComments();        
}
export default withSubscription(Comment,selectData);