import Card from "./Card";


export default class PokerHand {

    constructor(public cards: Card[]) {

    }

    public getCombination(cards: Card[]): string {

        const ranks = this.cards.map((card) => card.rank);
        const suits = this.cards.map((card) => card.suit);

        if (this.isFlush(suits)) {
            return "FLUSH!!"
        } else if (this.isFourOfAKind(ranks)) {
            return "Fours of a kind"
        } else if (this.isThreeOfAKind(ranks)) {
            return "Three of a kind"
        } else if (this.isTwoPair(ranks)) {
            return "Two Pair"
        } else if (this.isPair(ranks)) {
            return "Pair"
        } else {
            return "There is no any combination"
        }

    }

    private isPair = (ranks: Array<string>): boolean => {
        const rankCounter: { [key: string]: number } = {};
        for (let rank of ranks) {
            rankCounter[rank] = (rankCounter[rank] || 0) + 1;
        }
        return Object.values(rankCounter).some((count) => count === 2);
    }

    private isTwoPair = (ranks: Array<string>): boolean => {

        const rankCounter: { [key: string]: number } = {};
        for (let rank of ranks) {
            rankCounter[rank] = (rankCounter[rank] || 0) + 1;
        }

        const pairs = Object.values(rankCounter).filter((count) => count === 2);
        return pairs.length === 2;
    }

    private isThreeOfAKind = (ranks: Array<string>): boolean => {

        const rankCounter: { [key: string]: number } = {};
        for (let rank of ranks) {
            rankCounter[rank] = (rankCounter[rank] || 0) + 1;
        }
        return Object.values(rankCounter).some((count) => count === 3);
    }

    private isFourOfAKind = (ranks: Array<string>): boolean => {
        return new Set(ranks).size === 2
    }

    private isFlush = (suits: Array<string>): boolean => {
        return new Set(suits).size === 1
    }


}