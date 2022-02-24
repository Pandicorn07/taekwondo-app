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

  return (
    <div className="app">
      <Header />
      {activeTab === 'left' ? <HyongsList /> : <Exercises />}
      <Menu activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab)} />
    </div>
  );
}

export default App;