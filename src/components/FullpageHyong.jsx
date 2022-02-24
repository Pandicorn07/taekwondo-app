/* eslint-disable array-callback-return */
import React from 'react';
import '../sass/FullpageHyong.sass';

const FullpageHyong = ({hyong}) => {

    let hyongList = {};

    hyong.map(item => {
        hyongList.name = item.name;
        hyongList.moves = item.moves;
        hyongList.id = item.id;
        hyongList.uuid = item.uuid;
        hyongList.moveTypes = item.moveTypes;
        hyongList.moveStructure = item.moveStructure;
    })

    return (
        <div className='fullpage-hyong '>
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
                <ol>
                    {hyongList.moveStructure.map(move => <li>{move}</li>)}
                </ol>
            </div>
        </div>
    )
}

export default FullpageHyong