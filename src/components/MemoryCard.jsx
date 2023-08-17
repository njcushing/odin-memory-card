import { useState } from 'react'
import './../styles/MemoryCard.css'

const MemoryCard = () => {

    const titleComponent = (
        <h1 className={"memory-card-title"}>Memory Card Game</h1>
    )

    return (<div className="memory-card">
        {titleComponent}
    </div>)

}

export default MemoryCard;