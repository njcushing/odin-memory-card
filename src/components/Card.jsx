import { useState } from 'react'
import './../styles/Card.css'

const Card = ({

    cardImage = "",
    classNames = [],
    clickHandler,

}) => {

    const imageElement = cardImage !== "" ? (
        <img
            onClick={typeof clickHandler === 'function' ? clickHandler : null}
            className={["Card"].concat(classNames).join(" ")}
            src={cardImage}
        ></img>
    ) : (
        <div
            className={["Card preload"].concat(classNames).join(" ")}
        ></div>
    )
    
    return imageElement

}

export default Card;