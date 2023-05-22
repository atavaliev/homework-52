import Card from "./Card";

export default class CardDeck {

    private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits = ['diams', 'hearts', 'clubs', 'spades'];
    public deck: Card[] = [];

    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.deck.push(card)
            })
        })
    }

    getCard(): Card {
        const index: number = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(index, 1)[0];
    }

    getCards(howmany: number): Card[] {

        const cards:Card[] = [];

        for (let i = 0; i < howmany; i++) {
            cards.push(this.getCard());
        }

        return cards;
    }

}