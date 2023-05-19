import Card from "./Card";


export default class PokerHand {


    constructor(public cards: Card[]) {

    }


    public getOutcome(cards: Card[]): string {
        const pokerHand: { [key: string]: number } = {}

        for (let card of cards) {
            const keyValue = card.rank;

            if (pokerHand[keyValue]) {
                pokerHand[keyValue]++;
            } else {
                pokerHand[keyValue] = 1;
            }
        }

        console.log(pokerHand)
        return ""
    }

}