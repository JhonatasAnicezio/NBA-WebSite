import React from 'react';
import Events from '../components/components-home/Events';
import Header from '../components/Header';
import './Home.css';

function Home() {
  return (
    <div className='page-Home'>
      <Header />
      <Events />
      Home Page
    </div>
  );
}

export default Home;