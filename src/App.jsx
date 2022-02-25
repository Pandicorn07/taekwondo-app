// Import modules and React
import React, { useState } from "react";

// Import Style of React Page
import './sass/App.sass';

// Import different components
import Header from "./components/Header";
import Exercises from "./components/Exercises";
import Menu from "./components/Menu";
import HyongsList from "./components/HyongsList";

const App = () => {

  const [activeTab, setActiveTab] = useState('right');

  const [title, setTitle] = useState('hyongs & übungen')

  return (
    <div className="app">
      <Header title={title} />
      {activeTab === 'left' ? <HyongsList setTitle={(i) => setTitle(i)} /> : <Exercises setTitle={(i) => setTitle(i)} />}
      <Menu activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab)} />
    </div>
  );
}

export default App;