import React from 'react';
import { useHistory } from 'react-router-dom';
import nbaLogo from '../img/nbaLogo.png';
import './Header.css';

function Header() {
  const history = useHistory();

  return (
    <header className='container-header'>
      <img
        onClick={ () => history.push('/') }
        src={ nbaLogo }
        alt='logo da nba'
      />
    </header>
  );
}

export default Header;