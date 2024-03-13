import React from 'react'

export default function KDA({kills, Deaths, Assists}) {
    return (
            <p className='kda'>{kills} / {Deaths} / {Assists}</p>

    )
}