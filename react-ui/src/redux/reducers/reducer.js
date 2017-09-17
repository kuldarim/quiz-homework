import axios from "axios";
/////////////////CONSTANTS/////////////////////


const GET_ALL_KATAS = "GET_ALL_KATAS";
const CHANGE_STATUS = "CHANGE_STATUS";

/////////////////ACTIONS//////////////

const getKatas = (katas) => ({type: GET_ALL_KATAS, katas});
const changeTestStatus = (kataId, testId, status) => ({type: CHANGE_STATUS, kataId, testId, status});

/////////////////REDUCER/////////////////////

//initiate your starting state
let initial = {
  tasks: []
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_KATAS:
      return {...state, katas: action.katas };
    case CHANGE_STATUS:
      state.katas[action.kataId].tests[action.testId].status = action.status;
      return { ...state, katas: state.katas };
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
