import React from 'react';
import Avatar from './mypic';
import Icon from './icon';
import IconList from './IconList';
import './App.css';

function App() {
  return (
    <div class="main">
      <div class="content">
        <img src="img/background.jpg" class="bg"/>
        <Avatar />
        <h1>Hoyeon Yun</h1>
        <h3>Dev. yeon</h3>
      </div>
      <div class="container">
        <IconList />
      </div>
    </div>
    
  );
}

export default App;
