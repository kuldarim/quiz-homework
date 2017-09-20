import { GET_ALL_KATAS, CHANGE_STATUS, CHANGE_SOLUTION, CHANGE_USER, SET_ALERTS } from '../constants/action-types';
import { IKata, IAlert } from '../constants/interfaces';

export const getKatas = (katas: IKata[]) => ({type: GET_ALL_KATAS, katas});
export const changeTestStatus = (
  kataId: number,
  testId: number,
  status: boolean,
) => ({type: CHANGE_STATUS, kataId, testId, status});
export const changeSolution = (kataId: number, solution: string) => ({type: CHANGE_SOLUTION, kataId, solution});
export const changeUser = (user: string) => ({type: CHANGE_USER, user});
export const setAlerts = (alerts: IAlert) => ({type: SET_ALERTS, alerts});
