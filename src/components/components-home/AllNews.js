import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './AllNews.css';
import CardNew from './CardNew';

function AllNews({ articles }) {
  const [ stateArticles, setStateArticles ] = useState([]);

  useEffect(() => {
    articles.splice(0,1);
    setStateArticles(articles);
  });

  return (
    <div className='container-allNews'>
      <h2>NEWS</h2>
      <div className='container-news'>
        { stateArticles.map((article, index) => 
          <CardNew
            key={ index }
            url={ article.images[0].url }
            description={ article.headline }
            link={ article.links.web.href }
          />
        ) }
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { news } = state;
  return {
    articles: news.articlesNBA.concat(news.articlesWNBA),
  };
}

AllNews.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(AllNews);