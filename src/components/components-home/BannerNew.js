import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { fetchNews } from '../../redux/actions';
import './BannerNew.css';

function BannerNew({ firstNew }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className='container-bannerNew'>
      <a href={ firstNew.href } target='blank'>
        <img src={ firstNew.image } alt='image' />
      </a>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articlesNBA: state.news.articlesNBA,
    articlesWNBA: state.news.articlesWNBA,
    firstNew: state.news.firstNew,
  };
}

BannerNew.propTypes = {
  articlesNBA: PropTypes.array.isRequired,
  articlesWNBA: PropTypes.array.isRequired,
  firstNew: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(BannerNew);