import React, { useState } from "react";
import '../sass/HyongsList.sass';
import './HyongItem';
import HyongItem from "./HyongItem";

import hyongs from "../Hyongs";
import FullpageHyong from "./FullpageHyong";

const HyongsList = ({setTitle}) => {

    const [activeHyong, setActiveHyong] = useState(null);

    return (
        <div className="hyong-list">
            {activeHyong != null ? (
                <div>
                    <FullpageHyong hyong={hyongs.filter(hyongItem => hyongItem.id === activeHyong)} back={() => setActiveHyong(null)} />
                </div>
            ) : hyongs.map(hyong => {
                return (
                    <HyongItem hyong={hyong} key={hyong.uuid} setActiveHyong={setActiveHyong} toggleHyong={() => setActiveHyong(hyong.id)} setTitle={(i) => setTitle(i)} />
                )
            })}
        </div>
    );
};

export default HyongsList;