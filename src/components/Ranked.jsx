import React from 'react'
import "./styles.css";

export default function Ranked({imageUrl, rank}) {
    return (
    <div className='ranked'>
        <img src={imageUrl} alt={""} className='rankpng'/>
        <p className='classee'>Ranked</p>
        <p className='rank'>{rank}</p>
    </div>
    )
}