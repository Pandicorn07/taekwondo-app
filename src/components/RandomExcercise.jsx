import React, { useState } from "react";
import { v4 } from "uuid";

import '../sass/RandomExercise.sass'



const RandomExercise = ({exercise}) => {

    const [showRandomEx, setShowRandomEx] = useState(false);
    

    return (
        <div className="random-exercise">
            <h2>Übung mit allen Bewegungen</h2>
            <button onClick={() => setShowRandomEx(true)}>Übung generieren</button>

            {showRandomEx ? (
                <div>
                    <h3>Zufalls-Übung</h3>

                    {exercise.map(item => {
                        return <p key={v4()}>{item}</p>
                    })}
                </div>
            ) : null }

        </div>
    );
};

export default RandomExercise;