import React from 'react'
import "./majors.css";

export default function MajorSkin({imageUrl}) {
    return (
        <div className='allmajors'>
            <img src={imageUrl} alt={""} className='skin'/>
            <div className='soclemajor'></div>

            
        </div>
    )
}

/*
<p className='namemajor2'>Gap</p>
<img src={imageUrl} alt={""} className='skin2'/>
<div className='soclemajor2'></div>
<p className='namemajor3'>Stazrkpezfjpozeojar</p>
<img src={imageUrl} alt={""} className='skin3'/>
<div className='soclemajor3'></div>
*/