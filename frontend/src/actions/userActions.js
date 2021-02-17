import axios from 'axios';
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_PROFILES_FAIL,
  USER_PROFILES_REQUEST,
  USER_PROFILES_SUCCESS,
} from '../constants/userConstants';

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const { data } = await axios.get('https://api.enye.tech/v1/challenge/records');

    const status = data.status;
    const size = data.size;

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: [status, size],
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const listProfiles = () => async (dispatch) => {
  try {
    dispatch({ type: USER_PROFILES_REQUEST });

    const { data } = await axios.get('https://api.enye.tech/v1/challenge/records');

    const profiles = data.records.profiles;

    dispatch({
      type: USER_PROFILES_SUCCESS,
      payload: profiles,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILES_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
