import { useState } from 'react'
import './../styles/Card.css'

const Card = ({

    numberValue = 0,
    classNames = [],
    clickHandler,

}) => {

    return (
        <div
            onClick={typeof clickHandler === 'function' ? clickHandler : null}
            className={["Card"].concat(classNames).join(" ")}
        >
            {numberValue}
        </div>
    )

}

export default Card;