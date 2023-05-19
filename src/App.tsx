import React from 'react';
import './App.css';
import CardView from "./CardView/CardView";


const App = () => {
    return (
        <div className="App">
             <CardView rank="5" suit="spades"/>
        </div>
    )
};

export default App;
