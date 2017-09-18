import axios from 'axios';
import worker from '../../utils/worker';
///////////////// CONSTANTS /////////////////////

const GET_ALL_KATAS = 'GET_ALL_KATAS';
const CHANGE_STATUS = 'CHANGE_STATUS';
const CHANGE_SOLUTION = 'CHANGE_SOLUTION';
const CHANGE_USER = 'CHANGE_USER';
const SET_ALERTS = 'SET_ALERTS';

export interface IKata {
  id: number;
  solution: string;
  tests: any[];
}

///////////////// ACTIONS //////////////

const getKatas = (katas: IKata) => ({type: GET_ALL_KATAS, katas});
const changeTestStatus = (
  kataId: number,
  testId: number,
  status: boolean,
) => ({type: CHANGE_STATUS, kataId, testId, status});
const changeSolution = (kataId: number, solution: string) => ({type: CHANGE_SOLUTION, kataId, solution});
const changeUser = (user: string) => ({type: CHANGE_USER, user});
const setAlerts = (alerts: object) => ({type: SET_ALERTS, alerts});

///////////////// REDUCER/////////////////////

// initiate your starting state
const initial = {
  katas: [],
  user: '',
  alerts: {},
};

const reducer = (state = initial, action: any) => {
  switch (action.type) {
    case GET_ALL_KATAS:
      return {...state, katas: action.katas };
    case CHANGE_STATUS:
      (state.katas[action.kataId] as IKata).tests[action.testId].status = action.status;
      return { ...state, katas: [...state.katas] };
    case CHANGE_SOLUTION:
      (state.katas[action.kataId] as IKata).solution = action.solution;
      return { ...state, katas: [...state.katas] };
    case CHANGE_USER:
      return { ...state, user: `${action.user}`};
    case SET_ALERTS:
    return { ...state, alerts: {...action.alerts}};
    default:
      return state;
  }
};

export default reducer;

/////////////// ACTION DISPATCHER FUNCTIONS///////////////////

export const getAllKatas = () => (dispatch: any) => {
  axios.get(`/api`)
    .then((response) => {
      return response.data;
    })
    .then((katas) => {
      dispatch(getKatas(katas));
    })
    .catch((err) => {
      console.error.bind(err);
    });
};

export const putChangeTestStatus = (kataId: number, testId: number, status: boolean) => (dispatch: any) => {
  dispatch(changeTestStatus(kataId, testId, status));
};

export const putChangeSolution = (kataId: number, solution: string) => (dispatch: any) => {
  dispatch(changeSolution(kataId, solution));
};

export const putUser = (user: string) => (dispatch: any) => {
  dispatch(changeUser(user));
};

export const putAlerts = (alerts: object) => (dispatch: any) => {
  dispatch(setAlerts(alerts));
};

export const putSubmit = (katas: IKata[], user: string) => (dispatch: any) => {
  console.log('@called');
  const results: boolean[] = [];
  katas.forEach(({solution, tests}, kataId) => {
    (tests || []).forEach(({param, result}, testId) => {
      worker(solution, param, result, (status: boolean) => {
        dispatch(changeTestStatus(kataId, testId, status));
        results.push(status);
        if (kataId === katas.length - 1 && testId === tests.length - 1) {
          axios.post(`/api/save`, {user, results})
            .then((response) => {
              return response.data;
            })
            .catch((err) => {
              console.error.bind(err);
            });
        }
      });
    });
  });
};
