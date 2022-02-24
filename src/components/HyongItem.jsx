import React, { useState } from "react";
import '../sass/HyongsList.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

import '../Hyongs';
import '../sass/HyongItem.sass';


const colors = {
    main: '#568FF0',
    darkMain: '#2F3137',
    blackMain: '#191A1D',
    green: '#27FFA9',
    red: '#FF0077',
    yellow: '#FFCC00',
    white: '#eeeeee',
    black: '#1b1b1b',
    fullWhite: '#ffffff',
    fullBlack: '#000000',
};

const HyongItem = ({hyong}) => {

    const [visibilityOfHyongStructure, setVisibilityOfHyongStructure] = useState(false);

    const toggleVisibilityOfHyongStructure = () => {
        if(visibilityOfHyongStructure) {
            setVisibilityOfHyongStructure(!visibilityOfHyongStructure);
        } else {
            setVisibilityOfHyongStructure(!visibilityOfHyongStructure);
        }
    }

    let count = 0;

    return (       
        <div className="hyong-container">
            <h3>{hyong.id}</h3>
            <p>{hyong.name}</p>

            {/* <div className="dropdown-moves">
                <h4>Ablauf: <FontAwesomeIcon onClick={toggleVisibilityOfHyongStructure} icon={visibilityOfHyongStructure ? faCaretUp : faCaretDown} style={{color: colors.main}} /></h4>

                {visibilityOfHyongStructure ? (
                    <div className="dropdown">
                        {hyong.moveStructure.map(move => {
                            count++;
                            return <p><span>{count}</span>. {move}</p>;
                        })}
                    </div>
                ) : null}

            </div> */}
        </div>
    );
};

export default HyongItem;