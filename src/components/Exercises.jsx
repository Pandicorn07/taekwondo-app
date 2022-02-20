/* eslint-disable no-loop-func */
import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import '../sass/Excercises.sass';

import moves from "../Moves";
import RandomExercise from "./RandomExcercise";
import { v4 } from "uuid";
import hyongs from '../Hyongs';
import ExerciseByHyong from "./ExerciseByHyong";

const Exercises = () => {

    const [visibilityOfExercises, setVisibilityOfExercises] = useState(false);
    const [exercise, setExercise] = useState([]);
    
    const [hyongInput, setHyongInput] = useState('');
    const [hyongExercise, setHyongExercise] = useState([]);



    const shuffleArray = array => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const createNewRandomExercise = () => {
        setExercise([]);
        
        let moveCount = Math.floor(Math.random() * moves.beginnerMoves.length);

        while(moveCount < 4) {
            moveCount = Math.floor(Math.random() * moves.beginnerMoves.length);
        }
        
        for (let i = 0; i < moveCount; i++) {
            setExercise(item => [...item, moves.beginnerMoves[i]]);
        }

        console.log(shuffleArray(exercise));
    }

    const toggleVisibilityOfExercises = () => {
        setVisibilityOfExercises(!visibilityOfExercises);
    }

    const exerciseManage = () => {
        createNewRandomExercise();
        toggleVisibilityOfExercises();
    }

    const generateHyongExercise = e => {
        e.preventDefault();

        setHyongExercise([]);

        // eslint-disable-next-line eqeqeq
        let selectedHyong = hyongs.filter(item => item.id == hyongInput);
        
        selectedHyong.map(hyongInfos => {
            selectedHyong = hyongInfos;
            return false;
        });

        const moveTypes = selectedHyong.moveTypes;

        console.log('The movetypes are:', moveTypes)

        let moveCount = Math.floor(Math.random() * (6 - (selectedHyong.id+3)) + (selectedHyong.id+3));

        console.log(moveCount);

        for (let i = 0; i < moveCount; i++) {
            if(moveTypes[i] === undefined) {
                continue;
            }
            setHyongExercise(item => [...item, moveTypes[i]]);
        }

        console.log(shuffleArray(hyongExercise));
    };

    return (
        <div className="excercise-container">
            <h2 className="exercise-heading">Übungen <FontAwesomeIcon icon={visibilityOfExercises ? faCaretUp : faCaretDown} onClick={exerciseManage} /></h2>            

            {visibilityOfExercises ? (
                <div>
                    <RandomExercise exercise={shuffleArray(exercise)} key={v4()} />

                    <h2 className="generate-exercise-with-hyong">Hyong-Übung Generieren</h2>
                    <form onSubmit={generateHyongExercise}>
                        <div className="input">
                            <label htmlFor=".hyong-input">Hyong (1...8)</label>
                            <input onChange={content => setHyongInput(content.target.value)} value={hyongInput} type="number" className="hyong-input" inputMode="number" max={8} min={1} />
                        </div>
                        
                        <button type="submit">Übung erstellen</button>
                    </form>

                    <ExerciseByHyong exerciseList={shuffleArray(hyongExercise)} />
                </div>


            ) : null}
        </div>
    );
};

export default Exercises;