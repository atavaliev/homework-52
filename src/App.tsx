import React from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";


const App = () => {

    const deck = new CardDeck();
    console.log(deck.getCards(5))


    return (
        <div className="App">
             <CardView rank="5" suit="spades"/>
        </div>
    )
};

export default App;
