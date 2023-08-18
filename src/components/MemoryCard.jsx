import { useState } from 'react'
import { useEffect } from 'react'
import './../styles/MemoryCard.css'

import Card from './Card.jsx'
import ButtonBasic from './ButtonBasic.jsx'
import SliderBasic from './SliderBasic.jsx'

let cardImages = [];

const MemoryCard = () => {
    const [cardsQuantity, setCardsQuantity] = useState(20);
    const [cardsSelected, setCardsSelected] = useState(new Set());
    const [highScore, setHighScore] = useState(0);

    const score = cardsSelected.size;
    const won = score === cardsQuantity;

    useEffect(() => {
        const fetchCardImages = async () => {
            const resp = await fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=52");
            const respParsed = await resp.json();
            const cards = respParsed.cards;
            for (const card in cards) {
                cardImages.push(cards[card].images.svg)
            }
            setCardsSelected(new Set()); /* Initialising game here when all image URLs have been acquired */
        }
        fetchCardImages(cardImages);
        return () => { cardImages = []; }
    }, []);

    const createCards = (quantity) => {
        const cards = [];
        for (let i = 0; i < quantity; i++) {
            cards.push(
                <Card
                    numberValue={i}
                    cardImage={cardImages[i]}
                    clickHandler={() => {
                        if (!won) {
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
            <h3 className="memory-card-current-score">Current Score: {score}</h3>
            <h3 className="memory-card-high-score">High Score: {highScore}</h3>
            {won ? <h3 className="memory-card-game-won">YOU WON! Press 'Reset' to play again!</h3> : null}
        </div>
    )

    const cardsComponent = (
        <div className={"memory-card-cards-container"}>
            {shuffleCards(createCards(cardsQuantity))}
        </div>
    )

    const quantitySliderComponent = (
        <div className={"memory-card-quantity-slider-container"}>
            <SliderBasic
                labelText={`Card Quantity: ${cardsQuantity}`}
                sliderID="memory-card-quantity-slider"
                minValue={10}
                maxValue={30}
                currentValue={cardsQuantity}
                classNames={["memory-card-quantity-slider"]}
                changeHandler={(e) => {
                    setCardsSelected(new Set());
                    setCardsQuantity(Math.max(10, Math.min(30, e.target.value)));
                }}
            />
        </div>
    )

    const buttonsComponent = (
        <div className={"memory-card-buttons-container"}>
            <ButtonBasic
                buttonText="Reset"
                classNames={["memory-card-button-reset"]}
                clickHandler={() => setCardsSelected(new Set()) }
            />
        </div>
    )

    return (<div className="MemoryCard">
        {titleComponent}
        {scoreComponent}
        {cardsComponent}
        {quantitySliderComponent}
        {buttonsComponent}
    </div>)

}

export default MemoryCard;