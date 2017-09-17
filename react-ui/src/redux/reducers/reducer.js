import axios from "axios";
/////////////////CONSTANTS/////////////////////

const GET_ALL_KATAS = "GET_ALL_KATAS";
const CHANGE_STATUS = "CHANGE_STATUS";
const CHANGE_SOLUTION = "CHANGE_SOLUTION";
const CHANGE_USER = "CHANGE_USER";

/////////////////ACTIONS//////////////

const getKatas = (katas) => ({type: GET_ALL_KATAS, katas});
const changeTestStatus = (kataId, testId, status) => ({type: CHANGE_STATUS, kataId, testId, status});
const changeSolution = (kataId, solution) => ({type: CHANGE_SOLUTION, kataId, solution});
const changeUser = (user) => ({type: CHANGE_USER, user});
/////////////////REDUCER/////////////////////

//initiate your starting state
const initial = {
  katas: [],
  user: ''
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_KATAS:
      return {...state, katas: action.katas };
    case CHANGE_STATUS:
      state.katas[action.kataId].tests[action.testId].status = action.status;
      return { ...state, katas: [...state.katas] };
    case CHANGE_SOLUTION:
      state.katas[action.kataId].solution = action.solution;
      return { ...state, katas: [...state.katas] };
    case CHANGE_USER:
      return { ...state, user: `${action.user}`}
    default:
      return state;
  }
};

export default reducer;


/////////////// ACTION DISPATCHER FUNCTIONS///////////////////

export const getAllKatas = () => dispatch => {
  axios.get(`/api`)
    .then((response) => {
      return response.data;
    })
    .then((katas) => {
      dispatch(getKatas(katas))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const putChangeTestStatus = (kataId, testId, status) => (dispatch) => {
  dispatch(changeTestStatus(kataId, testId, status));
};

export const putChangeSolution = (kataId, solution) => (dispatch) => {
  dispatch(changeSolution(kataId, solution));
};

export const putUser = (user) => (dispatch) => {
  dispatch(changeUser(user));
};

export const putSubmit = (katas, user) => (dispatch) => {
  axios.post(`/api/save`, {katas, user})
  .then((response) => {
    return response.data;
  })
  .then((task) => {
  })
  .catch((err) => {
    console.error.bind(err);
  })
};
