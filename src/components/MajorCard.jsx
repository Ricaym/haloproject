import React from 'react'

export default function MajorCard({imageUrl, rank, name}) {
    return (
        <div className='majorcard'>
            <img src={imageUrl} alt={""} className='image'/>
            <div className='majorname'>
                <p>{rank}</p>
                <p>{name}</p>
            </div>
        </div>
    )
}
