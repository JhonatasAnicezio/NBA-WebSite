import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BannerNew from '../components/components-home/BannerNew';
import Events from '../components/components-home/Events';
import Header from '../components/Header';
import { fetchWNews } from '../redux/actions';
import './Home.css';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWNews());
  }, []);

  return (
    <div className='page-Home'>
      <Header />
      <Events />
      <BannerNew />
    </div>
  );
}

export default Home;