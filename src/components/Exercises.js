import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import '../sass/Excercises.sass';

import moves from "../Moves";
import RandomExercise from "./RandomExcercise";
import { v4 } from "uuid";
const Exercises = () => {

    const [visibilityOfExercises, setVisibilityOfExercises] = useState(false);
    const [exercise, setExercise] = useState([]);

    const createNewRandomExercise = () => {
        setExercise([]);
        // while(exercise) {
        //     let moveCount = Math.floor(Math.random() * moves.beginnerMoves.length);


        //     for (let i=0; i < moveCount; i++) {
        //         setExercise(item => [...item, moves.beginnerMoves[i]]);
        //     }
        // }

        
        let moveCount = Math.floor(Math.random() * moves.beginnerMoves.length);

        while(moveCount < 4) {
            moveCount = Math.floor(Math.random() * moves.beginnerMoves.length);
        }
        
        for (let i = 0; i < moveCount; i++) {
            setExercise(item => [...item, moves.beginnerMoves[i]]);
        }

        exercise.sort(()=> Math.random() - 1);

        console.log(exercise);
    }

    const toggleVisibilityOfExercises = () => {
        setVisibilityOfExercises(!visibilityOfExercises);
    }

    const exerciseManage = () => {
        createNewRandomExercise();
        toggleVisibilityOfExercises();
    }

    // const generateHyongExercise = e => {
    //     e.preventDefault();
    // };

    return (
        <div className="excercise-container">
            <h2 className="exercise-heading">Übungen <FontAwesomeIcon icon={visibilityOfExercises ? faCaretUp : faCaretDown} onClick={exerciseManage} /></h2>            

            {visibilityOfExercises ? (
                <div>
                    <RandomExercise exercise={exercise} key={v4()} />

                    {/* <form onSubmit={generateHyongExercise}>
                        <select name="Select Hyong">Select Hyong</select>
                        <option value="Test" />
                        <button type="submit">Übung erstellen</button>
                    </form> */}
                </div>

            ) : null}
        </div>
    );
};

export default Exercises;