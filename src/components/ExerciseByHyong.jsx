import React from "react";
import '../sass/ExerciseByHyong.sass';

const ExerciseByHyong = ({exerciseList}) => {

    let count = 0;

    return (
        <div className="exercise-by-hyong">
            {exerciseList.map(item => {
                count++;
                return <p><span>{count}.</span> {item}</p>
            })}
        </div>
    );
}

export default ExerciseByHyong;