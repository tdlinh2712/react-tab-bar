import React, { useState } from 'react';
import './style.css';
import NavBar from './NavBar';
import Content from './Content';

//list of tabs to display with content
const TABS = [
  { title: "London", content: "London is the capital city of England." },
  { title: "Paris", content: "Paris is the capital of France." },
  { title: "Tokyo", content: "Tokyo is the capital of Japan." }
];

const App = () => {
  const [ selectedTab, setSelectedTab ] = useState(0);
  return (
    <div className = "App">
      <NavBar 
        className = "navbar" 
        tabs = { TABS } 
        setSelectedTab = { setSelectedTab } 
        selectedTab = { selectedTab }
      />
      <Content tab = { TABS[selectedTab] } />
    </div>
  );
}

export default App;
