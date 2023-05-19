import React from 'react';

interface ICardView {
    rank: string;
    suit: string
}

const CardView: React.FC<ICardView> = ({rank, suit}) => {

        const cardClasses = `card rank-${rank} ${suit}`

        return (
            <div className="playingCards faceImages">
            <span className={cardClasses.toLowerCase()}>
                <span className="rank">{rank}</span>
                <span className="suit">
                    {
                        suit === "diams"
                            ? "♦" : "hearts"
                                ? "♥" : "clubs"
                                    ? "♣" : "♠"
                    }
                </span>
            </span>
            </div>
        );
    }
;

export default CardView;