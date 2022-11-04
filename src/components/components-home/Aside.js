import React from 'react';
import Espn from '../../img/logoEspn.jpg';
import './Aside.css';

function Aside() {
  return (
    <aside className='container-aside'>
      <a href='https://www.espn.com.br/nba/' target='blank'>
        <img src={ Espn } alt='logo Espn' />
      </a>
    </aside>
  );
}

export default Aside;