import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return <h1>My First App</h1>;
}

const rootElement = document.getElementById('root');

if(!rootElement) {
   console.log('root not found');
} else {
    console.log('root was found');
  const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}