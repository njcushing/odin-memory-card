import { useState } from 'react'
import './../styles/Card.css'

const Card = ({

    numberValue = 0,
    clickHandler,

}) => {

    return (
        <div
            className="Card"
            onClick={typeof clickHandler === 'function' ? clickHandler : null}
        >
            {numberValue}
        </div>
    )

}

export default Card;