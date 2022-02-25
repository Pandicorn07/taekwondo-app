import React from "react";
import '../sass/HyongsList.sass';

import '../Hyongs';
import '../sass/HyongItem.sass';

const HyongItem = ({hyong, toggleHyong, setTitle}) => {

    return (       
        <div className="hyong-container" onClick={() => {toggleHyong(); setTitle(hyong.name)}}>
            <h3>{hyong.id}</h3>
            <p>{hyong.name}</p>
        </div>
    );
};

export default HyongItem;