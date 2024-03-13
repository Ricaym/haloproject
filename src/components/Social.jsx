import React from 'react'
import "./styles.css";

export default function Social({imageUrl, animalName, children}) {
    return (
        
    <div className='right-overlay'>
        <div>
            <p className='titleonline'>ONLINE</p>
            <div className='matebox'>
                <p className='mate'>GunShinZap</p>
                <p className='mate'>AppWeedStar</p>
            </div>
        </div>
        <div>
            <p className='titlesocial'>SOCIAL</p>
            <div className='matebox'>
                <p className='mate'>Eliotiste</p>
                <p className='mate'>Troudbalus</p>
                <p className='mate'>Lastiqueur2000</p>
                <p className='mate'>YassAgain</p>
                <p className='mate'>PFlûte</p>
            </div>
        </div>
    </div>
    )
}