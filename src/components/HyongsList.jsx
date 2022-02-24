import React, { useState } from "react";
import '../sass/HyongsList.sass';
import './HyongItem';
import HyongItem from "./HyongItem";

import hyongs from "../Hyongs";
import FullpageHyong from "./FullpageHyong";

const HyongsList = () => {

    const [activeHyong, setActiveHyong] = useState(1);

    return (
        <div className="hyong-list">
            {activeHyong != null ? (
                <div>
                    <FullpageHyong hyong={hyongs.filter(hyongItem => hyongItem.id === activeHyong)} />
                </div>
            ) : hyongs.map(hyong => {
                return (
                    <HyongItem hyong={hyong} key={hyong.uuid} setActiveHyong={setActiveHyong} />
                )
            })}
        </div>
    );
};

export default HyongsList;