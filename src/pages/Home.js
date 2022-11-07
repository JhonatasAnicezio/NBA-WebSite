import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AllNews from '../components/components-home/AllNews';
import Aside from '../components/components-home/Aside';
import BannerNew from '../components/components-home/BannerNew';
import Events from '../components/components-home/Events';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
      <div className='container-mid'>
        <AllNews />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default Home;