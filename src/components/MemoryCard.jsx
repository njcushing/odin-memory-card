import { useState } from 'react'
import './../styles/MemoryCard.css'

import Card from './Card.jsx'

const MemoryCard = () => {
    const [cardsQuantity, setCardsQuantity] = useState(30);
    const [cardsSelected, setCardsSelected] = useState(new Set());

    const score = cardsSelected.size;

    const createCards = (quantity) => {
        const cards = [];
        for (let i = 0; i < quantity; i++) {
            cards.push(
                <Card
                    numberValue={i}
                    clickHandler={() => {
                        if (!cardsSelected.has(i)) {
                            var copySet = new Set(cardsSelected);
                            copySet.add(i);
                            setCardsSelected(copySet);
                        } else {
                            setCardsSelected(new Set());
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

    const cardsComponent = (
        <div className={"memory-cards-container"}>
            {shuffleCards(createCards(cardsQuantity))}
        </div>
    )

    return (<div className="MemoryCard">
        {titleComponent}
        {cardsComponent}
    </div>)

}

export default MemoryCard;