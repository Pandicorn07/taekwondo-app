/* eslint-disable array-callback-return */
import React from 'react';
import '../sass/FullpageHyong.sass';

const FullpageHyong = ({hyong, back}) => {

    let hyongList = {};

    hyong.map(item => {
        hyongList.name = item.name;
        hyongList.moves = item.moves;
        hyongList.id = item.id;
        hyongList.uuid = item.uuid;
        hyongList.moveTypes = item.moveTypes;
        hyongList.moveStructure = item.moveStructure;
    });

    let moveCount = 0;

    return (
        <div className='fullpage-hyong '>
            <p className='go-back' onClick={back}>Zurück</p>

            <h1 id='hyongname'>{hyongList.name} <br /> <span>Hyong</span></h1>

            <div className="infoContainer moveCount">
                <h1>{hyongList.moves}</h1>
                <p>Bewegungen</p>
            </div>

            <div className="infoContainer">
                <h1>Bewegungsarten</h1>
                <p>{hyongList.moveTypes.join(', ')}</p>
            </div>

            <div className="infoContainer">
                <h1>Ablauf</h1>
                <div>
                    {hyongList.moveStructure.map(move => {
                        moveCount++;
                        return <p><span>{moveCount}</span> {move}</p>;

                    })}
                </div>
            </div>
        </div>
    )
}

export default FullpageHyong