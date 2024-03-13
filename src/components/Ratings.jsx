import filled from "../assets/fullstar.png";
import outlined from "../assets/emptystar.png";

import React, { useMemo, useState } from "react";

export default function Ratings() {
    const stars = useMemo(() => [1, 2, 3, 4, 5], []);
    const [value, setValue] = useState(0);

    function onImagePress(s) {
        if (s === value) {
            setValue(value - 1);
        } else setValue(s);
}

    return (
        <div className="starsRow">
            <p className="lastgame">LAST GAME</p>
            {stars.map((s) => {
            const renderedImage = value >= s ? filled : outlined;
        return <img className="img" src={renderedImage} alt="" onClick={() => onImagePress(s)} />;})}
        </div>
);
}
