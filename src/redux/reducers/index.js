import { combineReducers } from "redux";
import { characterReducer } from './character-reducer';
import { filmReducer } from './film-reducer';

export default combineReducers({
    characterState: characterReducer,
    filmState: filmReducer
});
