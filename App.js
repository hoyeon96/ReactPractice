import React from 'react';
import Avatar from './mypic';
import IconList from './IconList';
import Tooltip from './tooltip';
import './App.css';

function App() {
  return (
    <div>
      <div className="main">
        <div className="content">
          <img src="img/background.jpg" className="bg" alt="background"/>
          <Avatar />
          <h1>Hoyeon Yun</h1>
          <h3>Dev. yeon</h3>
        </div>
        <div className="container">
          <IconList />
        </div>
      </div>
    </div>
    
    
  );
}

export default App;
