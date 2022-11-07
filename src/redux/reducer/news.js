import { GET_NBA_NEWS, GET_WNBA_NEWS } from '../actions';

const INITIAL_STATE = {
  articlesNBA: [],
  articlesWNBA: [],
  firstNew: {},
};

const news = ( state =  INITIAL_STATE, action ) => {
  const article = action.news;

  switch(action.type) {
  case GET_NBA_NEWS:
    return {
      ...state,
      articlesNBA: action.news,
      firstNew: {
        href: article[0].links.web.href,
        image: article[0].images[0].url,
      },
    };
  case GET_WNBA_NEWS:
    return {
      ...state,
      articlesWNBA: action.news,
    };
  default:
    return state;
  }
};

export default news;
