import React, { useState, useRef } from 'react';

const FREQUENCE = 1000; // en millisecondes

function Chrono() {
    const [count, setCount] = useState(0);
    const [showChrono, setShowChrono] = useState(false);
    const intervalId = useRef(null);

    const startInterval = () => {
        if (intervalId.current === null) {
            intervalId.current = setInterval(() => {
            setCount(prevState => prevState + 1);
        }, FREQUENCE);
            setShowChrono(true);
        }
    };

    const stopInterval = () => {
        if (intervalId.current !== null) {
            clearInterval(intervalId.current);
            intervalId.current = null;
            setShowChrono(false);
            setCount(1);
        }
    };

    const handleButtonClick = (event) => {
        if (showChrono) {
            stopInterval();
            /*changerCouleur1(event);*/
        }
        else {
            startInterval();
            /*changerCouleur2(event);*/
        }
    };

    /*const changerCouleur1 = (event) => {
        const bouton = event.target;
        bouton.style.color = "black"
        bouton.style.borderColor = "black";
    };

    const changerCouleur2 = (event) => {
        const bouton = event.target;
        bouton.style.color = "orange"
        bouton.style.borderColor = "orange";
    };*/

    return (
            <button className='replaybutton' style={{color:showChrono ? 'rgb(208, 162, 9)' : 'black', backgroundColor:showChrono ? 'black' : 'transparent'}} onClick={handleButtonClick}>
                {showChrono ? (<p>Annuler {count}</p>) : 'Lancer une partie'}
            </button>
    );
}

export default Chrono;