import "./App.css";
import "./components/styles.css";

import rankpng from "./assets/rankgold.webp";
import skin from "./assets/major.png"

import Myself from "./components/Myself";
import Ranked from "./components/Ranked";
import Counter from "./components/Counter";
import Social from "./components/Social";
import MajorSkin from "./components/MajorSkin";

/*import image from "./assets/casque major.png"
import major from "./assets/major.png"

import MajorCard from "./components/MajorCard";
import RankCard from "./components/RankCard";
import GameInfos from "./components/GameInfos";
import KDA from "./components/kda";
import Ratings from "./components/Ratings";*/

function App() {
    return (
    <div className="App">
        <Myself/>
        <MajorSkin imageUrl={(skin)}/>
        <Ranked imageUrl={(rankpng)} rank={("GOLD III")}/>
        <Counter/>
        <Social/>
    </div>
);
}

export default App;
