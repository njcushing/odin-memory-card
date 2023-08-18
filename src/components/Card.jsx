import { useState } from 'react'
import './../styles/Card.css'

const Card = ({

    cardImage = undefined,
    classNames = [],
    clickHandler,

}) => {

    const imageElement = cardImage !== undefined ? (
        <div
            onClick={typeof clickHandler === 'function' ? clickHandler : null}
            className={["Card"].concat(classNames).join(" ")}
        >
            <img
                src={cardImage}
                className={["Card-image"].concat(classNames).join(" ")}
                style={{pointerEvents: 'none'}}
            ></img>
        </div>
    ) : (
        <div
            className={["Card preload"].concat(classNames).join(" ")}
        ></div>
    )
    
    return imageElement

}

export default Card;