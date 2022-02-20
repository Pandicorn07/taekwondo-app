// Import modules and React
import React from "react";

// Import Style of React Page
import './sass/App.sass';

// Import different components
import Header from "./components/Header";
import HyongsList from "./components/HyongsList";
import Exercises from "./components/Exercises";

const App = () => {

  return (
    <div className="app">
      <Header />
      <HyongsList />
      <Exercises />
    </div>
  );
}

export default App;