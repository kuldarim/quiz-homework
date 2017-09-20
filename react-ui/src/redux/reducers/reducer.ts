import { GET_ALL_KATAS, CHANGE_STATUS, CHANGE_SOLUTION, CHANGE_USER, SET_ALERTS } from '../constants/action-types';
import { IKata } from '../constants/interfaces';

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
