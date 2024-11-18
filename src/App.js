import './first.css';
import React from 'react';
import CardContextProvider from './context/сardArrayContext';
import Home from './page/Home';

function App() {
    return (
        <CardContextProvider>
            <Home />
        </CardContextProvider>
    );
}

export default App;
