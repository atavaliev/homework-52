import React from 'react';

interface ICardView {
    rank: string;
    suit: string
}

const CardView: React.FC<ICardView> = ({rank, suit}) => {

        const cardClasses = `card rank-${rank} ${suit}`

        const getSuitIcon = (suit:string):string => {
            switch (suit) {
                case "diams":
                    return "♦";
                case 'hearts':
                    return "♥";
                case "clubs":
                    return "♣";
                default:
                    return "♠";

            }
        };

        const suitIcon = getSuitIcon(suit)

        return (
            <div className="playingCards faceImages">
            <span className={cardClasses.toLowerCase()}>
                <span className="rank">{rank}</span>
                <span className="suit">
                    {suitIcon}
                </span>
            </span>
            </div>
        );
    }
;

export default CardView;