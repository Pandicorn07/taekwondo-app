import React from "react";
import { v4 } from "uuid";

import '../sass/RandomExercise.sass'



const RandomExercise = ({exercise}) => {

    return (
        <div className="random-exercise">
            <h2>Zufalls-Übung</h2>

            {exercise.map(item => {
                return <p key={v4()}>{item}</p>
            })}
        </div>
    );
};

export default RandomExercise;