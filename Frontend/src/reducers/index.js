import { combineReducers } from 'redux';
import { gamesReducer } from './games.reducer';
import { chartReducer } from './chart.reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  game: gamesReducer,
  chart: chartReducer,
  form: formReducer
});

export default rootReducer;
