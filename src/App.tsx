import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand";


const App = () => {

    //Initial State
    const [cards, setCards] = useState<CardDeck>(new CardDeck());//New deck of Cards
    const [handCards, setHandCards] = useState<Card[]>([]); //Current 5 cards in the hand

    //Get Cards default value is 5
    const getCardsToHand = (howmany: number = 5) => {
        setHandCards(cards.getCards(howmany))
    }

    //Reset Cards and Deck to default values
    const setNewCards = () => {
        setHandCards([]);
        setCards(new CardDeck());
    }

    //Define Combination if it exists
    const currentCombination =  new PokerHand(handCards);

    return (
        <div className="App">
            <>
                {
                    //Check is there any Cards on the Table
                    handCards.length < 1
                        ? <>
                            <p>There is no Cards</p>
                            <button onClick={() => getCardsToHand()}>Get Cards</button>
                        </>
                        //Check if there are less 5 cards so get only available quantity of cards
                        : cards.deck.length < 5
                            ? <>
                                <div className="handCards">
                                    {
                                        handCards.map(c => {
                                            return <CardView key={c.rank + c.suit} rank={c.rank} suit={c.suit}/>
                                        })
                                    }
                                </div>

                                {/* If there are fewer cards than 0 in the deck - hide adding button */}
                                {cards.deck.length > 0 && <button onClick={() => getCardsToHand(cards.deck.length)}>Show
                                    Last {cards.deck.length} Cards
                                </button>}

                                {/* If there are no more cads, You can play another game from scratch */}
                                {cards.deck.length <= 0 && <>
                                    <p>There is no Cards in Desk</p>
                                    <button onClick={() => setNewCards()}>New Game</button>
                                </>
                                }
                            </>
                            //Show new 5 cards from the deck every time when you click button
                            : <>
                                <div className="handCards">
                                    {
                                        handCards.map(c => {
                                            return <CardView key={c.rank + c.suit} rank={c.rank} suit={c.suit}/>
                                        })
                                    }
                                </div>
                                <button onClick={() => getCardsToHand()}>Get Another 5 Cards</button>

                                <p>{currentCombination.getCombination(handCards)}</p>
                            </>
                }
            </>
        </div>
    )
};

export default App;
