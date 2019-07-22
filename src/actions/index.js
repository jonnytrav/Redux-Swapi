import axios from "axios";

export const FETCHING_CHARS = "FETCHING_CHARS";
export const FETCH_CHARS_SUCCESS = "FETCH_CHARS_SUCCESS";
export const FETCH_CHARS_FAIL = "FETCH_CHARS_FAIL";

const getCharacters = () => dispatch => {
  dispatch({ type: FETCHING_CHARS });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      //   console.log(res.data.results);
      dispatch({ type: FETCH_CHARS_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCH_CHARS_FAIL, payload: err });
    });
};

export default getCharacters;

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
