import { useState } from 'react'
import './../styles/MemoryCard.css'

import Card from './Card.jsx'

const MemoryCard = () => {
    const [cardsQuantity, setCardsQuantity] = useState(30);
    const [cardsSelected, setCardsSelected] = useState(new Set());
    const [highScore, setHighScore] = useState(0);

    const score = cardsSelected.size;

    const createCards = (quantity) => {
        const cards = [];
        for (let i = 0; i < quantity; i++) {
            cards.push(
                <Card
                    numberValue={i}
                    clickHandler={() => {
                        if (!cardsSelected.has(i)) {
                            let copySet = new Set(cardsSelected);
                            copySet.add(i);
                            setCardsSelected(copySet);
                            if (score + 1 > highScore) setHighScore(score + 1);
                        } else {
                            let newSet = new Set();
                            newSet.add(i);
                            setCardsSelected(newSet);
                        }
                    }}
                    key={i}
                />
            )
        }
        return cards;
    }
    
    const shuffleCards = (cards) => {   /* Fisher-Yates Shuffle */
        let i = cards.length;
    
        while (i != 0) {
            let rand = Math.floor(Math.random() * i);
            i--;
            [cards[i], cards[rand]] = [cards[rand], cards[i]];
        }
    
        return cards;
    }

    const titleComponent = (
        <h1 className={"memory-card-title"}>Memory Card Game</h1>
    )

    const scoreComponent = (
        <div className="memory-card-scores-container">
            <h3 className="memory-card-current-score">{score}</h3>
            <h3 className="memory-card-high-score">{highScore}</h3>
        </div>
    )

    const cardsComponent = (
        <div className={"memory-cards-container"}>
            {shuffleCards(createCards(cardsQuantity))}
        </div>
    )

    return (<div className="MemoryCard">
        {titleComponent}
        {scoreComponent}
        {cardsComponent}
    </div>)

}

export default MemoryCard;