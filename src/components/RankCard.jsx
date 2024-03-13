import React from 'react'

export default function RankCard({imageUrl, rank, name}) {
    return (
        <div className='rankcard'>
            <img src={imageUrl} alt={""} className='rankpng'/>
            <div className='rankname'>
                <p>{rank}</p>
                <p>{name}</p>
            </div>
        </div>
    )
}
