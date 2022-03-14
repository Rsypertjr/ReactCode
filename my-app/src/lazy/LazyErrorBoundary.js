import React, { Suspense } from 'react';
import MyErrorBoundary from './ErrorBoundary';
import ReactDOM from 'react-dom';

const FlavorForm = React.lazy(() => import('./SelectFormComponent'));
const App = React.lazy(() => import('./SelectMultipleComponent'));

const MyComponent = () => (
        <div>
            <MyErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <section>
                        <FlavorForm />
                        <App />
                    </section>
                </Suspense>
            </MyErrorBoundary>           
        </div>
);
ReactDOM.render(
    <MyComponent />,
    document.getElementById('root')
);