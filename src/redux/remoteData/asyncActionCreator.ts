import * as api from '../../services/apiServices';
import {issuesActionCreator, callCountActionCreator } from './index';

export const getIssues = (address: string = '') => {
  return (dispatch, getState) => {
    api.getIssues(address)
      .then((response) => {
        dispatch(issuesActionCreator(response.data.issues));
        // tslint:disable-next-line:no-console
      }).catch((error) => console.error(`getIssue error: ${error.message}`, error));
  };
};

export const fetchCallCount = () => {
  return (dispatch, getState) => {
    api.getCallCount()
      .then((response) => {
        dispatch(callCountActionCreator(response.data.count));
        // tslint:disable-next-line:no-console
      }).catch((error) => console.error(`fetchCallCount error: ${error.message}`, error));
  };
};

// TODO: integrate geolocation and catch errors
export const fetchLocationByIP = () => {
  return (dispatch, getState) => {
    api.getLocationByIP()
      .then((response) => {
        const location = response.data.loc;
        dispatch(getIssues(location));
        // tslint:disable-next-line:no-console
      }).catch((error) => console.error(`fetchLocationByIP error: ${error.message}`, error));
  };
};