import React, { useState } from "react";
import '../sass/HyongsList.sass';
import './HyongItem';
import HyongItem from "./HyongItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import hyongs from "../Hyongs";

const HyongsList = () => {

    const [visibilityOfHongList, setVisibilityOfHongList] = useState(false);

    
    const toggleVisibilityOfHongList = () => {
        if(visibilityOfHongList) {
            setVisibilityOfHongList(!visibilityOfHongList);
        } else {
            setVisibilityOfHongList(!visibilityOfHongList);
        }
    }

    return (
        <div className="hyong-list">
            {hyongs.map(hyong => {
                return (
                    <HyongItem hyong={hyong} key={hyong.uuid} />
                )
            })}
        </div>
    );
};

export default HyongsList;