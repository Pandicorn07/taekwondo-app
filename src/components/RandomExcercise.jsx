import React from "react";

import '../sass/RandomExercise.sass'



const RandomExercise = (props) => {
    
    console.log(props.exercise);

    let count = 0;

    return (
        <div className="random-exercise">
            <h3>Zufalls-Übung</h3>
            {props.exercise.map(item => {
                count++;
                return <p><span>{count}.</span> {item}</p>
            })}
        </div>
    );
};

export default RandomExercise;