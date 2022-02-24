import React from "react";
import '../sass/Menu.sass';


const Menu = ({activeTab, setActiveTab}) => {
    console.log(activeTab)

    const toggleTab = () => {
        const el = document.querySelector('#active');
        console.log(el);

        if(el.classList.contains('active-right')) {
            setActiveTab('right');
        } else if (el.classList.contains('active-left')) {
            setActiveTab('left');
        }
    }

    return (
        <div className="menu">
            <div onClick={toggleTab} className="hyong-part part active-right" id={activeTab==='left' ? 'active' : null}>
                <h2>Hyongs</h2>
            </div>
            <div onClick={toggleTab} className="exercise-part part active-left" id={activeTab==='right' ? 'active' : null}>
                <h2>Übungen</h2>
            </div>
        </div>
    );
};

export default Menu;