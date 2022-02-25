/* eslint-disable no-loop-func */
import React, { useState } from "react";

import '../sass/Excercises.sass';

import moves from "../Moves";
import RandomExercise from "./RandomExcercise";
import hyongs from '../Hyongs';
import ExerciseByHyong from "./ExerciseByHyong";

const Exercises = ({setTitle}) => {
    const [showRandomEx, setShowRandomEx] = useState(false);
   
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
        let tempExercise = [];
        
        let moveCount = Math.floor(Math.random() * moves.beginnerMoves.length);

        while(moveCount < 4 || moveCount > 9) {
            moveCount = Math.floor(Math.random() * moves.beginnerMoves.length);
            console.log(moveCount);
        }

        for (let i = 0; i < moveCount; i++) {
            tempExercise.push(moves.beginnerMoves[Math.floor(Math.random() * moves.beginnerMoves.length)]);
            console.log(moves.beginnerMoves[Math.floor(Math.random() * moves.beginnerMoves.length)])
        }

        return tempExercise;
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
            <h2>Übung mit allen Bewegungen</h2>
            <button onClick={() => {setShowRandomEx(true)}}>Übung generieren</button>
            {showRandomEx ? (
                <div>
                    <RandomExercise exercise={createNewRandomExercise()} />
                    {setTitle('Ablauf')}
                </div>
            ) : null}

            <h2 className="generate-exercise-with-hyong">Hyong-Übung Generieren</h2>
            <form onSubmit={generateHyongExercise}>
                <div className="input">
                    <input onChange={content => {setHyongInput(content.target.value); setShowRandomEx(false);}} value={hyongInput} type="number" className="hyong-input" inputMode="number" max={8} min={1} placeholder='Hyong 1 bis 8' />
                </div>
                
                <button type="submit">Übung erstellen</button>
            </form>

            <ExerciseByHyong exerciseList={shuffleArray(hyongExercise)} />
        </div>
    );
};

export default Exercises;