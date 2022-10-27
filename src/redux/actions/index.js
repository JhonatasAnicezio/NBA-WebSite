export const GET_SCORE = 'GET_SCORE';

function getScore(json) {
  return {
    type: GET_SCORE,
    scores: json,
  };
}

export function fetchScores() {
  return (dispatch) => {
    const url = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';
    return fetch(url).then((response) => response.json())
      .then((json) => dispatch(getScore(json)));
  };
}