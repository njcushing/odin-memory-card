import { useState } from 'react'
import './../styles/MemoryCard.css'

import Card from './Card.jsx'

const createCards = (quantity) => {
    const cards = [];
    for (let i = 0; i < quantity; i++) {
        cards.push(<Card numberValue={i} key={i} />)
    }
    return cards;
}

const MemoryCard = () => {
    const [cardsQuantity, setCardsQuantity] = useState(10);

    const titleComponent = (
        <h1 className={"memory-card-title"}>Memory Card Game</h1>
    )

    const cardsComponent = (
        <div className={"memory-cards-container"}>
            {createCards(cardsQuantity)}
        </div>
    )

    return (<div className="MemoryCard">
        {titleComponent}
        {cardsComponent}
    </div>)

}

export default MemoryCard;