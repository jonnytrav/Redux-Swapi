import {
  FETCHING_CHARS,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAIL
} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false,
        error: ""
      };
    case FETCH_CHARS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
