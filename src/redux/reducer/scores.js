import { GET_SCORE } from '../actions';

const INITIAL_STATE = {
  date: '',
  events: [],
  leagues: [],
  season: {},
};

const scores = ( state =  INITIAL_STATE, action ) => {
  switch(action.type) {
  case GET_SCORE:
    return { state: action.scores };
  default:
    return state;
  }
};

export default scores;