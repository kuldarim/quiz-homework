import axios from 'axios';
import { getKatas, changeTestStatus, changeSolution, changeUser, setAlerts } from '../actions/actions';
import worker from '../../utils/worker';
import { IAlert, IKata } from '../constants/interfaces';

export const getAllKatas = () => (dispatch: any) => {
  axios.get(`/api`)
    .then((response) => response.data)
    .then((katas) => dispatch(getKatas(katas)))
    .catch(console.error);
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

export const putAlerts = (alerts: IAlert) => (dispatch: any) => {
  dispatch(setAlerts(alerts));
};

export const putSubmit = (katas: IKata[], user: string) => (dispatch: any) => {
  const promises: Array<Promise<any>> = [];
  katas.forEach(({solution, tests}, kataId) =>
    (tests || []).forEach(({param, result}, testId) => {
      const w = worker({solution, param, result, kataId, testId});
      promises.push(w);
  }));

  Promise.all(promises)
    .then((data) => {
      const results: boolean[] = [];
      data.forEach(({kataId, testId, status}) => {
        results.push(status);
        dispatch(changeTestStatus(kataId, testId, status));
      });
      dispatch(setAlerts({submit: results}));
      axios
        .post(`/api/save`, {user, results})
        .catch(console.error);
    })
    .catch((data) => dispatch(setAlerts({tests: true})));
};
