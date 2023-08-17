import { useState } from 'react'
import './../styles/Card.css'

const Card = ({

    numberValue = 0,

}) => {

    return (<div className="Card">
        {numberValue}
    </div>)

}

export default Card;