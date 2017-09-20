import * as actions from './actions';
import * as types from '../constants/action-types';
import { IKata, IAlert } from '../constants/interfaces';

describe('actions', () => {
  it('should create an action to change solution', () => {
    const kataId = 1;
    const solution = 'console.log';
    const expectedAction = {
      type: types.CHANGE_SOLUTION,
      kataId,
      solution,
    };
    expect(actions.changeSolution(kataId, solution)).toEqual(expectedAction);
  });

  it('should create an action to change test status', () => {
    const kataId = 1;
    const testId = 1;
    const status = false;
    const expectedAction = {
      type: types.CHANGE_STATUS,
      kataId,
      testId,
      status,
    };
    expect(actions.changeTestStatus(kataId, testId, status)).toEqual(expectedAction);
  });

  it('should create an action to change user', () => {
    const user = 'user';
    const expectedAction = {
      type: types.CHANGE_USER,
      user,
    };
    expect(actions.changeUser(user)).toEqual(expectedAction);
  });

  it('should create an action to get all katas', () => {
    const katas: IKata[] = [{
      id: 1,
      solution: '',
      tests: [],
      description: '',
      example: '',
      footer: '',
      task: '',
    }];
    const expectedAction = {
      type: types.GET_ALL_KATAS,
      katas,
    };
    expect(actions.getKatas(katas)).toEqual(expectedAction);
  });

  it('should create an action to change alerts', () => {
    const alerts: IAlert = {tests: true};
    const expectedAction = {
      type: types.SET_ALERTS,
      alerts,
    };
    expect(actions.setAlerts(alerts)).toEqual(expectedAction);
  });
});
