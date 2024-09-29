import React from 'react';
import './index.css'; // Asegúrate de que este archivo esté importado
import LinkShortener from './LinkShortener';
import Header from './Header';

function App() {
    return (
        <div className="App w-full">
            <LinkShortener />
            <Header />
        </div>
    );
}

export default App;