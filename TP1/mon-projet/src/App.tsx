import './App.css';
import React from 'react';
import Team from './components/Team/Team';
import { userList } from './data/Data';
import TeamGallery from './components/TeamGallery/TeamGallery';

/*
function App() {
  return (
    <div className="app-container">
      <div className="cards-container">
        <Team 
          title="Our Team" 
          description="Meet our awesome team members" 
          members={userList} 
        />
      </div>
    </div>
  );
}*/

function App(){
  return (
    <div className="app-container">
      <TeamGallery />
    </div>
  )
}

export default App;