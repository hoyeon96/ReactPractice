import React from 'react';
import Avatar from './mypic';
import Icon from './icon';
import bg from './img/background.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div class="content">
        <img src={bg} class="bg"/>
        <Avatar />
        <h1>Hoyeon Yun</h1>
        <h3>Dev. yeon</h3>
      </div>
      <div class="container">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
    </div>
    
  );
}

export default App;
