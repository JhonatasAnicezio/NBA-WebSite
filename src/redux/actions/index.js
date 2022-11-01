export const GET_SCORE = 'GET_SCORE';
export const GET_NBA_NEWS = 'GET_NBA_NEWS';
export const GET_WNBA_NEWS = 'GET_WNBA_NEWS';

function getScore(scores) {
  return {
    type: GET_SCORE,
    scores,
  };
}

export function fetchScores() {
  return (dispatch) => {
    const url = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';
    return fetch(url).then((response) => response.json())
      .then((json) => dispatch(getScore(json)));
  };
}

function getNbaNews(news) {
  return {
    type: GET_NBA_NEWS,
    news,
  };
}

export function fetchNews() {
  return (dispatch) => {
    const url = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news';
    return fetch(url).then((response) => response.json())
      .then((json) => dispatch(getNbaNews(json.articles)));
  };
}

function getWnbaNews(news) {
  return {
    type: GET_WNBA_NEWS,
    news,
  };
}

export function fetchWNews() {
  return (dispatch) => {
    const url = 'http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/news';
    return fetch(url).then((response) => response.json())
      .then((json) => dispatch(getWnbaNews(json.articles)));
  };
}