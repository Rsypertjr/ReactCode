import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';


const FlavorForm = React.lazy(() => import('./SelectFormComponent.js'))

function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <FlavorForm />
            </Suspense>
        </div>
    );
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('root')
);
